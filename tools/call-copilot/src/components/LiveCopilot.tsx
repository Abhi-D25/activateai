'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { AppMode, CallSession, TranscriptSegment } from '@/types';
import { SCRIPT_STEPS, DISCOVERY_QUESTIONS, GUARANTEE_SPOKEN, recommendTier, TierDecisionInput } from '@/lib/knowledge';
import {
  calculateFrontEndLeak,
  calculateTimeLeak,
  calculateTotalLeak,
  FrontEndLeakInputs,
  TimeLeakInputs,
  SlowMoneyInputs,
  InventoryInputs,
  manualInput,
  transcriptInput
} from '@/lib/calculator';
import { extractAll, trackQuestions, detectObjections } from '@/lib/extractor';
import { generateSuggestions, createInitialCallState, CallState, Suggestion } from '@/lib/suggestions';
import { getScenarioById } from '@/lib/demo-scenarios';
import { useLiveTranscription, TranscriptionSegment } from '@/hooks/useLiveTranscription';
import { ScriptProgress } from './ScriptProgress';
import { SuggestionCard } from './SuggestionCard';
import { LeakCalculator } from './LeakCalculator';
import { TranscriptPanel } from './TranscriptPanel';

interface LiveCopilotProps {
  session: CallSession;
  mode: AppMode;
  demoScenarioId: string | null;
  useFoundingPrices: boolean;
  transcriptHistory: TranscriptSegment[];
  accessKey: string;
  onUpdateSession: (updates: Partial<CallSession>) => void;
  onAddTranscript: (segment: TranscriptSegment) => void;
  onEndCall: () => void;
}

export function LiveCopilot({
  session,
  mode,
  demoScenarioId,
  useFoundingPrices,
  transcriptHistory,
  accessKey,
  onUpdateSession,
  onAddTranscript,
  onEndCall
}: LiveCopilotProps) {
  const [callState, setCallState] = useState<CallState>(createInitialCallState());
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [demoIndex, setDemoIndex] = useState(0);
  const [demoSpeed, setDemoSpeed] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [liveError, setLiveError] = useState<string | null>(null);
  const demoTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleLiveTranscript = useCallback((segment: TranscriptionSegment) => {
    if (segment.isFinal && segment.text.trim()) {
      onAddTranscript({
        id: segment.id,
        speaker: segment.speaker,
        text: segment.text,
        timestamp: segment.timestamp,
        confidence: segment.confidence,
        isFinal: segment.isFinal
      });
    }
  }, [onAddTranscript]);

  const handleLiveError = useCallback((error: string) => {
    setLiveError(error);
    setTimeout(() => setLiveError(null), 5000);
  }, []);

  const {
    state: liveState,
    startMicrophone,
    startTabAudio,
    stopMicrophone,
    stopTabAudio,
    stopAll
  } = useLiveTranscription({
    accessKey,
    onTranscript: handleLiveTranscript,
    onError: handleLiveError
  });

  // Leak calculation inputs from session
  const frontEndInputs: FrontEndLeakInputs = {
    missedLeadsPerWeek: session.leakValues.frontEnd.missedLeadsPerWeek !== null
      ? manualInput(session.leakValues.frontEnd.missedLeadsPerWeek)
      : null,
    winRate: session.leakValues.frontEnd.winRate !== null
      ? manualInput(session.leakValues.frontEnd.winRate)
      : null,
    jobValue: session.leakValues.frontEnd.jobValue !== null
      ? manualInput(session.leakValues.frontEnd.jobValue)
      : null
  };

  const timeInputs: TimeLeakInputs = {
    busyworkHoursPerWeek: session.leakValues.time.busyworkHoursPerWeek !== null
      ? manualInput(session.leakValues.time.busyworkHoursPerWeek)
      : null,
    hourlyValue: session.leakValues.time.hourlyValue !== null
      ? manualInput(session.leakValues.time.hourlyValue)
      : null
  };

  const slowMoneyInputs: SlowMoneyInputs = {
    unpaidBills: session.leakValues.slowMoney.unpaidBills !== null
      ? manualInput(session.leakValues.slowMoney.unpaidBills)
      : null,
    averageBill: session.leakValues.slowMoney.averageBill !== null
      ? manualInput(session.leakValues.slowMoney.averageBill)
      : null,
    chasingHoursPerWeek: session.leakValues.slowMoney.chasingHoursPerWeek !== null
      ? manualInput(session.leakValues.slowMoney.chasingHoursPerWeek)
      : null,
    hourlyValue: session.leakValues.slowMoney.hourlyValue !== null
      ? manualInput(session.leakValues.slowMoney.hourlyValue)
      : null
  };

  const inventoryInputs: InventoryInputs = {
    stockoutsPerMonth: session.leakValues.inventory.stockoutsPerMonth !== null
      ? manualInput(session.leakValues.inventory.stockoutsPerMonth)
      : null,
    costPerStockout: session.leakValues.inventory.costPerStockout !== null
      ? manualInput(session.leakValues.inventory.costPerStockout)
      : null,
    spoilageOrShrinkPerMonth: session.leakValues.inventory.spoilageOrShrinkPerMonth !== null
      ? manualInput(session.leakValues.inventory.spoilageOrShrinkPerMonth)
      : null
  };

  const leakCalculation = calculateTotalLeak(frontEndInputs, timeInputs, slowMoneyInputs, inventoryInputs);

  // Tier recommendation
  const tierInput: TierDecisionInput = {
    agreedLeakMonthly: session.agreedLeak || leakCalculation.totalMonthly,
    numberOfLeaks: leakCalculation.leakCount,
    toolCount: 2,
    hasMultiStepFlow: false,
    leadsPerMonth: (session.leakValues.frontEnd.missedLeadsPerWeek || 0) * 4,
    locationCount: 1,
    needsCustomIntegration: false
  };

  const tierRecommendation = recommendTier(tierInput, useFoundingPrices);

  // Timer
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setElapsedSeconds(prev => prev + 1);
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Update call state and suggestions when transcript changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const recentText = transcriptHistory.slice(-10).map(s => s.text);
    const extraction = extractAll(recentText.join(' '));
    
    // Update call state based on extraction (intentionally not including callState in deps to avoid infinite loop)
    const newCallState: CallState = {
      ...callState,
      elapsedMinutes: Math.floor(elapsedSeconds / 60),
      hasJobValue: session.leakValues.frontEnd.jobValue !== null || extraction.jobValue !== null,
      hasHourlyValue: session.leakValues.time.hourlyValue !== null || extraction.hourlyValue !== null,
      recentTranscript: recentText,
      lastObjection: extraction.objections.length > 0 ? extraction.objections[0] : null
    };

    // Auto-detect questions asked from transcript
    const questionStatus = trackQuestions(transcriptHistory.map(s => s.text));
    questionStatus.forEach(qs => {
      if (qs.asked) newCallState.questionsAsked.add(qs.questionId);
      if (qs.answered) newCallState.questionsAnswered.add(qs.questionId);
    });

    setCallState(newCallState);

    // Generate suggestions
    const newSuggestions = generateSuggestions(newCallState, extraction, leakCalculation);
    setSuggestions(newSuggestions);
  }, [transcriptHistory, elapsedSeconds, session.leakValues, leakCalculation]);

  // Demo mode playback
  useEffect(() => {
    if (mode !== 'demo' || !isPlaying || !demoScenarioId) return;

    const scenario = getScenarioById(demoScenarioId);
    if (!scenario || demoIndex >= scenario.transcript.length) {
      setIsPlaying(false);
      return;
    }

    const line = scenario.transcript[demoIndex];
    const delay = line.delayMs / demoSpeed;

    demoTimeoutRef.current = setTimeout(() => {
      const segment: TranscriptSegment = {
        id: `demo-${demoIndex}`,
        speaker: line.speaker === 'abhi' ? 'abhi' : 'prospect',
        text: line.text,
        timestamp: Date.now(),
        confidence: 1,
        isFinal: true
      };
      onAddTranscript(segment);
      setDemoIndex(prev => prev + 1);
    }, delay);

    return () => {
      if (demoTimeoutRef.current) clearTimeout(demoTimeoutRef.current);
    };
  }, [mode, isPlaying, demoIndex, demoScenarioId, demoSpeed, onAddTranscript]);

  const handleStepChange = useCallback((step: number) => {
    onUpdateSession({ currentStep: step });
    setCallState(prev => ({ ...prev, currentStep: step }));
  }, [onUpdateSession]);

  const handleLeakValueChange = useCallback((
    category: keyof CallSession['leakValues'],
    field: string,
    value: number | null
  ) => {
    onUpdateSession({
      leakValues: {
        ...session.leakValues,
        [category]: {
          ...session.leakValues[category],
          [field]: value
        }
      }
    });
  }, [session.leakValues, onUpdateSession]);

  const handleSetAgreedLeak = useCallback((amount: number) => {
    onUpdateSession({ agreedLeak: amount });
  }, [onUpdateSession]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEndCall = useCallback(() => {
    stopAll();
    onEndCall();
  }, [stopAll, onEndCall]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Error banner */}
      {liveError && (
        <div className="bg-red-900/80 text-red-100 px-4 py-2 text-sm">
          {liveError}
        </div>
      )}

      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={`w-3 h-3 rounded-full ${mode === 'live' ? (liveState.micActive || liveState.tabAudioActive ? 'bg-red-500 pulse-dot' : 'bg-gray-500') : 'bg-yellow-500'}`} />
          <span className="font-medium">
            {mode === 'live' ? 'Live Call' : 'Demo Mode'}
            {session.businessName && ` - ${session.businessName}`}
          </span>
          <span className="text-gray-400">{formatTime(elapsedSeconds)}</span>
        </div>
        <div className="flex items-center gap-3">
          {mode === 'live' && (
            <>
              <button
                onClick={liveState.micActive ? stopMicrophone : startMicrophone}
                disabled={liveState.isConnecting}
                className={`px-3 py-1 rounded text-sm flex items-center gap-2 ${
                  liveState.micActive 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-gray-700 hover:bg-gray-600'
                } ${liveState.isConnecting ? 'opacity-50 cursor-not-allowed' : ''}`}
                title={liveState.micActive ? 'Stop microphone' : 'Start microphone (your voice)'}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                </svg>
                {liveState.micActive ? 'Mic On' : 'Mic Off'}
              </button>
              <button
                onClick={liveState.tabAudioActive ? stopTabAudio : startTabAudio}
                disabled={liveState.isConnecting}
                className={`px-3 py-1 rounded text-sm flex items-center gap-2 ${
                  liveState.tabAudioActive 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'bg-gray-700 hover:bg-gray-600'
                } ${liveState.isConnecting ? 'opacity-50 cursor-not-allowed' : ''}`}
                title={liveState.tabAudioActive ? 'Stop tab audio' : 'Share tab audio (prospect voice from Meet/Zoom)'}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
                {liveState.tabAudioActive ? 'Tab On' : 'Tab Off'}
              </button>
            </>
          )}
          {mode === 'demo' && (
            <>
              <select
                value={demoSpeed}
                onChange={(e) => setDemoSpeed(Number(e.target.value))}
                className="bg-gray-700 border border-gray-600 rounded px-2 py-1 text-sm"
              >
                <option value={0.5}>0.5x</option>
                <option value={1}>1x</option>
                <option value={2}>2x</option>
                <option value={4}>4x</option>
              </select>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-4 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm"
              >
                {isPlaying ? 'Pause' : 'Play'}
              </button>
            </>
          )}
          <button
            onClick={handleEndCall}
            className="px-4 py-1 bg-red-600 hover:bg-red-700 rounded text-sm font-medium"
          >
            End Call
          </button>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left panel - Suggestions and Script */}
        <div className="w-1/2 border-r border-gray-700 flex flex-col overflow-hidden">
          {/* Script Progress */}
          <div className="p-4 border-b border-gray-700">
            <ScriptProgress
              currentStep={session.currentStep}
              questionsAsked={callState.questionsAsked}
              onStepChange={handleStepChange}
            />
          </div>

          {/* Suggestions */}
          <div className="flex-1 overflow-y-auto p-4">
            <h2 className="text-lg font-semibold mb-3">Suggestions</h2>
            <div className="space-y-3">
              {suggestions.length === 0 ? (
                <p className="text-gray-500">Listening...</p>
              ) : (
                suggestions.slice(0, 5).map((suggestion, i) => (
                  <SuggestionCard key={i} suggestion={suggestion} />
                ))
              )}
            </div>

            {/* Guarantee reminder */}
            {session.currentStep === 3 && (
              <div className="mt-6 p-4 bg-yellow-900/30 border border-yellow-700/50 rounded-lg">
                <h3 className="font-semibold text-yellow-400 mb-2">
                  Say this exact line:
                </h3>
                <p className="text-yellow-100 text-sm leading-relaxed">
                  {GUARANTEE_SPOKEN}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right panel - Calculator and Transcript */}
        <div className="w-1/2 flex flex-col overflow-hidden">
          {/* Calculator */}
          <div className="p-4 border-b border-gray-700">
            <LeakCalculator
              leakValues={session.leakValues}
              leakCalculation={leakCalculation}
              tierRecommendation={tierRecommendation}
              agreedLeak={session.agreedLeak}
              useFoundingPrices={useFoundingPrices}
              onValueChange={handleLeakValueChange}
              onSetAgreedLeak={handleSetAgreedLeak}
            />
          </div>

          {/* Transcript */}
          <div className="flex-1 overflow-hidden">
            <TranscriptPanel segments={transcriptHistory} />
          </div>
        </div>
      </div>
    </div>
  );
}

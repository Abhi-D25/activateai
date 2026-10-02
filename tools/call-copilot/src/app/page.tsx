'use client';

import { useState, useCallback } from 'react';
import { AppMode, CallSession, LeakValues, TranscriptSegment } from '@/types';
import { StartScreen } from '@/components/StartScreen';
import { LiveCopilot } from '@/components/LiveCopilot';
import { PostCallView } from '@/components/PostCallView';
import { DEMO_SCENARIOS } from '@/lib/demo-scenarios';
import { FOUNDING_PRICE_RULES } from '@/lib/knowledge';

function isFoundingPeriodActive(): boolean {
  const deadline = new Date(FOUNDING_PRICE_RULES.deadline);
  const today = new Date();
  return today <= deadline;
}

function createEmptySession(): CallSession {
  return {
    id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
    startTime: Date.now(),
    businessName: '',
    contactName: '',
    currentStep: 0,
    leakValues: {
      frontEnd: { missedLeadsPerWeek: null, winRate: null, jobValue: null },
      time: { busyworkHoursPerWeek: null, hourlyValue: null },
      slowMoney: { unpaidBills: null, averageBill: null, chasingHoursPerWeek: null, hourlyValue: null },
      inventory: { stockoutsPerMonth: null, costPerStockout: null, spoilageOrShrinkPerMonth: null }
    },
    lockedFields: new Map(),
    questionsAsked: new Set(),
    agreedLeak: null,
    selectedTier: null,
    objectionsSeen: [],
    notes: ''
  };
}

export default function Home() {
  const [mode, setMode] = useState<AppMode>('idle');
  const [session, setSession] = useState<CallSession | null>(null);
  const [useFoundingPrices, setUseFoundingPrices] = useState(isFoundingPeriodActive);
  const [demoScenarioId, setDemoScenarioId] = useState<string | null>(null);
  const [transcriptHistory, setTranscriptHistory] = useState<TranscriptSegment[]>([]);
  const [accessKey, setAccessKey] = useState('');

  const handleStartLive = useCallback((key: string) => {
    setAccessKey(key);
    setSession(createEmptySession());
    setTranscriptHistory([]);
    setMode('live');
  }, []);

  const handleStartDemo = useCallback((scenarioId: string) => {
    const scenario = DEMO_SCENARIOS.find(s => s.id === scenarioId);
    if (!scenario) return;
    
    const newSession = createEmptySession();
    newSession.businessName = scenario.name;
    setSession(newSession);
    setDemoScenarioId(scenarioId);
    setTranscriptHistory([]);
    setMode('demo');
  }, []);

  const handleEndCall = useCallback(() => {
    if (session) {
      setMode('post-call');
    }
  }, [session]);

  const handleClosePostCall = useCallback(() => {
    setSession(null);
    setTranscriptHistory([]);
    setDemoScenarioId(null);
    setMode('idle');
  }, []);

  const handleUpdateSession = useCallback((updates: Partial<CallSession>) => {
    setSession(prev => prev ? { ...prev, ...updates } : null);
  }, []);

  const handleAddTranscript = useCallback((segment: TranscriptSegment) => {
    setTranscriptHistory(prev => [...prev, segment]);
  }, []);

  return (
    <main className="min-h-screen">
      {mode === 'idle' && (
        <StartScreen
          onStartLive={handleStartLive}
          onStartDemo={handleStartDemo}
          useFoundingPrices={useFoundingPrices}
          onToggleFoundingPrices={() => setUseFoundingPrices(!useFoundingPrices)}
        />
      )}
      
      {(mode === 'live' || mode === 'demo') && session && (
        <LiveCopilot
          session={session}
          mode={mode}
          demoScenarioId={demoScenarioId}
          useFoundingPrices={useFoundingPrices}
          transcriptHistory={transcriptHistory}
          accessKey={accessKey}
          onUpdateSession={handleUpdateSession}
          onAddTranscript={handleAddTranscript}
          onEndCall={handleEndCall}
        />
      )}
      
      {mode === 'post-call' && session && (
        <PostCallView
          session={session}
          transcriptHistory={transcriptHistory}
          useFoundingPrices={useFoundingPrices}
          onClose={handleClosePostCall}
        />
      )}
    </main>
  );
}

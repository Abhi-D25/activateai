'use client';

import { useState } from 'react';
import { DEMO_SCENARIOS } from '@/lib/demo-scenarios';
import { FOUNDING_PRICE_RULES } from '@/lib/knowledge';

interface StartScreenProps {
  onStartLive: (accessKey: string) => void;
  onStartDemo: (scenarioId: string) => void;
  useFoundingPrices: boolean;
  onToggleFoundingPrices: () => void;
}

function isFoundingPeriodActive(): boolean {
  const deadline = new Date(FOUNDING_PRICE_RULES.deadline);
  const today = new Date();
  return today <= deadline;
}

export function StartScreen({
  onStartLive,
  onStartDemo,
  useFoundingPrices,
  onToggleFoundingPrices
}: StartScreenProps) {
  const [accessKey, setAccessKey] = useState('');
  const foundingPeriodActive = isFoundingPeriodActive();

  const handleStartLive = () => {
    onStartLive(accessKey);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            ActivateAI Call Copilot
          </h1>
          <p className="text-gray-400 text-lg">
            Live assistant for discovery calls. Walks you through the script,
            calculates leaks, and surfaces the right response at the right time.
          </p>
        </div>

        {/* Founding prices toggle */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={useFoundingPrices}
              onChange={onToggleFoundingPrices}
              disabled={!foundingPeriodActive}
              className="w-5 h-5 rounded bg-gray-700 border-gray-600 text-primary focus:ring-primary disabled:opacity-50"
            />
            <span className={`${foundingPeriodActive ? 'text-gray-300' : 'text-gray-500'}`}>
              Use founding prices (first 5 clients, until Jan 31, 2027)
              {!foundingPeriodActive && <span className="ml-2 text-yellow-500">(expired)</span>}
            </span>
          </label>
        </div>

        {/* Live mode */}
        <div className="bg-gray-800 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Live Call Mode
          </h2>
          <p className="text-gray-400 mb-4">
            Connect your mic and tab audio for real-time transcription during a
            Google Meet call. Requires DEEPGRAM_API_KEY and COPILOT_ACCESS_KEY
            environment variables on the server.
          </p>
          <div className="mb-4">
            <label htmlFor="accessKey" className="block text-sm text-gray-400 mb-2">
              Access Key (COPILOT_ACCESS_KEY)
            </label>
            <input
              id="accessKey"
              type="password"
              value={accessKey}
              onChange={(e) => setAccessKey(e.target.value)}
              placeholder="Enter access key to enable transcription"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
            />
          </div>
          <button
            onClick={handleStartLive}
            className="w-full py-3 px-6 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors"
          >
            Start Live Call
          </button>
          <p className="text-gray-500 text-sm mt-3 text-center">
            Leave access key empty to test UI without transcription
          </p>
        </div>

        {/* Demo mode */}
        <div className="bg-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Demo Mode
          </h2>
          <p className="text-gray-400 mb-4">
            Test the copilot with a sample discovery call transcript. No API
            keys needed - great for learning the flow.
          </p>
          <div className="grid gap-3">
            {DEMO_SCENARIOS.map(scenario => (
              <button
                key={scenario.id}
                onClick={() => onStartDemo(scenario.id)}
                className="w-full py-3 px-6 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors text-left"
              >
                <div className="font-semibold">{scenario.name}</div>
                <div className="text-sm text-gray-400 mt-1">
                  {scenario.description}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Privacy note */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>
            <strong>Ephemeral by design:</strong> No audio recording, no
            transcript storage. Everything stays in memory and is wiped when
            you close the tab.
          </p>
        </div>
      </div>
    </div>
  );
}

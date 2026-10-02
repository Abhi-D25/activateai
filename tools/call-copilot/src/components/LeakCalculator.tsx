'use client';

import { CallSession } from '@/types';
import { TotalLeakCalculation } from '@/lib/calculator';
import { TierRecommendation, PRICING_TIERS } from '@/lib/knowledge';

interface LeakCalculatorProps {
  leakValues: CallSession['leakValues'];
  leakCalculation: TotalLeakCalculation;
  tierRecommendation: TierRecommendation;
  agreedLeak: number | null;
  useFoundingPrices: boolean;
  onValueChange: (category: keyof CallSession['leakValues'], field: string, value: number | null) => void;
  onSetAgreedLeak: (amount: number) => void;
}

export function LeakCalculator({
  leakValues,
  leakCalculation,
  tierRecommendation,
  agreedLeak,
  useFoundingPrices,
  onValueChange,
  onSetAgreedLeak
}: LeakCalculatorProps) {
  const handleInputChange = (
    category: keyof CallSession['leakValues'],
    field: string,
    value: string
  ) => {
    const numValue = value === '' ? null : parseFloat(value);
    onValueChange(category, field, numValue);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Leak Calculator</h2>
        <div className="text-right">
          <div className="text-2xl font-bold text-green-400">
            ${leakCalculation.totalMonthly.toLocaleString()}/mo
          </div>
          <div className="text-sm text-gray-400">total leak</div>
        </div>
      </div>

      {/* Front-end leak */}
      <div className="bg-gray-800 rounded-lg p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-300">Front-end (missed leads)</span>
          <span className="text-sm text-green-400">
            ${leakCalculation.frontEnd.monthly.toLocaleString()}/mo
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Missed/week</label>
            <input
              type="number"
              value={leakValues.frontEnd.missedLeadsPerWeek ?? ''}
              onChange={(e) => handleInputChange('frontEnd', 'missedLeadsPerWeek', e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded px-2 py-1 text-sm"
              placeholder="0"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Win rate</label>
            <input
              type="number"
              step="0.1"
              min="0"
              max="1"
              value={leakValues.frontEnd.winRate ?? ''}
              onChange={(e) => handleInputChange('frontEnd', 'winRate', e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded px-2 py-1 text-sm"
              placeholder="0.4"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Job value $</label>
            <input
              type="number"
              value={leakValues.frontEnd.jobValue ?? ''}
              onChange={(e) => handleInputChange('frontEnd', 'jobValue', e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded px-2 py-1 text-sm"
              placeholder="350"
            />
          </div>
        </div>
        {leakCalculation.frontEnd.monthly > 0 && (
          <div className="text-xs text-gray-500 mt-1">{leakCalculation.frontEnd.breakdown}</div>
        )}
      </div>

      {/* Time leak */}
      <div className="bg-gray-800 rounded-lg p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-300">Time (busywork)</span>
          <span className="text-sm text-green-400">
            ${leakCalculation.time.monthly.toLocaleString()}/mo
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Hours/week</label>
            <input
              type="number"
              value={leakValues.time.busyworkHoursPerWeek ?? ''}
              onChange={(e) => handleInputChange('time', 'busyworkHoursPerWeek', e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded px-2 py-1 text-sm"
              placeholder="0"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Hourly value $</label>
            <input
              type="number"
              value={leakValues.time.hourlyValue ?? ''}
              onChange={(e) => handleInputChange('time', 'hourlyValue', e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded px-2 py-1 text-sm"
              placeholder="50"
            />
          </div>
        </div>
        {leakCalculation.time.monthly > 0 && (
          <div className="text-xs text-gray-500 mt-1">{leakCalculation.time.breakdown}</div>
        )}
      </div>

      {/* Agreed leak and tier recommendation */}
      <div className="bg-gray-800 rounded-lg p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-300">Agreed leak</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">$</span>
            <input
              type="number"
              value={agreedLeak ?? (leakCalculation.totalMonthly || '')}
              onChange={(e) => onSetAgreedLeak(parseFloat(e.target.value) || 0)}
              className="w-24 bg-gray-700 border border-gray-600 rounded px-2 py-1 text-sm text-right"
            />
            <span className="text-gray-500">/mo</span>
          </div>
        </div>

        {/* Tier recommendation */}
        <div className={`mt-3 p-3 rounded ${
          tierRecommendation.tier === null
            ? 'bg-red-900/30 border border-red-700/50'
            : tierRecommendation.passesOneFifth
            ? 'bg-green-900/30 border border-green-700/50'
            : 'bg-yellow-900/30 border border-yellow-700/50'
        }`}>
          {tierRecommendation.tier === null ? (
            <div>
              <div className="font-medium text-red-400">Do not sell</div>
              <div className="text-sm text-red-300 mt-1">{tierRecommendation.reason}</div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-green-400">
                  {PRICING_TIERS[tierRecommendation.tier].name}
                </span>
                <span className="font-bold text-white">
                  ${tierRecommendation.price}/mo
                  {useFoundingPrices && tierRecommendation.price !== PRICING_TIERS[tierRecommendation.tier].standardPrice && (
                    <span className="text-xs text-gray-400 ml-1">(founding)</span>
                  )}
                </span>
              </div>
              <div className="text-sm text-gray-300 mt-1">{tierRecommendation.reason}</div>
              {tierRecommendation.warning && (
                <div className="text-sm text-yellow-400 mt-1">{tierRecommendation.warning}</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

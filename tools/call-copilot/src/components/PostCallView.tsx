'use client';

import { useState, useMemo } from 'react';
import { CallSession, TranscriptSegment } from '@/types';
import {
  PRICING_TIERS,
  recommendTier,
  GUARANTEE_WRITTEN,
  SUMMARY_TEMPLATES,
  TierDecisionInput
} from '@/lib/knowledge';
import {
  calculateTotalLeak,
  manualInput,
  FrontEndLeakInputs,
  TimeLeakInputs,
  SlowMoneyInputs,
  InventoryInputs
} from '@/lib/calculator';

interface PostCallViewProps {
  session: CallSession;
  transcriptHistory: TranscriptSegment[];
  useFoundingPrices: boolean;
  onClose: () => void;
}

export function PostCallView({
  session,
  transcriptHistory,
  useFoundingPrices,
  onClose
}: PostCallViewProps) {
  const [copied, setCopied] = useState<string | null>(null);

  // Calculate leak
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
    unpaidBills: null,
    averageBill: null,
    chasingHoursPerWeek: null,
    hourlyValue: null
  };

  const inventoryInputs: InventoryInputs = {
    stockoutsPerMonth: null,
    costPerStockout: null,
    spoilageOrShrinkPerMonth: null
  };

  const leakCalculation = calculateTotalLeak(frontEndInputs, timeInputs, slowMoneyInputs, inventoryInputs);

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

  // Generate summary text
  const summary = useMemo(() => {
    const leaks: string[] = [];
    if (leakCalculation.frontEnd.monthly > 0) {
      leaks.push(`Front-end leak: $${leakCalculation.frontEnd.monthly}/mo - ${leakCalculation.frontEnd.breakdown}`);
    }
    if (leakCalculation.time.monthly > 0) {
      leaks.push(`Time leak: $${leakCalculation.time.monthly}/mo - ${leakCalculation.time.breakdown}`);
    }

    return `## Call Summary

**Business:** ${session.businessName || '[Business name]'}
**Contact:** ${session.contactName || '[Contact name]'}
**Date:** ${new Date(session.startTime).toLocaleDateString()}

### Leaks Identified
${leaks.length > 0 ? leaks.join('\n') : '[No leaks calculated]'}

**Agreed monthly leak:** $${session.agreedLeak || leakCalculation.totalMonthly}/mo

### Recommended Tier
${tierRecommendation.tier ? `**${PRICING_TIERS[tierRecommendation.tier].name}** at **$${tierRecommendation.price}/mo**${useFoundingPrices ? ' (founding price)' : ''}` : 'Do not sell - leak under $1,000/mo'}

${tierRecommendation.reason}

### Objections Seen
${session.objectionsSeen.length > 0 ? session.objectionsSeen.join(', ') : 'None'}

### Next Step
[Fill in: start date, what needs to happen]

### Notes
${session.notes || '[Add call notes]'}
`;
  }, [session, leakCalculation, tierRecommendation, useFoundingPrices]);

  // Generate scope recap fields
  const scopeRecap = useMemo(() => {
    return `## Scope Recap

### 1. The Basics
- **Client name:** ${session.contactName || '[Name]'}
- **Business name:** ${session.businessName || '[Business]'}
- **Plan:** ${tierRecommendation.tier ? PRICING_TIERS[tierRecommendation.tier].name : '[Plan]'}
- **Monthly price:** $${tierRecommendation.price}/mo
- **Target date:** [Fill in]

### 2. The Problem We're Fixing
"[Fill in: the problem, the way they said it on the call]"

### 3. Counts as Fixed When
1. [Fill in: specific pass/fail check]
2. [Fill in: specific pass/fail check]
3. [Fill in: specific pass/fail check, optional]

### 9. Guarantee
${GUARANTEE_WRITTEN.replace('[exact problem, in your words]', '[their words]').replace('[simple check you can see, e.g. every new web lead gets a text back within 5 minutes and shows up in your CRM]', '[your checks above]').replace('[date]', '[target date]')}
`;
  }, [session, tierRecommendation]);

  // Generate day 30 recap template
  const day30Template = useMemo(() => {
    const jobValue = session.leakValues.frontEnd.jobValue || 0;
    return `## 30-Day Value Recap Template

**Subject:** Your first 30 days: what the fix caught

Hi ${session.contactName || '[Name]'},

It's been 30 days since your fix went live on [acceptance date]. Here's what it did, in your numbers.

**What we fixed:** "[their words]"

**From [start date] to [end date]:**
- [#] missed calls got a text back
- [#] new leads got an answer in under 5 minutes
- [#] of those turned into booked work

**Rough value:** You told us a typical job is worth about $${jobValue}. [#] of these turned into booked work, so that could be worth about $[# x ${jobValue}]. We only counted the ones that booked, not every lead.

**How that compares:** On our call we put this leak at about $${session.agreedLeak || leakCalculation.totalMonthly} a month. Your plan is $${tierRecommendation.price} a month. In 30 days the fix caught about $[rough value] of work you'd likely have missed.

**One quick ask:** Would you be OK with us sharing this result? We can leave your name out, or if you're up for it, a sentence or two from you in your own words.

Thanks for trusting us with this.

Abhi
ActivateAI
`;
  }, [session, tierRecommendation, leakCalculation]);

  const handleCopy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Post-Call Summary</h1>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium"
          >
            Close and Clear
          </button>
        </div>

        <p className="text-gray-400 mb-8">
          This summary will be cleared when you close this view. Copy what you need before closing.
        </p>

        {/* Summary Section */}
        <Section
          title="Call Summary"
          content={summary}
          copied={copied === 'summary'}
          onCopy={() => handleCopy(summary, 'summary')}
        />

        {/* Scope Recap Section */}
        <Section
          title="Scope Recap (for client)"
          content={scopeRecap}
          copied={copied === 'scope'}
          onCopy={() => handleCopy(scopeRecap, 'scope')}
        />

        {/* Day 30 Recap Template */}
        <Section
          title="30-Day Recap Template"
          content={day30Template}
          copied={copied === 'day30'}
          onCopy={() => handleCopy(day30Template, 'day30')}
        />

        {/* Transcript Export */}
        {transcriptHistory.length > 0 && (
          <Section
            title="Transcript (ephemeral - wiped on close)"
            content={transcriptHistory.map(s => `[${s.speaker}] ${s.text}`).join('\n\n')}
            copied={copied === 'transcript'}
            onCopy={() => handleCopy(
              transcriptHistory.map(s => `[${s.speaker}] ${s.text}`).join('\n\n'),
              'transcript'
            )}
          />
        )}

        {/* Privacy reminder */}
        <div className="mt-8 p-4 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
          <h3 className="font-semibold text-yellow-400 mb-2">Privacy Reminder</h3>
          <p className="text-yellow-200/80 text-sm">
            When you close this view, all call data is permanently erased from memory.
            Nothing is saved to any database, localStorage, or server.
            Copy what you need now - there is no way to recover this data later.
          </p>
        </div>
      </div>
    </div>
  );
}

interface SectionProps {
  title: string;
  content: string;
  copied: boolean;
  onCopy: () => void;
}

function Section({ title, content, copied, onCopy }: SectionProps) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <button
          onClick={onCopy}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            copied
              ? 'bg-green-600 text-white'
              : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
          }`}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm text-gray-300 whitespace-pre-wrap font-mono">
        {content}
      </pre>
    </div>
  );
}

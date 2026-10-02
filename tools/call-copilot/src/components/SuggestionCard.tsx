'use client';

import { Suggestion } from '@/lib/suggestions';

interface SuggestionCardProps {
  suggestion: Suggestion;
}

const TYPE_STYLES: Record<Suggestion['type'], { bg: string; border: string; label: string }> = {
  next_question: { bg: 'bg-blue-900/30', border: 'border-blue-700/50', label: 'Ask' },
  follow_up: { bg: 'bg-gray-800', border: 'border-gray-700', label: 'Follow-up' },
  steering: { bg: 'bg-yellow-900/30', border: 'border-yellow-700/50', label: 'Steer' },
  objection_response: { bg: 'bg-red-900/30', border: 'border-red-700/50', label: 'Objection' },
  script_cue: { bg: 'bg-purple-900/30', border: 'border-purple-700/50', label: 'Script' },
  missing_number: { bg: 'bg-orange-900/30', border: 'border-orange-700/50', label: 'Get number' }
};

const PRIORITY_STYLES: Record<Suggestion['priority'], string> = {
  high: 'ring-2 ring-primary/50',
  medium: '',
  low: 'opacity-70'
};

export function SuggestionCard({ suggestion }: SuggestionCardProps) {
  const typeStyle = TYPE_STYLES[suggestion.type];
  const priorityStyle = PRIORITY_STYLES[suggestion.priority];

  return (
    <div className={`p-4 rounded-lg border ${typeStyle.bg} ${typeStyle.border} ${priorityStyle} fade-in`}>
      <div className="flex items-start justify-between gap-2 mb-2">
        <span className={`text-xs font-medium px-2 py-0.5 rounded ${
          suggestion.priority === 'high' ? 'bg-primary/30 text-primary' : 'bg-gray-700 text-gray-400'
        }`}>
          {typeStyle.label}
        </span>
        {suggestion.action && (
          <span className="text-xs text-gray-500">{suggestion.action}</span>
        )}
      </div>
      
      <p className="text-white leading-relaxed">
        {suggestion.text}
      </p>
      
      {suggestion.context && (
        <p className="mt-2 text-sm text-gray-400">
          {suggestion.context}
        </p>
      )}
    </div>
  );
}

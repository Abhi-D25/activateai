'use client';

import { SCRIPT_STEPS, DISCOVERY_QUESTIONS } from '@/lib/knowledge';

interface ScriptProgressProps {
  currentStep: number;
  questionsAsked: Set<string>;
  onStepChange: (step: number) => void;
}

export function ScriptProgress({ currentStep, questionsAsked, onStepChange }: ScriptProgressProps) {
  return (
    <div>
      {/* Step indicators */}
      <div className="flex items-center gap-2 mb-4">
        {SCRIPT_STEPS.map((step, index) => (
          <button
            key={step.id}
            onClick={() => onStepChange(index)}
            className={`flex-1 py-2 px-3 rounded text-sm font-medium transition-colors ${
              index === currentStep
                ? 'bg-primary text-white'
                : index < currentStep
                ? 'bg-green-700/30 text-green-400'
                : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
            }`}
          >
            {step.name}
          </button>
        ))}
      </div>

      {/* Current step info */}
      <div className="text-sm text-gray-400 mb-3">
        <span className="font-medium text-gray-300">{SCRIPT_STEPS[currentStep].name}</span>
        {' - '}
        {SCRIPT_STEPS[currentStep].duration}
        {' - '}
        {SCRIPT_STEPS[currentStep].description}
      </div>

      {/* Questions checklist (only in Ask step) */}
      {currentStep === 1 && (
        <div className="grid grid-cols-5 gap-2 mt-3">
          {DISCOVERY_QUESTIONS.map(q => {
            const isAsked = questionsAsked.has(q.id);
            return (
              <div
                key={q.id}
                className={`p-2 rounded text-xs text-center ${
                  isAsked
                    ? 'bg-green-700/30 text-green-400'
                    : 'bg-gray-700 text-gray-400'
                }`}
              >
                <div className="font-medium">{q.id}</div>
                <div className="truncate">{q.topic}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

'use client';

import { useRef, useEffect } from 'react';
import { TranscriptSegment } from '@/types';

interface TranscriptPanelProps {
  segments: TranscriptSegment[];
}

export function TranscriptPanel({ segments }: TranscriptPanelProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [segments]);

  return (
    <div className="h-full flex flex-col">
      <div className="px-4 py-2 border-b border-gray-700">
        <h2 className="text-lg font-semibold">Transcript</h2>
      </div>
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
        {segments.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            Waiting for audio...
          </p>
        ) : (
          segments.map((segment) => (
            <div
              key={segment.id}
              className={`p-3 rounded-lg fade-in ${
                segment.speaker === 'abhi'
                  ? 'bg-primary/20 ml-8'
                  : 'bg-gray-800 mr-8'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-xs font-medium ${
                  segment.speaker === 'abhi' ? 'text-primary' : 'text-gray-400'
                }`}>
                  {segment.speaker === 'abhi' ? 'You' : 'Prospect'}
                </span>
                {!segment.isFinal && (
                  <span className="text-xs text-gray-500">(listening...)</span>
                )}
              </div>
              <p className="text-sm text-gray-200">{segment.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

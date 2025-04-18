// src/components/admin/StatusDropdown.tsx
'use client';

import { useState } from 'react';

export default function StatusDropdown({ currentStatus, onStatusChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'potential':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'completed':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'potential':
        return 'Potential';
      case 'completed':
        return 'Completed';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="relative">
      <button
        type="button"
        className={`inline-flex items-center px-3 py-1.5 rounded-full border ${getStatusColor(currentStatus)}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{getStatusLabel(currentStatus)}</span>
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-40 rounded-md shadow-lg bg-slate-800 border border-slate-700">
          <div className="py-1">
            <button
              onClick={() => {
                onStatusChange('potential');
                setIsOpen(false);
              }}
              className="block w-full px-4 py-2 text-sm text-left text-yellow-400 hover:bg-slate-700"
            >
              Potential
            </button>
            <button
              onClick={() => {
                onStatusChange('active');
                setIsOpen(false);
              }}
              className="block w-full px-4 py-2 text-sm text-left text-green-400 hover:bg-slate-700"
            >
              Active
            </button>
            <button
              onClick={() => {
                onStatusChange('completed');
                setIsOpen(false);
              }}
              className="block w-full px-4 py-2 text-sm text-left text-blue-400 hover:bg-slate-700"
            >
              Completed
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
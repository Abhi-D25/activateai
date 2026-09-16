'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CALENDAR_URL = 'https://calendar.app.google/mzfrpoUiWW9UFvzp6';

const industries = [
  {
    id: 'professional-services',
    name: 'Professional Services',
    description: 'Law firms, consulting, accounting',
    icon: '💼',
  },
  {
    id: 'dental',
    name: 'Dental',
    description: 'Dental practices and orthodontics',
    icon: '🦷',
  },
  {
    id: 'restaurant',
    name: 'Restaurant',
    description: 'Fine dining, cafes, quick service',
    icon: '🍽️',
  },
  {
    id: 'salons-spa',
    name: 'Salons & Spa',
    description: 'Beauty salons, spas, wellness',
    icon: '💆',
  },
  {
    id: 'hotels',
    name: 'Hotels',
    description: 'Boutique hotels, resorts, lodging',
    icon: '🏨',
  }
];

export default function PortfolioModal({ isOpen, onClose }: PortfolioModalProps) {
  const handleIndustryClick = (industryId: string) => {
    window.open(`/demos/${industryId}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60]"
          />
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto max-h-[calc(100vh-120px)] flex flex-col my-auto"
            >
              {/* Header */}
              <div className="relative px-6 pt-6 pb-4 border-b border-slate-800">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
                <h2 className="text-2xl font-bold text-white">Site examples</h2>
                <p className="text-slate-400 text-sm mt-1">Real layouts. Pick one to peek.</p>
              </div>

              {/* Content */}
              <div className="p-4 overflow-y-auto custom-scrollbar flex-grow">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {industries.map((industry, index) => (
                    <motion.button
                      key={industry.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => handleIndustryClick(industry.id)}
                      className="text-left bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500/30 rounded-xl p-4 transition-all duration-200 group flex items-center gap-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-slate-700/50 border border-slate-600/50 flex items-center justify-center text-lg flex-shrink-0">
                        {industry.icon}
                      </div>
                      <div className="flex-grow min-w-0">
                        <h3 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {industry.name}
                        </h3>
                        <p className="text-slate-500 text-xs mt-0.5">
                          {industry.description}
                        </p>
                      </div>
                      <div className="text-slate-500 group-hover:text-blue-400 transition-colors flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Footer CTAs */}
              <div className="px-6 py-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                <a
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors text-center"
                >
                  Book Free Checkup
                </a>
                <button
                  onClick={onClose}
                  className="flex-1 py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium rounded-lg transition-colors border border-slate-700"
                >
                  Back to Solutions
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const industries = [
  {
    id: 'professional-services',
    name: 'Professional Services',
    description: 'Law firms, consulting, accounting, and more',
    icon: '💼',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'dental',
    name: 'Dental',
    description: 'Dental practices and orthodontic offices',
    icon: '🦷',
    gradient: 'from-teal-500 to-green-500'
  },
  {
    id: 'restaurant',
    name: 'Restaurant',
    description: 'Fine dining, cafes, and quick service',
    icon: '🍽️',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'salons-spa',
    name: 'Salons & Spa',
    description: 'Beauty salons, spas, and wellness centers',
    icon: '💆',
    gradient: 'from-pink-500 to-purple-500'
  },
  {
    id: 'hotels',
    name: 'Hotels',
    description: 'Boutique hotels, resorts, and lodging',
    icon: '🏨',
    gradient: 'from-indigo-500 to-blue-500'
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          />
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto max-h-[90vh] flex flex-col"
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-orange-500 to-yellow-500 p-8">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-sm"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
                <h2 className="text-3xl font-bold text-white mb-2">Website Portfolio</h2>
                <p className="text-white/90">Choose an industry to explore our website designs</p>
              </div>

              {/* Content */}
              <div className="p-8 overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {industries.map((industry, index) => (
                    <motion.button
                      key={industry.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleIndustryClick(industry.id)}
                      className="text-left bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-xl p-6 transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center text-3xl shadow-lg group-hover:shadow-xl transition-shadow`}>
                          {industry.icon}
                        </div>
                        <div className="flex items-center text-slate-400 group-hover:text-blue-400 transition-colors">
                          <span className="text-sm font-medium mr-1">View</span>
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {industry.name}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        {industry.description}
                      </p>
                    </motion.button>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-slate-800 text-center">
                  <p className="text-slate-400 text-sm">
                    Don&apos;t see your industry? <a href="/contact" className="text-blue-400 hover:text-blue-300 font-medium">Contact us</a> for custom solutions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

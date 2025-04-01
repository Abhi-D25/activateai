'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: {
    title: string;
    description: string;
    results: string[];
    image?: string;
    client: string;
    industry: string;
    duration: string;
    keyTechnologies: string[];
  };
}

export default function CaseStudyModal({ isOpen, onClose, caseStudy }: CaseStudyModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 overflow-y-auto"
      >
        {/* Backdrop with blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />
        
        <div className="flex min-h-screen items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-4xl bg-slate-800 rounded-xl shadow-xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-slate-400 hover:text-white transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">{caseStudy.title}</h3>
              
              {/* Project details */}
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div>
                  <p className="text-slate-400">Client</p>
                  <p className="text-white">{caseStudy.client}</p>
                </div>
                <div>
                  <p className="text-slate-400">Industry</p>
                  <p className="text-white">{caseStudy.industry}</p>
                </div>
                <div>
                  <p className="text-slate-400">Duration</p>
                  <p className="text-white">{caseStudy.duration}</p>
                </div>
                <div>
                  <p className="text-slate-400">Key Technologies</p>
                  <p className="text-white">{caseStudy.keyTechnologies.join(', ')}</p>
                </div>
              </div>

              {/* Image if available */}
              {caseStudy.image && (
                <div className="relative w-full h-64 mb-6">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Project Overview</h4>
                <p className="text-slate-300">{caseStudy.description}</p>
              </div>

              {/* Results */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Key Results</h4>
                <ul className="space-y-2">
                  {caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-center text-slate-300">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
} 
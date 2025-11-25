'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import InteractiveDemoForm from '../app/components/InteractiveDemoForm';

interface InteractiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function InteractiveDemoModal({ isOpen, onClose, title = "AI Voice Receptionist Demo" }: InteractiveDemoModalProps) {
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
              className="w-full max-w-2xl relative pointer-events-auto max-h-[calc(100vh-180px)] flex flex-col my-auto bg-slate-900/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-slate-700 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-4 right-4 z-50">
                <button
                  onClick={onClose}
                  className="p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-sm"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              <div className="overflow-y-auto custom-scrollbar p-4 sm:p-5 mt-4">
                <InteractiveDemoForm />
              </div>

            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}


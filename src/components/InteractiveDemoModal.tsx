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
              className="w-full max-w-2xl relative pointer-events-auto"
            >
                <div className="absolute -top-12 right-0 md:-right-12">
                    <button
                    onClick={onClose}
                    className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-sm"
                    >
                    <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>
                
                <InteractiveDemoForm />
                
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}


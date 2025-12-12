'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import GetCallForm from '../../components/GetCallForm';

export default function GetCallPage() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    // Redirect to home after a short delay
    setTimeout(() => {
      router.push('/');
    }, 300);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            />
            <div className="fixed inset-0 z-40 flex items-center justify-center pt-20 sm:pt-20 pb-2 sm:pb-4 px-2 sm:px-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="w-full max-w-2xl relative pointer-events-auto h-auto max-h-[calc(100vh-6rem)] sm:max-h-[calc(100vh-6rem)] flex flex-col bg-slate-900/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-slate-700 shadow-2xl overflow-visible"
              >
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50">
                  <button
                    onClick={handleClose}
                    className="p-1.5 sm:p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-sm"
                  >
                    <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>

                <GetCallForm />
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}


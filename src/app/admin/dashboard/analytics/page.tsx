'use client';

import { motion } from 'framer-motion';

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold text-white mb-4">I got no idea</h1>
        <p className="text-xl text-slate-400">Analytics page coming soon...</p>
      </motion.div>
    </div>
  );
} 
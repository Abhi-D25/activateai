'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedProgressProps {
  percentage: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
  className?: string;
}

export default function AnimatedProgress({
  percentage,
  height = 4,
  color = '#3b82f6',
  backgroundColor = '#1e293b',
  className = ''
}: AnimatedProgressProps) {
  return (
    <div 
      className={`w-full rounded-full overflow-hidden ${className}`}
      style={{ 
        height: `${height}px`,
        backgroundColor
      }}
    >
      <motion.div
        className="h-full rounded-full"
        initial={{ width: 0 }}
        animate={{ 
          width: `${percentage}%`,
        }}
        transition={{ 
          duration: 0.5,
          ease: "easeOut"
        }}
        style={{ backgroundColor: color }}
      >
        <motion.div
          className="h-full w-full"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ backgroundColor: color }}
        />
      </motion.div>
    </div>
  );
} 
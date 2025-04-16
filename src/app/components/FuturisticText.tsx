'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FuturisticTextProps {
  text: string;
  className?: string;
  glowColor?: string;
  delay?: number;
  duration?: number;
}

export default function FuturisticText({
  text,
  className = '',
  glowColor = '#60a5fa',
  delay = 0,
  duration = 0.5
}: FuturisticTextProps) {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay }
    })
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: duration
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem'
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{
            display: 'inline-block',
            textShadow: `0 0 10px ${glowColor}40, 0 0 20px ${glowColor}20`,
            transition: 'text-shadow 0.3s ease'
          }}
          whileHover={{
            textShadow: `0 0 15px ${glowColor}60, 0 0 25px ${glowColor}40`,
            transition: { duration: 0.3 }
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
} 
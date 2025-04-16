'use client';

import React from 'react';
import { useState, useEffect } from 'react';
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
  
  // Check if we're running in the browser
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      // Check initially
      checkMobile();
      
      // Set up listener
      window.addEventListener('resize', checkMobile);
      
      // Clean up
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: isMobile ? 0.08 : 0.12, // Faster animation on mobile
        delayChildren: delay 
      }
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
        damping: isMobile ? 15 : 12, // More damping on mobile for quicker settling
        stiffness: 100,
        duration: isMobile ? duration * 0.8 : duration // Slightly faster on mobile
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
        gap: isMobile ? '0.3rem' : '0.5rem', // Smaller gap on mobile
        justifyContent: 'center' // Center on all devices
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{
            display: 'inline-block',
            textShadow: isMobile 
              ? `0 0 5px ${glowColor}30, 0 0 10px ${glowColor}10` // Subtler glow on mobile
              : `0 0 10px ${glowColor}40, 0 0 20px ${glowColor}20`,
            transition: 'text-shadow 0.3s ease'
          }}
          whileHover={{
            textShadow: isMobile
              ? `0 0 8px ${glowColor}40, 0 0 15px ${glowColor}20` // Subtler hover effect on mobile
              : `0 0 15px ${glowColor}60, 0 0 25px ${glowColor}40`,
            transition: { duration: 0.3 }
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
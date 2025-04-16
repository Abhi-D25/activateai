'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonAnimationProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
}

export default function ButtonAnimation({
  children,
  className = '',
  onClick,
  type = 'button',
  variant = 'primary'
}: ButtonAnimationProps) {
  const baseClassName = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseClassName} ${className}`}
      whileHover={{ 
        scale: 1.02,
        transition: { 
          duration: 0.2,
          ease: "easeOut"
        }
      }}
      whileTap={{ 
        scale: 0.98,
        transition: {
          duration: 0.1,
          ease: "easeIn"
        }
      }}
      initial={false}
      style={{
        transformOrigin: 'center'
      }}
    >
      {children}
    </motion.button>
  );
} 
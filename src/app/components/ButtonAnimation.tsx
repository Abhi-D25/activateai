'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonAnimationProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export default function ButtonAnimation({
  children,
  className = '',
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false
}: ButtonAnimationProps) {
  const baseClassName = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseClassName} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      whileHover={!disabled ? { 
        scale: 1.02,
        transition: { 
          duration: 0.2,
          ease: "easeOut"
        }
      } : undefined}
      whileTap={!disabled ? { 
        scale: 0.98,
        transition: {
          duration: 0.1,
          ease: "easeIn"
        }
      } : undefined}
      initial={false}
      style={{
        transformOrigin: 'center'
      }}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
} 
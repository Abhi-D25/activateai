// Create a new file: src/app/hooks/useReducedMotion.ts

'use client';

import { useState, useEffect } from 'react';

/**
 * Hook that provides information about user's motion preference
 * and device capability to handle animations
 */
export const useReducedMotion = () => {
  // Default to reduced motion on mobile to avoid performance issues
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);
  
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isMobile = window.innerWidth < 768;
    
    // Set initial value based on user preference and device
    setShouldReduceMotion(mediaQuery.matches || isMobile);
    
    // Handler for preference changes
    const handleMediaChange = (e: MediaQueryListEvent) => {
      setShouldReduceMotion(e.matches || isMobile);
    };
    
    // Handler for window resize (to detect mobile)
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768;
      setShouldReduceMotion(mediaQuery.matches || newIsMobile);
    };
    
    // Add listeners
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMediaChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleMediaChange);
    }
    
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMediaChange);
      } else {
        // Fallback for older browsers
        mediaQuery.removeListener(handleMediaChange);
      }
      
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return { shouldReduceMotion };
};

// Then add some helper functions to simplify animation variants based on motion preference

/**
 * Returns simplified animation properties for devices that should use reduced motion
 */
export const getSimplifiedAnimation = (
  fullAnimation: any, 
  reducedAnimation: any = null
) => {
  const [shouldApplyReducedMotion, setShouldApplyReducedMotion] = useState(false);
  
  useEffect(() => {
    const { shouldReduceMotion } = useReducedMotion();
    setShouldApplyReducedMotion(shouldReduceMotion);
  }, []);
  
  // If reduced animation is not provided, create a simpler version of the full animation
  if (!reducedAnimation && shouldApplyReducedMotion) {
    // Create a simplified version by removing transforms if possible
    return {
      ...fullAnimation,
      scale: undefined,
      rotate: undefined,
      rotateX: undefined,
      rotateY: undefined,
      // Keep opacity transitions as they're less performance-intensive
    };
  }
  
  return shouldApplyReducedMotion ? reducedAnimation : fullAnimation;
};
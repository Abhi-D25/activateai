'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ServicesSection from '../components/ServicesSection';

export default function ServicesPage() {
  // Add state to detect mobile
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if we're on client side
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      // Initial check
      checkMobile();
      
      // Set up listener
      window.addEventListener('resize', checkMobile);
      
      // Clean up
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  // Simplified animations for mobile
  const pageTransition = isMobile 
    ? { duration: 0.4, ease: "easeOut" }  // Faster, simpler animation on mobile
    : { duration: 0.8, ease: "easeOut" }; // Original animation on desktop
    
  const titleTransition = isMobile
    ? { duration: 0.3, delay: 0.1 }       // Faster animation, less delay on mobile
    : { duration: 0.6, delay: 0.2 };      // Original animation on desktop
    
  const descTransition = isMobile
    ? { duration: 0.3, delay: 0.2 }       // Faster animation, less delay on mobile
    : { duration: 0.6, delay: 0.4 };      // Original animation on desktop

  return (
    <div className="bg-black min-h-screen">
      <section className="py-24">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative"
          initial={{ opacity: 0, y: isMobile ? 10 : 20 }} // Less movement on mobile
          animate={{ opacity: 1, y: 0 }}
          transition={pageTransition}
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: isMobile ? 10 : 20 }} // Less movement on mobile
              animate={{ opacity: 1, y: 0 }}
              transition={titleTransition}
            >
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl text-slate-300"
              initial={{ opacity: 0, y: isMobile ? 10 : 20 }} // Less movement on mobile
              animate={{ opacity: 1, y: 0 }}
              transition={descTransition}
            >
              Comprehensive AI solutions tailored to your business needs
            </motion.p>
          </div>

          <div className="relative">
            {/* Simplified or removed glow effects on mobile */}
            {!isMobile && (
              <>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-blue-500/50 to-purple-500 rounded-[28px] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-blue-500/50 to-purple-500 rounded-[28px] blur opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              </>
            )}
            
            {/* Main container with simpler styling on mobile */}
            <div className={`relative ${isMobile ? 'bg-slate-900/90' : 'bg-slate-900/80 backdrop-blur-xl'} rounded-3xl p-8 ${!isMobile ? 'border border-blue-500/30 shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]' : ''}`}>
              <ServicesSection showAll={true} noContainer isMobile={isMobile} />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
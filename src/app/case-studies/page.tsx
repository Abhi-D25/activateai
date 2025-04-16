'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { caseStudies } from '../data/caseStudies';
import CaseStudiesSection from '../components/CaseStudiesSection';

export default function CaseStudiesPage() {
  return (
    <div className="bg-black min-h-screen">
      <section className="py-24">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Case Studies
            </motion.h1>
            <motion.p 
              className="text-xl text-slate-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              See how we&apos;ve helped businesses like yours succeed with AI
            </motion.p>
          </div>

          <div className="relative">
            {/* Glow effect layers */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-blue-500/50 to-purple-500 rounded-[28px] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-blue-500/50 to-purple-500 rounded-[28px] blur opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            
            {/* Main container with glowing border */}
            <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/30 shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]">
              <CaseStudiesSection noContainer />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
} 
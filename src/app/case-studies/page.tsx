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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-slate-300">
              See how we&apos;ve helped businesses like yours succeed with AI
            </p>
          </div>

          <CaseStudiesSection />
        </div>
      </section>
    </div>
  );
} 
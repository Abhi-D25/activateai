'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, WrenchScrewdriverIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const checkupSteps = [
  {
    id: 1,
    icon: MagnifyingGlassIcon,
    title: "Find",
    description: "We look at how leads reach you today, what happens when you miss a call, and where follow-up falls through the cracks."
  },
  {
    id: 2,
    icon: WrenchScrewdriverIcon,
    title: "Fix",
    description: "We show you which gaps are costing you the most and map out exactly how automation can plug them."
  },
  {
    id: 3,
    icon: RocketLaunchIcon,
    title: "Free You",
    description: "You walk away with a clear picture of what to tackle first and what it would take to get started."
  }
];

export default function TestimonialsCarousel() {
  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">What a Free Technical Checkup Covers</h2>
          <p className="text-slate-400">We find where money&apos;s leaking.</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {checkupSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-lg mb-4 mx-auto">
                  <step.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{step.title}</h3>
                <p className="text-slate-300 text-center text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-10"
          >
            <a
              href="https://calendar.app.google/mzfrpoUiWW9UFvzp6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 font-semibold shadow-lg shadow-blue-500/20"
            >
              Book Free Checkup
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

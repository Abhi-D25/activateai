'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { caseStudies, CaseStudy } from '../data/caseStudies';
import CaseStudyModal from './CaseStudyModal';

export default function CaseStudiesSection() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  return (
    <section id="case-studies" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Current Activations</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy) => (
            <motion.div
              key={caseStudy.id}
              whileHover={{ y: -5 }}
              className="bg-slate-800 p-6 rounded-xl shadow-sm cursor-pointer"
              onClick={() => setSelectedCaseStudy(caseStudy)}
            >
              <h3 className="text-xl font-bold text-white mb-4">{caseStudy.title}</h3>
              <p className="text-slate-300 mb-4">
                {caseStudy.description.substring(0, 150)}...
              </p>
              <ul className="space-y-2 text-slate-300">
                {caseStudy.results.slice(0, 3).map((result, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    {result}
                  </li>
                ))}
              </ul>
              <button className="mt-4 text-blue-400 hover:text-blue-300 transition-colors">
                Read more →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedCaseStudy && (
        <CaseStudyModal
          caseStudy={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}
    </section>
  );
} 
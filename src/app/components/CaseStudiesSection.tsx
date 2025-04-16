'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { caseStudies, CaseStudy } from '../data/caseStudies';
import CaseStudyModal from './CaseStudyModal';
import ScrollReveal from './ScrollReveal';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface CaseStudiesSectionProps {
  noContainer?: boolean;
}

export default function CaseStudiesSection({ noContainer = false }: CaseStudiesSectionProps) {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cardVariants: Variants = {
    initial: { 
      scale: 1, 
      y: 0, 
      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
    },
    hover: { 
      scale: 1.02, 
      y: -8,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
      transition: { type: 'spring', stiffness: 400, damping: 25 }
    }
  };

  const resultItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  const arrowVariants: Variants = {
    initial: { x: 0 },
    hover: { 
      x: 5, 
      transition: { 
        repeat: Infinity, 
        repeatType: "mirror", 
        duration: 0.7 
      } 
    }
  };

  const content = (
    <>
      <ScrollReveal animation="slideUp" className="text-center mb-16">
        <h2 className="section-title">Current Activations</h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {caseStudies.map((caseStudy, index) => (
          <ScrollReveal
            key={caseStudy.id}
            animation="slideUp"
            delay={index * 0.2}
          >
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              onHoverStart={() => setHoveredCard(caseStudy.id)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => setSelectedCaseStudy(caseStudy)}
              className="bg-slate-800 p-6 rounded-xl cursor-pointer border border-slate-700 backdrop-blur-sm h-full flex flex-col"
              layoutId={`card-${caseStudy.id}`}
            >
              <h3 className="text-xl font-bold text-white mb-4">{caseStudy.title}</h3>
              <p className="text-slate-300 mb-4 flex-grow">
                {caseStudy.description}
              </p>
              <AnimatePresence>
                {hoveredCard === caseStudy.id && (
                  <motion.ul 
                    className="space-y-2 text-slate-300 mb-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {caseStudy.results.slice(0, 3).map((result, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        variants={resultItemVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-center"
                      >
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        {result}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
              <motion.div 
                className="mt-auto flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                variants={arrowVariants}
                initial="initial"
                whileHover="hover"
              >
                <span className="mr-2">Read more</span>
                <ArrowRightIcon className="h-4 w-4" />
              </motion.div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
      <AnimatePresence>
        {selectedCaseStudy && (
          <CaseStudyModal
            isOpen={!!selectedCaseStudy}
            caseStudy={selectedCaseStudy}
            onClose={() => setSelectedCaseStudy(null)}
          />
        )}
      </AnimatePresence>
    </>
  );

  if (noContainer) {
    return content;
  }

  return (
    <section id="case-studies" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {content}
      </div>
    </section>
  );
} 
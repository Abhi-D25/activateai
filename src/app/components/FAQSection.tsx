'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Helmet } from 'react-helmet';
import ScrollReveal from './ScrollReveal';

const faqs = [
  {
    question: "How long does it take to set up?",
    answer: "Most businesses are up and running within 4 hours of completing our intake questionnaire. We handle all the technical setup and integration with your existing tools."
  },
  {
    question: "Will it work with my existing systems?",
    answer: "Yes! ActivateAI is designed to integrate with the tools you already use. We support all major calendar systems (Google, Outlook, Apple), phone systems, and can connect with most industry-specific software."
  },
  {
    question: "What results can I expect in the first 30 days?",
    answer: "Most businesses see immediate benefits in three areas: 1) Captured after-hours leads that would have been missed, 2) Reduced time spent on scheduling and admin tasks, and 3) Increased customer satisfaction from faster response times."
  },
  {
    question: "How does the AI know my business rules and policies?",
    answer: "During onboarding, we gather your specific business information through our questionnaire. This includes your services, pricing, availability, cancellation policies, and communication style. We train your AI Employees on these rules so they accurately represent your business."
  },
  {
    question: "What happens if the AI can't handle a situation?",
    answer: "Your AI Employees are programmed to recognize when a situation requires human attention. For complex or unusual requests, the AI will gracefully let the customer know a team member will follow up shortly, and you'll receive an immediate notification with all relevant details."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="slideUp" className="text-center mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
        </ScrollReveal>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal
                key={index}
                animation="slideUp"
                delay={index * 0.1}
              >
                <motion.div
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                    <ChevronDownIcon
                      className={`h-5 w-5 text-blue-400 transition-transform duration-300 ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 mt-4">
                          <p className="text-slate-300">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
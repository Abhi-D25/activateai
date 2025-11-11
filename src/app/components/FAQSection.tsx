'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Helmet } from 'react-helmet';
import ScrollReveal from './ScrollReveal';

const faqs = [
  {
    question: "Do I need technical knowledge to use this?",
    answer: "Not at all! We handle all the technical setup and integration. You just tell us how your business works, and we make the AI fit seamlessly into your existing processes. No coding, no complicated software to learn."
  },
  {
    question: "How long does setup take?",
    answer: "Most businesses are up and running within 2 days of completing our intake questionnaire. We handle all the technical setup and integration with your existing tools, so you can focus on your business."
  },
  {
    question: "Can I customize the AI tools?",
    answer: "Absolutely! Every business is unique. During onboarding, we learn about your services, pricing, availability, policies, and communication style. The AI is trained to work exactly how you need it to, representing your business authentically."
  },
  {
    question: "What's included in the Starter Pack?",
    answer: "The Starter Pack includes automated lead management, a modern professional website, basic workflow automation, and email/chat support. It's perfect for businesses just getting started with AI automation at an affordable $199/month."
  },
  {
    question: "Will it work with my existing systems?",
    answer: "Yes! ActivateAI is designed to integrate with the tools you already use. We support all major calendar systems (Google, Outlook, Apple), phone systems, CRMs, and can connect with most industry-specific software. No need to change what's working."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes! All plans include support to help you get the most out of your AI tools. Starter Pack includes email and chat support, while Pro Pack includes a dedicated account manager for priority assistance and strategic guidance."
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
        </ScrollReveal>
        
        <div className="max-w-4xl mx-auto">
          <div 
            className="bg-blue-900/20 backdrop-blur-md rounded-2xl border border-blue-400/30 shadow-2xl shadow-blue-500/10 p-8"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 197, 253, 0.05) 50%, rgba(59, 130, 246, 0.1) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
          >
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <ScrollReveal
                  key={index}
                  animation="slideUp"
                  delay={index * 0.1}
                >
                  <motion.div
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300"
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
      </div>
    </section>
  );
} 
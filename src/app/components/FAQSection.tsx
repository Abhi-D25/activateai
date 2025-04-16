'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Helmet } from 'react-helmet';
import ScrollReveal from './ScrollReveal';

const faqs = [
  {
    question: "How can AI benefit my small business?",
    answer: "AI can benefit your small business by automating repetitive tasks, analyzing customer data for better insights, improving customer service through chatbots, optimizing inventory management, and providing predictive analytics for better decision-making. These improvements can lead to increased efficiency, reduced costs, and higher customer satisfaction."
  },
  {
    question: "What types of AI solutions does ActivateAI offer?",
    answer: "ActivateAI offers a comprehensive suite of AI solutions including AI integration services, data analytics, AI-powered customer support, process automation, document processing, and AI security. Each solution is tailored to meet the specific needs of small and medium-sized businesses."
  },
  {
    question: "How much does it cost to implement AI in my business?",
    answer: "The cost of implementing AI in your business varies based on your specific needs and the complexity of the solution. ActivateAI offers flexible pricing models and customized solutions to fit different budgets. We provide a free consultation to assess your needs and provide a detailed quote tailored to your business."
  },
  {
    question: "How long does it take to implement AI solutions?",
    answer: "Implementation time varies depending on the complexity of the AI solution. Simple integrations might take a few weeks, while more complex custom solutions could take a few months. We work with you to create a realistic timeline and keep you informed throughout the process."
  },
  {
    question: "Do I need technical expertise to use ActivateAI's solutions?",
    answer: "No, you don't need technical expertise. Our solutions are designed to be user-friendly, and we provide comprehensive training and support. Our team handles the technical implementation and maintenance, allowing you to focus on using the AI tools to benefit your business."
  },
  {
    question: "What kind of support do you provide after implementation?",
    answer: "We provide ongoing technical support, regular updates, and maintenance for all our AI solutions. Our support team is available to help with any issues or questions you may have. We also offer training sessions and documentation to ensure you get the most out of your AI implementation."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-900">
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
          <p className="text-slate-400">Everything you need to know about our AI solutions</p>
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
                  className="bg-slate-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors"
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
          
          <div className="text-center mt-16">
            <p className="text-slate-400 mb-8">Still have questions? Get personalized answers for your business</p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 
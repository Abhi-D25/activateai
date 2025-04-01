'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon, 
  SparklesIcon, 
  UserGroupIcon, 
  ArrowPathIcon,
  LightBulbIcon,
  AcademicCapIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import QuizModal from './components/QuizModal';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import CaseStudyModal from './components/CaseStudyModal';
import TypewriterText from './components/TypewriterText';

const caseStudies = [
  {
    id: 1,
    title: "Retail Store Automation",
    client: "TechRetail Solutions",
    industry: "Retail",
    duration: "3 months",
    keyTechnologies: ["AI Inventory Management", "Predictive Analytics", "Cloud Integration"],
    description: "A comprehensive AI solution for a retail chain with multiple locations. The system integrated with existing POS systems to provide real-time inventory tracking and predictive stock management.",
    results: [
      "30% reduction in stockouts",
      "25% decrease in inventory holding costs",
      "40% improvement in restocking efficiency",
      "Automated reorder suggestions with 95% accuracy",
      "Real-time inventory tracking across all locations"
    ],
    image: "/case-study-1.webp"
  },
  {
    id: 2,
    title: "Customer Service Enhancement",
    client: "ServicePro Solutions",
    industry: "Customer Service",
    duration: "2 months",
    keyTechnologies: ["AI Chatbot", "Natural Language Processing", "Analytics Dashboard"],
    description: "Implementation of an AI-powered customer service solution that integrated with existing support systems to provide 24/7 automated support while maintaining high customer satisfaction.",
    results: [
      "60% reduction in response time",
      "45% decrease in support ticket volume",
      "85% customer satisfaction rate",
      "24/7 automated support coverage",
      "Reduced support staff workload by 40%"
    ],
    image: "/case-study-2.webp"
  }
];

export default function Home() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<typeof caseStudies[0] | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TypewriterText
                text="Activate Your Business Today"
                className="text-3xl sm:text-4xl font-bold text-white mb-6 whitespace-nowrap"
                speed={50}
              />
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: 1.5,
                  ease: "easeOut"
                }}
                className="text-xl text-slate-300 mb-8"
              >
                At ActivateAI, we make artificial intelligence accessible to small and medium sized businesses. Our mission is to simplify AI adoption with tailored, practical solutions that improve efficiency, cut costs, and drive growth.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: 2,
                  ease: "easeOut"
                }}
                className="flex justify-center sm:justify-start"
              >
                <button 
                  onClick={() => setIsQuizOpen(true)} 
                  className="btn-primary text-lg px-8 py-4"
                >
                  Get Started
                </button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square bg-blue-50 rounded-2xl">
                <img
                  src="/hero.webp"
                  alt="AI business solutions illustration"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-slate-800 p-8 rounded-xl shadow-sm"
            >
              <div className="flex items-center mb-6">
                <SparklesIcon className="h-12 w-12 text-blue-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">AI Integration</h3>
              </div>
              <p className="text-slate-300 mb-6">
                We seamlessly integrate AI solutions into your existing workflows and systems:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  AI Integration with existing technology
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Third-party AI solution implementation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Tailored business solutions using various AI tools
                </li>
              </ul>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-slate-800 p-8 rounded-xl shadow-sm"
            >
              <div className="flex items-center mb-6">
                <UserGroupIcon className="h-12 w-12 text-blue-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">Customer Support</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Enhance customer service with AI-powered chatbots and support systems:
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  AI chatbot implementation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Customer feedback analysis
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Support ticket automation
                </li>
              </ul>
            </motion.div>
          </div>
          
          {/* Quiz Button */}
          <div className="text-center mt-12">
            <button
              onClick={() => setIsQuizOpen(true)}
              className="btn-primary text-lg px-8 py-4"
            >
              Take Our AI Assessment Quiz
            </button>
            <p className="text-slate-400 mt-4">
              Get personalized recommendations for your business
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
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
      </section>

      {/* Testimonials Section */}
      <TestimonialsCarousel />

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-subtitle">
              Get in touch to learn how we can help your business
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Quiz Modal */}
      <QuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
      />

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <CaseStudyModal
          isOpen={!!selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
          caseStudy={selectedCaseStudy}
        />
      )}
    </div>
  );
} 
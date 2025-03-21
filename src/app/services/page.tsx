'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-600">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <div className="flex items-center mb-6">
                <MagnifyingGlassIcon className="h-12 w-12 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold text-slate-900">Workflow Diagnostics</h2>
              </div>
              <p className="text-slate-600 mb-6">
                We analyze your current business processes to identify opportunities for AI integration. Our comprehensive assessment includes:
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Process mapping and optimization opportunities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Efficiency bottlenecks identification
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  ROI potential analysis
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <div className="flex items-center mb-6">
                <SparklesIcon className="h-12 w-12 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold text-slate-900">AI Tool Recommendations</h2>
              </div>
              <p className="text-slate-600 mb-6">
                Based on our analysis, we recommend the most suitable AI solutions for your business:
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Custom AI agent development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Integration with existing tools
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Third-party AI solution evaluation
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <div className="flex items-center mb-6">
                <WrenchScrewdriverIcon className="h-12 w-12 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold text-slate-900">Implementation Support</h2>
              </div>
              <p className="text-slate-600 mb-6">
                We handle the technical implementation of AI solutions with minimal disruption to your business:
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Seamless integration with existing systems
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Testing and quality assurance
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Performance monitoring and optimization
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <div className="flex items-center mb-6">
                <AcademicCapIcon className="h-12 w-12 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold text-slate-900">Training & Support</h2>
              </div>
              <p className="text-slate-600 mb-6">
                We ensure your team is fully equipped to use the new AI solutions:
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Comprehensive training sessions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Documentation and resources
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Ongoing technical support
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule a free consultation to learn how our services can help your business grow.
            </p>
            <a href="/contact" className="btn-secondary">
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 
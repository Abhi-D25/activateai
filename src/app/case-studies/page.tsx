'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

export default function CaseStudies() {
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
              Success Stories
            </h1>
            <p className="text-xl text-slate-600">
              See how we&apos;ve helped businesses transform their operations with AI
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Case Study 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <div className="aspect-video bg-blue-50"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Retail Store Automation
                </h3>
                <p className="text-slate-600 mb-6">
                  A local retail chain implemented our AI-powered inventory management system, resulting in:
                </p>
                <ul className="space-y-3 text-slate-600 mb-6">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    30% reduction in stockouts
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    25% decrease in inventory holding costs
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    40% improvement in restocking efficiency
                  </li>
                </ul>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full"></div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-900">Sarah Chen</p>
                    <p className="text-sm text-slate-600">Operations Manager, RetailCo</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Case Study 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <div className="aspect-video bg-blue-50"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Customer Service Enhancement
                </h3>
                <p className="text-slate-600 mb-6">
                  A service-based company integrated our AI chatbot solution, achieving:
                </p>
                <ul className="space-y-3 text-slate-600 mb-6">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    60% reduction in response time
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    45% decrease in support ticket volume
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    85% customer satisfaction rate
                  </li>
                </ul>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full"></div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-900">Michael Rodriguez</p>
                    <p className="text-sm text-slate-600">Customer Success Director, ServicePro</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Client Testimonials</h2>
            <p className="section-subtitle">
              What our clients say about working with ActivateAI
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-4">
                &quot;ActivateAI transformed our business operations. Their AI solutions helped us streamline our processes and increase efficiency significantly.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm font-medium text-slate-900">David Thompson</p>
                  <p className="text-sm text-slate-600">CEO, TechStart</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-4">
                &quot;The team at ActivateAI is professional and knowledgeable. They took the time to understand our needs and delivered exactly what we needed.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Emily Parker</p>
                  <p className="text-sm text-slate-600">Operations Manager, GrowthCo</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-4">
                &quot;The ROI we&apos;ve seen from implementing ActivateAI&apos;s solutions has been incredible. Highly recommended for any business looking to modernize.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm font-medium text-slate-900">James Wilson</p>
                  <p className="text-sm text-slate-600">CTO, InnovateCorp</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the growing list of businesses that have transformed their operations with ActivateAI.
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
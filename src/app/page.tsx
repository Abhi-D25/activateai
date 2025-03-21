'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon, 
  SparklesIcon, 
  UserGroupIcon, 
  ArrowPathIcon 
} from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                Empowering SMBs with AI to Streamline Operations and Boost Growth
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                We help small and medium businesses leverage artificial intelligence to improve efficiency, reduce costs, and drive revenue growth with tailored solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-center">
                  Book a Free Consultation
                </Link>
                <Link href="/services" className="btn-secondary text-center">
                  Learn More
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square bg-blue-50 rounded-2xl"></div>
              <img
                src="/hero.svg"
                alt="AI business solutions illustration"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">How We Help Your Business</h2>
            <p className="section-subtitle">
              Our comprehensive approach ensures your business gets the most out of AI technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <ChartBarIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Workflow Analysis</h3>
              <p className="text-slate-600">
                We analyze your current processes to identify opportunities for AI integration.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <SparklesIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Solutions</h3>
              <p className="text-slate-600">
                Custom AI tools and agents designed specifically for your business needs.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <UserGroupIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-slate-600">
                Seamless integration of AI solutions with your existing systems and workflows.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <ArrowPathIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Training & Support</h3>
              <p className="text-slate-600">
                Comprehensive training and ongoing support to ensure successful adoption.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to learn how AI can help your business grow and succeed.
            </p>
            <Link href="/contact" className="btn-secondary">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 
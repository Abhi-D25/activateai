'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  UserGroupIcon,
  ChartBarIcon,
  LightBulbIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import QuizButton from '../components/QuizButton';

export default function ServicesPage() {
  return (
    <div className="bg-black min-h-screen">
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-300">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <div className="bg-slate-800 p-8 rounded-xl">
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
            </div>
            <div className="bg-slate-800 p-8 rounded-xl">
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
            </div>
            <div className="bg-slate-800 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <ChartBarIcon className="h-12 w-12 text-blue-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">Business Analytics</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Leverage AI-powered analytics to make data-driven decisions:
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Predictive analytics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Market trend analysis
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Performance optimization
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <LightBulbIcon className="h-12 w-12 text-blue-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">Process Automation</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Streamline operations with intelligent automation:
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Workflow automation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Document processing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Task scheduling and optimization
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Take our AI assessment quiz to discover the best solutions for your business
            </p>
            <QuizButton />
          </div>
        </div>
      </section>
    </div>
  );
} 
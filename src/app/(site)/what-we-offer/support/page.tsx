'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ChatBubbleLeftRightIcon, 
  ArrowLeftIcon,
  CheckCircleIcon,
  StarIcon,
  EnvelopeIcon,
  ExclamationCircleIcon,
  ArrowPathIcon,
  UserIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function SupportPage() {
  return (
    <div className="bg-black min-h-screen">
      <section className="py-24">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <Link 
              href="/what-we-offer" 
              className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to What We Offer
            </Link>
          </motion.div>

          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div 
              className="flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-xl mb-6 mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ChatBubbleLeftRightIcon className="h-10 w-10 text-green-400" />
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Let Support Feel Effortless
            </motion.h1>
            
            <motion.p 
              className="text-xl text-slate-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Stop firefighting every inbox. Automate responses, catch issues early, and keep client experiences consistent—without growing your support team.
            </motion.p>
            
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <StarIcon className="h-5 w-5 mr-2" />
              <span className="font-medium">Save 4-8 hours weekly on support</span>
            </motion.div>
          </div>

          {/* Core Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Smart Support Automation</h2>
            <p className="text-lg text-slate-300 text-center mb-12 max-w-3xl mx-auto">
              Deliver faster responses, smarter routing, and more thoughtful service automatically.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Smart Intake & Routing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-br from-green-600/10 via-green-500/5 to-emerald-600/10 border border-green-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg mb-4">
                  <EnvelopeIcon className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Smart Intake & Routing</h3>
                <p className="text-slate-300 mb-4 text-sm">
                  Get every support request to the right place, automatically.
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    Auto-categorize by urgency and topic
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    Route emails and chats to right person
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    Prevent owner from being default responder
                  </li>
                </ul>
              </motion.div>

              {/* Proactive Issue Detection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="bg-gradient-to-br from-green-600/10 via-green-500/5 to-emerald-600/10 border border-green-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg mb-4">
                  <ExclamationCircleIcon className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Proactive Issue Detection</h3>
                <p className="text-slate-300 mb-4 text-sm">
                  Spot client risk before it turns into a fire drill.
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    Monitor VIP clients and wait times
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    Auto-alert leadership with action plans
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    Prevent churn by catching issues early
                  </li>
                </ul>
              </motion.div>

              {/* Automated Status Updates */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="bg-gradient-to-br from-green-600/10 via-green-500/5 to-emerald-600/10 border border-green-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg mb-4">
                  <ArrowPathIcon className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Automated Status Updates</h3>
                <p className="text-slate-300 mb-4 text-sm">
                  Don&apos;t let &ldquo;I&apos;ll get back to you&rdquo; become &ldquo;I forgot.&rdquo;
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    Auto-send updates via email or SMS
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    Pull from project tools and systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    Keep clients informed without staff time
                  </li>
                </ul>
              </motion.div>

              {/* AI-Powered Responses */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="bg-gradient-to-br from-green-600/10 via-green-500/5 to-emerald-600/10 border border-green-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg mb-4">
                  <UserIcon className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Context-Aware Responses</h3>
                <p className="text-slate-300 mb-4 text-sm">
                  Treat every client like a VIP without remembering everything manually.
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    Pull client history and preferences
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    Help team respond faster and personally
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    Perfect for founders with repeat clients
                  </li>
                </ul>
                <div className="mt-3 inline-flex items-center px-2 py-1 bg-green-500/10 border border-green-500/20 rounded text-xs text-green-400">
                  AI-enabled
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">The Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-green-600/10 via-green-500/5 to-emerald-600/10 border border-green-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">4-8</div>
                <div className="text-slate-300 text-sm">Hours Saved Weekly</div>
              </div>
              <div className="bg-gradient-to-br from-green-600/10 via-green-500/5 to-emerald-600/10 border border-green-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
                <div className="text-slate-300 text-sm">Fewer Manual Updates</div>
              </div>
              <div className="bg-gradient-to-br from-green-600/10 via-green-500/5 to-emerald-600/10 border border-green-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-slate-300 text-sm">Automated Responses</div>
              </div>
              <div className="bg-gradient-to-br from-green-600/10 via-green-500/5 to-emerald-600/10 border border-green-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">✅</div>
                <div className="text-slate-300 text-sm">Uses Your Tools</div>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-slate-300">
                Works with Gmail, Slack, Intercom, Airtable, and most CRMs.
              </p>
            </div>
          </motion.div>

          {/* Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="bg-gradient-to-br from-green-600/10 via-green-500/5 to-emerald-600/10 border border-green-500/20 rounded-xl p-8 mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Client Success</h2>
            <div className="max-w-2xl mx-auto text-center">
              <blockquote className="text-lg text-slate-300 mb-4 italic">
                &ldquo;We used to get 50 &lsquo;Where&apos;s my order?&rsquo; emails a day. Now our system answers them automatically.&rdquo;
              </blockquote>
              <div className="text-green-400 font-medium">
                — Founder, Boutique Logistics Firm
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-green-600/20 via-green-500/10 to-emerald-600/20 border border-green-500/30 rounded-xl p-8 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">Ready for Effortless Support?</h2>
              <p className="text-xl text-slate-300 mb-8">
                We&apos;ll help you build support that feels personal at scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Get Started →
                </Link>
                <Link 
                  href="/what-we-offer" 
                  className="px-8 py-3 border border-green-500/30 text-green-400 rounded-lg hover:bg-green-500/10 transition-colors font-medium"
                >
                  Explore More
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ChartBarIcon, 
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  StarIcon,
  ArrowRightIcon,
  DocumentTextIcon,
  CpuChipIcon,
  ClockIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

export default function SalesPage() {
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
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to What We Offer
            </Link>
          </motion.div>

          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div 
              className="flex items-center justify-center w-20 h-20 bg-yellow-500/20 rounded-xl mb-6 mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ChartBarIcon className="h-10 w-10 text-yellow-400" />
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Let Your Sales Process Run Without You
            </motion.h1>
            
            <motion.p 
              className="text-xl text-slate-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Stop chasing leads and manual follow-ups. Focus on selling while your system handles the rest.
            </motion.p>
            
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-lg text-yellow-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <StarIcon className="h-5 w-5 mr-2" />
              <span className="font-medium">32% more demos booked on average</span>
            </motion.div>
          </div>

          {/* Core Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Seamless Sales Automation</h2>
            <p className="text-lg text-slate-300 text-center mb-12 max-w-3xl mx-auto">
              From lead capture to follow-up, we automate every step so nothing falls through the cracks.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Lead Capture & Routing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-br from-yellow-600/10 via-yellow-500/5 to-amber-600/10 border border-yellow-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-500/20 rounded-lg mb-4">
                  <PhoneIcon className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Smart Lead Capture</h3>
                <p className="text-slate-300 mb-4">
                  Never miss an inquiry—capture and route leads instantly from any source.
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                    Instant rep alerts via SMS/email
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                    Missed call auto-text with booking link
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                    Social media DM to CRM sync
                  </li>
                </ul>
              </motion.div>

              {/* Lead Qualification */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="bg-gradient-to-br from-yellow-600/10 via-yellow-500/5 to-amber-600/10 border border-yellow-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-500/20 rounded-lg mb-4">
                  <CpuChipIcon className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Qualification</h3>
                <p className="text-slate-300 mb-4">
                  Smart forms and AI chat that segment leads and route them to the right pipeline.
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                    Dynamic forms that ask the right questions
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                    Auto-segment by urgency and fit
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                    Smart routing to the right rep
                  </li>
                </ul>
                <div className="mt-3 inline-flex items-center px-2 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded text-xs text-yellow-400">
                  AI-enabled
                </div>
              </motion.div>

              {/* CRM Automation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="bg-gradient-to-br from-yellow-600/10 via-yellow-500/5 to-amber-600/10 border border-yellow-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-500/20 rounded-lg mb-4">
                  <DocumentTextIcon className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">CRM Intelligence</h3>
                <p className="text-slate-300 mb-4">
                  Keep your CRM clean and updated without manual data entry.
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                    Auto-log new leads and interactions
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                    Meeting bookings update lead stages
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                    Email summaries stored under contacts
                  </li>
                </ul>
              </motion.div>

              {/* Follow-Up Automation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="bg-gradient-to-br from-yellow-600/10 via-yellow-500/5 to-amber-600/10 border border-yellow-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-500/20 rounded-lg mb-4">
                  <ChatBubbleLeftRightIcon className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Smart Follow-Up Sequences</h3>
                <p className="text-slate-300 mb-4">
                  Nurture leads with personalized outreach that feels human, not robotic.
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                    Timed follow-up sequences (3/7/14 days)
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                    Re-engagement for cold prospects
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                    Calendar booking reminders
                  </li>
                </ul>
                <div className="mt-3 inline-flex items-center px-2 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded text-xs text-yellow-400">
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
              <div className="bg-gradient-to-br from-yellow-600/10 via-yellow-500/5 to-amber-600/10 border border-yellow-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">32%</div>
                <div className="text-slate-300 text-sm">More Demos Booked</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-600/10 via-yellow-500/5 to-amber-600/10 border border-yellow-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">5-7</div>
                <div className="text-slate-300 text-sm">Hours Saved Weekly</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-600/10 via-yellow-500/5 to-amber-600/10 border border-yellow-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">0</div>
                <div className="text-slate-300 text-sm">Missed Leads</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-600/10 via-yellow-500/5 to-amber-600/10 border border-yellow-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">✅</div>
                <div className="text-slate-300 text-sm">Uses Your Tools</div>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-slate-300">
                Works with Google Forms, Calendly, Typeform, Airtable, and most CRMs.
              </p>
            </div>
          </motion.div>

          {/* Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="bg-gradient-to-br from-yellow-600/10 via-yellow-500/5 to-amber-600/10 border border-yellow-500/20 rounded-xl p-8 mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Client Success</h2>
            <div className="max-w-2xl mx-auto text-center">
              <blockquote className="text-lg text-slate-300 mb-4 italic">
                &ldquo;Our follow-up rate went from 30% to 95%. We don&apos;t lose leads anymore.&rdquo;
              </blockquote>
              <div className="text-yellow-400 font-medium">
                — Sales Director, Tech Startup
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
            <div className="bg-gradient-to-br from-yellow-600/20 via-yellow-500/10 to-amber-600/20 border border-yellow-500/30 rounded-xl p-8 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Close More Deals?</h2>
              <p className="text-xl text-slate-300 mb-8">
                We&apos;ll help you build a sales process that never sleeps.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors font-medium"
                >
                  Get Started →
                </Link>
                <Link 
                  href="/what-we-offer" 
                  className="px-8 py-3 border border-yellow-500/30 text-yellow-400 rounded-lg hover:bg-yellow-500/10 transition-colors font-medium"
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
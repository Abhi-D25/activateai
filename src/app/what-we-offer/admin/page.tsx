'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ClipboardDocumentListIcon, 
  ArrowPathIcon, 
  ClockIcon,
  ChartBarIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  StarIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  ExclamationTriangleIcon,
  UserPlusIcon,
  DocumentArrowUpIcon,
  BellIcon,
  EyeIcon,
  InboxIcon,
  CalendarIcon,
  FolderIcon,
  PencilIcon,
  ClockIcon as ClockIconSolid
} from '@heroicons/react/24/outline';

export default function AdminPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
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
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to What We Offer
            </Link>
          </motion.div>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div 
              className="flex items-center justify-center w-20 h-20 bg-purple-500/20 rounded-xl mb-6 mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ClipboardDocumentListIcon className="h-10 w-10 text-purple-400" />
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Let the Paperwork Handle Itself
            </motion.h1>
            <motion.p 
              className="text-xl text-slate-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Manual admin work wasn&apos;t why you started this business. We help it run in the background—so nothing slips, and nothing slows you down.
            </motion.p>
            <motion.p 
              className="text-lg text-slate-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              You&apos;re still the one chasing signatures, answering team requests, and wondering if that deadline got missed.
            </motion.p>
            <motion.p 
              className="text-lg text-slate-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              We help you build an admin engine that quietly runs the show—without pulling you back into the weeds.
            </motion.p>
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <StarIcon className="h-5 w-5 mr-2" />
              <span className="font-medium">6-9 hours saved per week on admin tasks</span>
            </motion.div>
          </div>

          {/* Admin Automation Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Admin Automation Pillars</h2>
            <p className="text-lg text-slate-300 text-center mb-12">
              We organize your invisible work—so requests get routed, documents get filed, and compliance stays on track without you having to watch the clock.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Request Handling Without the Bottlenecks */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="bg-gradient-to-br from-purple-600/10 via-purple-500/5 to-indigo-600/10 border border-purple-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-lg mb-4">
                  <InboxIcon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Request Handling Without the Bottlenecks</h3>
                <p className="text-slate-300 mb-4">
                  Keep internal or vendor requests moving—without becoming the dispatcher.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-purple-400 mr-2" />
                    Smart forms that route requests based on type or urgency
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-purple-400 mr-2" />
                    Auto-assigns to the right person or department
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-purple-400 mr-2" />
                    Instantly posts in Slack, email, or task boards for visibility
                  </li>
                </ul>
              </motion.div>

              {/* Status Updates Without the Syncs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="bg-gradient-to-br from-purple-600/10 via-purple-500/5 to-indigo-600/10 border border-purple-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-lg mb-4">
                  <BellIcon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Status Updates Without the Syncs</h3>
                <p className="text-slate-300 mb-4">
                  Start the week with a clear picture—without writing a word or running a meeting.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-purple-400 mr-2" />
                    Auto-compiled admin digest: approvals, renewals, requests
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-purple-400 mr-2" />
                    Custom to what you want to see—sent every Monday morning
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-purple-400 mr-2" />
                    Keeps everyone informed without you having to round it up
                  </li>
                </ul>
              </motion.div>

              {/* Deadlines Without the Dropoff */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="bg-gradient-to-br from-purple-600/10 via-purple-500/5 to-indigo-600/10 border border-purple-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-lg mb-4">
                  <CalendarIcon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Deadlines Without the Dropoff</h3>
                <p className="text-slate-300 mb-4">
                  Stay on top of compliance, renewals, and licensing—without last-minute stress.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-purple-400 mr-2" />
                    Tracks key renewal dates (licenses, insurance, filings, etc.)
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-purple-400 mr-2" />
                    Sends polite reminders, escalating if deadlines approach
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-purple-400 mr-2" />
                    Can parse uploaded PDFs for embedded dates
                  </li>
                </ul>
              </motion.div>

              {/* Documents Without the Chaos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="bg-gradient-to-br from-purple-600/10 via-purple-500/5 to-indigo-600/10 border border-purple-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-lg mb-4">
                  <FolderIcon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Documents Without the Chaos</h3>
                <p className="text-slate-300 mb-4">
                  Store, organize, and tag your paperwork automatically—so nothing goes missing.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-purple-400 mr-2" />
                    Auto-sorts contracts, NDAs, vendor forms, and more
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-purple-400 mr-2" />
                    Creates a clean folder structure with tagging and timelines
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-purple-400 mr-2" />
                    Smart logging of client uploads, approvals, and activity
                  </li>
                </ul>
              </motion.div>

              {/* Writing Without the Blank Page */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="bg-gradient-to-br from-purple-600/10 via-purple-500/5 to-indigo-600/10 border border-purple-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-lg mb-4">
                  <PencilIcon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Writing Without the Blank Page</h3>
                <p className="text-slate-300 mb-4">
                  Generate polished internal documents—on brand and on time.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-purple-400 mr-2" />
                    Use AI to draft SOPs, instructions, memos, or service guides
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-purple-400 mr-2" />
                    Format in your tone and structure
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-purple-400 mr-2" />
                    Improve speed, clarity, and consistency across documentation
                  </li>
                </ul>
                <div className="mt-3 inline-flex items-center px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs text-purple-400">
                  AI-enabled
                </div>
              </motion.div>

              {/* Scheduling Without the Stress */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="bg-gradient-to-br from-purple-600/10 via-purple-500/5 to-indigo-600/10 border border-purple-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-lg mb-4">
                  <ClockIconSolid className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Scheduling Without the Stress</h3>
                <p className="text-slate-300 mb-4">
                  Handle all incoming scheduling requests—without burning out.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-purple-400 mr-2" />
                    Screens incoming requests based on your rules
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-purple-400 mr-2" />
                    Auto-replies with booking links or routing options
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-purple-400 mr-2" />
                    Avoids overbooking and constant context switching
                  </li>
                </ul>
                <div className="mt-3 inline-flex items-center px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs text-purple-400">
                  AI-enabled
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Why It Works Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-purple-600/10 via-purple-500/5 to-indigo-600/10 border border-purple-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">6-9</div>
                <div className="text-slate-300">Hours Saved Per Week on Admin Tasks</div>
              </div>
              <div className="bg-gradient-to-br from-purple-600/10 via-purple-500/5 to-indigo-600/10 border border-purple-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">80%</div>
                <div className="text-slate-300">Reduction in Manual Document Handling</div>
              </div>
              <div className="bg-gradient-to-br from-purple-600/10 via-purple-500/5 to-indigo-600/10 border border-purple-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-slate-300">Follow-Through on Internal Requests & Renewals</div>
              </div>
              <div className="bg-gradient-to-br from-purple-600/10 via-purple-500/5 to-indigo-600/10 border border-purple-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">✅</div>
                <div className="text-slate-300">Built On Your Existing Tools</div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-slate-300">
                We don&apos;t add new apps—we activate the systems you already trust: Google Drive, Slack, Notion, Airtable, etc.
              </p>
            </div>
          </motion.div>

          {/* Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="bg-gradient-to-br from-purple-600/10 via-purple-500/5 to-indigo-600/10 border border-purple-500/20 rounded-xl p-8 mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Mini Case Snapshot</h2>
            <div className="bg-purple-600/10 border border-purple-500/20 rounded-lg p-6">
              <blockquote className="text-lg text-slate-300 mb-4 italic">
                &quot;It used to be chaos trying to find signed forms or figure out if our renewal went through. Now everything is logged, tagged, and done on time.&quot;
              </blockquote>
              <div className="text-purple-400 font-medium">
                — Office Manager, Insurance Firm
              </div>
            </div>
          </motion.div>

          {/* Explore More Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="bg-gradient-to-br from-purple-600/10 via-purple-500/5 to-indigo-600/10 border border-purple-500/20 rounded-xl p-8 mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore More Solutions</h2>
            <p className="text-slate-300 text-center mb-8">
              Looking to automate beyond Admin?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-purple-400 font-semibold mb-2">🔹 Sales</div>
                <div className="text-slate-300">Lead capture, CRM automation, follow-ups</div>
              </div>
              <div className="text-center">
                <div className="text-purple-400 font-semibold mb-2">🔹 Operations</div>
                <div className="text-slate-300">Scheduling, routing, and internal handoffs</div>
              </div>
              <div className="text-center">
                <div className="text-purple-400 font-semibold mb-2">🔹 Support</div>
                <div className="text-slate-300">FAQ replies, ticket triage, and customer message flows</div>
              </div>
            </div>
            <div className="text-center mt-6">
              <Link 
                href="/what-we-offer" 
                className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
              >
                Explore Our Other Solutions →
              </Link>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.9 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-purple-600/20 via-purple-500/10 to-indigo-600/20 border border-purple-500/30 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Want admin to just… work?</h2>
              <p className="text-xl text-slate-300 mb-8">
                We&apos;ll help you automate the pieces eating up your week—one clean workflow at a time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                >
                  Talk to Us →
                </Link>
                <Link 
                  href="/what-we-offer" 
                  className="px-8 py-3 border border-purple-500/30 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-colors font-medium"
                >
                  See What&apos;s Possible
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
} 
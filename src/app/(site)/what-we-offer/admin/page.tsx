'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ClipboardDocumentListIcon, 
  ArrowLeftIcon,
  CheckCircleIcon,
  StarIcon,
  InboxIcon,
  CalendarIcon,
  FolderIcon,
  PencilIcon,
  ClockIcon,
  BellIcon
} from '@heroicons/react/24/outline';

export default function AdminPage1() {
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
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to What We Offer
            </Link>
          </motion.div>

          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-20">
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
              className="text-xl text-slate-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Stop chasing signatures and missed deadlines. We build admin systems that run quietly in the background—so nothing slips through the cracks.
            </motion.p>
            
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <StarIcon className="h-5 w-5 mr-2" />
              <span className="font-medium">Save 6-9 hours per week on admin tasks</span>
            </motion.div>
          </div>

          {/* Core Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Our Admin Automation Pillars</h2>
            <p className="text-lg text-slate-300 text-center mb-12 max-w-3xl mx-auto">
              We organize your invisible work—so requests get routed, documents get filed, and compliance stays on track.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Request Routing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-br from-purple-600/10 via-purple-500/5 to-indigo-600/10 border border-purple-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-lg mb-4">
                  <InboxIcon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Request Handling Without Bottlenecks</h3>
                <p className="text-slate-300 mb-4 text-sm">
                  Keep internal and vendor requests moving without becoming the dispatcher.
                </p>
                <ul className="space-y-1 text-sm text-slate-300">
                  <li>• Smart routing by type and urgency</li>
                  <li>• Auto-assigns to right person</li>
                  <li>• Instant Slack/email notifications</li>
                </ul>
              </motion.div>

              {/* Status Updates */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="bg-gradient-to-br from-purple-600/10 via-purple-500/5 to-indigo-600/10 border border-purple-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-lg mb-4">
                  <BellIcon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Status Updates Without Syncs</h3>
                <p className="text-slate-300 mb-4 text-sm">
                  Start each week with a clear picture—no meetings or manual updates needed.
                </p>
                <ul className="space-y-1 text-sm text-slate-300">
                  <li>• Auto-compiled admin digest</li>
                  <li>• Custom Monday morning reports</li>
                  <li>• Team visibility without effort</li>
                </ul>
              </motion.div>

              {/* Deadline Tracking */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="bg-gradient-to-br from-purple-600/10 via-purple-500/5 to-indigo-600/10 border border-purple-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-lg mb-4">
                  <CalendarIcon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Deadlines Without Dropoff</h3>
                <p className="text-slate-300 mb-4 text-sm">
                  Stay on top of compliance and renewals without last-minute stress.
                </p>
                <ul className="space-y-1 text-sm text-slate-300">
                  <li>• Track renewal dates automatically</li>
                  <li>• Escalating reminder system</li>
                  <li>• PDF date extraction</li>
                </ul>
              </motion.div>

              {/* Document Management */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="bg-gradient-to-br from-purple-600/10 via-purple-500/5 to-indigo-600/10 border border-purple-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-lg mb-4">
                  <FolderIcon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Documents Without Chaos</h3>
                <p className="text-slate-300 mb-4 text-sm">
                  Automatically organize and tag paperwork so nothing goes missing.
                </p>
                <ul className="space-y-1 text-sm text-slate-300">
                  <li>• Auto-sort contracts and forms</li>
                  <li>• Clean folder structures</li>
                  <li>• Smart activity logging</li>
                </ul>
              </motion.div>

              {/* AI Writing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="bg-gradient-to-br from-purple-600/10 via-purple-500/5 to-indigo-600/10 border border-purple-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-lg mb-4">
                  <PencilIcon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Writing Without Blank Pages</h3>
                <p className="text-slate-300 mb-4 text-sm">
                  Generate polished internal documents in your brand voice.
                </p>
                <ul className="space-y-1 text-sm text-slate-300">
                  <li>• AI-draft SOPs and memos</li>
                  <li>• Consistent tone and structure</li>
                  <li>• Multiple format outputs</li>
                </ul>
                <div className="mt-3 inline-flex items-center px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs text-purple-400">
                  AI-enabled
                </div>
              </motion.div>

              {/* Smart Scheduling */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="bg-gradient-to-br from-purple-600/10 via-purple-500/5 to-indigo-600/10 border border-purple-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-lg mb-4">
                  <ClockIcon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Scheduling Without Stress</h3>
                <p className="text-slate-300 mb-4 text-sm">
                  Handle incoming scheduling requests automatically based on your rules.
                </p>
                <ul className="space-y-1 text-sm text-slate-300">
                  <li>• Screen requests intelligently</li>
                  <li>• Auto-reply with booking options</li>
                  <li>• Prevent overbooking</li>
                </ul>
                <div className="mt-3 inline-flex items-center px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs text-purple-400">
                  AI-enabled
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why It Works</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-purple-600/10 via-purple-500/5 to-indigo-600/10 border border-purple-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">6-9</div>
                <div className="text-slate-300 text-sm">Hours Saved Weekly</div>
              </div>
              <div className="bg-gradient-to-br from-purple-600/10 via-purple-500/5 to-indigo-600/10 border border-purple-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">80%</div>
                <div className="text-slate-300 text-sm">Less Manual Work</div>
              </div>
              <div className="bg-gradient-to-br from-purple-600/10 via-purple-500/5 to-indigo-600/10 border border-purple-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-slate-300 text-sm">Follow-Through Rate</div>
              </div>
              <div className="bg-gradient-to-br from-purple-600/10 via-purple-500/5 to-indigo-600/10 border border-purple-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">✅</div>
                <div className="text-slate-300 text-sm">Uses Your Tools</div>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-slate-300">
                Built on your existing tools: Google Drive, Slack, Notion, Airtable, etc.
              </p>
            </div>
          </motion.div>

          {/* Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="bg-gradient-to-br from-purple-600/10 via-purple-500/5 to-indigo-600/10 border border-purple-500/20 rounded-xl p-8 mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Client Success</h2>
            <div className="max-w-2xl mx-auto text-center">
              <blockquote className="italic text-slate-300 border-l-4 border-blue-500 pl-4 text-sm">
                &ldquo;I was spending 3 hours every morning just catching up on emails and updates. Now I get a perfect summary in 5 minutes.&rdquo;
                <footer className="mt-2 font-semibold text-white">- Jennifer, CEO</footer>
              </blockquote>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-purple-600/20 via-purple-500/10 to-indigo-600/20 border border-purple-500/30 rounded-xl p-8 max-w-2xl mx-auto">
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
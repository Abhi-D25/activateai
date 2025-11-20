'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  CogIcon, 
  ArrowLeftIcon,
  CheckCircleIcon,
  StarIcon,
  ChatBubbleLeftRightIcon,
  UserPlusIcon,
  DocumentArrowUpIcon,
  BellIcon,
  EyeIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function OperationsPage() {
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
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to What We Offer
            </Link>
          </motion.div>

          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div 
              className="flex items-center justify-center w-20 h-20 bg-blue-500/20 rounded-xl mb-6 mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <CogIcon className="h-10 w-10 text-blue-400" />
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Operations That Keep Moving
            </motion.h1>
            
            <motion.p 
              className="text-xl text-slate-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Stop chasing updates and wondering what slipped. Build smooth, self-moving systems that keep your team aligned and clients moving forward.
            </motion.p>
            
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <StarIcon className="h-5 w-5 mr-2" />
              <span className="font-medium">Save 5-8 hours per week in ops admin time</span>
            </motion.div>
          </div>

          {/* Core Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Streamlined Operations</h2>
            <p className="text-lg text-slate-300 text-center mb-12 max-w-3xl mx-auto">
              Four key areas that create movement, visibility, and peace of mind in your daily operations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Smart Onboarding */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-br from-blue-600/10 via-blue-500/5 to-cyan-600/10 border border-blue-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-lg mb-4">
                  <UserPlusIcon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Smart Onboarding</h3>
                <p className="text-slate-300 mb-4 text-sm">
                  Start every project with clarity—without chasing files or writing the same emails.
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                    Auto-launch checklists when deals close
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                    Smart reminders for required documents
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                    Automatic folder creation and access setup
                  </li>
                </ul>
              </motion.div>

              {/* Team Alignment */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="bg-gradient-to-br from-blue-600/10 via-blue-500/5 to-cyan-600/10 border border-blue-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-lg mb-4">
                  <BellIcon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Team Alignment</h3>
                <p className="text-slate-300 mb-4 text-sm">
                  Don&apos;t let manual handoffs slow you down.
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                    Weekly digest from all your tools
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                    Role-based status summaries
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                    Auto-compiled Monday updates
                  </li>
                </ul>
              </motion.div>

              {/* Communication Automation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="bg-gradient-to-br from-blue-600/10 via-blue-500/5 to-cyan-600/10 border border-blue-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-lg mb-4">
                  <ChatBubbleLeftRightIcon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Communication</h3>
                <p className="text-slate-300 mb-4 text-sm">
                  Deliver consistent updates without losing time to writing.
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                    Brand-consistent email drafting
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                    Internal note summarization
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                    Automated SOP generation
                  </li>
                </ul>
                <div className="mt-3 inline-flex items-center px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-xs text-blue-400">
                  AI-enabled
                </div>
              </motion.div>

              {/* Risk Monitoring */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="bg-gradient-to-br from-blue-600/10 via-blue-500/5 to-cyan-600/10 border border-blue-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-lg mb-4">
                  <EyeIcon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Proactive Risk Monitoring</h3>
                <p className="text-slate-300 mb-4 text-sm">
                  Know when something&apos;s off before it causes problems.
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                    Track overdue deliverables
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                    Flag at-risk accounts early
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                    Sync alerts to your CRM
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Feature Spotlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-cyan-600/20 border border-blue-500/30 rounded-xl p-8 mb-20"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-6 mx-auto">
              <DocumentArrowUpIcon className="h-8 w-8 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Automated Document Delivery</h2>
            <p className="text-lg text-slate-300 text-center mb-8 max-w-2xl mx-auto">
              Create seamless welcome experiences. The moment a client or contractor is confirmed, they automatically receive contracts, SOPs, access guides, and tool links—consistently and on-brand.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-3">Before</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Chasing documents and forgetting steps</li>
                  <li>• Inconsistent onboarding experience</li>
                  <li>• Hours of back-and-forth weekly</li>
                  <li>• Projects starting behind schedule</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-3">After</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Instant, automated document delivery</li>
                  <li>• Professional, consistent experience</li>
                  <li>• Time freed for strategic work</li>
                  <li>• Projects starting strong</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">The Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-600/10 via-blue-500/5 to-cyan-600/10 border border-blue-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">30%</div>
                <div className="text-slate-300 text-sm">Fewer Project Delays</div>
              </div>
              <div className="bg-gradient-to-br from-blue-600/10 via-blue-500/5 to-cyan-600/10 border border-blue-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">5-8</div>
                <div className="text-slate-300 text-sm">Hours Saved Weekly</div>
              </div>
              <div className="bg-gradient-to-br from-blue-600/10 via-blue-500/5 to-cyan-600/10 border border-blue-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">2x</div>
                <div className="text-slate-300 text-sm">Faster Onboarding</div>
              </div>
              <div className="bg-gradient-to-br from-blue-600/10 via-blue-500/5 to-cyan-600/10 border border-blue-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">✅</div>
                <div className="text-slate-300 text-sm">Uses Your Tools</div>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-slate-300">
                Integrates with Slack, Notion, Google Workspace, Airtable, ClickUp, and more.
              </p>
            </div>
          </motion.div>

          {/* Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="bg-gradient-to-br from-blue-600/10 via-blue-500/5 to-cyan-600/10 border border-blue-500/20 rounded-xl p-8 mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Client Success</h2>
            <div className="max-w-2xl mx-auto text-center">
              <blockquote className="text-lg text-slate-300 mb-4 italic">
                &ldquo;We used to lose track of projects all the time. Now everything&apos;s visible and nothing falls through.&rdquo;
              </blockquote>
              <div className="text-blue-400 font-medium">
                — Studio Ops Manager, Boutique Creative Agency
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-cyan-600/20 border border-blue-500/30 rounded-xl p-8 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">Ready for Operations That Just Run?</h2>
              <p className="text-xl text-slate-300 mb-8">
                We&apos;ll help you build workflows that work while you sleep.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Get Started →
                </Link>
                <Link 
                  href="/what-we-offer" 
                  className="px-8 py-3 border border-blue-500/30 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-colors font-medium"
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
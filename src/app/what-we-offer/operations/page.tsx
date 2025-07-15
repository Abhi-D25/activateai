'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  CogIcon, 
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
  EyeIcon
} from '@heroicons/react/24/outline';

export default function OperationsPage() {
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
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to What We Offer
            </Link>
          </motion.div>

          <div className="max-w-4xl mx-auto text-center mb-16">
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
              Operations That Keep Moving—Even When You Step Away
            </motion.h1>
            <motion.p 
              className="text-xl text-slate-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              No more chasing updates. No more wondering what slipped. Just smooth, self-moving systems.
            </motion.p>
            <motion.p 
              className="text-lg text-slate-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              We help you wire the workflows that keep your team aligned, your clients moving, and your operations on point.
            </motion.p>
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <StarIcon className="h-5 w-5 mr-2" />
              <span className="font-medium">5-8 hours saved per week in ops admin time</span>
            </motion.div>
          </div>

          {/* Operations Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Operations Pillars</h2>
            <p className="text-lg text-slate-300 text-center mb-12">
              We organize our operational automations into four layers—designed to create movement, visibility, and peace of mind.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Onboarding Without the Follow-Up */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="bg-gradient-to-br from-blue-600/10 via-blue-500/5 to-cyan-600/10 border border-blue-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-lg mb-4">
                  <UserPlusIcon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Onboarding Without the Follow-Up</h3>
                <p className="text-slate-300 mb-4">
                  Start every project with clarity—without writing the same emails or chasing the same files.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-blue-400 mr-2" />
                    Auto-remind clients or vendors to upload contracts, forms, or required files
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-blue-400 mr-2" />
                    Launch your onboarding checklist the moment a deal closes
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-blue-400 mr-2" />
                    Send welcome emails, create shared folders, and assign internal owners automatically
                  </li>
                </ul>
              </motion.div>

              {/* Clarity Without the Meetings */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="bg-gradient-to-br from-blue-600/10 via-blue-500/5 to-cyan-600/10 border border-blue-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-lg mb-4">
                  <BellIcon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Clarity Without the Meetings</h3>
                <p className="text-slate-300 mb-4">
                  Keep your team aligned without another recurring sync.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-blue-400 mr-2" />
                    Compile tasks from Slack, Notion, ClickUp, or Airtable into a weekly digest
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-blue-400 mr-2" />
                    Auto-send a Monday summary of what&apos;s due, what&apos;s done, and what needs attention
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-blue-400 mr-2" />
                    Customize what each teammate sees, based on role or function
                  </li>
                </ul>
              </motion.div>

              {/* Comms Without the Blank Page */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="bg-gradient-to-br from-blue-600/10 via-blue-500/5 to-cyan-600/10 border border-blue-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-lg mb-4">
                  <ChatBubbleLeftRightIcon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Comms Without the Blank Page</h3>
                <p className="text-slate-300 mb-4">
                  Deliver consistent updates—without losing time to writing.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-blue-400 mr-2" />
                    Draft onboarding emails and status updates in your brand tone
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-blue-400 mr-2" />
                    Summarize internal notes into a shareable format
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-blue-400 mr-2" />
                    Use AI to generate modular SOPs and client-facing instructions
                  </li>
                </ul>
              </motion.div>

              {/* Visibility Without the Panic */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="bg-gradient-to-br from-blue-600/10 via-blue-500/5 to-cyan-600/10 border border-blue-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-lg mb-4">
                  <EyeIcon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Visibility Without the Panic</h3>
                <p className="text-slate-300 mb-4">
                  Know when something&apos;s off—before it causes churn or chaos.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-blue-400 mr-2" />
                    Track skipped check-ins, overdue deliverables, or client silence
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-blue-400 mr-2" />
                    Flag accounts at risk so you can take action early
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-blue-400 mr-2" />
                    Sync risk flags to Airtable, Slack, or your CRM
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Automated Onboarding Doc Sender */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-cyan-600/20 border border-blue-500/30 rounded-xl p-8 mb-16"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-6 mx-auto">
              <DocumentArrowUpIcon className="h-8 w-8 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Automated Onboarding Doc Sender</h2>
            <p className="text-lg text-slate-300 text-center mb-8">
              Create a seamless welcome experience—without lifting a finger.
            </p>
            <p className="text-slate-300 text-center mb-8">
              Whether it&apos;s a new client, contractor, or team member, this automation instantly delivers the right materials the moment they&apos;re confirmed. Contracts, SOPs, access guides, tool links—sent automatically, consistently, and on-brand.
            </p>
            
            <div className="bg-blue-600/10 border border-blue-500/20 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Why it matters:</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-300">
                  <CheckCircleIcon className="h-5 w-5 text-blue-400 mr-3" />
                  No more chasing documents or forgetting steps
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircleIcon className="h-5 w-5 text-blue-400 mr-3" />
                  Ensures every person starts on the right foot
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircleIcon className="h-5 w-5 text-blue-400 mr-3" />
                  Frees up hours of back-and-forth every week
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircleIcon className="h-5 w-5 text-blue-400 mr-3" />
                  Makes your business feel polished, professional, and prepared
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <p className="text-slate-400 italic">
                Because in businesses without HR, onboarding still happens. Now it just happens on time.
              </p>
            </div>
          </motion.div>

          {/* Why It Works Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-600/10 via-blue-500/5 to-cyan-600/10 border border-blue-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">30%</div>
                <div className="text-slate-300">Fewer Project Delays</div>
              </div>
              <div className="bg-gradient-to-br from-blue-600/10 via-blue-500/5 to-cyan-600/10 border border-blue-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">5-8</div>
                <div className="text-slate-300">Hours Saved Per Week in Ops Admin Time</div>
              </div>
              <div className="bg-gradient-to-br from-blue-600/10 via-blue-500/5 to-cyan-600/10 border border-blue-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">2x</div>
                <div className="text-slate-300">Increase in On-Time Onboarding for Clients</div>
              </div>
              <div className="bg-gradient-to-br from-blue-600/10 via-blue-500/5 to-cyan-600/10 border border-blue-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-slate-300">Built On Tools You Already Use</div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-slate-300">
                We integrate with Slack, Notion, Google Workspace, Airtable, ClickUp, and more.
              </p>
            </div>
          </motion.div>

          {/* Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="bg-gradient-to-br from-blue-600/10 via-blue-500/5 to-cyan-600/10 border border-blue-500/20 rounded-xl p-8 mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Mini Case Snapshot</h2>
            <div className="bg-blue-600/10 border border-blue-500/20 rounded-lg p-6">
              <blockquote className="text-lg text-slate-300 mb-4 italic">
                &quot;We used to lose days waiting on files or chasing people for status. Now our process runs on time—even when we don&apos;t.&quot;
              </blockquote>
              <div className="text-blue-400 font-medium">
                — Studio Ops Manager, Boutique Creative Agency
              </div>
            </div>
          </motion.div>

          {/* Explore More Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="bg-gradient-to-br from-blue-600/10 via-blue-500/5 to-cyan-600/10 border border-blue-500/20 rounded-xl p-8 mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore More Solutions</h2>
            <p className="text-slate-300 text-center mb-8">
              Looking to automate beyond Operations?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-blue-400 font-semibold mb-2">🔹 Sales</div>
                <div className="text-slate-300">Lead capture, CRM automation, follow-ups</div>
              </div>
              <div className="text-center">
                <div className="text-blue-400 font-semibold mb-2">🔹 Admin</div>
                <div className="text-slate-300">Invoicing, onboarding, and client data entry</div>
              </div>
              <div className="text-center">
                <div className="text-blue-400 font-semibold mb-2">🔹 Support</div>
                <div className="text-slate-300">FAQ replies, ticket triage, and customer message flows</div>
              </div>
            </div>
            <div className="text-center mt-6">
              <Link 
                href="/what-we-offer" 
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                Explore Our Other Solutions →
              </Link>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-cyan-600/20 border border-blue-500/30 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Want your operations to feel like they just run?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Let&apos;s build the workflows to make it happen—on your terms, using what you already have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Talk to Us →
                </Link>
                <Link 
                  href="/what-we-offer" 
                  className="px-8 py-3 border border-blue-500/30 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-colors font-medium"
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
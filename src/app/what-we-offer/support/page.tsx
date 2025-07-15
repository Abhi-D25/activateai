'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ChatBubbleLeftRightIcon, 
  ArrowPathIcon, 
  ClockIcon,
  ChartBarIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  StarIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  UserPlusIcon,
  DocumentArrowUpIcon,
  BellIcon,
  EyeIcon,
  InboxIcon,
  CalendarIcon,
  FolderIcon,
  PencilIcon,
  ClockIcon as ClockIconSolid,
  EnvelopeIcon,
  ExclamationCircleIcon,
  ArrowPathIcon as ArrowPathIconSolid,
  CogIcon,
  UserIcon
} from '@heroicons/react/24/outline';

export default function SupportPage() {
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
              className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to What We Offer
            </Link>
          </motion.div>

          <div className="max-w-4xl mx-auto text-center mb-16">
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
              Let Support Feel Effortless—Even When It&apos;s Not
            </motion.h1>
            <motion.p 
              className="text-xl text-slate-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Stop firefighting every inbox. We help support run smoother, respond faster, and stay one step ahead—without you needing to step in.
            </motion.p>
            <motion.p 
              className="text-lg text-slate-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Every &quot;Where&apos;s my order?&quot; or &quot;Can someone help me?&quot; eats into your focus.
            </motion.p>
            <motion.p 
              className="text-lg text-slate-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              We help you automate the first touch, catch the red flags early, and keep client experiences consistent—so no customer gets missed, and no team gets overwhelmed.
            </motion.p>
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <StarIcon className="h-5 w-5 mr-2" />
              <span className="font-medium">4-8 hours saved weekly on inbound support</span>
            </motion.div>
          </div>

          {/* Support Automation Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Support Automation Pillars</h2>
            <p className="text-lg text-slate-300 text-center mb-12">
              We help your business deliver faster responses, smarter routing, and more thoughtful service—without growing your support team.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Smart Intake & Triage */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="bg-gradient-to-br from-green-600/10 via-green-500/5 to-emerald-600/10 border border-green-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg mb-4">
                  <EnvelopeIcon className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Smart Intake & Triage</h3>
                <p className="text-slate-300 mb-4">
                  Get every support request to the right place—automatically.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                    Categorize by urgency, topic, or client type
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                    Route incoming emails, forms, and chats to the right person
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                    Prevent owner or ops leads from being the default responder
                  </li>
                </ul>
              </motion.div>

              {/* Proactive Escalation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="bg-gradient-to-br from-green-600/10 via-green-500/5 to-emerald-600/10 border border-green-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg mb-4">
                  <ExclamationCircleIcon className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Proactive Escalation</h3>
                <p className="text-slate-300 mb-4">
                  Spot client risk before it turns into a fire drill.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                    Monitor for VIP clients, long wait times, or repeated complaints
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                    Auto-alert leadership with summary + recommended action
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                    Prevent churn by catching breakdowns before they spiral
                  </li>
                </ul>
              </motion.div>

              {/* Status Updates On Autopilot */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="bg-gradient-to-br from-green-600/10 via-green-500/5 to-emerald-600/10 border border-green-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg mb-4">
                  <ArrowPathIconSolid className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Status Updates On Autopilot</h3>
                <p className="text-slate-300 mb-4">
                  Free your team from repetitive &quot;Where&apos;s my order?&quot; back-and-forths.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                    Auto-ping status updates via email or SMS
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                    Pulls from project tools or delivery systems
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                    Keeps clients informed without burning staff time
                  </li>
                </ul>
              </motion.div>


              {/* Personalized, Context-Aware Responses */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="bg-gradient-to-br from-green-600/10 via-green-500/5 to-emerald-600/10 border border-green-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg mb-4">
                  <UserIcon className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Personalized, Context-Aware Responses</h3>
                <p className="text-slate-300 mb-4">
                  Treat every client like a VIP—without needing to remember everything.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                    Pull recent history, preferences, past issues, and tone
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                    Help your team respond faster *and* more personally
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                    Great for solo founders juggling repeat clients
                  </li>
                </ul>
                <div className="mt-3 inline-flex items-center px-2 py-1 bg-green-500/10 border border-green-500/20 rounded text-xs text-green-400">
                  AI-enabled
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Why It Works Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-green-600/10 via-green-500/5 to-emerald-600/10 border border-green-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">4-8</div>
                <div className="text-slate-300">Hours Saved Weekly on Inbound Support</div>
              </div>
              <div className="bg-gradient-to-br from-green-600/10 via-green-500/5 to-emerald-600/10 border border-green-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
                <div className="text-slate-300">Drop in Manual Status Updates</div>
              </div>
              <div className="bg-gradient-to-br from-green-600/10 via-green-500/5 to-emerald-600/10 border border-green-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">1 AI</div>
                <div className="text-slate-300">assistant = 1 part-time QA analyst</div>
              </div>
              <div className="bg-gradient-to-br from-green-600/10 via-green-500/5 to-emerald-600/10 border border-green-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">✅</div>
                <div className="text-slate-300">Built on what you already use</div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-slate-300">
                No new software. Just smoother support. Gmail, Slack, Intercom, Airtable, CRMs.
              </p>
            </div>
          </motion.div>

          {/* Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="bg-gradient-to-br from-green-600/10 via-green-500/5 to-emerald-600/10 border border-green-500/20 rounded-xl p-8 mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Mini Case Snapshot</h2>
            <div className="bg-green-600/10 border border-green-500/20 rounded-lg p-6">
              <blockquote className="text-lg text-slate-300 mb-4 italic">
                &quot;I used to personally reply to every update request—just to keep things from slipping. Now I don&apos;t even see them, and our clients say we&apos;re more responsive than ever.&quot;
              </blockquote>
              <div className="text-green-400 font-medium">
                — Founder, Boutique Logistics Firm
              </div>
            </div>
          </motion.div>

          {/* Explore More Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="bg-gradient-to-br from-green-600/10 via-green-500/5 to-emerald-600/10 border border-green-500/20 rounded-xl p-8 mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore More Solutions</h2>
            <p className="text-slate-300 text-center mb-8">
              Looking to automate beyond Support?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-green-400 font-semibold mb-2">🔹 Sales</div>
                <div className="text-slate-300">Lead capture, CRM automation, follow-ups</div>
              </div>
              <div className="text-center">
                <div className="text-green-400 font-semibold mb-2">🔹 Operations</div>
                <div className="text-slate-300">Scheduling, routing, and internal handoffs</div>
              </div>
              <div className="text-center">
                <div className="text-green-400 font-semibold mb-2">🔹 Admin</div>
                <div className="text-slate-300">Invoicing, onboarding, and follow-through</div>
              </div>
            </div>
            <div className="text-center mt-6">
              <Link 
                href="/what-we-offer" 
                className="text-green-400 hover:text-green-300 transition-colors font-medium"
              >
                Explore Our Other Solutions →
              </Link>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-green-600/20 via-green-500/10 to-emerald-600/20 border border-green-500/30 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Still handling customer support on your own?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Let us set up your first automation—so you can be responsive *without* being reactive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Talk to Us →
                </Link>
                <Link 
                  href="/what-we-offer" 
                  className="px-8 py-3 border border-green-500/30 text-green-400 rounded-lg hover:bg-green-500/10 transition-colors font-medium"
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
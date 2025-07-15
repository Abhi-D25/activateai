'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ChartBarIcon, 
  UserGroupIcon, 
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  StarIcon,
  ArrowRightIcon,
  ClockIcon,
  DocumentTextIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

export default function SalesPage() {
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
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to What We Offer
            </Link>
          </motion.div>

          <div className="max-w-4xl mx-auto text-center mb-16">
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
              className="text-xl text-slate-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              No more missed leads. No more manual follow-ups. Just the space to actually sell.
            </motion.p>
            <motion.p 
              className="text-lg text-slate-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              You&apos;re still the one chasing leads, following up with prospects, and wondering if that deal is going to close.
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

          {/* Intro Blurb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <p className="text-lg text-slate-300 mb-6">
              You need follow-ups that happen, leads that don&apos;t slip, and time to focus on the conversations that matter.
            </p>
            <p className="text-lg text-slate-300 mb-6">
              We help make your sales flow seamless—from intake to qualification, CRM updates to follow-ups.
            </p>
            <p className="text-lg text-slate-300 mb-8">
              Always-on, always accurate, and always built around the way you already work.
            </p>
            <div className="bg-gradient-to-r from-yellow-600/20 to-amber-600/20 border border-yellow-500/30 rounded-lg p-6">
              <p className="text-yellow-300 italic">
                &quot;Some of these are simple automations. Some use AI. We start where you are.&quot;
              </p>
            </div>
          </motion.div>

          {/* Sales Automation Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">🧩 Our Sales Automation Pillars</h2>
              <h3 className="text-2xl font-semibold text-yellow-400 mb-6">🌊 Seamless Sales, Start to Finish</h3>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Leads shouldn&apos;t feel like a scramble. They should flow—intake to qualification, CRM to follow-up—without the stress, without the gaps.
              </p>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto mt-4">
                That&apos;s what we help you build: a system that moves every lead forward, automatically.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Lead Intake */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="bg-gradient-to-br from-yellow-600/10 via-yellow-500/5 to-amber-600/10 border border-yellow-500/20 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-yellow-500/20 rounded-lg mr-4">
                    <PhoneIcon className="h-6 w-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">🔹 Lead Intake</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  Capture every inquiry and route it instantly—whether it comes through a form, DMs, email, or missed call.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-yellow-400 mr-2" />
                    Instant rep alert (SMS/email) when a form is submitted
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-yellow-400 mr-2" />
                    Missed call → auto-text with booking link
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-yellow-400 mr-2" />
                    IG DM → Airtable or CRM sync
                  </li>
                </ul>
              </motion.div>

              {/* Qualification */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="bg-gradient-to-br from-yellow-600/10 via-yellow-500/5 to-amber-600/10 border border-yellow-500/20 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-yellow-500/20 rounded-lg mr-4">
                    <CpuChipIcon className="h-6 w-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">🔹 Qualification</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  Get the right info without chasing. Use smart forms or AI chat to segment leads, score fit, and route them.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-yellow-400 mr-2" />
                    AI-driven lead forms that ask the next best question
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-yellow-400 mr-2" />
                    Auto-segment leads by urgency, size, or service type
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-yellow-400 mr-2" />
                    Route qualified leads to the right person or pipeline
                  </li>
                </ul>
              </motion.div>

              {/* CRM Automation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="bg-gradient-to-br from-yellow-600/10 via-yellow-500/5 to-amber-600/10 border border-yellow-500/20 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-yellow-500/20 rounded-lg mr-4">
                    <DocumentTextIcon className="h-6 w-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">🔹 CRM Automation & Intelligence</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  Keep your CRM clean and updated—without rep input or hours of admin.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-yellow-400 mr-2" />
                    New leads → auto-logged in CRM
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-yellow-400 mr-2" />
                    Booking → updates lead stage
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-yellow-400 mr-2" />
                    Email/DM → summarized and stored under contact
                  </li>
                </ul>
              </motion.div>

              {/* Engagement & Revival */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="bg-gradient-to-br from-yellow-600/10 via-yellow-500/5 to-amber-600/10 border border-yellow-500/20 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-yellow-500/20 rounded-lg mr-4">
                    <ChatBubbleLeftRightIcon className="h-6 w-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">🔹 Engagement & Revival</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  Nurture leads with personalized content—without burning out your team.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-yellow-400 mr-2" />
                    3/7/14-day follow-up sequences
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-yellow-400 mr-2" />
                    &quot;Haven&apos;t heard from you&quot; nudges
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircleIcon className="h-4 w-4 text-yellow-400 mr-2" />
                    Automated calendar re-engagement flows
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Why It Works Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="bg-gradient-to-br from-yellow-600/10 via-yellow-500/5 to-amber-600/10 border border-yellow-500/20 rounded-xl p-8 mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">✅ Why It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">32%</div>
                <div className="text-slate-300">more demos booked</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">5-7</div>
                <div className="text-slate-300">hours saved per week, per rep</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">Fewer</div>
                <div className="text-slate-300">missed leads, more qualified conversations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">No</div>
                <div className="text-slate-300">new apps, no extra training required</div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-slate-300">
                We work with the tools you already use—like Google Forms, Calendly, Typeform, Airtable, and most CRMs.
              </p>
              <p className="text-slate-300 mt-2">
                You keep your systems. We make them smarter.
              </p>
            </div>
          </motion.div>

          {/* Case Snapshot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="bg-gradient-to-br from-yellow-600/20 via-yellow-500/10 to-amber-600/20 border border-yellow-500/30 rounded-xl p-8 mb-16"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-6">💬 Mini Case Snapshot</h3>
              <div className="bg-yellow-600/10 border border-yellow-500/20 rounded-lg p-6">
                <blockquote className="text-lg text-slate-300 mb-4 italic">
                  &quot;I used to spend hours every week following up with leads. Now our system does it automatically, and I&apos;m closing 40% more deals.&quot;
                </blockquote>
                <div className="text-yellow-400 font-medium">
                  — Sales Director, Tech Startup
                </div>
              </div>
            </div>
          </motion.div>

          {/* Explore More Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">🔄 Explore More Solutions</h3>
            <p className="text-slate-300 text-center mb-8">Looking to automate beyond Sales?</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/what-we-offer/operations" className="group">
                <div className="bg-gradient-to-br from-blue-600/10 via-blue-500/5 to-cyan-600/10 border border-blue-500/20 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-lg mb-4 mx-auto">
                    <CpuChipIcon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 text-center">🔹 Operations</h4>
                  <p className="text-slate-300 text-center">Scheduling, routing, and internal handoffs</p>
                </div>
              </Link>
              <Link href="/what-we-offer/admin" className="group">
                <div className="bg-gradient-to-br from-purple-600/10 via-purple-500/5 to-indigo-600/10 border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-lg mb-4 mx-auto">
                    <DocumentTextIcon className="h-6 w-6 text-purple-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 text-center">🔹 Admin</h4>
                  <p className="text-slate-300 text-center">Invoicing, onboarding, and follow-through</p>
                </div>
              </Link>
              <Link href="/what-we-offer/support" className="group">
                <div className="bg-gradient-to-br from-green-600/10 via-green-500/5 to-emerald-600/10 border border-green-500/20 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg mb-4 mx-auto">
                    <ChatBubbleLeftRightIcon className="h-6 w-6 text-green-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 text-center">🔹 Support</h4>
                  <p className="text-slate-300 text-center">FAQ replies, ticket triage, and customer messaging</p>
                </div>
              </Link>
            </div>
            <div className="text-center mt-6">
              <Link 
                href="/what-we-offer" 
                className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                <span className="mr-2">Explore Our Other Solutions</span>
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-yellow-600/20 via-yellow-500/10 to-amber-600/20 border border-yellow-500/30 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to close more deals?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Let&apos;s set up your first automation—so you can focus on what you do best: selling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors font-medium"
                >
                  Talk to Us
                </Link>
                <Link 
                  href="/what-we-offer" 
                  className="px-8 py-3 border border-yellow-500/30 text-yellow-400 rounded-lg hover:bg-yellow-500/10 transition-colors font-medium"
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
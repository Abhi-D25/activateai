'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ChartBarIcon, 
  CogIcon, 
  ClipboardDocumentListIcon, 
  ChatBubbleLeftRightIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline';

export default function WhatWeOfferPage() {
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
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              What We Offer
            </motion.h1>
            <motion.p 
              className="text-xl text-slate-300 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Discover our comprehensive AI solutions designed to transform every aspect of your business operations. 
              Choose a category to explore how we can help you work smarter, not harder.
            </motion.p>
          </div>

          {/* Service Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Sales Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="group"
            >
              <Link href="/what-we-offer/sales">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-600/20 via-yellow-500/10 to-amber-600/20 border border-yellow-500/30 p-8 hover:border-yellow-400/50 transition-all duration-300 cursor-pointer h-full">
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-yellow-500/50 to-amber-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-center justify-center w-16 h-16 bg-yellow-500/20 rounded-xl mb-6 mx-auto">
                      <ChartBarIcon className="h-8 w-8 text-yellow-400" />
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-4 text-center">Sales</h2>
                    <p className="text-slate-300 mb-6 text-center flex-grow">
                      Transform your sales process with AI-powered lead management, customer engagement, and revenue optimization tools.
                    </p>
                    
                    <div className="text-center mt-auto">
                      <div className="inline-flex items-center text-yellow-400 group-hover:text-yellow-300 transition-colors">
                        <span className="mr-2">Explore Sales Solutions</span>
                        <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    
                    {/* Preview features */}
                    <div className="mt-6 grid grid-cols-2 gap-4 pt-6 border-t border-yellow-500/20">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-yellow-400">Lead Management</div>
                        <div className="text-sm text-slate-400">Smart Follow-ups</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-yellow-400">Revenue Growth</div>
                        <div className="text-sm text-slate-400">Optimized Pipeline</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Operations Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="group"
            >
              <Link href="/what-we-offer/operations">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-cyan-600/20 border border-blue-500/30 p-8 hover:border-blue-400/50 transition-all duration-300 cursor-pointer h-full">
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-blue-500/50 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-xl mb-6 mx-auto">
                      <CogIcon className="h-8 w-8 text-blue-400" />
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-4 text-center">Operations</h2>
                    <p className="text-slate-300 mb-6 text-center flex-grow">
                      Streamline your business operations with intelligent automation, process optimization, and workflow management.
                    </p>
                    
                    <div className="text-center mt-auto">
                      <div className="inline-flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                        <span className="mr-2">Explore Operations Solutions</span>
                        <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    
                    {/* Preview features */}
                    <div className="mt-6 grid grid-cols-2 gap-4 pt-6 border-t border-blue-500/20">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-blue-400">Process Automation</div>
                        <div className="text-sm text-slate-400">Smart Workflows</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-blue-400">Efficiency Boost</div>
                        <div className="text-sm text-slate-400">Time Savings</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Admin Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="group"
            >
              <Link href="/what-we-offer/admin">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600/20 via-purple-500/10 to-indigo-600/20 border border-purple-500/30 p-8 hover:border-purple-400/50 transition-all duration-300 cursor-pointer h-full">
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-purple-500/50 to-indigo-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-xl mb-6 mx-auto">
                      <ClipboardDocumentListIcon className="h-8 w-8 text-purple-400" />
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-4 text-center">Admin</h2>
                    <p className="text-slate-300 mb-6 text-center flex-grow">
                      Automate administrative tasks, manage documentation, and handle routine business processes with AI assistance.
                    </p>
                    
                    <div className="text-center mt-auto">
                      <div className="inline-flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                        <span className="mr-2">Explore Admin Solutions</span>
                        <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    
                    {/* Preview features */}
                    <div className="mt-6 grid grid-cols-2 gap-4 pt-6 border-t border-purple-500/20">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-purple-400">Task Automation</div>
                        <div className="text-sm text-slate-400">Document Management</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-purple-400">Organization</div>
                        <div className="text-sm text-slate-400">Streamlined Processes</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Support Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="group"
            >
              <Link href="/what-we-offer/support">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-600/20 via-green-500/10 to-emerald-600/20 border border-green-500/30 p-8 hover:border-green-400/50 transition-all duration-300 cursor-pointer h-full">
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-green-500/50 to-emerald-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-xl mb-6 mx-auto">
                      <ChatBubbleLeftRightIcon className="h-8 w-8 text-green-400" />
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-4 text-center">Support</h2>
                    <p className="text-slate-300 mb-6 text-center flex-grow">
                      Provide exceptional customer support with AI-powered assistance, 24/7 availability, and intelligent issue resolution.
                    </p>
                    
                    <div className="text-center mt-auto">
                      <div className="inline-flex items-center text-green-400 group-hover:text-green-300 transition-colors">
                        <span className="mr-2">Explore Support Solutions</span>
                        <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    
                    {/* Preview features */}
                    <div className="mt-6 grid grid-cols-2 gap-4 pt-6 border-t border-green-500/20">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-green-400">24/7 Support</div>
                        <div className="text-sm text-slate-400">Always Available</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-green-400">Smart Resolution</div>
                        <div className="text-sm text-slate-400">Quick Solutions</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Additional info section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center mt-16"
          >
            <p className="text-slate-400 max-w-2xl mx-auto">
              Each category offers specialized AI solutions designed to address specific business challenges. 
              Explore the areas that matter most to your business growth and efficiency goals.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
} 
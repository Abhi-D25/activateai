'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { UserIcon, BuildingOfficeIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function CaseStudiesPage() {
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
              Example Scenarios
            </motion.h1>
            <motion.p 
              className="text-xl text-slate-300 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              These are illustrative examples of the kinds of problems we fix, not real client stories.
            </motion.p>
            <motion.p 
              className="text-lg text-slate-400 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Choose your business type to explore relevant scenarios.
            </motion.p>
          </div>

          {/* Business Type Selection Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Solo-preneur Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="group"
            >
              <Link href="/case-studies/solo-preneur">
                <div className="relative overflow-hidden rounded-2xl bg-slate-900/50 border border-slate-800 p-8 hover:border-blue-500/30 transition-all duration-300 cursor-pointer">
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-xl mb-6 mx-auto">
                      <UserIcon className="h-8 w-8 text-blue-400" />
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-4 text-center">Solo-preneurs</h2>
                    <p className="text-slate-300 mb-6 text-center">
                      Individual business owners, freelancers, and solo entrepreneurs who want to scale their one-person operations with AI assistance.
                    </p>
                    
                    <div className="text-center">
                      <div className="inline-flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                        <span className="mr-2">View Solo-preneur Examples</span>
                        <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    
                    {/* How we help */}
                    <div className="mt-6 grid grid-cols-2 gap-4 pt-6 border-t border-slate-800">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-blue-400">Find</div>
                        <div className="text-sm text-slate-400">The gaps</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-blue-400">Fix</div>
                        <div className="text-sm text-slate-400">The leaks</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Growing Business Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="group"
            >
              <Link href="/case-studies/growing-business">
                <div className="relative overflow-hidden rounded-2xl bg-slate-900/50 border border-slate-800 p-8 hover:border-blue-500/30 transition-all duration-300 cursor-pointer">
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-xl mb-6 mx-auto">
                      <BuildingOfficeIcon className="h-8 w-8 text-blue-400" />
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-4 text-center">Growing Businesses</h2>
                    <p className="text-slate-300 mb-6 text-center">
                      Small to medium businesses with teams who need to scale operations, improve efficiency, and manage growth challenges.
                    </p>
                    
                    <div className="text-center">
                      <div className="inline-flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                        <span className="mr-2">View Growing Business Examples</span>
                        <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    
                    {/* How we help */}
                    <div className="mt-6 grid grid-cols-2 gap-4 pt-6 border-t border-slate-800">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-blue-400">Scale</div>
                        <div className="text-sm text-slate-400">Operations</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-blue-400">Free</div>
                        <div className="text-sm text-slate-400">Your team</div>
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
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mt-16"
          >
            <p className="text-slate-400 max-w-2xl mx-auto">
              Not sure which category fits your business? Both sections contain valuable insights that can apply to any business size. 
              Start with the one that feels most relevant to your current situation.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
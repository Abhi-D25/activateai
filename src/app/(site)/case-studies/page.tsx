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
              Who We Serve
            </motion.h1>
            <motion.p 
              className="text-xl text-slate-300 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Discover how businesses like yours have transformed their operations with AI. 
              Choose your business type to see relevant success stories.
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
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-purple-600/20 border border-blue-500/30 p-8 hover:border-blue-400/50 transition-all duration-300 cursor-pointer">
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-blue-500/50 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-xl mb-6 mx-auto">
                      <UserIcon className="h-8 w-8 text-blue-400" />
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-4 text-center">Solo-preneurs</h2>
                    <p className="text-slate-300 mb-6 text-center">
                      Individual business owners, freelancers, and solo entrepreneurs who want to scale their one-person operations with AI assistance.
                    </p>
                    
                    <div className="text-center">
                      <div className="inline-flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                        <span className="mr-2">View Solo-preneur Stories</span>
                        <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    
                    {/* Preview metrics */}
                    <div className="mt-6 grid grid-cols-2 gap-4 pt-6 border-t border-blue-500/20">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-blue-400">2-5x</div>
                        <div className="text-sm text-slate-400">Revenue Growth</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-blue-400">15+ hrs</div>
                        <div className="text-sm text-slate-400">Saved Weekly</div>
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
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-600/20 via-green-500/10 to-emerald-600/20 border border-green-500/30 p-8 hover:border-green-400/50 transition-all duration-300 cursor-pointer">
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-green-500/50 to-emerald-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-xl mb-6 mx-auto">
                      <BuildingOfficeIcon className="h-8 w-8 text-green-400" />
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-4 text-center">Growing Businesses</h2>
                    <p className="text-slate-300 mb-6 text-center">
                      Small to medium businesses with teams who need to scale operations, improve efficiency, and manage growth challenges.
                    </p>
                    
                    <div className="text-center">
                      <div className="inline-flex items-center text-green-400 group-hover:text-green-300 transition-colors">
                        <span className="mr-2">View Growing Business Stories</span>
                        <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    
                    {/* Preview metrics */}
                    <div className="mt-6 grid grid-cols-2 gap-4 pt-6 border-t border-green-500/20">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-green-400">40%</div>
                        <div className="text-sm text-slate-400">Efficiency Gain</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-green-400">$50K+</div>
                        <div className="text-sm text-slate-400">Annual Savings</div>
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
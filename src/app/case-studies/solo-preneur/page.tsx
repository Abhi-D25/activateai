'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import FuturisticText from '../../components/FuturisticText';

export default function SoloPreneurPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-50" />
        <div className="container relative z-10 mx-auto px-4 py-32 lg:py-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center"
          >
            {/* Left Content - 60% */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <FuturisticText
                  text="Focus on your craft, not your calendar"
                  className="text-4xl lg:text-5xl font-bold text-white mb-6"
                  glowColor="#60a5fa"
                />
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-slate-300 mb-6"
              >
                Whether you&apos;re perfecting individual sessions or energizing group classes, your talent deserves your full attention. Not split between serving clients and managing the endless details that make it possible.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-slate-300 mb-8"
              >
                You&apos;ve mastered your expertise. Now master your time.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Link href="/contact" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center">
                  Free up my focus
                </Link>
                <Link href="/contact" className="px-8 py-3 border-2 border-blue-600 text-blue-400 rounded-lg hover:bg-blue-900/20 transition-colors text-center">
                  Start the conversation
                </Link>
              </motion.div>
            </div>
            {/* Right Content - 40% */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="aspect-video bg-gray-900/50 rounded-lg backdrop-blur-sm border border-gray-700/50">
                {/* Video Placeholder */}
                <div className="w-full h-full flex items-center justify-center text-gray-400 p-4 text-center">
                  <div>
                    <div className="text-2xl mb-2">🎥</div>
                    <div className="text-sm">HERO VIDEO: Montage of solo entrepreneurs focused on their craft while AI handles operations seamlessly</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <FuturisticText
              text="You&apos;re the Expert, the Scheduler, the Follow-up Team, and Everything In Between"
              className="text-3xl font-bold text-white mb-6"
              glowColor="#ef4444"
            />
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              As a solo entrepreneur, you wear every hat in your business. But some of those hats are keeping you from wearing the one that matters most—the expert delivering exceptional results.
            </p>
          </motion.div>

          {/* Pain Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-red-500/30"
            >
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Constant interruptions</h3>
              <p className="text-slate-300">Phone calls during client sessions, text messages while teaching a class—your focus gets fractured just when your clients need you most.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-slate-800/50 p-6 rounded-xl border border-green-500/30 md:col-span-2 lg:col-span-1"
            >
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-4 text-white">Multiple Revenue Streams</h3>
              <p className="text-slate-300">
                Launch online courses, create product lines, develop franchise opportunities. Growth ideas that seemed impossible suddenly become your next quarter&apos;s goals.
              </p>
            </motion.div>
          </div>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center"
          >
            <FuturisticText
              text="Go build your empire."
              className="text-4xl lg:text-5xl font-bold text-blue-400"
              glowColor="#60a5fa"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <FuturisticText
              text="Ready to focus on your craft?"
              className="text-3xl font-bold text-white mb-6"
              glowColor="#60a5fa"
            />
            <p className="text-xl text-slate-300 mb-8">
              Let your AI concierge team handle the operations while you do what you do best.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 text-lg rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Start Your Transformation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
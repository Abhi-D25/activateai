'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon, CalendarDaysIcon, ChatBubbleLeftRightIcon, CheckIcon } from '@heroicons/react/24/outline';

const ProofVisual = () => (
  <div className="relative">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-3xl blur-3xl" />
    
    <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-800 p-6 shadow-2xl">
      <div className="space-y-4">
        <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
          <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
            <PhoneIcon className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <p className="text-white font-medium">Today&apos;s Activity</p>
            <p className="text-slate-400 text-sm">Real-time updates</p>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-3 bg-blue-500/10 rounded-lg p-3 border border-blue-500/20"
        >
          <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <CheckIcon className="w-4 h-4 text-blue-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium truncate">Missed call answered</p>
            <p className="text-slate-400 text-xs">Sarah J. got a callback</p>
          </div>
          <span className="text-blue-400 text-xs">2m ago</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-3 bg-slate-800/50 rounded-lg p-3 border border-slate-700/50"
        >
          <div className="w-8 h-8 bg-slate-700/50 rounded-lg flex items-center justify-center flex-shrink-0">
            <ChatBubbleLeftRightIcon className="w-4 h-4 text-slate-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium truncate">Follow-up sent</p>
            <p className="text-slate-400 text-xs">Mike D. reminded about quote</p>
          </div>
          <span className="text-slate-500 text-xs">15m ago</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-3 bg-slate-800/50 rounded-lg p-3 border border-slate-700/50"
        >
          <div className="w-8 h-8 bg-slate-700/50 rounded-lg flex items-center justify-center flex-shrink-0">
            <CalendarDaysIcon className="w-4 h-4 text-slate-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium truncate">Tuesday 10am booked</p>
            <p className="text-slate-400 text-xs">James W. confirmed</p>
          </div>
          <span className="text-slate-500 text-xs">1h ago</span>
        </motion.div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-slate-800">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-white">12</p>
            <p className="text-slate-400 text-xs">leads saved today</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-blue-400">$2,400</p>
            <p className="text-slate-400 text-xs">potential revenue</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-950" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              <span className="text-blue-400">Stop money leaking</span>{' '}
              through missed calls and cold leads.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed"
            >
              We check your tech, find the gaps, and fix what costs you.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://calendar.app.google/mzfrpoUiWW9UFvzp6"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 text-center font-semibold shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30"
              >
                Book Free Checkup
              </a>
              <Link
                href="/pricing"
                className="px-8 py-4 bg-slate-800 border border-slate-700 text-white rounded-xl hover:bg-slate-700 hover:border-slate-600 transition-all duration-300 text-center font-semibold"
              >
                See What&apos;s Included
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 text-slate-500 text-sm"
            >
              We find where money&apos;s leaking. Free technical checkup, no strings.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block"
          >
            <ProofVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

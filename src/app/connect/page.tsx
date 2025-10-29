'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ParticleBackground from '../components/ParticleBackground';
import PageTransition from '../components/PageTransition';
import { 
  ArrowRightIcon,
  CalendarDaysIcon,
  SparklesIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

export default function Connect() {
  return (
    <PageTransition variant="fade">
      <div className="bg-black min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0 gradient-bg opacity-50" />
          <ParticleBackground />
          <div className="container relative z-10 mx-auto px-4 py-8 md:py-12 lg:py-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              {/* Header */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                  Let's Connect
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-slate-300 mb-12 px-4"
              >
                This is the start of your next chapter towards business success.
              </motion.p>

              {/* Two Option Containers */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
              >
                {/* Option 1: Visit ActivateAI */}
                <motion.div 
                  className="group relative"
                  whileHover={{ 
                    y: -8,
                    scale: 1.02
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 md:p-10 h-full hover:bg-blue-900/40 transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-blue-600/20 rounded-full border border-blue-500/30">
                        <RocketLaunchIcon className="w-8 h-8 text-blue-400" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
                      Visit ActivateAI
                    </h2>
                    
                    {/* Description */}
                    <p className="text-slate-300 text-center mb-6 text-lg">
                      Explore our full website and discover how we can transform your business operations. 
                    </p>
                    
                    {/* Benefits List */}
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center space-x-3">
                        <SparklesIcon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <span className="text-slate-300">Real client success stories</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <SparklesIcon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <span className="text-slate-300">Detailed service breakdowns</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <SparklesIcon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <span className="text-slate-300">Interactive scoping quiz</span>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <Link 
                      href="/"
                      className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg flex items-center justify-center space-x-2 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                    >
                      <span>Explore Website</span>
                      <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>

                {/* Option 2: Book Info Session */}
                <motion.div 
                  className="group relative"
                  whileHover={{ 
                    y: -8,
                    scale: 1.02
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-green-900/30 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 md:p-10 h-full hover:bg-green-900/40 transition-all duration-300 shadow-[0_0_30px_rgba(34,197,94,0.2)] hover:shadow-[0_0_40px_rgba(34,197,94,0.3)]">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-green-600/20 rounded-full border border-green-500/30">
                        <CalendarDaysIcon className="w-8 h-8 text-green-400" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
                      Book Info Session
                    </h2>
                    
                    {/* Description */}
                    <p className="text-slate-300 text-center mb-6 text-lg">
                      Schedule a personalized consultation with Abhi to discuss your specific technical needs.
                    </p>
                    
                    {/* Benefits List */}
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center space-x-3">
                        <SparklesIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300">Personalized strategy</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <SparklesIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300">Custom implementation plan</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <SparklesIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300">Direct access to Founder</span>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <a 
                      href="https://calendar.app.google/cdb8imp4GAqRnWQT8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-green-600 text-white px-6 py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg flex items-center justify-center space-x-2 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                    >
                      <span>Schedule Now</span>
                      <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              </motion.div>

              {/* Additional Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-16 text-center"
              >
                <p className="text-slate-400 text-sm">
                  Both options are completely free with no commitment required
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ActivationsPage() {
  // Add state to detect mobile
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if we're on client side
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      // Initial check
      checkMobile();
      
      // Set up listener
      window.addEventListener('resize', checkMobile);
      
      // Clean up
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  // Simplified animations for mobile
  const pageTransition = isMobile 
    ? { duration: 0.4, ease: "easeOut" }  // Faster, simpler animation on mobile
    : { duration: 0.8, ease: "easeOut" }; // Original animation on desktop
    
  const titleTransition = isMobile
    ? { duration: 0.3, delay: 0.1 }       // Faster animation, less delay on mobile
    : { duration: 0.6, delay: 0.2 };      // Original animation on desktop
    
  const descTransition = isMobile
    ? { duration: 0.3, delay: 0.2 }       // Faster animation, less delay on mobile
    : { duration: 0.6, delay: 0.4 };      // Original animation on desktop

  return (
    <div className="bg-black min-h-screen">
      <section className="py-24">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative"
          initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={pageTransition}
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={titleTransition}
            >
              Meet Your Dedicated Business Team
            </motion.h1>
            <motion.p 
              className="text-xl text-slate-300"
              initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={descTransition}
            >
              Each role works as an extension of your brand, providing deeply personalized customer care across every engagement channel—your always-on concierge for daily customer affairs.
            </motion.p>
          </div>

          <div className="relative">
            {/* Simplified or removed glow effects on mobile */}
            {!isMobile && (
              <>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-blue-500/50 to-purple-500 rounded-[28px] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-blue-500/50 to-purple-500 rounded-[28px] blur opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              </>
            )}
            
            {/* Main container with simpler styling on mobile */}
            <div className={`relative ${isMobile ? 'bg-slate-900/90' : 'bg-slate-900/80 backdrop-blur-xl'} rounded-3xl p-8 ${!isMobile ? 'border border-blue-500/30 shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]' : ''}`}>
              {/* First row - 3 cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700/50"
                >
                  <div className="text-3xl mb-4">👔</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Lead Manager</h3>
                  <p className="text-slate-300 mb-4">Your dedicated first touchpoint across all channels—phone, text, social media.</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center text-slate-300">
                      <span className="text-green-500 mr-2">✓</span>
                      Consistent brand voice
                    </li>
                    <li className="flex items-center text-slate-300">
                      <span className="text-green-500 mr-2">✓</span>
                      Deeply personalized conversations
                    </li>
                    <li className="flex items-center text-slate-300">
                      <span className="text-green-500 mr-2">✓</span>
                      Always-on availability
                    </li>
                  </ul>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700/50"
                >
                  <div className="text-3xl mb-4">📅</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Scheduling Specialist</h3>
                  <p className="text-slate-300 mb-4">Manages your calendar, appointments, and ensures optimal booking efficiency.</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center text-slate-300">
                      <span className="text-green-500 mr-2">✓</span>
                      Smart scheduling optimization
                    </li>
                    <li className="flex items-center text-slate-300">
                      <span className="text-green-500 mr-2">✓</span>
                      Automated follow-ups
                    </li>
                    <li className="flex items-center text-slate-300">
                      <span className="text-green-500 mr-2">✓</span>
                      Calendar management
                    </li>
                  </ul>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700/50"
                >
                  <div className="text-3xl mb-4">💬</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Customer Success Manager</h3>
                  <p className="text-slate-300 mb-4">Ensures customer satisfaction and builds lasting relationships.</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center text-slate-300">
                      <span className="text-green-500 mr-2">✓</span>
                      Proactive customer care
                    </li>
                    <li className="flex items-center text-slate-300">
                      <span className="text-green-500 mr-2">✓</span>
                      Feedback collection
                    </li>
                    <li className="flex items-center text-slate-300">
                      <span className="text-green-500 mr-2">✓</span>
                      Loyalty building
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* Second row - 2 cards centered */}
              <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
                <div className="lg:col-start-2 lg:col-span-2">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700/50"
                  >
                    <div className="text-3xl mb-4">📊</div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Business Analyst</h3>
                    <p className="text-slate-300 mb-4">Provides insights and optimizations for your business growth.</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center text-slate-300">
                        <span className="text-green-500 mr-2">✓</span>
                        Performance tracking
                      </li>
                      <li className="flex items-center text-slate-300">
                        <span className="text-green-500 mr-2">✓</span>
                        Growth opportunities
                      </li>
                      <li className="flex items-center text-slate-300">
                        <span className="text-green-500 mr-2">✓</span>
                        Weekly reports
                      </li>
                    </ul>
                  </motion.div>
                </div>

                <div className="lg:col-span-2">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700/50"
                  >
                    <div className="text-3xl mb-4">🎯</div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Command Center</h3>
                    <p className="text-slate-300 mb-4">Your executive assistant to ensure seamless operation.</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center text-slate-300">
                        <span className="text-green-500 mr-2">✓</span>
                        Strategic business insights
                      </li>
                      <li className="flex items-center text-slate-300">
                        <span className="text-green-500 mr-2">✓</span>
                        Coordinates your entire team
                      </li>
                      <li className="flex items-center text-slate-300">
                        <span className="text-green-500 mr-2">✓</span>
                        Elevates decision-making
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Real Results Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Real Results for Everyday Businesses
            </h2>
            <p className="text-xl text-slate-300 mb-12 text-center max-w-3xl mx-auto">
              See the specific, measurable outcomes businesses like yours achieve with ActivateAI.
            </p>
            {/* Case Studies */}
            <div className="space-y-16">
              {/* Case Study 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="aspect-video bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700/50"
                >
                  {/* Image Placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    [Barber with client image]
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-white">Clean Cut Barber Shop</h3>
                  <div className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-semibold mb-4 text-white">Before ActivateAI:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center text-slate-300">
                          <span className="text-red-500 mr-2">❌</span>
                          Missing 5-7 calls per day after hours
                        </li>
                        <li className="flex items-center text-slate-300">
                          <span className="text-red-500 mr-2">❌</span>
                          Spending 2 hours daily on scheduling
                        </li>
                        <li className="flex items-center text-slate-300">
                          <span className="text-red-500 mr-2">❌</span>
                          Only 3 new reviews per month
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4 text-white">After ActivateAI:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center text-slate-300">
                          <span className="text-green-500 mr-2">✓</span>
                          100% of after-hours calls captured
                        </li>
                        <li className="flex items-center text-slate-300">
                          <span className="text-green-500 mr-2">✓</span>
                          15 hours per week saved on admin
                        </li>
                        <li className="flex items-center text-slate-300">
                          <span className="text-green-500 mr-2">✓</span>
                          12 new 5-star reviews per month
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="bg-blue-900/30 p-4 rounded-lg text-center border border-blue-500/20"
                    >
                      <div className="text-2xl font-bold text-blue-400">23%</div>
                      <div className="text-blue-300">Increase in Bookings</div>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="bg-blue-900/30 p-4 rounded-lg text-center border border-blue-500/20"
                    >
                      <div className="text-2xl font-bold text-blue-400">15</div>
                      <div className="text-blue-300">Hours Saved Weekly</div>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="bg-blue-900/30 p-4 rounded-lg text-center border border-blue-500/20"
                    >
                      <div className="text-2xl font-bold text-blue-400">$2,400</div>
                      <div className="text-blue-300">Additional Monthly Revenue</div>
                    </motion.div>
                  </div>
                  <motion.blockquote 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="italic text-slate-300 border-l-4 border-blue-500 pl-4"
                  >
                    &quot;Having my dedicated business concierge has completely transformed how I operate. Every customer gets the personal attention they deserve, and I finally have time to focus on the strategic decisions that grow my business.&quot;
                    <footer className="mt-2 font-semibold text-white">- James, Owner</footer>
                  </motion.blockquote>
                </motion.div>
              </div>

              {/* Case Study 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-white">Artistic Touch Makeup Studio</h3>
                  <div className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-semibold mb-4 text-white">Before ActivateAI:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center text-slate-300">
                          <span className="text-red-500 mr-2">❌</span>
                          Missing potential clients during sessions
                        </li>
                        <li className="flex items-center text-slate-300">
                          <span className="text-red-500 mr-2">❌</span>
                          Spending evenings on follow-up work
                        </li>
                        <li className="flex items-center text-slate-300">
                          <span className="text-red-500 mr-2">❌</span>
                          Struggling to maintain consistent communication
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4 text-white">After ActivateAI:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center text-slate-300">
                          <span className="text-green-500 mr-2">✓</span>
                          Every inquiry captured and qualified
                        </li>
                        <li className="flex items-center text-slate-300">
                          <span className="text-green-500 mr-2">✓</span>
                          Automated follow-up and review collection
                        </li>
                        <li className="flex items-center text-slate-300">
                          <span className="text-green-500 mr-2">✓</span>
                          Consistent, professional customer experience
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="bg-blue-900/30 p-4 rounded-lg text-center border border-blue-500/20"
                    >
                      <div className="text-2xl font-bold text-blue-400">9</div>
                      <div className="text-blue-300">New Clients in First Month</div>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="bg-blue-900/30 p-4 rounded-lg text-center border border-blue-500/20"
                    >
                      <div className="text-2xl font-bold text-blue-400">100%</div>
                      <div className="text-blue-300">After-Hours Lead Capture</div>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="bg-blue-900/30 p-4 rounded-lg text-center border border-blue-500/20"
                    >
                      <div className="text-2xl font-bold text-blue-400">28</div>
                      <div className="text-blue-300">5-Star Reviews Collected</div>
                    </motion.div>
                  </div>
                  <motion.blockquote 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="italic text-slate-300 border-l-4 border-blue-500 pl-4"
                  >
                    &quot;I was terrified about changing anything in my business—I&apos;ve built systems that work. But ActivateAI didn&apos;t change anything. They just made everything I was already doing work better, without me having to be involved in every single detail.&quot;
                    <footer className="mt-2 font-semibold text-white">- Sarah, Owner</footer>
                  </motion.blockquote>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="aspect-video bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700/50"
                >
                  {/* Image Placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    [Makeup artist with client image]
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
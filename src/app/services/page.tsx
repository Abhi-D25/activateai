'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ActivationsPage() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  const pageTransition = isMobile 
    ? { duration: 0.4, ease: "easeOut" }
    : { duration: 0.8, ease: "easeOut" };

  return (
    <div className="bg-black min-h-screen">
      <section className="py-24">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative"
          initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={pageTransition}
        >
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The Journey to Smarter Business
            </motion.h1>
            <motion.p 
              className="text-xl text-slate-300"
              initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={pageTransition}
            >
              We&apos;re not here to just automate a few tasks. We partner with you to future-proof your business—on your terms.
            </motion.p>
            
            <motion.div 
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg p-6 mb-8 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-lg text-slate-300 mb-4">
                Whether or not you choose AI today, you&apos;ll be ready when it matters.
              </p>
              <motion.div 
                className="flex flex-wrap justify-center gap-4 mt-8"
                initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <span className="text-blue-400 font-medium">Start where you are.</span>
                <span className="text-blue-400 font-medium">Build the foundation.</span>
                <span className="text-blue-400 font-medium">Activate when it&apos;s time.</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Three-Step Process */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Step 1: Discover */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-blue-600/10 via-blue-500/5 to-purple-600/10 border border-blue-500/20 rounded-xl p-6"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-2">1. Discover</h3>
                  <p className="text-blue-400 font-semibold">We start by listening</p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-slate-300">
                    No intake forms or audits. Just a conversation to understand how your business actually runs.
                  </p>
                  <div>
                    <h4 className="text-white font-semibold mb-2">We explore:</h4>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li>• What&apos;s eating your time?</li>
                      <li>• Where are things falling through?</li>
                      <li>• What tools do you already use?</li>
                      <li>• What&apos;s been too annoying to fix?</li>
                    </ul>
                  </div>
                  <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/20">
                    <p className="text-slate-300 text-sm italic">
                      &ldquo;I thought our system was fine—until I saw how much it was costing us in little inefficiencies.&rdquo;
                      <footer className="mt-2 font-semibold text-white">- Sarah, Operations Manager</footer>
                    </p>
                  </div>
                  <p className="text-slate-300 text-sm">
                  <span className="text-blue-400 font-semibold">We talk, we observe, and we listen—because every business is different.</span>
                  </p>
                </div>
              </motion.div>

              {/* Step 2: Connect */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-green-600/10 via-green-500/5 to-blue-600/10 border border-green-500/20 rounded-xl p-6"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">🛠</div>
                  <h3 className="text-2xl font-bold text-white mb-2">2. Connect</h3>
                  <p className="text-green-400 font-semibold">Build AI Readiness</p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-slate-300">
                    Before jumping to AI, we build foundational automations that create immediate value.
                  </p>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Smart systems that:</h4>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li className="flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        Route leads so you don&apos;t miss follow-ups
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        Send reminders and updates automatically
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        Keep your systems updated in real-time
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/20">
                    <p className="text-slate-300 text-sm italic">
                      &ldquo;It felt like someone finally organized the chaos for me. I didn&apos;t even know this was possible without changing anything.&rdquo;
                      <footer className="mt-2 font-semibold text-white">- Mike, Business Owner</footer>
                    </p>
                  </div>
                  
                  <p className="text-slate-300 text-sm">
                  <span className="text-green-400 font-semibold">You get time back, mental load off, and a stronger foundation.</span>
                  </p>
                </div>
              </motion.div>

              {/* Step 3: AI Enablement */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-br from-purple-600/10 via-purple-500/5 to-pink-600/10 border border-purple-500/20 rounded-xl p-6"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-2xl font-bold text-white mb-2">3. AI Enablement</h3>
                  <p className="text-purple-400 font-semibold">Layer in intelligence</p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-slate-300">
                    Once workflows are running, we add AI where it makes the biggest difference.
                  </p>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">AI assistants that:</h4>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li className="flex items-center">
                        <span className="text-purple-400 mr-2">✓</span>
                        Qualify leads by tone and urgency
                      </li>
                      <li className="flex items-center">
                        <span className="text-purple-400 mr-2">✓</span>
                        Draft updates in your voice
                      </li>
                      <li className="flex items-center">
                        <span className="text-purple-400 mr-2">✓</span>
                        Flag at-risk clients early
                      </li>
                      <li className="flex items-center">
                        <span className="text-purple-400 mr-2">✓</span>
                        Summarize for faster responses
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/20">
                    <p className="text-slate-300 text-sm italic">
                      &ldquo;It&apos;s like we hired an extra set of hands—but one that never sleeps or forgets.&rdquo;
                      <footer className="mt-2 font-semibold text-white">- Ashwin, Business Manager</footer>
                    </p>
                  </div>
                  
                  <p className="text-slate-300 text-sm">
                    <span className="text-purple-400 font-semibold">You&apos;re still in control—AI just has your back.</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Outcomes Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 text-center"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Where This Leads</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 p-6 rounded-lg">
                <div className="text-4xl mb-4">🎯</div>
                <p className="text-white font-semibold mb-2">AI Benefits Without Lifting a Finger</p>
                <p className="text-slate-300 text-sm">Experience the power of automation without changing how you work</p>
              </div>
              <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 border border-green-500/30 p-6 rounded-lg">
                <div className="text-4xl mb-4">🚀</div>
                <p className="text-white font-semibold mb-2">A Business Built for the Future</p>
                <p className="text-slate-300 text-sm">Systems that scale and adapt as your business grows</p>
              </div>
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 p-6 rounded-lg">
                <div className="text-4xl mb-4">❤️</div>
                <p className="text-white font-semibold mb-2">More Time for What You Love</p>
                <p className="text-slate-300 text-sm">Focus on the work that energizes you, not the tasks that drain you</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Real Results Section - Keep existing implementation */}
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
                  className="aspect-video bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700/50 overflow-hidden"
                >
                  <img 
                    src="/barber-client.jpg" 
                    alt="Barber with client" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-white">Clean Cut Barber Shop</h3>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold mb-3 text-white">Before:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center text-slate-300">
                          <span className="text-red-500 mr-2">❌</span>
                          Missing 5-7 calls daily
                        </li>
                        <li className="flex items-center text-slate-300">
                          <span className="text-red-500 mr-2">❌</span>
                          2 hours daily on scheduling
                        </li>
                        <li className="flex items-center text-slate-300">
                          <span className="text-red-500 mr-2">❌</span>
                          3 reviews per month
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-white">After:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center text-slate-300">
                          <span className="text-green-500 mr-2">✓</span>
                          100% call capture
                        </li>
                        <li className="flex items-center text-slate-300">
                          <span className="text-green-500 mr-2">✓</span>
                          15 hours saved weekly
                        </li>
                        <li className="flex items-center text-slate-300">
                          <span className="text-green-500 mr-2">✓</span>
                          12 reviews monthly
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-900/30 p-4 rounded-lg text-center border border-blue-500/20">
                      <div className="text-xl font-bold text-blue-400">23%</div>
                      <div className="text-blue-300 text-sm">More Bookings</div>
                    </div>
                    <div className="bg-blue-900/30 p-4 rounded-lg text-center border border-blue-500/20">
                      <div className="text-xl font-bold text-blue-400">15</div>
                      <div className="text-blue-300 text-sm">Hours Saved</div>
                    </div>
                    <div className="bg-blue-900/30 p-4 rounded-lg text-center border border-blue-500/20">
                      <div className="text-xl font-bold text-blue-400">$2.4k</div>
                      <div className="text-blue-300 text-sm">Extra Revenue</div>
                    </div>
                  </div>
                  <blockquote className="italic text-slate-300 border-l-4 border-blue-500 pl-4 text-sm">
                    &ldquo;Having my dedicated business concierge has completely transformed how I operate. Every customer gets personal attention, and I have time to focus on what I love.&rdquo;
                    <footer className="mt-2 font-semibold text-white">- James, Barber</footer>
                  </blockquote>
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
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold mb-3 text-white">Before:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center text-slate-300">
                          <span className="text-red-500 mr-2">❌</span>
                          Missing clients during sessions
                        </li>
                        <li className="flex items-center text-slate-300">
                          <span className="text-red-500 mr-2">❌</span>
                          Evening follow-up work
                        </li>
                        <li className="flex items-center text-slate-300">
                          <span className="text-red-500 mr-2">❌</span>
                          Inconsistent communication
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-white">After:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center text-slate-300">
                          <span className="text-green-500 mr-2">✓</span>
                          Every inquiry captured
                        </li>
                        <li className="flex items-center text-slate-300">
                          <span className="text-green-500 mr-2">✓</span>
                          Automated follow-ups
                        </li>
                        <li className="flex items-center text-slate-300">
                          <span className="text-green-500 mr-2">✓</span>
                          Professional experience
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-900/30 p-4 rounded-lg text-center border border-blue-500/20">
                      <div className="text-xl font-bold text-blue-400">9</div>
                      <div className="text-blue-300 text-sm">New Clients</div>
                    </div>
                    <div className="bg-blue-900/30 p-4 rounded-lg text-center border border-blue-500/20">
                      <div className="text-xl font-bold text-blue-400">100%</div>
                      <div className="text-blue-300 text-sm">Lead Capture</div>
                    </div>
                    <div className="bg-blue-900/30 p-4 rounded-lg text-center border border-blue-500/20">
                      <div className="text-xl font-bold text-blue-400">28</div>
                      <div className="text-blue-300 text-sm">5-Star Reviews</div>
                    </div>
                  </div>
                  <blockquote className="italic text-slate-300 border-l-4 border-blue-500 pl-4 text-sm">
                    &ldquo;I was terrified about changing anything—I&apos;ve tried systems that made me change my process. But ActivateAI didn&apos;t change anything. They just made everything work better.&rdquo;
                    <footer className="mt-2 font-semibold text-white">- Abby, Owner</footer>
                  </blockquote>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="aspect-video bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700/50 overflow-hidden"
                >
                  <img 
                    src="/makeup-artist-client.jpg" 
                    alt="Makeup artist with client" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Keep existing implementation */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="bg-blue-900/20 backdrop-blur-md rounded-2xl border border-blue-400/30 shadow-2xl shadow-blue-500/10 p-8">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Let your AI concierge team handle the details while you focus on growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
                >
                  Get Started →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
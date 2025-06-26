'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import FuturisticText from '../../components/FuturisticText';

export default function GrowingBusinessPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-50" />
        <div className="container relative z-10 mx-auto px-4 py-32 lg:py-40 mt-20">
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
                  text="Scale your team&apos;s impact, not their workload"
                  className="text-4xl lg:text-5xl font-bold text-white mb-6"
                  glowColor="#2563eb"
                />
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-slate-300 mb-6"
              >
                You&apos;ve built something special—a team that delivers exceptional results and a business model that works. But growth brings complexity, and complexity threatens the very quality that made you successful.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-slate-300 mb-8"
              >
                Your AI concierge team scales your operational excellence without scaling your operational burden.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Link href="/contact" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center">
                  Scale with confidence
                </Link>
                <Link href="/contact" className="px-8 py-3 border-2 border-blue-600 text-blue-400 rounded-lg hover:bg-blue-900/20 transition-colors text-center">
                  Explore the possibilities
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
                    <div className="text-sm">HERO VIDEO: Growing teams collaborating seamlessly while AI handles coordination and client management</div>
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
              text="Growth Shouldn&apos;t Break What Made You Great"
              className="text-3xl font-bold text-white mb-6"
              glowColor="#ef4444"
            />
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              You&apos;ve proven your business model works. But as you scale, the operational challenges multiply faster than your team can handle them.
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
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Scaling bottlenecks</h3>
              <p className="text-slate-300">Your best people spend more time coordinating than creating. Growth slows as complexity increases.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-red-500/30"
            >
              <div className="text-3xl mb-4">🔀</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Communication chaos</h3>
              <p className="text-slate-300">Important details fall through the cracks. Team members work with outdated information. Clients feel the disconnect.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-red-500/30"
            >
              <div className="text-3xl mb-4">⚖️</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Quality consistency challenges</h3>
              <p className="text-slate-300">What works perfectly with your core team becomes inconsistent as you add new members and locations.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-red-500/30"
            >
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Leadership stretched thin</h3>
              <p className="text-slate-300">You&apos;re managing operations instead of leading strategy. Your vision gets lost in daily firefighting.</p>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-slate-400 italic text-center mb-16"
          >
            You&apos;ve built a great business to spend your time managing the chaos that comes with success.
          </motion.p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <FuturisticText
              text="Your AI Operations Team: Scaling Excellence, Not Complexity"
              className="text-3xl font-bold text-white mb-6"
              glowColor="#2563eb"
            />
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              While your competitors struggle with the operational overhead of growth, your AI concierge team ensures every client interaction maintains your signature quality—regardless of scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-8"
            >
              <div className="bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg p-4 mb-6">
                <h3 className="text-2xl font-bold">🔥 Scaling Problems</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Traditional scaling challenges that slow growth and stress teams.
              </p>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">❌</span>
                  <span>Multiple team members handling the same client inquiry</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">❌</span>
                  <span>Scheduling conflicts across teams and locations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">❌</span>
                  <span>Inconsistent communication tone and information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">❌</span>
                  <span>Leadership bottlenecked in operational decisions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">❌</span>
                  <span>Client experience degrading with company growth</span>
                </li>
              </ul>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-8"
            >
              <div className="bg-green-500/20 text-green-400 border border-green-500/30 rounded-lg p-4 mb-6">
                <h3 className="text-2xl font-bold">🚀 Scaling Solutions</h3>
              </div>
              <p className="text-slate-300 mb-6">
                AI-powered coordination that maintains excellence at any scale.
              </p>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>Unified client journey orchestrated across all touchpoints</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>Intelligent resource allocation and conflict prevention</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>Brand voice consistency across all team interactions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>Strategic leaders freed for high-value decisions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>Client experience improving with every new team member</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Concierge Team Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <FuturisticText
              text="Your AI Operations Team in Action"
              className="text-3xl font-bold text-white mb-6"
              glowColor="#2563eb"
            />
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              Five specialized AI team members work seamlessly with your human team to deliver scalable excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Lead Manager Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-slate-800 rounded-xl border border-slate-700 p-6"
            >
              <div className="text-3xl mb-4 text-green-400">🎯</div>
              <h3 className="text-xl font-semibold mb-4 text-white">Lead Orchestrator</h3>
              
              <div className="mb-4">
                <div className="text-blue-400 mb-2">🏢 Multi-Location Coordination:</div>
                <p className="text-slate-300">Intelligently routes inquiries to the right team member at the right location, ensuring optimal resource utilization.</p>
              </div>
              
              <div className="mb-4">
                <div className="text-blue-400 mb-2">📊 Capacity Management:</div>
                <p className="text-slate-300">Monitors team availability across all locations and service lines, preventing bottlenecks before they impact clients.</p>
              </div>
              
              <p className="text-green-400">Every lead is captured, qualified, and directed to your best-positioned team member for maximum conversion.</p>
            </motion.div>

            {/* Scheduling Coordinator Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-800 rounded-xl border border-slate-700 p-6"
            >
              <div className="text-3xl mb-4 text-green-400">🗓️</div>
              <h3 className="text-xl font-semibold mb-4 text-white">Master Scheduler</h3>
              
              <div className="mb-4">
                <div className="text-blue-400 mb-2">🔄 Complex Coordination:</div>
                <p className="text-slate-300">Manages intricate project timelines, team schedules, and client preferences across multiple service offerings simultaneously.</p>
              </div>
              
              <div className="mb-4">
                <div className="text-blue-400 mb-2">⚡ Dynamic Optimization:</div>
                <p className="text-slate-300">Continuously optimizes schedules for efficiency, adjusting for changes, cancellations, and urgent requests in real-time.</p>
              </div>
              
              <p className="text-green-400">Your team&apos;s time is maximized while client needs are seamlessly accommodated.</p>
            </motion.div>

            {/* Customer Liaison Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-slate-800 rounded-xl border border-slate-700 p-6"
            >
              <div className="text-3xl mb-4 text-green-400">👥</div>
              <h3 className="text-xl font-semibold mb-4 text-white">Client Success Director</h3>
              
              <div className="mb-4">
                <div className="text-blue-400 mb-2">🎭 Consistent Brand Voice:</div>
                <p className="text-slate-300">Maintains your company&apos;s communication style and values across all interactions, regardless of which team member is involved.</p>
              </div>
              
              <div className="mb-4">
                <div className="text-blue-400 mb-2">📈 Proactive Engagement:</div>
                <p className="text-slate-300">Anticipates client needs, manages expectations, and ensures smooth handoffs between team members and project phases.</p>
              </div>
              
              <p className="text-green-400">Every client feels like your most important client, regardless of project size or team complexity.</p>
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
                className="bg-slate-800 rounded-xl border border-slate-700 p-6"
              >
                <div className="text-3xl mb-4 text-green-400">⚙️</div>
                <h3 className="text-xl font-semibold mb-4 text-white">Operations Coordinator</h3>
                
                <div className="mb-4">
                  <div className="text-blue-400 mb-2">🔗 Workflow Integration:</div>
                  <p className="text-slate-300">Ensures seamless handoffs between different teams, departments, and project phases without information loss.</p>
                </div>
                
                <div className="mb-4">
                  <div className="text-blue-400 mb-2">📋 Process Enforcement:</div>
                  <p className="text-slate-300">Maintains quality standards and ensures consistent execution of your proven processes across all team members.</p>
                </div>
                
                <p className="text-green-400">Your operational excellence scales without the typical growing pains.</p>
              </motion.div>
            </div>

            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-slate-800 rounded-xl border border-slate-700 p-6"
              >
                <div className="text-3xl mb-4 text-green-400">📊</div>
                <h3 className="text-xl font-semibold mb-4 text-white">Growth Intelligence Analyst</h3>
                
                <div className="mb-4">
                  <div className="text-blue-400 mb-2">📈 Performance Insights:</div>
                  <p className="text-slate-300">Tracks key metrics across teams and locations, identifying trends and opportunities for optimization.</p>
                </div>
                
                <div className="mb-4">
                  <div className="text-blue-400 mb-2">🎯 Strategic Recommendations:</div>
                  <p className="text-slate-300">Provides data-driven insights to guide expansion decisions, resource allocation, and service improvements.</p>
                </div>
                
                <p className="text-green-400">Your leadership team receives the intelligence needed to scale strategically, not just rapidly.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Transformation Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <FuturisticText
              text="What Your Leadership Team Can Focus On Instead"
              className="text-3xl font-bold text-white mb-6"
              glowColor="#2563eb"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🚀',
                title: 'Strategic Expansion',
                description: 'Enter new markets, develop new service lines, and pursue strategic partnerships with confidence that operations will scale smoothly.'
              },
              {
                icon: '💡',
                title: 'Innovation Leadership',
                description: 'Invest time in R&D, competitive analysis, and industry thought leadership instead of managing daily operational fires.'
              },
              {
                icon: '🏗️',
                title: 'Culture & Vision',
                description: 'Focus on building the company culture and long-term vision that will sustain growth beyond the current phase.'
              },
              {
                icon: '🤝',
                title: 'Strategic Partnerships',
                description: 'Develop relationships with key partners, suppliers, and potential acquisition targets that drive long-term value.'
              },
              {
                icon: '💰',
                title: 'Capital Efficiency',
                description: 'Optimize capital allocation across growth initiatives, technology investments, and market opportunities.'
              },
              {
                icon: '🎓',
                title: 'Team Development',
                description: 'Invest in developing your team&apos;s strategic capabilities rather than spending time on operational coordination.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-slate-800 rounded-xl border border-slate-700 p-6"
              >
                <div className="text-3xl mb-4 text-blue-400">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
                <p className="text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="bg-blue-900/20 backdrop-blur-md rounded-2xl border border-blue-400/30 shadow-2xl shadow-blue-500/10 p-8"
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 197, 253, 0.05) 50%, rgba(59, 130, 246, 0.1) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)'
              }}
            >
              <FuturisticText
                text="Ready to scale with excellence?"
                className="text-3xl font-bold text-white mb-6"
                glowColor="#2563eb"
              />
              <p className="text-xl text-slate-300 mb-8">
                Let your AI operations team handle the complexity while your leadership team focuses on what matters most: strategic growth.
              </p>
              <Link 
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-4 text-lg rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Scale Your Excellence
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
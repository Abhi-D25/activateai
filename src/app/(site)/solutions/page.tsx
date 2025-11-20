'use client';

import { motion } from 'framer-motion';
import { BeakerIcon, WindowIcon, ChatBubbleLeftRightIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import PageTransition from '../../components/PageTransition';
import ParticleBackground from '../../components/ParticleBackground';
import InteractiveDemoModal from '@/components/InteractiveDemoModal';
import PortfolioModal from '@/components/PortfolioModal';
import { useState } from 'react';

const demos = [
  {
    id: 'voice-agent',
    title: 'AI Voice Receptionist',
    description: 'Experience a natural conversation with our AI voice agent that can schedule appointments and qualify leads.',
    icon: ChatBubbleLeftRightIcon,
    link: '#',
    gradient: 'from-blue-500 to-cyan-500',
    status: 'Live Demo'
  },
  {
    id: 'website-modernization',
    title: 'Website Modernization',
    description: 'Explore our collection of high-converting, modern websites tailored for various industries.',
    icon: GlobeAltIcon,
    link: '#',
    gradient: 'from-orange-500 to-yellow-500',
    status: 'Live Demo'
  },
  {
    id: 'knowledge-bot',
    title: 'Internal Knowledge Bot',
    description: 'Ask questions about company policies and get instant, accurate answers from your document base.',
    icon: BeakerIcon,
    link: '#',
    gradient: 'from-green-500 to-teal-500',
    status: 'Coming Soon'
  },
  {
    id: 'smart-dashboard',
    title: 'Business Intelligence Dashboard',
    description: 'Interactive dashboard showing real-time business metrics, lead tracking, and conversion analytics.',
    icon: WindowIcon,
    link: '#',
    gradient: 'from-purple-500 to-pink-500',
    status: 'Interactive Mockup'
  }
];

export default function SolutionsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);

  const handleDemoClick = (e: React.MouseEvent, demoId: string, status: string) => {
    e.preventDefault();
    if (status === 'Coming Soon') return;

    if (demoId === 'voice-agent') {
      setSelectedDemo(demoId);
      setIsModalOpen(true);
    } else if (demoId === 'website-modernization') {
      setIsPortfolioModalOpen(true);
    }
  };

  return (
    <>
      <InteractiveDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <PortfolioModal
        isOpen={isPortfolioModalOpen}
        onClose={() => setIsPortfolioModalOpen(false)}
      />

      <PageTransition variant="fade">
        <div className="bg-black min-h-screen pt-24 pb-20">
          <ParticleBackground />

          <div className="container mx-auto px-4 relative z-10">
            {/* Hero Section */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                Our <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-slate-300"
              >
                Experience our solutions firsthand. Try our interactive demos and explore our portfolio.
              </motion.p>
            </div>

            {/* Interactive Demos Section - FIRST */}
            <div className="mb-24">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {demos.map((demo, index) => (
                  <motion.div
                    key={demo.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    whileHover={{ y: -5 }}
                    className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-slate-600 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
                    onClick={(e) => handleDemoClick(e, demo.id, demo.status)}
                  >
                    {/* Gradient Border Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${demo.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                    <div className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${demo.gradient} bg-opacity-10`}>
                          <demo.icon className="w-8 h-8 text-white" />
                        </div>
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${demo.status === 'Live Demo'
                          ? 'border-green-500 text-green-400 bg-green-500/10'
                          : demo.status === 'Interactive Mockup'
                            ? 'border-purple-500 text-purple-400 bg-purple-500/10'
                            : 'border-slate-600 text-slate-400 bg-slate-800'
                          }`}>
                          {demo.status}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {demo.title}
                      </h3>

                      <p className="text-slate-400 mb-8 leading-relaxed">
                        {demo.description}
                      </p>

                      <button
                        onClick={(e) => handleDemoClick(e, demo.id, demo.status)}
                        className={`inline-flex items-center justify-center w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${demo.status === 'Coming Soon'
                          ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                          : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/20'
                          }`}
                        disabled={demo.status === 'Coming Soon'}
                      >
                        {demo.status === 'Coming Soon' ? 'Coming Soon' : 'Open Demo'}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="max-w-4xl mx-auto mb-24">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-800"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-6 bg-black text-slate-500 text-sm font-medium">
                    Our Approach
                  </span>
                </div>
              </div>
            </div>

            {/* Journey Section */}
            <div className="max-w-4xl mx-auto text-center mb-20">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-white mb-6"
              >
                The Journey to Smarter Business
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-slate-300 mb-8"
              >
                We&apos;re not here to just automate a few tasks. We partner with you to future-proof your business—on your terms.
              </motion.p>

              <motion.div
                className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-8 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-lg text-slate-300 mb-6">
                  Whether or not you choose AI today, you&apos;ll be ready when it matters.
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
                  <span className="text-blue-400 font-medium flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Start where you are</span>
                  <span className="text-purple-400 font-medium flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>Build the foundation</span>
                  <span className="text-cyan-400 font-medium flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>Activate when it&apos;s time</span>
                </div>
              </motion.div>
            </div>

            {/* Process Steps */}
            <div className="mb-24">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Step 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-slate-900/50 border border-blue-500/20 rounded-xl p-8 hover:border-blue-500/40 transition-colors"
                >
                  <div className="text-4xl mb-6">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-2">1. Discover</h3>
                  <p className="text-blue-400 font-semibold mb-4">We start by listening</p>
                  <p className="text-slate-400 mb-6">
                    No intake forms or audits. Just a conversation to understand how your business actually runs.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start"><span className="mr-2 text-blue-500">•</span>What&apos;s eating your time?</li>
                    <li className="flex items-start"><span className="mr-2 text-blue-500">•</span>Where are things falling through?</li>
                    <li className="flex items-start"><span className="mr-2 text-blue-500">•</span>What&apos;s been too annoying to fix?</li>
                  </ul>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-slate-900/50 border border-green-500/20 rounded-xl p-8 hover:border-green-500/40 transition-colors"
                >
                  <div className="text-4xl mb-6">🛠</div>
                  <h3 className="text-2xl font-bold text-white mb-2">2. Connect</h3>
                  <p className="text-green-400 font-semibold mb-4">Build AI Readiness</p>
                  <p className="text-slate-400 mb-6">
                    Before jumping to AI, we build foundational automations that create immediate value.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start"><span className="mr-2 text-green-500">✓</span>Route leads instantly</li>
                    <li className="flex items-start"><span className="mr-2 text-green-500">✓</span>Automated reminders</li>
                    <li className="flex items-start"><span className="mr-2 text-green-500">✓</span>Real-time updates</li>
                  </ul>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-slate-900/50 border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/40 transition-colors"
                >
                  <div className="text-4xl mb-6">🤖</div>
                  <h3 className="text-2xl font-bold text-white mb-2">3. AI Enablement</h3>
                  <p className="text-purple-400 font-semibold mb-4">Layer in intelligence</p>
                  <p className="text-slate-400 mb-6">
                    Once workflows are running, we add AI where it makes the biggest difference.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start"><span className="mr-2 text-purple-500">✓</span>Qualify leads by tone</li>
                    <li className="flex items-start"><span className="mr-2 text-purple-500">✓</span>Draft updates in your voice</li>
                    <li className="flex items-start"><span className="mr-2 text-purple-500">✓</span>Summarize for speed</li>
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* Outcomes */}
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white mb-12"
              >
                Where This Leads
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/20 p-8 rounded-2xl"
                >
                  <div className="text-4xl mb-4">🎯</div>
                  <h4 className="text-white font-bold mb-2">Benefits Without Effort</h4>
                  <p className="text-slate-400 text-sm">Experience automation without changing how you work</p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-green-900/30 to-blue-900/30 border border-green-500/20 p-8 rounded-2xl"
                >
                  <div className="text-4xl mb-4">🚀</div>
                  <h4 className="text-white font-bold mb-2">Future-Proof Business</h4>
                  <p className="text-slate-400 text-sm">Systems that scale and adapt as your business grows</p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 p-8 rounded-2xl"
                >
                  <div className="text-4xl mb-4">❤️</div>
                  <h4 className="text-white font-bold mb-2">More Time for You</h4>
                  <p className="text-slate-400 text-sm">Focus on the work that energizes you, not the drain</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </>
  );
}

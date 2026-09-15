'use client';

import { motion } from 'framer-motion';
import { 
  PhoneIcon, 
  GlobeAltIcon, 
  CubeIcon,
  UserGroupIcon,
  ChartBarIcon,
  MagnifyingGlassIcon,
  WrenchScrewdriverIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';
import PageTransition from '@/app/components/PageTransition';
import ParticleBackground from '@/app/components/ParticleBackground';
import InteractiveDemoModal from '@/components/InteractiveDemoModal';
import PortfolioModal from '@/components/PortfolioModal';
import ClientChannelsBanner from '@/components/ClientChannelsBanner';
import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const leaksWePlugDesc = [
  {
    id: 'missed-calls',
    title: 'Missed Calls',
    description: 'After-hours calls go unanswered. Voicemails pile up. Leads slip away before you even know they called.',
    outcome: 'Every call gets a response, even at 2am. Callbacks happen automatically.',
    icon: PhoneIcon,
    image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=800&q=80',
  },
  {
    id: 'stuck-leads',
    title: 'Leads Stuck in Tools',
    description: 'Inquiries sit in forms, inboxes, and apps nobody checks. Follow-ups fall through the cracks.',
    outcome: 'Leads get routed, tagged, and followed up. Nothing sits forgotten.',
    icon: UserGroupIcon,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    id: 'inventory-blind',
    title: 'Inventory You Can\'t See',
    description: 'Stock levels live in spreadsheets or someone\'s head. You find out too late when something runs out.',
    outcome: 'Real-time visibility. Alerts before you run low.',
    icon: CubeIcon,
    image: 'https://images.unsplash.com/photo-1593937505566-64f33d148915?w=800&q=80',
  },
  {
    id: 'busywork',
    title: 'Busywork in Your Head',
    description: 'Scheduling, reminders, invoices, updates. Manual tasks that only you know how to do.',
    outcome: 'Repeatable work runs in the background. You focus on what matters.',
    icon: ChartBarIcon,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    id: 'outdated-website',
    title: 'Outdated Website',
    description: 'Your site doesn\'t reflect your business today. Visitors bounce. Trust is lost before they even call.',
    outcome: 'A clean, modern site that builds trust from the first click.',
    icon: GlobeAltIcon,
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80',
  },
];

function SolutionsContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const demoParam = searchParams.get('demo');
    if (demoParam === 'voice-agent') {
      setSelectedDemo('voice-agent');
      setIsModalOpen(true);
    } else if (demoParam === 'website-modernization') {
      setIsPortfolioModalOpen(true);
    }
  }, [searchParams]);

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
                The Leaks We <span className="text-blue-400">Plug</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-slate-300 mb-6"
              >
                Tech gaps cost you money every day. Missed calls, leads stuck in tools nobody opens, inventory you can&apos;t see, busywork that only lives in your head.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-blue-400 font-semibold text-lg"
              >
                We find them. We fix them. We free you.
              </motion.p>
            </div>

            {/* Channels Banner */}
            <div className="mb-20">
              <ClientChannelsBanner />
            </div>

            {/* Leaks We Plug Section */}
            <div className="mb-24">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
              >
                Where Money Leaks
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {leaksWePlugDesc.map((leak, index) => (
                  <motion.div
                    key={leak.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-blue-500/30 rounded-2xl overflow-hidden transition-all duration-300 group"
                  >
                    {/* Image with blue/black overlay */}
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={leak.image}
                        alt={leak.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-blue-900/30" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center">
                          <leak.icon className="w-5 h-5 text-blue-400" />
                        </div>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3">{leak.title}</h3>
                      <p className="text-slate-400 text-sm mb-4">{leak.description}</p>
                      <div className="pt-4 border-t border-slate-800">
                        <p className="text-blue-400 text-sm font-medium">After we fix it:</p>
                        <p className="text-slate-300 text-sm mt-1">{leak.outcome}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Process Section - Find / Fix / Free You */}
            <div className="mb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  How We Work
                </h2>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                  Digitize, automate, then let it run. You focus on the work that matters.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Find */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-blue-500/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                    <MagnifyingGlassIcon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Find</h3>
                  <p className="text-blue-400 font-semibold mb-4 text-sm">Map the leaks</p>
                  <p className="text-slate-400 text-sm">
                    We look at calls, follow-up, inventory, and tools nobody opens. No intake forms or long meetings. Just a conversation about how your business actually runs.
                  </p>
                </motion.div>

                {/* Fix */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-blue-500/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                    <WrenchScrewdriverIcon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Fix</h3>
                  <p className="text-blue-400 font-semibold mb-4 text-sm">Digitize the messy parts</p>
                  <p className="text-slate-400 text-sm">
                    We connect what&apos;s disconnected. Leads get routed. Inventory gets tracked. Busywork gets handled. The right people can actually use the data.
                  </p>
                </motion.div>

                {/* Free You */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-blue-500/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                    <RocketLaunchIcon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Free you</h3>
                  <p className="text-blue-400 font-semibold mb-4 text-sm">Run it in the background</p>
                  <p className="text-slate-400 text-sm">
                    The repeats run automatically. Calls answered, follow-ups sent, alerts triggered. You get time back for the work you love.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Free Technical Checkup
                </h2>
                <p className="text-slate-300 mb-6">
                  We find where money&apos;s leaking. No strings, no pressure. Just clarity on what&apos;s costing you.
                </p>
                <a
                  href="https://calendar.app.google/mzfrpoUiWW9UFvzp6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 font-semibold shadow-lg shadow-blue-500/20"
                >
                  Book Free Checkup
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </PageTransition>
    </>
  );
}

export default function SolutionsPage() {
  return (
    <Suspense fallback={
      <div className="bg-black min-h-screen pt-24 pb-20 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    }>
      <SolutionsContent />
    </Suspense>
  );
}

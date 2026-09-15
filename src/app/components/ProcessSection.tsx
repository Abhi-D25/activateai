'use client';

import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon, 
  WrenchScrewdriverIcon, 
  RocketLaunchIcon,
  CheckIcon,
  PhoneIcon,
  CubeIcon,
  UserGroupIcon,
  CalendarDaysIcon,
  ExclamationTriangleIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';
import ParticleBackground from '@/app/components/ParticleBackground';

const FindMockup = () => (
  <div className="bg-slate-900/80 rounded-xl border border-slate-700/50 p-4 shadow-xl">
    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
      <MagnifyingGlassIcon className="w-4 h-4 text-blue-400" />
      <span className="text-white text-sm font-medium">Tech Gap Scan</span>
    </div>
    
    <div className="space-y-3">
      <div className="flex items-center gap-3 bg-red-500/10 rounded-lg p-3 border border-red-500/20">
        <ExclamationTriangleIcon className="w-5 h-5 text-red-400 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-white text-sm font-medium">47 missed calls this month</p>
          <p className="text-slate-400 text-xs">After-hours, no voicemail</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3 bg-amber-500/10 rounded-lg p-3 border border-amber-500/20">
        <CubeIcon className="w-5 h-5 text-amber-400 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-white text-sm font-medium">Inventory blind spots</p>
          <p className="text-slate-400 text-xs">12 items out of sync</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3 bg-amber-500/10 rounded-lg p-3 border border-amber-500/20">
        <UserGroupIcon className="w-5 h-5 text-amber-400 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-white text-sm font-medium">23 leads stuck in old tool</p>
          <p className="text-slate-400 text-xs">No one checks it</p>
        </div>
      </div>
    </div>
  </div>
);

const FixMockup = () => (
  <div className="bg-slate-900/80 rounded-xl border border-slate-700/50 p-4 shadow-xl">
    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
      <WrenchScrewdriverIcon className="w-4 h-4 text-blue-400" />
      <span className="text-white text-sm font-medium">Digitized Dashboard</span>
    </div>
    
    <div className="space-y-3">
      <motion.div 
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-3 bg-blue-500/10 rounded-lg p-3 border border-blue-500/20"
      >
        <PhoneIcon className="w-5 h-5 text-blue-400 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-white text-sm font-medium">Calls routed to your team</p>
          <p className="text-slate-400 text-xs">After-hours covered</p>
        </div>
        <CheckIcon className="w-4 h-4 text-blue-400" />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35 }}
        className="flex items-center gap-3 bg-blue-500/10 rounded-lg p-3 border border-blue-500/20"
      >
        <CubeIcon className="w-5 h-5 text-blue-400 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-white text-sm font-medium">Inventory synced</p>
          <p className="text-slate-400 text-xs">Real-time visibility</p>
        </div>
        <CheckIcon className="w-4 h-4 text-blue-400" />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="flex items-center gap-3 bg-blue-500/10 rounded-lg p-3 border border-blue-500/20"
      >
        <UserGroupIcon className="w-5 h-5 text-blue-400 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-white text-sm font-medium">Lead opened in CRM</p>
          <p className="text-slate-400 text-xs">Auto-imported, tagged</p>
        </div>
        <CheckIcon className="w-4 h-4 text-blue-400" />
      </motion.div>
    </div>
  </div>
);

const FreeYouMockup = () => (
  <div className="bg-slate-900/80 rounded-xl border border-slate-700/50 p-4 shadow-xl">
    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
      <RocketLaunchIcon className="w-4 h-4 text-blue-400" />
      <span className="text-white text-sm font-medium">Running in Background</span>
    </div>
    
    <div className="space-y-3">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-3 bg-slate-800/50 rounded-lg p-3 border border-slate-700/50"
      >
        <CalendarDaysIcon className="w-5 h-5 text-blue-400 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-white text-sm font-medium">Tuesday 10am booked</p>
          <p className="text-slate-400 text-xs">Client: Sarah M.</p>
        </div>
        <span className="text-blue-400 text-xs">auto</span>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35 }}
        className="flex items-center gap-3 bg-slate-800/50 rounded-lg p-3 border border-slate-700/50"
      >
        <CubeIcon className="w-5 h-5 text-blue-400 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-white text-sm font-medium">Low stock alert sent</p>
          <p className="text-slate-400 text-xs">Widget A below 10 units</p>
        </div>
        <span className="text-blue-400 text-xs">auto</span>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="flex items-center gap-3 bg-slate-800/50 rounded-lg p-3 border border-slate-700/50"
      >
        <ArrowTrendingUpIcon className="w-5 h-5 text-blue-400 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-white text-sm font-medium">Follow-up sent</p>
          <p className="text-slate-400 text-xs">Mike D. got quote reminder</p>
        </div>
        <span className="text-blue-400 text-xs">auto</span>
      </motion.div>
    </div>
    
    <div className="mt-4 pt-3 border-t border-slate-800">
      <div className="flex items-center justify-between">
        <span className="text-slate-400 text-xs">Your time back this week</span>
        <span className="text-blue-400 font-bold">8+ hours</span>
      </div>
    </div>
  </div>
);

const processSteps = [
  {
    id: 'find',
    title: 'Find',
    subtitle: 'Map the leaks across calls, follow-up, inventory, and tools nobody opens',
    icon: MagnifyingGlassIcon,
    mockup: <FindMockup />
  },
  {
    id: 'fix',
    title: 'Fix',
    subtitle: 'Digitize the messy parts so the right people can actually use them',
    icon: WrenchScrewdriverIcon,
    mockup: <FixMockup />
  },
  {
    id: 'free-you',
    title: 'Free you',
    subtitle: 'Run the repeats in the background so you get time back for the work you love',
    icon: RocketLaunchIcon,
    mockup: <FreeYouMockup />
  }
];

export default function ProcessSection() {
  return (
    <section className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
      <ParticleBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How We Help
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Digitize, automate, then let it run. You focus on the work that matters.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-blue-500/30 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-slate-400 mb-6">{step.subtitle}</p>
                
                <div className="relative">
                  {step.mockup}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { PhoneIcon, ChatBubbleLeftRightIcon, CalendarDaysIcon, CheckIcon } from '@heroicons/react/24/outline';

interface ProofMockup {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  mockup: React.ReactNode;
}

const PhoneMockup = ({ children }: { children: React.ReactNode }) => (
  <div className="relative mx-auto w-full max-w-[280px]">
    <div className="bg-slate-900 rounded-[2rem] p-2 shadow-2xl border border-slate-700/50">
      <div className="bg-slate-950 rounded-[1.5rem] overflow-hidden">
        <div className="h-6 bg-slate-900 flex items-center justify-center">
          <div className="w-16 h-1 bg-slate-700 rounded-full" />
        </div>
        <div className="p-4 min-h-[200px]">
          {children}
        </div>
      </div>
    </div>
  </div>
);

const CatchMockup = () => (
  <PhoneMockup>
    <div className="space-y-3">
      <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700/50">
        <div className="flex items-center gap-2 text-red-400 text-xs mb-1">
          <PhoneIcon className="w-3 h-3" />
          <span>Missed Call</span>
        </div>
        <p className="text-white text-sm font-medium">Sarah Johnson</p>
        <p className="text-slate-400 text-xs">2 min ago</p>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="bg-blue-600/20 rounded-xl p-3 border border-blue-500/30"
      >
        <div className="flex items-center gap-2 text-blue-400 text-xs mb-1">
          <CheckIcon className="w-3 h-3" />
          <span>Auto-Response Sent</span>
        </div>
        <p className="text-white text-sm">
          &ldquo;Hi Sarah! Thanks for calling. How can I help you today?&rdquo;
        </p>
        <p className="text-blue-400 text-xs mt-1">Sent via SMS</p>
      </motion.div>
    </div>
  </PhoneMockup>
);

const FollowUpMockup = () => (
  <PhoneMockup>
    <div className="space-y-3">
      <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700/50">
        <div className="flex items-center justify-between mb-2">
          <span className="text-slate-400 text-xs">Lead Activity</span>
          <span className="text-xs text-slate-500">3 days ago</span>
        </div>
        <p className="text-white text-sm font-medium">Mike D. requested quote</p>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="bg-blue-600/20 rounded-xl p-3 border border-blue-500/30"
      >
        <div className="flex items-center gap-2 text-blue-400 text-xs mb-1">
          <ChatBubbleLeftRightIcon className="w-3 h-3" />
          <span>Follow-up Sent</span>
        </div>
        <p className="text-white text-sm">
          &ldquo;Hey Mike, just checking in on that quote. Ready to move forward?&rdquo;
        </p>
        <p className="text-slate-400 text-xs mt-2 flex items-center gap-1">
          <CheckIcon className="w-3 h-3 text-blue-400" />
          Delivered
        </p>
      </motion.div>
    </div>
  </PhoneMockup>
);

const BookMockup = () => (
  <PhoneMockup>
    <div className="space-y-3">
      <div className="text-center mb-2">
        <p className="text-slate-400 text-xs">New Appointment</p>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="bg-blue-600/20 rounded-xl p-4 border border-blue-500/30"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
            <CalendarDaysIcon className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <p className="text-white font-semibold">Tuesday 10am</p>
            <p className="text-slate-400 text-xs">Consultation Call</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-blue-400 text-sm">
          <CheckIcon className="w-4 h-4" />
          <span>Confirmed &amp; on your calendar</span>
        </div>
      </motion.div>
      
      <div className="bg-slate-800/30 rounded-lg p-2 text-center">
        <p className="text-slate-400 text-xs">
          Client: James Wilson
        </p>
      </div>
    </div>
  </PhoneMockup>
);

const processSteps: ProofMockup[] = [
  {
    id: 'catch',
    title: 'Catch',
    subtitle: 'Missed calls get answered',
    icon: PhoneIcon,
    mockup: <CatchMockup />
  },
  {
    id: 'follow-up',
    title: 'Follow up',
    subtitle: 'Leads don\'t go cold',
    icon: ChatBubbleLeftRightIcon,
    mockup: <FollowUpMockup />
  },
  {
    id: 'book',
    title: 'Book',
    subtitle: 'Tuesday 10am on the calendar',
    icon: CalendarDaysIcon,
    mockup: <BookMockup />
  }
];

export default function ProcessSection() {
  return (
    <section className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            See what happens when a lead comes in. No AI jargon, just results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
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
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    <p className="text-sm text-slate-400">{step.subtitle}</p>
                  </div>
                </div>
                
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

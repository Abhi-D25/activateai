'use client';

import { motion } from 'framer-motion';
import { 
  PhoneIcon, 
  CalendarDaysIcon, 
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  DocumentTextIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const integrations = [
  { name: 'Phone & SMS', icon: PhoneIcon, description: 'Answer every call' },
  { name: 'Calendar', icon: CalendarDaysIcon, description: 'Auto-book appointments' },
  { name: 'Messaging', icon: ChatBubbleLeftRightIcon, description: 'Text, WhatsApp, DMs' },
  { name: 'Email', icon: EnvelopeIcon, description: 'Follow-up sequences' },
  { name: 'CRM', icon: DocumentTextIcon, description: 'Keep leads organized' },
  { name: 'Reports', icon: ChartBarIcon, description: 'See what\u2019s working' },
];

export default function IntegrationsSection() {
  return (
    <section className="relative py-16 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-slate-400 text-sm uppercase tracking-wider mb-2">
            Works With Your Existing Tools
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            One system, all your channels
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-slate-800 hover:border-blue-500/30 transition-all duration-300 text-center h-full">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <integration.icon className="w-6 h-6 text-blue-400" />
                </div>
                <p className="text-white font-medium text-sm mb-1">{integration.name}</p>
                <p className="text-slate-500 text-xs">{integration.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

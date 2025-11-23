'use client';

import { motion } from 'framer-motion';
import { ShieldCheckIcon, ChatBubbleLeftRightIcon, GiftIcon } from '@heroicons/react/24/outline';

export const features = [
  {
    id: 'compliance',
    icon: ShieldCheckIcon,
    text: 'HIPAA & SOC2 Compliant',
    color: 'text-green-400',
    bg: 'bg-green-400/10',
    border: 'border-green-400/20'
  },
  {
    id: 'channels',
    icon: ChatBubbleLeftRightIcon,
    text: 'Multi-Channel Support',
    subtext: 'Phone, SMS, WhatsApp, & more',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20'
  },
  {
    id: 'trial',
    icon: GiftIcon,
    text: '1 Month Free Trial',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20'
  }
];

interface MarketingFeaturesProps {
  className?: string;
  filter?: (string | 'compliance' | 'channels' | 'trial')[];
}

export default function MarketingFeatures({ className = '', filter }: MarketingFeaturesProps) {
  const displayFeatures = filter
    ? features.filter(f => filter.includes(f.id))
    : features;

  return (
    <div className={`grid grid-cols-1 ${displayFeatures.length === 1 ? 'sm:grid-cols-1' : 'sm:grid-cols-3'} gap-4 ${className}`}>
      {displayFeatures.map((feature, index) => (
        <motion.div
          key={feature.id}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`flex flex-col items-center text-center p-3 rounded-xl border ${feature.border} ${feature.bg} backdrop-blur-sm`}
        >
          <feature.icon className={`w-6 h-6 mb-2 ${feature.color}`} />
          <span className="text-sm font-medium text-slate-200">{feature.text}</span>
          {feature.subtext && (
            <span className="text-xs text-slate-400 mt-1">{feature.subtext}</span>
          )}
        </motion.div>
      ))}
    </div>
  );
}

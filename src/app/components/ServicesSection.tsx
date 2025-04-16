'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  SparklesIcon, 
  ChartBarIcon, 
  UserGroupIcon,
  CogIcon,
  DocumentChartBarIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import FuturisticText from './FuturisticText';
import QuizButton from './QuizButton';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    icon: SparklesIcon,
    title: "AI Integration",
    description: "We seamlessly integrate AI solutions into your existing workflows and systems:",
    features: [
      "Custom AI model development",
      "API integration",
      "Workflow automation"
    ],
    delay: 0.4
  },
  {
    icon: ChartBarIcon,
    title: "Data Analytics",
    description: "Transform your data into actionable insights with AI-powered analytics:",
    features: [
      "Predictive analytics",
      "Business intelligence",
      "Performance monitoring"
    ],
    delay: 0.6
  },
  {
    icon: UserGroupIcon,
    title: "Customer Support",
    description: "Enhance customer service with AI-powered chatbots and support systems:",
    features: [
      "AI chatbot implementation",
      "Customer feedback analysis",
      "Support ticket automation"
    ],
    delay: 0.8
  },
  {
    icon: CogIcon,
    title: "Process Automation",
    description: "Streamline operations with intelligent automation solutions:",
    features: [
      "Workflow optimization",
      "Task automation",
      "Resource management"
    ],
    delay: 1.0
  },
  {
    icon: DocumentChartBarIcon,
    title: "Document Processing",
    description: "Automate document handling with AI-powered solutions:",
    features: [
      "OCR technology",
      "Document classification",
      "Data extraction"
    ],
    delay: 1.2
  },
  {
    icon: ShieldCheckIcon,
    title: "AI Security",
    description: "Protect your AI implementations with robust security measures:",
    features: [
      "Security audits",
      "Compliance checks",
      "Risk assessment"
    ],
    delay: 1.4
  }
];

interface ServicesSectionProps {
  showAll?: boolean;
  noContainer?: boolean;
}

export default function ServicesSection({ showAll = false, noContainer = false }: ServicesSectionProps) {
  const displayedServices = showAll ? services : services.slice(0, 2);

  const content = (
    <>
      {!noContainer && (
        <div className="max-w-3xl mx-auto text-center mb-16">
          <ScrollReveal animation="slideUp" className="text-center mb-16">
            <h2 className="section-title">Our Services</h2>
            <p className="text-slate-400"> Comprehensive AI solutions tailored to your business needs </p>
          </ScrollReveal>
        </div>
      )}

      <div className={`grid grid-cols-1 ${showAll ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'} gap-12 max-w-7xl mx-auto`}>
        {displayedServices.map((service, index) => (
          <motion.div
            key={index}
            className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.02,
              rotateX: 5,
              rotateY: -5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
            }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
          >
            <div className="flex items-center mb-6">
              <service.icon className="h-12 w-12 text-blue-400 mr-4" />
              <FuturisticText
                text={service.title}
                className="text-2xl font-bold text-white"
                glowColor="#60a5fa"
                delay={service.delay + 0.2}
              />
            </div>
            <p className="text-slate-300 mb-6">
              {service.description}
            </p>
            <ul className="space-y-3 text-slate-300">
              {service.features.map((feature, featureIndex) => (
                <motion.li
                  key={featureIndex}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: service.delay + 0.4 + (featureIndex * 0.1) }}
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      
      {!showAll && (
        <div className="text-center mt-12">
          <QuizButton />
          <p className="text-slate-400 mt-8"> Get personalized recommendations for your business </p>
        </div>
      )}

      {showAll && (
        <div className="text-center mt-16">
          <ScrollReveal animation="slideUp" className="text-center mb-16">
              <h2 className="section-title">Ready to Transform Your Business?</h2>
              <p className="text-slate-400"> Get your personalized AI solutions today </p>
          </ScrollReveal>
          <QuizButton />
        </div>
      )}
    </>
  );

  if (noContainer) {
    return content;
  }

  return (
    <section id="services" className="py-24 gradient-bg-dark">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {content}
      </div>
    </section>
  );
} 
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BellIcon, 
  CalendarIcon, 
  ChatBubbleLeftRightIcon, 
  ClipboardDocumentListIcon,
  StarIcon,
  InboxIcon,
  CreditCardIcon,
  DocumentDuplicateIcon
} from '@heroicons/react/24/outline';
import ParticleBackground from './ParticleBackground';

export default function ArtOfPossibleSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const automations = [
    {
      id: 1,
      title: "Missed lead alerts",
      icon: BellIcon,
      color: "#3b82f6", // Blue
      position: { top: '5%', left: '50%', transform: 'translateX(-50%)' }, // Top center
      delay: 0.1
    },
    {
      id: 2,
      title: "3/7/14-day follow-ups",
      icon: CalendarIcon,
      color: "#10b981", // Green
      position: { top: '15%', right: '20%' }, // Top right
      delay: 0.2
    },
    {
      id: 3,
      title: "Scheduling confirmations",
      icon: ClipboardDocumentListIcon,
      color: "#8b5cf6", // Purple
      position: { top: '50%', right: '10%', transform: 'translateY(-50%)' }, // Right middle
      delay: 0.3
    },
    {
      id: 4,
      title: "Payment reminders",
      icon: CreditCardIcon,
      color: "#f97316", // Orange
      position: { bottom: '15%', right: '20%' }, // Bottom right
      delay: 0.4
    },
    {
      id: 5,
      title: "FAQ replies",
      icon: ChatBubbleLeftRightIcon,
      color: "#f59e0b", // Yellow
      position: { bottom: '5%', left: '50%', transform: 'translateX(-50%)' }, // Bottom center
      delay: 0.5
    },
    {
      id: 6,
      title: "Review requests",
      icon: StarIcon,
      color: "#ec4899", // Pink
      position: { bottom: '15%', left: '20%' }, // Bottom left
      delay: 0.6
    },
    {
      id: 7,
      title: "Form syncs",
      icon: DocumentDuplicateIcon,
      color: "#6366f1", // Indigo
      position: { top: '50%', left: '10%', transform: 'translateY(-50%)' }, // Left middle
      delay: 0.7
    },
    {
      id: 8,
      title: "Inbox triage",
      icon: InboxIcon,
      color: "#14b8a6", // Teal
      position: { top: '15%', left: '20%' }, // Top left
      delay: 0.8
    }
  ];

  // Mobile Grid Layout
  const MobileAutomationGrid = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8">
      {automations.map((automation, index) => {
        const Icon = automation.icon;
        
        return (
          <motion.div
            key={automation.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              type: "spring",
              damping: 15 
            }}
            className="relative group cursor-pointer"
          >
            {/* Glow effect */}
            <div 
              className="absolute inset-0 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"
              style={{ backgroundColor: automation.color }}
            />
            
            {/* Bubble content */}
            <div 
              className="relative bg-gray-800/80 backdrop-blur-md rounded-full p-4 md:p-6 border border-white/10 group-hover:border-white/30 transition-all duration-300 aspect-square flex items-center justify-center"
              style={{ 
                boxShadow: `0 0 20px ${automation.color}30`,
              }}
            >
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <Icon 
                  className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0"
                  style={{ filter: `drop-shadow(0 0 6px ${automation.color})` }}
                />
                <span className="text-[10px] md:text-xs text-white leading-tight font-medium">
                  {automation.title}
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );

  // Desktop Orbiting Layout
  const DesktopAutomationOrbit = () => (
    <div className="relative min-h-[700px] flex items-center justify-center">
      {/* Central Bubble */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring", damping: 20 }}
        className="relative z-20"
      >
        <div className="relative">
          {/* Glowing effect */}
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          
          {/* Main bubble */}
          <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-full p-12 md:p-16 border-2 border-blue-500/50 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
            <h2 className="text-2xl md:text-4xl font-bold text-white text-center max-w-[300px]">
              AI Makes it ALL possible
            </h2>
          </div>
        </div>
      </motion.div>

      {/* Orbiting Automation Bubbles */}
      {automations.map((automation) => {
        const Icon = automation.icon;
        
        return (
          <motion.div
            key={automation.id}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: automation.delay,
              type: "spring",
              damping: 15 
            }}
            className="absolute"
            style={automation.position}
          >
            {/* Bubble */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative group cursor-pointer"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                y: {
                  duration: 4 + automation.id * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              {/* Glow effect */}
              <div 
                className="absolute inset-0 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                style={{ backgroundColor: automation.color }}
              />
              
              {/* Bubble content */}
              <div 
                className="relative bg-gray-800/80 backdrop-blur-md rounded-full p-6 border border-white/10 group-hover:border-white/30 transition-all duration-300 w-[110px] h-[110px] md:w-[130px] md:h-[130px] flex items-center justify-center"
                style={{ 
                  boxShadow: `0 0 25px ${automation.color}30`,
                }}
              >
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Icon 
                    className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0"
                    style={{ filter: `drop-shadow(0 0 8px ${automation.color})` }}
                  />
                  <span className="text-[10px] md:text-xs text-white text-center leading-tight">
                    {automation.title}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <section className="relative py-12 md:py-20 bg-gray-900/50 backdrop-blur-sm overflow-hidden min-h-[600px] md:min-h-[800px]">
      <ParticleBackground />
      {/* Background glow effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Futuristic Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-8 md:mb-16"
        >
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 px-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              What if you never had to think about these again?
            </span>
          </h1>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Conditional rendering based on screen size */}
        {isMobile ? (
          <div className="text-center">
            {/* Mobile Central Bubble */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", damping: 20 }}
              className="relative z-20 mb-8"
            >
              <div className="relative">
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
                
                {/* Main bubble */}
                <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-full p-8 md:p-12 border-2 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.3)] mx-auto w-fit">
                  <h2 className="text-xl md:text-2xl font-bold text-white text-center max-w-[250px] md:max-w-[300px]">
                    AI Makes it ALL possible
                  </h2>
                </div>
              </div>
            </motion.div>
            
            {/* Mobile Grid */}
            <MobileAutomationGrid />
          </div>
        ) : (
          <DesktopAutomationOrbit />
        )}

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-8 md:mt-12"
        >
          <p className="text-lg md:text-xl text-slate-300 italic max-w-3xl mx-auto px-4">
            Your AI concierge team handles these automatically, so you can focus on what truly matters—growing your business and serving your customers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon, 
  SparklesIcon, 
  UserGroupIcon, 
  ArrowPathIcon,
  LightBulbIcon,
  AcademicCapIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import CaseStudiesSection from './components/CaseStudiesSection';
import ServicesSection from './components/ServicesSection';
import FAQSection from './components/FAQSection';
import QuizButton from './components/QuizButton';
import FuturisticText from './components/FuturisticText';
import ParticleBackground from '../app/components/ParticleBackground';
import PageTransition from './components/PageTransition';
import { Helmet } from 'react-helmet';
import TypewriterText from './components/TypewriterText';
import ArtOfPossibleSection from './components/ArtOfPossibleSection';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const showSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <PageTransition variant="fade">
      <>
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How long does it take to set up?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most businesses are up and running within 2 days of completing our intake questionnaire. We handle all the technical setup and integration with your existing tools."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will it work with my existing systems?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! ActivateAI is designed to integrate with the tools you already use. We support all major calendar systems (Google, Outlook, Apple), phone systems, and can connect with most industry-specific software."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What results can I expect in the first 30 days?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most businesses see immediate benefits in three areas: 1) Captured after-hours leads that would have been missed, 2) Reduced time spent on scheduling and admin tasks, and 3) Increased customer satisfaction from faster response times."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does the AI know my business rules and policies?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "During onboarding, we gather your specific business information through our questionnaire. This includes your services, pricing, availability, cancellation policies, and communication style. We train your AI Employees on these rules so they accurately represent your business."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What happens if the AI can't handle a situation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Your AI Employees are programmed to recognize when a situation requires human attention. For complex or unusual requests, the AI will gracefully let the customer know a team member will follow up shortly, and you'll receive an immediate notification with all relevant details."
                  }
                }
              ]
            })}
          </script>
        </Helmet>
        <div className="bg-black">
          {/* Hero Section */}
          <section className="relative min-h-screen overflow-hidden">
            <div className="absolute inset-0 gradient-bg opacity-50" />
            <ParticleBackground />
            <div className="container relative z-10 mx-auto px-4 py-8 md:py-12 lg:py-40">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-4 items-center"
              >
                {/* Left Content - 60% */}
                <div className="lg:col-span-3 order-2 lg:order-1">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl italic text-white mb-4 md:mb-6 text-center lg:text-left"
                  >
                    Making AI Effortless for Everyday Businesses
                  </motion.h1>
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl italic text-white mb-4 md:mb-6 text-center lg:text-left"
                  >
                    —without changing a thing.
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-slate-300 mb-6 md:mb-8 text-center lg:text-left px-4 lg:px-0"
                  >
                    We plug AI into the way you already work—no new apps, no disruption. Just less busywork, and more time for what really matters: growth.
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12 justify-center lg:justify-start"
                  >
                   <Link href="/services" className="px-6 md:px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center font-medium whitespace-nowrap btn-primary">
                      See Current Activations
                    </Link>
                    <QuizButton />
                  </motion.div>
                </div>
                {/* Right Content - 40% - Hidden on mobile, shown on desktop */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="lg:col-span-2 order-1 lg:order-2 mb-8 lg:mb-0 hidden lg:block"
                >
                  <motion.div 
                    className="aspect-[3/2] bg-transparent rounded-lg overflow-hidden relative hero-image-overlay"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                    }}
                  >
                    <motion.img 
                      src="/hero-video.jpg" 
                      alt="Hero video thumbnail" 
                      className="w-full h-full object-contain"
                      initial={{ scale: 1.1, opacity: 0.8 }}
                      animate={{ 
                        scale: [1, 1.05, 1],
                        opacity: 1
                      }}
                      transition={{ 
                        duration: 1.2, 
                        delay: 0.6,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut"
                      }}
                      whileHover={{ scale: 1.05 }}
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Value Props Banner - 4 Floating Bubble Cards */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
              >
                {/* Reclaim Your Time */}
                <motion.div 
                  className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4 md:p-6 text-center hover:bg-blue-900/40 transition-all duration-300"
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                    scale: 1.02
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <h3 className="text-base md:text-lg font-semibold text-blue-400 mb-2">Reclaim Your Time</h3>
                  <p className="text-blue-300 text-sm">Free yourself from repetitive tasks and late-night catch-up.</p>
                </motion.div>

                {/* Run Smarter, Not Harder */}
                <motion.div 
                  className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4 md:p-6 text-center hover:bg-blue-900/40 transition-all duration-300"
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                    scale: 1.02
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                 <h3 className="text-base md:text-lg font-semibold text-blue-400 mb-2">Run Smarter, Not Harder</h3>
                  <p className="text-blue-300 text-sm">Automate where it counts—without changing how you work.</p>
                </motion.div>

                {/* No Overhaul. No New Tools. */}
                <motion.div 
                  className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4 md:p-6 text-center hover:bg-blue-900/40 transition-all duration-300"
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                    scale: 1.02
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  <h3 className="text-base md:text-lg font-semibold text-blue-400 mb-2">No Overhaul. No New Tools.</h3>
                  <p className="text-blue-300 text-sm">We plug into your existing systems and processes.</p>
                </motion.div>

                {/* Built for the Work You Love */}
                <motion.div 
                  className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4 md:p-6 text-center hover:bg-blue-900/40 transition-all duration-300"
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                    scale: 1.02
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <h3 className="text-base md:text-lg font-semibold text-blue-400 mb-2">Built for the Work You Love</h3>
                  <p className="text-blue-300 text-sm">You stay focused on clients, growth, and your craft—we handle the rest.</p>
                </motion.div>
              </motion.div>

              {/* Mobile Image - Shown only on mobile, below value props */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="mt-8 lg:hidden"
              >
                <motion.div 
                  className="aspect-[3/2] bg-transparent rounded-lg overflow-hidden relative hero-image-overlay"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                  }}
                >
                  <motion.img 
                    src="/hero-video.jpg" 
                    alt="Hero video thumbnail" 
                    className="w-full h-full object-contain"
                    initial={{ scale: 1.1, opacity: 0.8 }}
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: 1
                    }}
                    transition={{ 
                      duration: 1.2, 
                      delay: 0.6,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut"
                    }}
                    whileHover={{ scale: 1.05 }}
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </section>

          <ArtOfPossibleSection />

          {/* What We Offer Section */}
          <section className="py-12 md:py-20 bg-gray-900/50 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              {/* Container 1: Sales (Image Left, Text Right) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20"
              >
                <div className="order-2 lg:order-1">
                  <motion.div 
                    className="aspect-video bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700/50 overflow-hidden"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <motion.div
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                        className="relative z-10"
                      >
                        Sales Visual Placeholder
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
                <div className="order-1 lg:order-2 text-center lg:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">
                    <span className="bg-red-600/20 backdrop-blur-sm border border-red-500/30 px-3 md:px-4 py-2 rounded-lg shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                      Sales
                    </span>
                  </h2>
                  <p className="text-lg md:text-xl text-slate-300">
                    Following up with leads, remembering who came from where, jumping between forms and DMs—it&apos;s too much. We help make sure nothing slips, and everything moves forward. So you can focus on the conversations that actually grow your business.
                  </p>
                </div>
              </motion.div>

              {/* Container 2: Operations (Image Right, Text Left) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20"
              >
                <div className="order-2">
                  <motion.div 
                    className="aspect-video bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700/50 overflow-hidden"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <motion.div
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                        className="relative z-10"
                      >
                        Operations Visual Placeholder
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
                <div className="order-1 text-center lg:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">
                    <span className="bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 px-3 md:px-4 py-2 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                      Operations
                    </span>
                  </h2>
                  <p className="text-lg md:text-xl text-slate-300">
                    There&apos;s always one more thing—rescheduling, chasing confirmations, reminding someone to do something. We help simplify the small, repeating stuff. So your day feels a little less reactive—and a lot more in control.
                  </p>
                </div>
              </motion.div>

              {/* Container 3: Admin (Image Left, Text Right) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20"
              >
                <div className="order-2 lg:order-1">
                  <motion.div 
                    className="aspect-video bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700/50 overflow-hidden"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <motion.div
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                        className="relative z-10"
                      >
                        Admin Visual Placeholder
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
                <div className="order-1 lg:order-2 text-center lg:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">
                    <span className="bg-green-600/20 backdrop-blur-sm border border-green-500/30 px-3 md:px-4 py-2 rounded-lg shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                      Admin
                    </span>
                  </h2>
                  <p className="text-lg md:text-xl text-slate-300">
                    You know that pile of things you meant to do? The inboxes, the forms, the copy-paste chaos? We quietly take care of what drains you most. So you have space to breathe, think, and move your business forward.
                  </p>
                </div>
              </motion.div>

              {/* Container 4: Support (Image Right, Text Left) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12"
              >
                <div className="order-2">
                  <motion.div 
                    className="aspect-video bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700/50 overflow-hidden"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <motion.div
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                        className="relative z-10"
                      >
                        Support Visual Placeholder
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
                <div className="order-1 text-center lg:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">
                    <span className="bg-yellow-600/20 backdrop-blur-sm border border-yellow-500/30 px-3 md:px-4 py-2 rounded-lg shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                      Support
                    </span>
                  </h2>
                  <p className="text-lg md:text-xl text-slate-300">
                    Your customers deserve quick, helpful responses—even when you&apos;re busy or unavailable. We help ensure they get the information they need, when they need it, so you can focus on delivering exceptional service.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Sales Snapshot Section */}
          <section className="py-12 md:py-20 bg-gray-900/50 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto"
              >
                {/* Header */}
                <div className="text-center mb-8 md:mb-12">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                    From Missed Leads to Instant Demos
                  </h2>
                  <p className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto px-4">
                    A 5-person SaaS team was juggling a shared inbox and manual follow-ups. We automated their lead capture, routing, and demo booking—without changing a thing in their CRM.
                  </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-8">
                  {/* Left Column - Content */}
                  <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
                    {/* What We Delivered */}
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 md:p-8 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">
                        What We Delivered
                      </h3>
                      <div className="space-y-3 md:space-y-4">
                        <div className="flex items-start space-x-3">
                          <span className="text-green-400 text-lg md:text-xl mt-1">✅</span>
                          <p className="text-slate-300 text-sm md:text-base">Instant lead alert & routing</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-green-400 text-lg md:text-xl mt-1">✅</span>
                          <p className="text-slate-300 text-sm md:text-base">Automated 3-touch follow-up (3, 7, 14 days)</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-green-400 text-lg md:text-xl mt-1">✅</span>
                          <p className="text-slate-300 text-sm md:text-base">Calendar-integrated booking flow</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-green-400 text-lg md:text-xl mt-1">✅</span>
                          <p className="text-slate-300 text-sm md:text-base">AI-powered pre-qualification form</p>
                        </div>
                      </div>
                    </div>

                    {/* The Results */}
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/30 rounded-xl p-6 md:p-8 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">
                        The Results
                      </h3>
                      <div className="space-y-3 md:space-y-4">
                        <div className="flex items-start space-x-3">
                          <span className="text-blue-400 text-lg md:text-xl mt-1">🔹</span>
                          <p className="text-slate-300 text-sm md:text-base">32% more demos booked</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-blue-400 text-lg md:text-xl mt-1">🔹</span>
                          <p className="text-slate-300 text-sm md:text-base">5–7 hours saved weekly</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-blue-400 text-lg md:text-xl mt-1">🔹</span>
                          <p className="text-slate-300 text-sm md:text-base">100% CRM sync—zero manual entry</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-blue-400 text-lg md:text-xl mt-1">🔹</span>
                          <p className="text-slate-300 text-sm md:text-base">Zero new tools added</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Image Placeholder */}
                  <div className="flex items-center order-1 lg:order-2">
                    <motion.div 
                      className="w-full aspect-[4/3] bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700/50 overflow-hidden"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <motion.div
                          initial={{ opacity: 0.7 }}
                          whileHover={{ opacity: 1 }}
                          className="relative z-10 text-center"
                        >
                          <div className="text-3xl md:text-4xl mb-4">📊</div>
                          <p className="text-sm md:text-base">Sales Snapshot</p>
                          <p className="text-xs text-gray-500">Case Study Visual</p>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <Link 
                    href="/case-studies"
                    className="inline-block bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Read Full Case Study →
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Testimonial Carousel Section */}
          <section className="py-12 md:py-20 bg-black">
            <div className="container mx-auto px-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto"
              >
                {/* Header */}
                <div className="text-center mb-8 md:mb-12">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                    What Our Clients Say
                  </h2>
                  <p className="text-lg md:text-xl text-slate-300">
                    Real results from real businesses using ActivateAI
                  </p>
                </div>

                {/* Testimonial Carousel */}
                <div className="relative overflow-hidden">
                  <div 
                    className="flex transition-transform duration-1000 ease-in-out" 
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {/* Testimonial 1 & 2 */}
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 min-w-full">
                      <div className="flex-1 bg-gray-800/50 backdrop-blur-sm border border-blue-500/30 rounded-xl p-4 md:p-6 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                        <div className="text-blue-400 text-xl md:text-2xl mb-3 md:mb-4">&quot;</div>
                        <p className="text-slate-300 mb-3 md:mb-4 italic text-sm md:text-base">
                          I didn&apos;t have to change a single thing. They worked around how I already run my business. I didn&apos;t have to install new tools or learn anything new—things just started getting done.
                        </p>
                        <div className="text-blue-400 font-semibold text-sm md:text-base">
                          — Maya G., Nutrition Coach
                        </div>
                      </div>
                      <div className="flex-1 bg-gray-800/50 backdrop-blur-sm border border-green-500/30 rounded-xl p-4 md:p-6 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                        <div className="text-green-400 text-xl md:text-2xl mb-3 md:mb-4">&quot;</div>
                        <p className="text-slate-300 mb-3 md:mb-4 italic text-sm md:text-base">
                          My leads actually get followed up now. Before ActivateAI, I&apos;d lose track of half the people who reached out. Now it&apos;s all automated, and I just show up to the calls.
                        </p>
                        <div className="text-green-400 font-semibold text-sm md:text-base">
                          — Andre L., Independent Realtor
                        </div>
                      </div>
                    </div>

                    {/* Testimonial 3 & 4 */}
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 min-w-full">
                      <div className="flex-1 bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-4 md:p-6 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                        <div className="text-purple-400 text-xl md:text-2xl mb-3 md:mb-4">&quot;</div>
                        <p className="text-slate-300 mb-3 md:mb-4 italic text-sm md:text-base">
                          It feels like I hired an assistant—without the cost. Messages get answered, appointments get booked, and I can finally focus on the work I care about.
                        </p>
                        <div className="text-purple-400 font-semibold text-sm md:text-base">
                          — Sarah K., Freelance Designer
                        </div>
                      </div>
                      <div className="flex-1 bg-gray-800/50 backdrop-blur-sm border border-orange-500/30 rounded-xl p-4 md:p-6 shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                        <div className="text-orange-400 text-xl md:text-2xl mb-3 md:mb-4">&quot;</div>
                        <p className="text-slate-300 mb-3 md:mb-4 italic text-sm md:text-base">
                          The setup was so smooth. They asked about my business, I told them how I work, and they just made everything work better. No learning curve at all.
                        </p>
                        <div className="text-orange-400 font-semibold text-sm md:text-base">
                          — Mike R., Small Business Owner
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Dots */}
                  <div className="flex justify-center mt-6 md:mt-8 space-x-2">
                    <button
                      onClick={() => showSlide(0)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        currentSlide === 0 ? 'bg-blue-500' : 'bg-gray-600'
                      }`}
                    />
                    <button
                      onClick={() => showSlide(1)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        currentSlide === 1 ? 'bg-blue-500' : 'bg-gray-600'
                      }`}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-8 md:py-12 bg-black">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto text-center"
              >
                <div className="bg-blue-900/20 backdrop-blur-md rounded-2xl border border-blue-400/30 shadow-2xl shadow-blue-500/10 p-6 md:p-8"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 197, 253, 0.05) 50%, rgba(59, 130, 246, 0.1) 100%)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)'
                  }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                    What Are You Ready to Offload?
                  </h2>
                  <p className="text-lg md:text-xl text-slate-300 mb-6 md:mb-8 px-4">
                    Embrace convenience by activating AI for your business—on your terms, in your time. <br className="hidden md:block" /> You weren&apos;t meant to do it all yourself.
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    See What&apos;s Possible →
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-12 md:py-20 bg-black">
            <FAQSection />
          </section>

        </div>
      </>
    </PageTransition>
  );
} 
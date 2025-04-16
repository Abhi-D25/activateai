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
import QuizButton from './components/QuizButton';
import FuturisticText from './components/FuturisticText';
import ParticleBackground from '../app/components/ParticleBackground';

export default function Home() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-50" />
        <ParticleBackground />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 min-h-screen flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl font-bold text-blue-400 mb-16 md:hidden"
          >
            ActivateAI
          </motion.h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div>
              <FuturisticText
                text="Activate Your Business Today"
                className="text-3xl sm:text-4xl font-bold text-white mb-6"
                glowColor="#3b82f6"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="text-xl text-slate-300 mb-8"
              >
                At ActivateAI, we make artificial intelligence accessible to small and medium sized businesses. Our mission is to simplify AI adoption with tailored, practical solutions that improve efficiency, cut costs, and drive growth.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                className="flex justify-center sm:justify-start"
              >
                <QuizButton />
              </motion.div>
            </div>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div
                className="aspect-square bg-blue-50 rounded-2xl relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/hero.webp"
                  alt="AI business solutions illustration"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Case Studies Section */}
      <CaseStudiesSection />

      {/* Testimonials Section */}
      <TestimonialsCarousel />
    </div>
  );
} 
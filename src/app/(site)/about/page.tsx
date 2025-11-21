'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  LightBulbIcon, 
  ChartBarIcon, 
  UserGroupIcon 
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import FuturisticText from '@/app/components/FuturisticText';
import ScrollReveal from '@/app/components/ScrollReveal';
import QuizButton from '@/app/components/QuizButton';

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen">
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 px-4">
            <FuturisticText
              text="About ActivateAI"
              className="text-3xl sm:text-5xl font-bold text-white mb-6" // Smaller text on mobile
              glowColor="#3b82f6"
            />
            <motion.div
              initial={{ 
                opacity: 0,
                y: 20,
                filter: 'blur(8px)'
              }}
              animate={{ 
                opacity: 1,
                y: 0,
                filter: 'blur(0px)'
              }}
              transition={{ 
                duration: 1.2,
                delay: 0.3,
                opacity: { duration: 0.8 },
                y: { 
                  type: "spring",
                  damping: 20,
                  stiffness: 100
                },
                filter: { duration: 1 }
              }}
              className="text-xl text-slate-300 mx-auto px-4" // Removed mr-24 and added mx-auto with padding
            >
              We&apos;re on a mission to democratize AI for small and medium businesses
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-24">
            <div className="relative aspect-square">
              <Image
                src="/team.webp"
                alt="ActivateAI team"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div>
              <FuturisticText
                text="Our Story"
                className="text-3xl font-bold text-white mb-6"
                glowColor="#3b82f6"
                delay={0.4}
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-slate-300 mb-6"
              >
                Founded in 2023, ActivateAI emerged from a simple observation: while large corporations were leveraging AI to transform their operations, small and medium businesses were being left behind due to the complexity and cost of AI implementation.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-slate-300"
              >
                We believe that AI should be accessible to businesses of all sizes. Our team of AI experts and business consultants work together to create practical, cost-effective AI solutions that deliver real results for our clients.
              </motion.p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-24">
            <div className="bg-slate-800 p-6 sm:p-8 rounded-xl">
              <FuturisticText
                text="Our Mission"
                className="text-2xl font-bold text-white mb-4"
                glowColor="#3b82f6"
                delay={0.9}
              />
              <p className="text-slate-300">
                To empower small and medium businesses with AI solutions that drive growth, improve efficiency, and create competitive advantages.
              </p>
            </div>
            <div className="bg-slate-800 p-6 sm:p-8 rounded-xl">
              <FuturisticText
                text="Our Vision"
                className="text-2xl font-bold text-white mb-4"
                glowColor="#3b82f6"
                delay={1.1}
              />
              <p className="text-slate-300">
                A world where every business, regardless of size, can harness the power of AI to achieve their full potential.
              </p>
            </div>
            <div className="bg-slate-800 p-6 sm:p-8 rounded-xl">
              <FuturisticText
                text="Our Values"
                className="text-2xl font-bold text-white mb-4"
                glowColor="#3b82f6"
                delay={1.3}
              />
              <p className="text-slate-300">
                Innovation, accessibility, and practical results drive everything we do. We believe in creating solutions that work for real businesses.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
          <ScrollReveal animation="slideUp" className="text-center mb-16">
              <h2 className="section-title">Join Us on Our Journey</h2>
              <p className="text-slate-400"> Be part of the AI revolution in small business </p>
          </ScrollReveal>
          <QuizButton />
          </div>
        </div>
      </section>
    </div>
  );
} 
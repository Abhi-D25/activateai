'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  LightBulbIcon, 
  ChartBarIcon, 
  UserGroupIcon 
} from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen">
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About ActivateAI
            </h1>
            <p className="text-xl text-slate-300">
              We&apos;re on a mission to democratize AI for small and medium businesses
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative aspect-square">
              <Image
                src="/about-hero.webp"
                alt="ActivateAI team"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-slate-300 mb-6">
                Founded in 2023, ActivateAI emerged from a simple observation: while large corporations were leveraging AI to transform their operations, small and medium businesses were being left behind due to the complexity and cost of AI implementation.
              </p>
              <p className="text-slate-300">
                We believe that AI should be accessible to businesses of all sizes. Our team of AI experts and business consultants work together to create practical, cost-effective AI solutions that deliver real results for our clients.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="bg-slate-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-slate-300">
                To empower small and medium businesses with AI solutions that drive growth, improve efficiency, and create competitive advantages.
              </p>
            </div>
            <div className="bg-slate-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-slate-300">
                A world where every business, regardless of size, can harness the power of AI to achieve their full potential.
              </p>
            </div>
            <div className="bg-slate-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
              <p className="text-slate-300">
                Innovation, accessibility, and practical results drive everything we do. We believe in creating solutions that work for real businesses.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Join Us on Our Journey</h2>
            <p className="text-xl text-slate-300 mb-8">
              Be part of the AI revolution in small business
            </p>
            <a href="/contact" className="btn-primary text-lg px-8 py-4">
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  LightBulbIcon, 
  ChartBarIcon, 
  UserGroupIcon 
} from '@heroicons/react/24/outline';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              About ActivateAI
            </h1>
            <p className="text-xl text-slate-600">
              We're on a mission to make AI accessible and practical for small and medium businesses, helping them thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6">
                At ActivateAI, we believe that artificial intelligence should be accessible to businesses of all sizes. Our mission is to help small and medium businesses leverage AI technology to improve their operations, increase efficiency, and drive growth.
              </p>
              <p className="text-lg text-slate-600">
                We understand that implementing AI can be overwhelming for non-technical business owners. That's why we focus on making the process simple, practical, and results-driven.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square bg-blue-50 rounded-2xl"></div>
              {/* Placeholder for mission image */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <LightBulbIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-slate-600">
                We stay at the forefront of AI technology to bring the best solutions to our clients.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <ChartBarIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Results-Driven</h3>
              <p className="text-slate-600">
                We focus on measurable outcomes and tangible business improvements.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <UserGroupIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Partnership</h3>
              <p className="text-slate-600">
                We work closely with our clients to ensure their success is our success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Team</h2>
            <p className="section-subtitle">
              Meet the experts behind ActivateAI
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm text-center"
            >
              <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-1">John Smith</h3>
              <p className="text-blue-600 mb-2">CEO & Founder</p>
              <p className="text-slate-600">
                15+ years of experience in AI and business transformation.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm text-center"
            >
              <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
              <p className="text-blue-600 mb-2">Head of Solutions</p>
              <p className="text-slate-600">
                Expert in implementing AI solutions for SMBs.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm text-center"
            >
              <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-1">Michael Chen</h3>
              <p className="text-blue-600 mb-2">Technical Lead</p>
              <p className="text-slate-600">
                Specializes in custom AI development and integration.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 
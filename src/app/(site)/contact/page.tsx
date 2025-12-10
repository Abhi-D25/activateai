// src/app/contact/page.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  GlobeAltIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline';
import ButtonAnimation from '@/app/components/ButtonAnimation';
import PageTransition from '@/app/components/PageTransition';
import ParticleBackground from '@/app/components/ParticleBackground';
import type { ContactFormData, ApiResponse } from '@/types/forms';

const INDUSTRIES = [
  'Professional Services',
  'Spa & Wellness',
  'Restaurant & Food Service',
  'Dental Clinic',
  'Medical Practice',
  'Legal Services',
  'Real Estate',
  'Home Services',
  'Salon & Beauty',
  'Fitness & Gym',
  'Automotive Services',
  'Financial Services',
  'Other'
];

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    industry: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.company || !formData.website || !formData.message) {
      setFormError('Name, email, phone, company, website, and message are required');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setFormError('');
    setFormSuccess('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data: ApiResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form');
      }

      if (data.success) {
        setFormSuccess(data.message);
        // Reset form data
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          website: '',
          industry: '',
          message: ''
        });
      } else {
        setFormError(data.message || 'Failed to submit form');
      }
    } catch (err) {
      console.error('Error submitting contact form:', err);
      setFormError(err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition variant="slideUp">
      <div className="bg-black min-h-screen">
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 gradient-bg opacity-30" />
          <ParticleBackground />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
                Let&apos;s <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">Transform</span> Your Business
              </h1>
              <p className="text-xl text-slate-300">
                Ready to embrace AI? We&apos;re here to help. Reach out and let&apos;s start the conversation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              {/* Light Blue Glass Container */}
              <div
                className="bg-blue-900/20 backdrop-blur-md rounded-2xl border border-blue-400/30 shadow-2xl shadow-blue-500/10 p-6 sm:p-8"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 197, 253, 0.05) 50%, rgba(59, 130, 246, 0.1) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)'
                }}
              >
                {formSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center"
                  >
                    {formSuccess}
                  </motion.div>
                )}

                {formError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center"
                  >
                    {formError}
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                      Company <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-white mb-2">
                      Website <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="example.com"
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-white mb-2">
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-slate-800 text-slate-400">Select your industry</option>
                      {INDUSTRIES.map((industry) => (
                        <option key={industry} value={industry} className="bg-slate-800 text-white">
                          {industry}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    ></textarea>
                  </div>
                  <ButtonAnimation
                    type="submit"
                    className="w-full"
                    variant="secondary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </ButtonAnimation>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              <motion.div
                className="text-center bg-gradient-to-br from-blue-900/30 to-blue-800/20 backdrop-blur-md rounded-2xl border border-blue-400/30 shadow-xl p-6 hover:border-blue-400/60 transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)" }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <EnvelopeIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a href="mailto:info@acti-vate.ai" className="text-blue-400 hover:text-blue-300 transition-colors">
                  info@acti-vate.ai
                </a>
              </motion.div>
              <motion.div
                className="text-center bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-md rounded-2xl border border-purple-400/30 shadow-xl p-6 hover:border-purple-400/60 transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 0 30px rgba(168, 85, 247, 0.3)" }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+19724768582" className="text-purple-400 hover:text-purple-300 transition-colors">
                  +1 (972) 476-8582
                </a>
              </motion.div>
              <motion.div
                className="text-center bg-gradient-to-br from-green-900/30 to-green-800/20 backdrop-blur-md rounded-2xl border border-green-400/30 shadow-xl p-6 hover:border-green-400/60 transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 0 30px rgba(34, 197, 94, 0.3)" }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPinIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                <p className="text-green-400">Wherever You Are</p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
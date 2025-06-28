// src/app/contact/page.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon 
} from '@heroicons/react/24/outline';
import ButtonAnimation from '../components/ButtonAnimation';
import PageTransition from '../components/PageTransition';
import type { ContactFormData, ApiResponse } from '@/types/forms';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Name, email and message are required');
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
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h1 
                className="text-4xl sm:text-5xl font-bold text-white mb-6"
                style={{
                  textShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3), 0 0 60px rgba(59, 130, 246, 0.1)'
                }}
              >
                Contact Us
              </h1>
              <p className="text-xl text-slate-300">
                Get in touch to learn how we can help your business
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
                className="bg-blue-900/20 backdrop-blur-md rounded-2xl border border-blue-400/30 shadow-2xl shadow-blue-500/10 p-8"
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
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
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
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              <div 
                className="text-center bg-blue-900/20 backdrop-blur-md rounded-2xl border border-blue-400/30 shadow-2xl shadow-blue-500/10 p-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 197, 253, 0.05) 50%, rgba(59, 130, 246, 0.1) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)'
                }}
              >
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-slate-300">info@activateai.com</p>
              </div>
              <div 
                className="text-center bg-blue-900/20 backdrop-blur-md rounded-2xl border border-blue-400/30 shadow-2xl shadow-blue-500/10 p-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 197, 253, 0.05) 50%, rgba(59, 130, 246, 0.1) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)'
                }}
              >
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-slate-300">+1 (972) 754-1499</p>
              </div>
              <div 
                className="text-center bg-blue-900/20 backdrop-blur-md rounded-2xl border border-blue-400/30 shadow-2xl shadow-blue-500/10 p-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 197, 253, 0.05) 50%, rgba(59, 130, 246, 0.1) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)'
                }}
              >
                <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                <p className="text-slate-300">Wherever You Are</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
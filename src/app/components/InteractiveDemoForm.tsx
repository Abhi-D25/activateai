'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, UserIcon, CalendarIcon, CheckCircleIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

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

export default function InteractiveDemoForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    industry: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Call both webhooks in parallel
      const [demoCallResponse, emailResponse] = await Promise.all([
        fetch('/api/demo-call', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            industry: formData.industry,
          })
        }),
        fetch('https://cartersunny.app.n8n.cloud/webhook/send_email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            industry: formData.industry,
          })
        })
      ]);

      const demoCallData = await demoCallResponse.json();

      if (!demoCallResponse.ok) {
        throw new Error(demoCallData.message || 'Failed to schedule demo call');
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(error instanceof Error ? error.message : 'Failed to schedule demo call. Please try again.');
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Video-like Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-emerald-600/20 to-teal-600/20 rounded-3xl blur-xl animate-pulse" />

        <motion.div
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative bg-gradient-to-br from-green-900/60 to-emerald-900/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-green-500/50 shadow-2xl"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center shadow-lg"
          >
            <CheckCircleIcon className="w-10 h-10 text-white stroke-[2.5]" />
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center"
          >
            You&apos;re All Set!
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-green-200 text-center mb-6 text-sm"
          >
            Here&apos;s what happens next:
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-3 mb-6"
          >
            <div className="flex items-start gap-3 bg-green-500/10 border border-green-400/20 rounded-xl p-3">
              <div className="flex-shrink-0 mt-0.5">
                <PhoneIcon className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-green-300 mb-0.5">Incoming Call</h4>
                <p className="text-green-100 text-sm leading-snug">
                  <strong>Axel</strong>, our AI Rep, will call you in 30 seconds. Ask him anything about ActivateAI!
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-green-500/10 border border-green-400/20 rounded-xl p-3">
              <div className="flex-shrink-0 mt-0.5">
                <EnvelopeIcon className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-green-300 mb-0.5">Check Your Inbox</h4>
                <p className="text-green-100 text-sm leading-snug">
                  You&apos;ll receive an email with details about our services.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-green-500/10 border border-green-400/20 rounded-xl p-3">
              <div className="flex-shrink-0 mt-0.5">
                <CalendarIcon className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-green-300 mb-0.5">Book Through Axel</h4>
                <p className="text-green-100 text-sm leading-snug">
                  Like what you hear? Schedule an appointment directly through him.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="border-t border-green-400/20 pt-4"
          >
            <p className="text-green-200 text-center mb-3 text-xs">
              Or skip the call and book now:
            </p>
            <a
              href="/book-appointment"
              className="block w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-bold text-base hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
            >
              Book an Appointment
            </a>
          </motion.div>
        </motion.div>

        {/* Animated Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-3xl opacity-20 blur-2xl -z-10"
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Video-like Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-3xl blur-xl animate-pulse" />

      <div className="relative bg-gradient-to-br from-blue-900/60 to-purple-900/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-blue-500/50 shadow-2xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-6"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center shadow-lg">
              <PhoneIcon className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Get a call <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">RIGHT NOW!</span>
          </h3>
          <p className="text-base sm:text-lg text-slate-300 mb-2">
            Know more about ActivateAI through a live call!
          </p>
          <p className="text-base sm:text-lg text-blue-300 font-semibold">
            BTW Your business can have this too! 👀
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
              Your Name
            </label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-11 pr-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all outline-none"
                placeholder="John Doe"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label htmlFor="phone" className="block text-sm font-semibold text-slate-300 mb-2">
              Phone Number
            </label>
            <div className="relative">
              <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full pl-11 pr-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all outline-none"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
              Email Address
            </label>
            <div className="relative">
              <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-11 pr-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all outline-none"
                placeholder="john@example.com"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <label htmlFor="industry" className="block text-sm font-semibold text-slate-300 mb-2">
              Industry
            </label>
            <div className="relative">
              <BriefcaseIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <select
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                required
                className="w-full pl-11 pr-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all outline-none appearance-none cursor-pointer"
              >
                <option value="" disabled className="bg-gray-900 text-slate-400">Select your industry</option>
                {INDUSTRIES.map((industry) => (
                  <option key={industry} value={industry} className="bg-gray-900 text-white">
                    {industry}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Get Your Demo Call Now'
            )}
          </motion.button>
        </form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xs text-slate-400 text-center mt-4"
        >
          By submitting, you agree to receive a demo call from ActivateAI
        </motion.p>
      </div>

      {/* Animated Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl opacity-20 blur-2xl -z-10"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}

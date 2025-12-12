'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { PhoneIcon, EnvelopeIcon, UserIcon, CalendarIcon, CheckCircleIcon, ShieldCheckIcon, GiftIcon } from '@heroicons/react/24/outline';

export default function GetCallForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Normalize phone number to 1XXXXXXXXXX format
  const normalizePhoneNumber = (phone: string): string => {
    // Remove all non-digit characters
    const digits = phone.replace(/\D/g, '');

    // If empty, return as is
    if (!digits) return phone;

    // If it already starts with 1 and has 11 digits, return as is
    if (digits.length === 11 && digits.startsWith('1')) {
      return digits;
    }

    // If it has 10 digits (US number without country code), prepend 1
    if (digits.length === 10) {
      return `1${digits}`;
    }

    // If it has 11 digits but doesn't start with 1, take last 10 and prepend 1
    if (digits.length === 11 && !digits.startsWith('1')) {
      return `1${digits.slice(-10)}`;
    }

    // If it has more than 11 digits, take the last 11 if it starts with 1, otherwise last 10 + 1
    if (digits.length > 11) {
      const last11 = digits.slice(-11);
      if (last11.startsWith('1')) {
        return last11;
      }
      // Take last 10 digits and prepend 1
      return `1${digits.slice(-10)}`;
    }

    // For cases with less than 10 digits, return as is (invalid format, backend will handle)
    return digits;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Normalize phone number before sending
      const normalizedPhone = normalizePhoneNumber(formData.phone);

      const response = await fetch('/api/get-call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: normalizedPhone,
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit call request');
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitting(false);
        if (containerRef.current) {
          containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 1000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(error instanceof Error ? error.message : 'Failed to submit call request. Please try again.');
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
            transition={{ delay: 0.55 }}
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
            transition={{ delay: 0.7 }}
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

  const BUSINESS_PHONE = '+19724768582'; // Business phone number

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-full flex flex-col overflow-hidden p-3 sm:p-4"
    >
      {/* Video-like Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-3xl blur-xl" />

      <div className="relative bg-gradient-to-br from-blue-900/60 to-purple-900/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-blue-500/50 shadow-2xl overflow-visible w-full h-full flex flex-col">
        {/* Badges */}
        <div className="absolute -top-1.5 -left-1.5 sm:-top-2 sm:-left-2 bg-green-500/20 backdrop-blur-md border border-green-500/30 text-green-300 text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full shadow-lg flex items-center gap-1 z-30">
          <ShieldCheckIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
          <span className="hidden xs:inline">HIPAA & SOC2 Compliant</span>
          <span className="xs:hidden">HIPAA</span>
        </div>

        <motion.div
          animate={{ opacity: [1, 0.75, 1], scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-purple-500/20 backdrop-blur-md border border-purple-500/30 text-purple-300 text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg flex items-center gap-1 sm:gap-2 z-30"
        >
          <GiftIcon className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="hidden sm:inline">1 Month Free Trial</span>
          <span className="sm:hidden">Free Trial</span>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-3 sm:mb-4 mt-6 sm:mt-7"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white mb-1 sm:mb-2">
            Get one for your Business Now!
          </h2>
        </motion.div>

        {/* Inbound Section */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-3 sm:mb-4"
        >
          <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">
            Call to Try the AI Receptionist out
          </h3>
          <motion.a
            href={`tel:${BUSINESS_PHONE}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-bold text-sm sm:text-base hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            Call Now
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div className="relative my-3 sm:my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-500/50"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-blue-900/60 px-3 sm:px-4 text-xs sm:text-sm text-slate-400 font-semibold">OR</span>
          </div>
        </div>

        {/* Outbound Section */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-2 sm:mb-3"
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
            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-1 sm:mb-2 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center shadow-lg">
              <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
          </motion.div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">
            Get a Call <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Right Now!</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mb-1">
            Axel, our AI Employee will call you shortly to discuss more about ActivateAI.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1">
              Your Name
            </label>
            <div className="relative">
              <UserIcon className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-3 py-2 mb-2 sm:mb-3 text-sm bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all outline-none"
                placeholder="John Doe"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-0"
          >
            <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 mb-1">
              Phone Number
            </label>
            <div className="relative">
              <PhoneIcon className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-3 py-2 mb-2 sm:mb-3 text-sm bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all outline-none"
                placeholder="+1 (972) 476-8582"
              />
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-bold text-sm sm:text-base hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed mt-2"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Get a Call'
            )}
          </motion.button>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-[10px] sm:text-xs text-slate-400 text-center mt-1"
          >
            By submitting, you agree to receive a call from ActivateAI
          </motion.p>
        </form>
      </div>

      {/* Animated Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl opacity-20 blur-2xl -z-10 overflow-hidden"
        style={{ 
          transform: 'scale(1)',
          willChange: 'opacity'
        }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
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


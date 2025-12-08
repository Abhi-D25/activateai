'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, CheckCircleIcon, PlayIcon } from '@heroicons/react/24/outline';
import { Service } from '@/data/services';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
}

// Services that have live demos on the Solutions page
const servicesWithDemo = ['lead-manager', 'website-modernization'];

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  if (!service) return null;

  const hasDemo = servicesWithDemo.includes(service.id);
  const demoParam = service.id === 'lead-manager' ? 'voice-agent' : 'website-modernization';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          />
          <div className="fixed inset-0 z-[70] flex items-start justify-center p-4 pt-24 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-[95%] md:w-full md:max-w-4xl lg:max-w-5xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto max-h-[85vh] flex flex-col"
            >
              {/* Header */}
              <div className={`relative h-32 sm:h-40 bg-gradient-to-r ${service.gradient}`}>
                {service.image && (
                  <>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-60`} />
                  </>
                )}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-sm z-10"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
                <div className="absolute -bottom-8 left-8 p-4 bg-slate-900 rounded-xl border border-slate-700 shadow-lg z-10">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-8 pt-12 overflow-y-auto custom-scrollbar flex-1">
                <h2 className="text-3xl font-bold text-white mb-2">{service.title}</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Overview</h3>
                    <p className="text-slate-300 leading-relaxed">
                      {service.fullDescription || service.description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Features</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-slate-300">
                            <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {service.benefits && (
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Benefits</h3>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start text-slate-300">
                              <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                                <span className="w-2 h-2 rounded-full bg-green-500" />
                              </div>
                              <span className="text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Desktop Footer (Scrolls with content) */}
                <div className="mt-8 pt-8 border-t border-slate-800 hidden md:flex justify-end items-center">
                  <button
                    onClick={onClose}
                    className="px-6 py-2 text-slate-400 hover:text-white transition-colors mr-4"
                  >
                    Close
                  </button>
                  {hasDemo && (
                    <Link
                      href={`/solutions?demo=${demoParam}`}
                      onClick={onClose}
                      className="px-6 py-2 bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 rounded-lg font-semibold transition-colors mr-4 inline-flex items-center"
                    >
                      <PlayIcon className="w-5 h-5 mr-2" />
                      Try it Yourself
                    </Link>
                  )}
                  <a
                    href="/contact"
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors shadow-lg shadow-blue-900/20"
                  >
                    Get Started
                  </a>
                </div>
              </div>

              {/* Mobile Sticky Footer */}
              <div className="p-4 border-t border-slate-800 bg-slate-900 md:hidden shrink-0 z-20">
                <div className="flex flex-col gap-3">
                  {hasDemo && (
                    <Link
                      href={`/solutions?demo=${demoParam}`}
                      onClick={onClose}
                      className="px-6 py-2 bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                    >
                      <PlayIcon className="w-5 h-5 mr-2" />
                      Try it Yourself
                    </Link>
                  )}
                  <div className="flex justify-end">
                    <button
                      onClick={onClose}
                      className="px-6 py-2 text-slate-400 hover:text-white transition-colors mr-4"
                    >
                      Close
                    </button>
                    <a
                      href="/contact"
                      className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors shadow-lg shadow-blue-900/20"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}


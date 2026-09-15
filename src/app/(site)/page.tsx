'use client';

import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import PageTransition from '@/app/components/PageTransition';
import FAQSection from '@/app/components/FAQSection';
import HeroSection from '@/app/components/HeroSection';
import ProcessSection from '@/app/components/ProcessSection';
import ParticleBackground from '@/app/components/ParticleBackground';
import ClientChannelsBanner from '@/components/ClientChannelsBanner';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

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
      <div className="bg-black">
        <HeroSection />
        
        {/* Channels Carousel */}
        <ClientChannelsBanner />

        <ProcessSection />

        {/* Testimonials Section */}
        <motion.section
          className="relative py-20 bg-slate-950"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
          <ParticleBackground />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  What Our Clients Say
                </h2>
                <p className="text-xl text-slate-400">
                  Real results from real businesses
                </p>
              </div>

              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-1000 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {/* Testimonial 1 & 2 */}
                  <div className="flex flex-col md:flex-row gap-6 min-w-full">
                    <motion.div
                      className="flex-1 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 shadow-xl hover:border-blue-500/30 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="text-blue-400 text-4xl mb-4">&quot;</div>
                      <p className="text-slate-300 mb-4 italic text-lg">
                        I didn&apos;t have to change a single thing. They worked around how I already run my business. Things just started getting done.
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xl mr-4 border border-blue-500/30">
                          M
                        </div>
                        <div>
                          <div className="text-white font-semibold">Maya G.</div>
                          <div className="text-slate-400 text-sm">Nutrition Coach</div>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex-1 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 shadow-xl hover:border-blue-500/30 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="text-blue-400 text-4xl mb-4">&quot;</div>
                      <p className="text-slate-300 mb-4 italic text-lg">
                        My leads actually get followed up now. Before, I&apos;d lose track of half the people who reached out.
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xl mr-4 border border-blue-500/30">
                          A
                        </div>
                        <div>
                          <div className="text-white font-semibold">Andre L.</div>
                          <div className="text-slate-400 text-sm">Independent Realtor</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Testimonial 3 & 4 */}
                  <div className="flex flex-col md:flex-row gap-6 min-w-full">
                    <motion.div
                      className="flex-1 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 shadow-xl hover:border-blue-500/30 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="text-blue-400 text-4xl mb-4">&quot;</div>
                      <p className="text-slate-300 mb-4 italic text-lg">
                        It feels like I hired an assistant without the cost. Messages get answered, appointments get booked.
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xl mr-4 border border-blue-500/30">
                          S
                        </div>
                        <div>
                          <div className="text-white font-semibold">Sarah K.</div>
                          <div className="text-slate-400 text-sm">Freelance Designer</div>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex-1 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 shadow-xl hover:border-blue-500/30 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="text-blue-400 text-4xl mb-4">&quot;</div>
                      <p className="text-slate-300 mb-4 italic text-lg">
                        The setup was so smooth. They asked about my business and just made everything work better. No learning curve.
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xl mr-4 border border-blue-500/30">
                          M
                        </div>
                        <div>
                          <div className="text-white font-semibold">Mike R.</div>
                          <div className="text-slate-400 text-sm">Small Business Owner</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center mt-8 space-x-3">
                  <button
                    onClick={() => showSlide(0)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === 0 ? 'bg-blue-500 w-8' : 'bg-slate-700'}`}
                    aria-label="Show testimonials 1-2"
                  />
                  <button
                    onClick={() => showSlide(1)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === 1 ? 'bg-blue-500 w-8' : 'bg-slate-700'}`}
                    aria-label="Show testimonials 3-4"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Pricing Preview Section */}
        <motion.section
          className="relative py-20 bg-black"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-black" />
          <ParticleBackground />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Choose the plan that fits your business needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              {/* Get Covered Pack */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-blue-500/30 transition-all duration-300"
                whileHover={{ y: -5 }}
                data-testid="starter-pack-card"
              >
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-2 rounded-bl-2xl rounded-tr-2xl text-sm font-semibold">
                  Getting Started
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 mt-4">Get Covered</h3>
                <div className="mb-6">
                  <span className="text-base sm:text-lg text-slate-400 block mb-1">From</span>
                  <span className="text-4xl sm:text-5xl font-bold text-blue-400">$199</span>
                  <span className="text-slate-400 text-lg sm:text-xl">/mo</span>
                </div>
                <p className="text-slate-300 mb-6">
                  Phone, text, and message follow-up so leads don&apos;t die. Website refresh if you need it.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                    <div className="text-slate-300">
                      <strong className="text-white">Lead Follow-up</strong> - Voice, text, and social message handling so nothing slips
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                    <div className="text-slate-300">
                      <strong className="text-white">Website Refresh</strong> - Modern site if you need one
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                    <span className="text-slate-300">Choose both or pick one to start</span>
                  </li>
                </ul>
                <Link
                  href="/pricing"
                  className="block w-full py-3 text-center bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/20"
                  data-testid="view-starter-details-btn"
                >
                  Get Started
                </Link>
              </motion.div>

              {/* Full Fix Pack */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-blue-500/30 transition-all duration-300"
                whileHover={{ y: -5 }}
                data-testid="pro-pack-card"
              >
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-2 rounded-bl-2xl rounded-tr-2xl text-sm font-semibold">
                  Most Popular
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 mt-4">Full Fix</h3>
                <div className="mb-6">
                  <span className="text-3xl sm:text-4xl font-bold text-blue-400">Custom</span>
                </div>
                <p className="text-slate-300 mb-6">
                  Plug the biggest leaks across calls, follow-up, scheduling, and paperwork. Built around how you already work.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                    <div className="text-slate-300">
                      <strong className="text-white">Advanced Lead Manager</strong> - Full automation and CRM integration
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                    <div className="text-slate-300">
                      <strong className="text-white">Operations Coordinator</strong> - Scheduling, invoicing, and support
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                    <div className="text-slate-300">
                      <strong className="text-white">Knowledge Base</strong> - Centralized business documentation
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                    <span className="text-slate-300">Everything tailored to your business needs</span>
                  </li>
                </ul>
                <Link
                  href="/pricing"
                  className="block w-full py-3 text-center bg-slate-800 border border-slate-700 text-white rounded-xl font-semibold hover:bg-slate-700 hover:border-slate-600 transition-all duration-300"
                  data-testid="view-pro-details-btn"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-12"
            >
              <Link
                href="/pricing"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold text-lg"
              >
                View Detailed Pricing <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          className="relative py-20 bg-slate-950"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black to-slate-950" />
          <ParticleBackground />
          <div className="relative z-10">
            <FAQSection />
          </div>
        </motion.section>

        {/* Final CTA Section */}
        <motion.section
          className="relative py-16 bg-black"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <ParticleBackground />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-slate-800 shadow-2xl p-6 sm:p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Stop the Leaks?
                </h2>
                <p className="text-lg md:text-xl text-slate-300 mb-8">
                  Join hundreds of businesses that have plugged the gaps and started capturing more revenue.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendar.app.google/mzfrpoUiWW9UFvzp6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 text-center font-semibold shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30"
                    data-testid="cta-contact-btn"
                  >
                    Book Free Checkup
                  </a>
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-slate-800 border border-slate-700 text-white rounded-xl hover:bg-slate-700 hover:border-slate-600 transition-all duration-300 text-center font-semibold"
                    data-testid="cta-schedule-btn"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </PageTransition>
  );
}

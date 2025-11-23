'use client';

import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import ParticleBackground from '@/app/components/ParticleBackground';
import PageTransition from '@/app/components/PageTransition';
import FAQSection from '@/app/components/FAQSection';
import InteractiveDemoForm from '@/app/components/InteractiveDemoForm';
import Link from 'next/link';
import { services, Service } from '@/data/services';
import ServiceModal from '@/components/ServiceModal';
import MarketingFeatures from '@/components/MarketingFeatures';
import ClientChannelsBanner from '@/components/ClientChannelsBanner';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const showSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleOpenModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 200); // Clear after animation
  };

  return (
    <>
      <ServiceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        service={selectedService}
      />
      <PageTransition variant="fade">
        <div className="bg-black">

          {/* Hero Section */}
          <section className="relative min-h-screen overflow-hidden flex flex-col justify-center">
            <div className="absolute inset-0" />
            <ParticleBackground />
            <div className="container relative z-10 mx-auto px-4 py-20 flex-grow flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center w-full"
              >
                {/* Left Content - 60% */}
                <div className="lg:col-span-3 text-center lg:text-left order-1 lg:order-1">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
                  >
                    Making AI <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">Effortless</span>
                    <br />for Everyday Businesses
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-slate-300 mb-4"
                  >
                    We help small and medium businesses <span className="text-blue-400 font-semibold">digitize, automate, and integrate AI</span> into their everyday workflows.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-lg text-slate-400 mb-8"
                  >
                    No new apps. No disruption. Just less busywork, and more time for growth.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  >
                    <a
                      href="#offerings"
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
                      data-testid="view-offerings-btn"
                    >
                      Explore Our Offerings
                    </a>
                    <a
                      href="https://calendar.app.google/mzfrpoUiWW9UFvzp6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400/10 transition-all duration-300 text-center font-semibold"
                      data-testid="get-started-btn"
                    >
                      Get Started
                    </a>
                  </motion.div>
                </div>

                {/* Right Content - 40% - Interactive Demo Form */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                  className="lg:col-span-2 w-full order-2 lg:order-2"
                >
                  <InteractiveDemoForm />
                </motion.div>
              </motion.div>
            </div>

            {/* Client Channels Banner */}
            <div className="w-full relative z-20 mt-12">
              <ClientChannelsBanner />
            </div>
          </section>

          {/* Offerings Section */}
          <motion.section
            id="offerings"
            className="relative py-20 backdrop-blur-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
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
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    What We Offer
                  </span>
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Tailored AI solutions designed to help your business work smarter, not harder
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full" />
              </motion.div>

              {/* First Row - 3 Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-8">
                {services.slice(0, 3).map((offering, index) => (
                  <motion.div
                    key={offering.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
                    onClick={() => handleOpenModal(offering)}
                    data-testid={`offering-${offering.id}`}
                  >
                    {/* Image Background */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={offering.image}
                        alt={offering.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
                      <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br ${offering.gradient} flex items-center justify-center shadow-lg`}>
                        <offering.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {offering.title}
                      </h3>
                      <p className="text-slate-300 leading-relaxed">
                        {offering.description}
                      </p>
                      <motion.div
                        className="mt-4 flex items-center text-blue-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ x: 5 }}
                      >
                        Learn More <ArrowRightIcon className="w-5 h-5 ml-2" />
                      </motion.div>
                    </div>

                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${offering.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
                  </motion.div>
                ))}
              </div>

              {/* Second Row - 2 Items (Centered, Upside-down Triangle Layout) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                {services.slice(3, 5).map((offering, index) => (
                  <motion.div
                    key={offering.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
                    onClick={() => handleOpenModal(offering)}
                    data-testid={`offering-${offering.id}`}
                  >
                    {/* Image Background */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={offering.image}
                        alt={offering.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
                      <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br ${offering.gradient} flex items-center justify-center shadow-lg`}>
                        <offering.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {offering.title}
                      </h3>
                      <p className="text-slate-300 leading-relaxed">
                        {offering.description}
                      </p>
                      <motion.div
                        className="mt-4 flex items-center text-blue-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ x: 5 }}
                      >
                        Learn More <ArrowRightIcon className="w-5 h-5 ml-2" />
                      </motion.div>
                    </div>

                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${offering.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Testimonials Section */}
          <motion.section
            className="relative py-20 backdrop-blur-sm"
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
                className="max-w-6xl mx-auto"
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                      What Our Clients Say
                    </span>
                  </h2>
                  <p className="text-xl text-slate-300">
                    Real results from real businesses using ActivateAI
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
                        className="flex-1 bg-gradient-to-br from-blue-900/30 to-blue-800/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 shadow-xl"
                        whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)" }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-blue-400 text-4xl mb-4">&quot;</div>
                        <p className="text-slate-300 mb-4 italic text-lg">
                          I didn&apos;t have to change a single thing. They worked around how I already run my business. Things just started getting done.
                        </p>
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold text-xl mr-4">
                            M
                          </div>
                          <div>
                            <div className="text-blue-400 font-semibold">Maya G.</div>
                            <div className="text-slate-400 text-sm">Nutrition Coach</div>
                          </div>
                        </div>
                      </motion.div>
                      <motion.div
                        className="flex-1 bg-gradient-to-br from-green-900/30 to-green-800/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 shadow-xl"
                        whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(34, 197, 94, 0.3)" }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-green-400 text-4xl mb-4">&quot;</div>
                        <p className="text-slate-300 mb-4 italic text-lg">
                          My leads actually get followed up now. Before ActivateAI, I&apos;d lose track of half the people who reached out.
                        </p>
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center text-white font-bold text-xl mr-4">
                            A
                          </div>
                          <div>
                            <div className="text-green-400 font-semibold">Andre L.</div>
                            <div className="text-slate-400 text-sm">Independent Realtor</div>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Testimonial 3 & 4 */}
                    <div className="flex flex-col md:flex-row gap-6 min-w-full">
                      <motion.div
                        className="flex-1 bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 shadow-xl"
                        whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(168, 85, 247, 0.3)" }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-purple-400 text-4xl mb-4">&quot;</div>
                        <p className="text-slate-300 mb-4 italic text-lg">
                          It feels like I hired an assistant—without the cost. Messages get answered, appointments get booked.
                        </p>
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-xl mr-4">
                            S
                          </div>
                          <div>
                            <div className="text-purple-400 font-semibold">Sarah K.</div>
                            <div className="text-slate-400 text-sm">Freelance Designer</div>
                          </div>
                        </div>
                      </motion.div>
                      <motion.div
                        className="flex-1 bg-gradient-to-br from-orange-900/30 to-orange-800/20 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-6 shadow-xl"
                        whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(249, 115, 22, 0.3)" }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-orange-400 text-4xl mb-4">&quot;</div>
                        <p className="text-slate-300 mb-4 italic text-lg">
                          The setup was so smooth. They asked about my business and just made everything work better. No learning curve.
                        </p>
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center text-white font-bold text-xl mr-4">
                            M
                          </div>
                          <div>
                            <div className="text-orange-400 font-semibold">Mike R.</div>
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
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === 0 ? 'bg-blue-500 w-8' : 'bg-gray-600'
                        }`}
                      aria-label="Show testimonials 1-2"
                    />
                    <button
                      onClick={() => showSlide(1)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === 1 ? 'bg-blue-500 w-8' : 'bg-gray-600'
                        }`}
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
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    Simple, Transparent Pricing
                  </span>
                </h2>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                  Choose the plan that fits your business needs
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                {/* Starter Pack */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative bg-gradient-to-br from-blue-900/30 to-blue-800/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300"
                  whileHover={{ y: -5, boxShadow: "0 0 40px rgba(59, 130, 246, 0.3)" }}
                  data-testid="starter-pack-card"
                >
                  <div className="absolute top-0 right-0 bg-gradient-to-br from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-bl-2xl rounded-tr-2xl text-sm font-semibold">
                    Getting Started
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 mt-4">Starter Pack</h3>
                  <div className="mb-6">
                    <span className="text-base sm:text-lg text-blue-400 block mb-1">Starting at</span>
                    <span className="text-4xl sm:text-5xl font-bold text-blue-400">$199</span>
                    <span className="text-slate-400 text-lg sm:text-xl">/month</span>
                  </div>
                  <p className="text-slate-300 mb-6">
                    Perfect for businesses getting started. Choose one or both services to fit your needs.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                      <div className="text-slate-300">
                        <strong className="text-white">Basic Lead Manager</strong> - AI Receptionist supporting voice, text, and all major social media
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                      <div className="text-slate-300">
                        <strong className="text-white">Website Modernization</strong> - Creation or revamp of your business website
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                      <span className="text-slate-300">Flexible options: Choose both or pick one to start</span>
                    </li>
                  </ul>
                  <Link
                    href="/pricing"
                    className="block w-full py-3 text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    data-testid="view-starter-details-btn"
                  >
                    Get Started
                  </Link>
                </motion.div>

                {/* Pro Pack */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300"
                  whileHover={{ y: -5, boxShadow: "0 0 40px rgba(168, 85, 247, 0.3)" }}
                  data-testid="pro-pack-card"
                >
                  <div className="absolute top-0 right-0 bg-gradient-to-br from-purple-500 to-pink-500 text-white px-4 py-2 rounded-bl-2xl rounded-tr-2xl text-sm font-semibold">
                    Most Popular
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 mt-4">Pro Pack</h3>
                  <div className="mb-6">
                    <span className="text-3xl sm:text-4xl font-bold text-purple-400">Custom Pricing</span>
                  </div>
                  <p className="text-slate-300 mb-6">
                    Complete AI transformation customized to your business. Pricing based on scope.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0" />
                      <div className="text-slate-300">
                        <strong className="text-white">Advanced Lead Manager</strong> - Full automation and CRM integration
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0" />
                      <div className="text-slate-300">
                        <strong className="text-white">Operations Coordinator</strong> - Automated scheduling, invoicing, and support
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0" />
                      <div className="text-slate-300">
                        <strong className="text-white">Knowledge Base</strong> - Centralized business documentation
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0" />
                      <div className="text-slate-300">
                        <strong className="text-white">Business Intelligence</strong> - Custom dashboards and analytics
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0" />
                      <span className="text-slate-300">Everything tailored to your business needs</span>
                    </li>
                  </ul>
                  <Link
                    href="/pricing"
                    className="block w-full py-3 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
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
            className="relative py-20 backdrop-blur-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <ParticleBackground />
            <div className="relative z-10">
              <FAQSection />
            </div>
          </motion.section>

          {/* Final CTA Section */}
          <motion.section
            className="relative py-16"
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
                <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-blue-400/30 shadow-2xl p-6 sm:p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="text-lg md:text-xl text-slate-300 mb-8">
                    Join hundreds of businesses that have activated AI to work smarter, not harder.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/contact"
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
                      data-testid="cta-contact-btn"
                    >
                      Get Started Today
                    </Link>
                    <a
                      href="https://calendar.app.google/mzfrpoUiWW9UFvzp6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400/10 transition-all duration-300 text-center font-semibold"
                      data-testid="cta-schedule-btn"
                    >
                      Schedule a Call
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </div >
      </PageTransition >
    </>
  );
}
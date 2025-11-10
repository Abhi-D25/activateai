'use client';

import { motion } from 'framer-motion';
import { 
  CheckCircleIcon,
  XCircleIcon,
  SparklesIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';
import ParticleBackground from '../components/ParticleBackground';
import PageTransition from '../components/PageTransition';
import Link from 'next/link';
import { useState } from 'react';

export default function Pricing() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const pricingFAQs = [
    {
      question: "What's included in the Starter Pack setup?",
      answer: "The Starter Pack includes complete setup of our Lead Manager system, a professionally designed modern website, basic automation workflows for common business tasks, and ongoing email & chat support. We handle all the technical implementation so you can focus on your business."
    },
    {
      question: "How does custom pricing work for Pro Pack?",
      answer: "Pro Pack pricing is tailored to your specific needs and business size. After a free consultation, we'll assess your requirements and provide a custom quote based on the complexity of workflows, integrations needed, and level of support. Book a call to get your personalized pricing."
    },
    {
      question: "Can I upgrade from Starter to Pro later?",
      answer: "Absolutely! You can start with the Starter Pack and upgrade to Pro Pack at any time as your business grows. We'll seamlessly transition your existing setup and add the advanced features you need."
    },
    {
      question: "Is there a contract or commitment?",
      answer: "We offer flexible month-to-month subscriptions with no long-term contracts. You can cancel anytime, though we're confident you'll love the time and money you save!"
    },
    {
      question: "Do you offer a free trial?",
      answer: "We offer a free consultation where we'll demonstrate how our solutions work specifically for your business. This gives you a clear picture of the value before committing. Contact us to schedule your demo."
    },
    {
      question: "What kind of support do I get?",
      answer: "Starter Pack includes email and chat support during business hours. Pro Pack clients get priority support with a dedicated account manager, faster response times, and phone support. Both plans include technical assistance and ongoing optimization."
    }
  ];

  return (
    <PageTransition variant="fade">
      <div className="bg-black min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 gradient-bg opacity-50" />
          <ParticleBackground />
          <div className="container relative z-10 mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Flexible Plans for <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">Every Stage</span> of Your Business
              </h1>
              <p className="text-xl text-slate-300">
                Start small or go big. Either way, you get the power of AI working for you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section className="relative py-20 bg-gray-900/50 backdrop-blur-sm">
          <ParticleBackground />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              
              {/* Starter Pack */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
                data-testid="starter-pack-pricing"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center">
                    <SparklesIcon className="w-4 h-4 mr-2" />
                    Most Popular
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/30 backdrop-blur-sm rounded-3xl p-8 md:p-10 border-2 border-blue-500/50 hover:border-blue-400/70 transition-all duration-300 h-full shadow-2xl">
                  <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-white mb-4">Starter Pack</h2>
                    <div className="mb-4">
                      <span className="text-6xl font-bold text-blue-400">$199</span>
                      <span className="text-2xl text-slate-400">/month</span>
                    </div>
                    <p className="text-lg text-slate-300">
                      Perfect for new businesses ready to embrace AI automation
                    </p>
                  </div>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <CheckCircleIcon className="w-6 h-6 text-blue-400 mr-2" />
                        What's Included:
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300"><strong className="text-white">Lead Manager:</strong> Automated lead capture, follow-ups, and CRM updates</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300"><strong className="text-white">Website Modernization:</strong> Professional, mobile-responsive design</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300"><strong className="text-white">Basic Automation:</strong> Common workflow automation (scheduling, reminders, etc.)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300"><strong className="text-white">Integration Support:</strong> Connect with your existing tools</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300"><strong className="text-white">Email & Chat Support:</strong> Get help when you need it</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300"><strong className="text-white">2-Day Setup:</strong> Fast implementation to get you started quickly</span>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-blue-500/30">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <XCircleIcon className="w-6 h-6 text-slate-500 mr-2" />
                        Not Included:
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <XCircleIcon className="w-5 h-5 text-slate-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-400">Advanced custom workflows</span>
                        </li>
                        <li className="flex items-start">
                          <XCircleIcon className="w-5 h-5 text-slate-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-400">Business intelligence dashboards</span>
                        </li>
                        <li className="flex items-start">
                          <XCircleIcon className="w-5 h-5 text-slate-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-400">Dedicated account manager</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Link 
                    href="/contact"
                    className="block w-full py-4 text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                    data-testid="get-started-starter-btn"
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>

              {/* Pro Pack */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
                data-testid="pro-pack-pricing"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center">
                    <RocketLaunchIcon className="w-4 h-4 mr-2" />
                    For Growth
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/30 backdrop-blur-sm rounded-3xl p-8 md:p-10 border-2 border-purple-500/50 hover:border-purple-400/70 transition-all duration-300 h-full shadow-2xl">
                  <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-white mb-4">Pro Pack</h2>
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-purple-400">Custom</span>
                      <span className="text-xl text-slate-400 block mt-2">Pricing</span>
                    </div>
                    <p className="text-lg text-slate-300">
                      Tailored solutions designed around your business goals
                    </p>
                  </div>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <CheckCircleIcon className="w-6 h-6 text-purple-400 mr-2" />
                        Everything in Starter, Plus:
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300"><strong className="text-white">Custom AI Workflows:</strong> Tailored automation for your unique processes</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300"><strong className="text-white">Operations Coordinator:</strong> Full onboarding, scheduling, and invoicing automation</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300"><strong className="text-white">Knowledge Base:</strong> Centralized documentation and team knowledge management</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300"><strong className="text-white">Business Intelligence:</strong> Custom dashboards and analytics reporting</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300"><strong className="text-white">Advanced Integrations:</strong> Deep integration with industry-specific software</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300"><strong className="text-white">Dedicated Support Team:</strong> Priority support with dedicated account manager</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300"><strong className="text-white">Strategic Consultation:</strong> Regular check-ins to optimize your AI strategy</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <a 
                      href="https://calendar.app.google/cdb8imp4GAqRnWQT8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-4 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                      data-testid="book-consultation-pro-btn"
                    >
                      Book Free Consultation
                    </a>
                    <Link 
                      href="/contact"
                      className="block w-full py-3 text-center bg-transparent border-2 border-purple-400 text-purple-400 rounded-xl font-semibold hover:bg-purple-400/10 transition-all duration-300"
                      data-testid="contact-pro-btn"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="relative py-20 bg-black">
          <ParticleBackground />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Compare Plans
              </h2>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-4 text-slate-300 font-semibold">Feature</th>
                        <th className="text-center p-4 text-blue-400 font-semibold">Starter Pack</th>
                        <th className="text-center p-4 text-purple-400 font-semibold">Pro Pack</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700/50">
                      <tr>
                        <td className="p-4 text-slate-300">Lead Manager</td>
                        <td className="text-center p-4"><CheckCircleIcon className="w-6 h-6 text-blue-400 mx-auto" /></td>
                        <td className="text-center p-4"><CheckCircleIcon className="w-6 h-6 text-purple-400 mx-auto" /></td>
                      </tr>
                      <tr>
                        <td className="p-4 text-slate-300">Website Modernization</td>
                        <td className="text-center p-4"><CheckCircleIcon className="w-6 h-6 text-blue-400 mx-auto" /></td>
                        <td className="text-center p-4"><CheckCircleIcon className="w-6 h-6 text-purple-400 mx-auto" /></td>
                      </tr>
                      <tr>
                        <td className="p-4 text-slate-300">Basic Automation</td>
                        <td className="text-center p-4"><CheckCircleIcon className="w-6 h-6 text-blue-400 mx-auto" /></td>
                        <td className="text-center p-4"><CheckCircleIcon className="w-6 h-6 text-purple-400 mx-auto" /></td>
                      </tr>
                      <tr>
                        <td className="p-4 text-slate-300">Email & Chat Support</td>
                        <td className="text-center p-4"><CheckCircleIcon className="w-6 h-6 text-blue-400 mx-auto" /></td>
                        <td className="text-center p-4"><CheckCircleIcon className="w-6 h-6 text-purple-400 mx-auto" /></td>
                      </tr>
                      <tr>
                        <td className="p-4 text-slate-300">Custom AI Workflows</td>
                        <td className="text-center p-4"><XCircleIcon className="w-6 h-6 text-slate-500 mx-auto" /></td>
                        <td className="text-center p-4"><CheckCircleIcon className="w-6 h-6 text-purple-400 mx-auto" /></td>
                      </tr>
                      <tr>
                        <td className="p-4 text-slate-300">Operations Coordinator</td>
                        <td className="text-center p-4"><XCircleIcon className="w-6 h-6 text-slate-500 mx-auto" /></td>
                        <td className="text-center p-4"><CheckCircleIcon className="w-6 h-6 text-purple-400 mx-auto" /></td>
                      </tr>
                      <tr>
                        <td className="p-4 text-slate-300">Knowledge Base</td>
                        <td className="text-center p-4"><XCircleIcon className="w-6 h-6 text-slate-500 mx-auto" /></td>
                        <td className="text-center p-4"><CheckCircleIcon className="w-6 h-6 text-purple-400 mx-auto" /></td>
                      </tr>
                      <tr>
                        <td className="p-4 text-slate-300">Business Intelligence</td>
                        <td className="text-center p-4"><XCircleIcon className="w-6 h-6 text-slate-500 mx-auto" /></td>
                        <td className="text-center p-4"><CheckCircleIcon className="w-6 h-6 text-purple-400 mx-auto" /></td>
                      </tr>
                      <tr>
                        <td className="p-4 text-slate-300">Dedicated Account Manager</td>
                        <td className="text-center p-4"><XCircleIcon className="w-6 h-6 text-slate-500 mx-auto" /></td>
                        <td className="text-center p-4"><CheckCircleIcon className="w-6 h-6 text-purple-400 mx-auto" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing FAQ Section */}
        <section className="relative py-20 bg-gray-900/50 backdrop-blur-sm">
          <ParticleBackground />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Pricing FAQs
              </h2>
              <div className="space-y-4">
                {pricingFAQs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300 overflow-hidden"
                  >
                    <button
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors"
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    >
                      <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                      <motion.svg
                        className="w-5 h-5 text-blue-400 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        animate={{ rotate: openFAQ === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: openFAQ === index ? 'auto' : 0,
                        opacity: openFAQ === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <p className="text-slate-300">{faq.answer}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 bg-black">
          <ParticleBackground />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-md rounded-3xl border border-blue-400/30 shadow-2xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-lg md:text-xl text-slate-300 mb-8">
                  Schedule a free consultation to discuss which plan is right for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://calendar.app.google/cdb8imp4GAqRnWQT8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
                  >
                    Book Free Consultation
                  </a>
                  <Link 
                    href="/contact"
                    className="px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400/10 transition-all duration-300 text-center font-semibold"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon, 
  SparklesIcon, 
  UserGroupIcon, 
  ArrowPathIcon,
  LightBulbIcon,
  AcademicCapIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import CaseStudiesSection from './components/CaseStudiesSection';
import ServicesSection from './components/ServicesSection';
import FAQSection from './components/FAQSection';
import QuizButton from './components/QuizButton';
import FuturisticText from './components/FuturisticText';
import ParticleBackground from '../app/components/ParticleBackground';
import { Helmet } from 'react-helmet';
import TypewriterText from './components/TypewriterText';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How long does it take to set up?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most businesses are up and running within 2 days of completing our intake questionnaire. We handle all the technical setup and integration with your existing tools."
                }
              },
              {
                "@type": "Question",
                "name": "Will it work with my existing systems?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! ActivateAI is designed to integrate with the tools you already use. We support all major calendar systems (Google, Outlook, Apple), phone systems, and can connect with most industry-specific software."
                }
              },
              {
                "@type": "Question",
                "name": "What results can I expect in the first 30 days?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most businesses see immediate benefits in three areas: 1) Captured after-hours leads that would have been missed, 2) Reduced time spent on scheduling and admin tasks, and 3) Increased customer satisfaction from faster response times."
                }
              },
              {
                "@type": "Question",
                "name": "How does the AI know my business rules and policies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "During onboarding, we gather your specific business information through our questionnaire. This includes your services, pricing, availability, cancellation policies, and communication style. We train your AI Employees on these rules so they accurately represent your business."
                }
              },
              {
                "@type": "Question",
                "name": "What happens if the AI can't handle a situation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Your AI Employees are programmed to recognize when a situation requires human attention. For complex or unusual requests, the AI will gracefully let the customer know a team member will follow up shortly, and you'll receive an immediate notification with all relevant details."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      <div className="bg-black">
        {/* Hero Section */}
        <section className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0 gradient-bg opacity-50" />
          <ParticleBackground />
          <div className="container relative z-10 mx-auto px-4 py-12 lg:py-40">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-center"
            >
              {/* Left Content - 60% */}
              <div className="lg:col-span-3">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-3xl lg:text-5xl italic text-white mb-6"
                >
                  We empower everyday businesses by making <br />
                  <TypewriterText 
                    text="AI Outcomes Accessible" 
                    className="text-4xl lg:text-5xl font-bold text-blue-600 mb-4 mt-4"
                    speed={90}
                  />
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl text-slate-300 mb-8"
                >
                  Imagine running your business exactly how you&apos;ve always dreamed. <br />
                  Spend your days building relationships, creating extraordinary experiences, and growing your vision and let us handle the repetitive tasks that drain your energy.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 mb-12"
                >
                  <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Watch the transformation
                  </button>
                  <QuizButton />
                </motion.div>
              </div>
              {/* Right Content - 40% */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:col-span-2"
              >
                <div className="aspect-video bg-gray-900/50 rounded-lg backdrop-blur-sm overflow-hidden">
                  <img 
                    src="/hero-video.jpg" 
                    alt="Hero video thumbnail" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Vision Metrics Banner */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16 bg-blue-900/30 rounded-xl p-8 backdrop-blur-sm border border-blue-500/20"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-blue-400">Your Passion</h3>
                  <p className="text-blue-300">becomes your full-time focus</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-blue-400">Every Channel</h3>
                  <p className="text-blue-300">handled with your brand voice</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-blue-400">Zero Changes</h3>
                  <p className="text-blue-300">to how you already work</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-blue-400">Pure Relief</h3>
                  <p className="text-blue-300">from daily administrative burden</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Problem-Solution Section */}
        <section className="relative py-20 bg-gray-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            {/* Problem Part */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-white mb-6 [text-shadow:_0_0_25px_rgba(239,68,68,0.6)]">
                  Great people who get stuck doing busy work...
                </h2>
                <p className="text-xl text-slate-300 mb-8">
                  Whether it&apos;s you or your talented team, too much time is consumed in operational challenges that directly hit your bottom line
                </p>
              </div>
              
              {/* First row - 3 cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                  <div className="text-3xl mb-4">📞</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Revenue walking out the door</h3>
                  <p className="text-slate-300">Potential customers calling when you&apos;re unavailable or offline</p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                  <div className="text-3xl mb-4">📅</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Money lost to scheduling conflicts</h3>
                  <p className="text-slate-300">Double-bookings, last-minute cancellations, and gaps that could have been filled</p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                  <div className="text-3xl mb-4">💻</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Repeat business slipping away</h3>
                  <p className="text-slate-300">Follow-ups that don&apos;t happen and customers who feel forgotten</p>
                </div>
              </div>

              {/* Second row - 2 cards centered */}
              <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
                <div className="lg:col-start-2 lg:col-span-2 bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                  <div className="text-3xl mb-4">😤</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Growth plans on permanent hold</h3>
                  <p className="text-slate-300">Strategic opportunities sacrificed because everyone&apos;s stuck in daily operations</p>
                </div>
                <div className="lg:col-span-2 bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                  <div className="text-3xl mb-4">💸</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Peak hours wasted on admin</h3>
                  <p className="text-slate-300">Your highest-value time consumed by low-value tasks</p>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-xl text-slate-300 italic">
                  You&apos;ve accepted this as &quot;just part of running a business.&quot; But what if it didn&apos;t have to be?
                </p>
              </div>
            </motion.div>

            {/* Solution Part */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-white mb-6 [text-shadow:_0_0_25px_rgba(34,197,94,0.6)]">
                  ...Can now focus on doing what they do best
                </h2>
              </div>
              
              {/* First row - 3 cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                  <div className="text-3xl mb-4">🎨</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Creative energy unleashed</h3>
                  <p className="text-slate-300">Time for innovation, artistry, and the work that energizes you</p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                  <div className="text-3xl mb-4">🤝</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Deeper client relationships</h3>
                  <p className="text-slate-300">Meaningful conversations and connections that drive loyalty</p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                  <div className="text-3xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Strategic growth initiatives</h3>
                  <p className="text-slate-300">New services, expansion plans, and revenue opportunities</p>
                </div>
              </div>
              
              {/* Second row - 2 cards centered */}
              <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
                <div className="lg:col-start-2 lg:col-span-2 bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                  <div className="text-3xl mb-4">💡</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Problem-solving at the highest level</h3>
                  <p className="text-slate-300">Complex challenges that require your unique expertise</p>
                </div>
                <div className="lg:col-span-2 bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                  <div className="text-3xl mb-4">🏆</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Excellence in your craft</h3>
                  <p className="text-slate-300">The specialized work only you and your team can deliver</p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-xl text-slate-300 italic">
                  This is what becomes possible when you team up with Activate AI.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Zero Changes Section */}
        <section className="py-20 bg-gray-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="aspect-video bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700/50 overflow-hidden">
                  <img 
                    src="/demo-video.jpg" 
                    alt="Demo video thumbnail" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Zero Changes to Your Business. Maximum Relief for Your Life.
                </h2>
                <p className="text-xl text-slate-300 mb-8">
                  The biggest misconception about AI? That you need to overhaul everything. The truth? Our dedicated concierge team plugs seamlessly into exactly how you work today—your phone, your calendar, your communication style—and simply lifts the burden.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">What stays exactly the same:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-slate-300">
                        <span className="text-green-500 mr-2">✓</span>
                        Your phone number and existing phone system
                      </li>
                      <li className="flex items-center text-slate-300">
                        <span className="text-green-500 mr-2">✓</span>
                        Your Google/Outlook/Apple calendar
                      </li>
                      <li className="flex items-center text-slate-300">
                        <span className="text-green-500 mr-2">✓</span>
                        Your pricing, policies, and procedures
                      </li>
                      <li className="flex items-center text-slate-300">
                        <span className="text-green-500 mr-2">✓</span>
                        Your brand voice and communication style
                      </li>
                      <li className="flex items-center text-slate-300">
                        <span className="text-green-500 mr-2">✓</span>
                        How you deliver your services
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">What changes completely:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-slate-300">
                        <span className="text-blue-400 mr-2">→</span>
                        Your stress level - No more juggling interruptions
                      </li>
                      <li className="flex items-center text-slate-300">
                        <span className="text-blue-400 mr-2">→</span>
                        Your focus - Deep work on what you love
                      </li>
                      <li className="flex items-center text-slate-300">
                        <span className="text-blue-400 mr-2">→</span>
                        Your availability - For growth and relationships
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-black">
          <FAQSection />
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-blue-900/30 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to grow your business with AI?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Schedule a quick demo to see how ActivateAI can work specifically for your business.
              </p>
              <Link 
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-4 text-lg rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Schedule My Consultation
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
} 
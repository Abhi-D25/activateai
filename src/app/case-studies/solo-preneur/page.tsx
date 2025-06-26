'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import FuturisticText from '../../components/FuturisticText';
import QuizButton from '../../components/QuizButton';

export default function SoloPreneurPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-50" />
        <div className="container relative z-10 mx-auto px-4 py-4 lg:py-40 mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center"
          >
            {/* Left Content - 60% */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <FuturisticText
                  text="Focus on your craft, not your calendar"
                  className="text-4xl lg:text-5xl font-bold text-white mb-6 text-left"
                  glowColor="#60a5fa"
                />
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-slate-300 mb-6"
              >
                Whether you&apos;re perfecting individual sessions or energizing group classes, your talent deserves your full attention. Not split between serving clients and managing the endless details that make it possible.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-slate-300 mb-8"
              >
                You&apos;ve mastered your expertise. Now master your time.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Link href="/contact" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center">
                  Free up my focus
                </Link>
                <QuizButton text="Start the conversation" />
              </motion.div>
            </div>
            {/* Right Content - 40% */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="aspect-video bg-gray-900/50 rounded-lg backdrop-blur-sm border border-gray-700/50">
                {/* Video Placeholder */}
                <div className="w-full h-full flex items-center justify-center text-gray-400 p-4 text-center">
                  <div>
                    <div className="text-2xl mb-2">🎥</div>
                    <div className="text-sm">HERO VIDEO: Montage of solo entrepreneurs focused on their craft while AI handles operations seamlessly</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <FuturisticText
              text="You&apos;re the Expert, the Scheduler, the Follow-up Team, and Everything In Between"
              className="text-3xl font-bold text-white mb-6"
              glowColor="#ef4444"
            />
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              As a solo entrepreneur, you wear every hat in your business. But some of those hats are keeping you from wearing the one that matters most—the expert delivering exceptional results.
            </p>
          </motion.div>

          {/* Pain Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-red-500/30"
            >
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Constant interruptions</h3>
              <p className="text-slate-300">Phone calls during client sessions, text messages while teaching a class—your focus gets fractured just when your clients need you most.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-red-500/30"
            >
              <div className="text-3xl mb-4">🗓️</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Double-booking disasters</h3>
              <p className="text-slate-300">Nothing kills your professional reputation faster than having to tell a client &apos;I&apos;m sorry, I made a mistake with the schedule.&apos;</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-red-500/30"
            >
              <div className="text-3xl mb-4">😤</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Clients left hanging</h3>
              <p className="text-slate-300">That inquiry that came in while you were with someone else sits unanswered for hours. Your reputation for responsiveness starts to slip, one delayed response at a time.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-red-500/30"
            >
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Your expertise buried under admin work</h3>
              <p className="text-slate-300">The skills that made clients choose you get crowded out by the endless tasks of running the business side.</p>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-slate-400 italic text-center mb-16"
          >
            You started your business to share your unique talents with the world. But talent alone isn&apos;t enough when you&apos;re drowning in everything else.
          </motion.p>
        </div>
      </section>

      {/* Two Paths Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <FuturisticText
              text="Two Ways to Serve, One Flexible Solution"
              className="text-3xl font-bold text-white mb-6"
              glowColor="#60a5fa"
            />
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              Solo entrepreneurs typically serve clients in two ways—and many successful businesses blend both approaches. Your AI concierge team adapts to however you choose to structure your services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-8"
            >
              <div className="bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-lg p-4 mb-6">
                <h3 className="text-2xl font-bold">🎯 One Client at a Time Excellence</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Deep, personalized service where every interaction is tailored to the individual client&apos;s needs.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Makeup Artists', 'Wedding Photographers', 'Massage Therapists', 'Personal Chefs', 'Tax Consultants', 'Event Planners'].map((tag) => (
                  <span key={tag} className="bg-slate-700 rounded-full px-3 py-1 text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-white">
                Complete presence and focus during each client interaction, knowing that every inquiry, booking request, and follow-up is being handled professionally while you deliver your expertise without distraction.
              </p>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-8"
            >
              <div className="bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-lg p-4 mb-6">
                <h3 className="text-2xl font-bold">👥 Group Success, Multiplied</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Structured programs, classes, or sessions that serve multiple clients simultaneously with consistent quality.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Dance Instructors', 'Personal Trainers', 'Music Teachers', 'Yoga Instructors', 'Academic Tutors', 'Cooking Classes'].map((tag) => (
                  <span key={tag} className="bg-slate-700 rounded-full px-3 py-1 text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-white">
                Seamless coordination of multiple schedules and communications, allowing you to focus entirely on program delivery while your enrollment, scheduling, and participant management runs smoothly in the background.
              </p>
            </motion.div>
          </div>

          {/* Reality Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6"
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-4">The Reality: Most Successful Solo Entrepreneurs Do Both</h3>
            <p className="text-slate-300">
              A makeup artist teaches classes AND takes bridal clients. A personal trainer runs group fitness AND offers individual sessions. A photographer shoots events AND teaches workshops.
            </p>
            <p className="text-slate-300 mt-4">
              This dual approach multiplies both the opportunities and the operational complexity.
            </p>
            <p className="text-slate-300 mt-4">
              Imagine having a dedicated executive assistant who understands both sides of your business perfectly, handles every customer touchpoint with your level of care, and ensures you never have to choose between serving clients and managing operations again. That&apos;s exactly what your AI concierge team provides.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Concierge Team Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <FuturisticText
              text="Your AI Concierge Team in Action"
              className="text-3xl font-bold text-white mb-6"
              glowColor="#60a5fa"
            />
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              However you choose to serve your clients—individually, in groups, or both—your dedicated concierge team adapts to your business model and handles the complexity behind the scenes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Lead Manager Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-slate-800 rounded-xl border border-slate-700 p-6"
            >
              <div className="text-3xl mb-4 text-blue-400">👥</div>
              <h3 className="text-xl font-semibold mb-4 text-white">Lead Manager</h3>
              
              <div className="mb-4">
                <div className="text-blue-400 mb-2">🎨 For Individual Services:</div>
                <p className="text-slate-300">&quot;Hi, I&apos;m interested in bridal makeup for next June...&quot; Your Lead Manager captures the details, checks your availability, and schedules a consultation—all while you&apos;re with another client.</p>
              </div>
              
              <div className="mb-4">
                <div className="text-blue-400 mb-2">💃 For Group Programs:</div>
                <p className="text-slate-300">&quot;When does your next beginner dance class start?&quot; Your Lead Manager provides class schedules, handles enrollment, and manages the waiting list for popular sessions.</p>
              </div>
              
              <p className="text-green-400">Every inquiry becomes a captured opportunity, whether it&apos;s for your premium individual services or your regular group programs.</p>
            </motion.div>

            {/* Scheduling Coordinator Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-800 rounded-xl border border-slate-700 p-6"
            >
              <div className="text-3xl mb-4 text-blue-400">📅</div>
              <h3 className="text-xl font-semibold mb-4 text-white">Scheduling Coordinator</h3>
              
              <div className="mb-4">
                <div className="text-blue-400 mb-2">📅 Individual Appointments:</div>
                <p className="text-slate-300">Seamlessly books your Tuesday morning bridal trial around your Thursday evening photography session, ensuring proper travel time and preparation.</p>
              </div>
              
              <div className="mb-4">
                <div className="text-blue-400 mb-2">🏃‍♀️ Group Classes:</div>
                <p className="text-slate-300">Manages your Monday evening yoga class enrollments while coordinating individual training sessions throughout the week—no conflicts, no confusion.</p>
              </div>
              
              <p className="text-green-400">A perfectly orchestrated schedule that maximizes your revenue opportunities across all service types.</p>
            </motion.div>

            {/* Customer Liaison Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-slate-800 rounded-xl border border-slate-700 p-6"
            >
              <div className="text-3xl mb-4 text-blue-400">💌</div>
              <h3 className="text-xl font-semibold mb-4 text-white">Customer Liaison</h3>
              
              <div className="mb-4">
                <div className="text-blue-400 mb-2">💌 Personal Follow-up:</div>
                <p className="text-slate-300">Follows up with individual clients about their experience and gently encourages them to share reviews or book their next session.</p>
              </div>
              
              <div className="mb-4">
                <div className="text-blue-400 mb-2">📢 Group Communications:</div>
                <p className="text-slate-300">Sends class participants information about upcoming workshops, schedule changes, or new program offerings—keeping your community engaged.</p>
              </div>
              
              <p className="text-green-400">Stronger relationships that lead to repeat business, referrals, and a thriving community around your services.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Growth Transformation Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <FuturisticText
              text="With your free time"
              className="text-3xl font-bold text-white mb-6"
              glowColor="#60a5fa"
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {[
              {
                icon: '🌟',
                title: 'Scale Beyond Yourself',
                description: 'Finally launch that advanced certification program you have been dreaming about. Open that second location. Build the team you have always envisioned.'
              },
              {
                icon: '🚀',
                title: 'Expand Your Reach',
                description: 'Take your expertise to new cities, new markets, new audiences. When you are not tied to your phone, geography becomes opportunity.'
              },
              {
                icon: '💎',
                title: 'Premium Service Delivery',
                description: 'Offer the high-touch, high-value experiences that command premium pricing. Your clients feel the difference when you are fully present.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-slate-800 rounded-xl border border-slate-700 p-6"
              >
                <div className="text-3xl mb-4 text-blue-400">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
                <p className="text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Second row - 2 cards centered */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
            <div className="lg:col-start-2 lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-slate-800 rounded-xl border border-slate-700 p-6"
              >
                <div className="text-3xl mb-4 text-blue-400">🎯</div>
                <h3 className="text-xl font-semibold mb-4 text-white">Strategic Partnerships</h3>
                <p className="text-slate-300">Build relationships with other experts, venues, suppliers. Network at industry events instead of being stuck at your desk.</p>
              </motion.div>
            </div>

            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-slate-800 rounded-xl border border-slate-700 p-6"
              >
                <div className="text-3xl mb-4 text-blue-400">📈</div>
                <h3 className="text-xl font-semibold mb-4 text-white">Multiple Revenue Streams</h3>
                <p className="text-slate-300">Launch online courses, create product lines, develop franchise opportunities. Growth ideas that seemed impossible suddenly become goals for your next quarter.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="bg-blue-900/20 backdrop-blur-md rounded-2xl border border-blue-400/30 shadow-2xl shadow-blue-500/10 p-8"
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 197, 253, 0.05) 50%, rgba(59, 130, 246, 0.1) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)'
              }}
            >
              <FuturisticText
                text="Ready to focus on your craft?"
                className="text-3xl font-bold text-white mb-6"
                glowColor="#60a5fa"
              />
              <p className="text-xl text-slate-300 mb-8">
                Let your AI concierge team handle the operations while you do what you do best.
              </p>
              <Link 
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-4 text-lg rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Start Your Transformation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
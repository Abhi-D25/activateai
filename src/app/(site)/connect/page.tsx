'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import ParticleBackground from '@/app/components/ParticleBackground';
import PageTransition from '@/app/components/PageTransition';
import { 
  ArrowRightIcon,
  EnvelopeIcon,
  PhoneIcon,
  BuildingOfficeIcon,
  ArrowDownTrayIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

export default function Connect() {
  
  // Function to generate and download vCard
  const handleSaveContact = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Abhi Dutta
N:Dutta;Abhi;;;
ORG:ActivateAI
TITLE:Founder & CEO
TEL;TYPE=CELL:(972) 754-1499
EMAIL:dutta@acti-vate.ai
URL:https://acti-vate.ai
URL;TYPE=LinkedIn:https://www.linkedin.com/in/abhirup-dutta-1a92601b0/
NOTE:Empowering businesses with AI.
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Abhirup_Dutta_ActivateAI.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <PageTransition variant="fade">
      <div className="bg-black min-h-screen">
        <section className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0 gradient-bg opacity-30" />
          <ParticleBackground />
          
          <div className="container relative z-10 mx-auto px-4 py-8 md:py-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-md mx-auto"
            >
              {/* Profile Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl border border-slate-700/50 overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
              >
                {/* Header with animated gradient */}
                <motion.div 
                  className="h-32 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 relative"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 200%'
                  }}
                >
                  <div className="absolute inset-0 bg-black/20" />
                </motion.div>

                {/* Profile Photo */}
                <div className="relative -mt-20 flex justify-center px-6">
                  <motion.div 
                    className="relative w-32 h-32 rounded-full border-4 border-slate-800 bg-slate-700 overflow-hidden shadow-xl"
                    whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.5)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image 
                      src="/business_card.jpg"
                      alt="Abhirup Dutta"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </div>

                {/* Contact Info */}
                <div className="px-6 pb-6 mt-4 text-center">
                  <h1 className="text-3xl font-bold text-white mb-2">
                    Abhi Dutta
                  </h1>
                  <p className="text-lg text-slate-300 mb-6">
                    Empowering businesses with AI
                  </p>

                  {/* Save Contact Button */}
                  <motion.button
                    onClick={handleSaveContact}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all mb-8"
                  >
                    <ArrowDownTrayIcon className="w-5 h-5" />
                    <span>Save Contact</span>
                  </motion.button>


                  {/* Main Action Links */}
                  <div className="border-t border-slate-700 pt-6 space-y-3">
                    <h3 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">
                      Quick Links
                    </h3>
                    
                    {/* Book Appointment */}
                    <a 
                      href="https://calendar.app.google/cdb8imp4GAqRnWQT8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-green-600/10 to-green-600/5 hover:from-green-600/20 hover:to-green-600/10 rounded-xl transition-all group border border-green-500/20 hover:border-green-500/40"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-white">Schedule Free Consultation</div>
                          <div className="text-xs text-slate-400">Let&apos;s grow together</div>
                        </div>
                      </div>
                      <ArrowRightIcon className="w-5 h-5 text-slate-400 group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
                    </a>

                    
                    {/* Visit Website */}
                    <Link 
                      href="/"
                      className="flex items-center justify-between p-4 bg-slate-800/50 hover:bg-slate-800 rounded-xl transition-all group border border-slate-700/50 hover:border-blue-500/50"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                          <GlobeAltIcon className="w-5 h-5 text-blue-400" />
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-white">Visit ActivateAI</div>
                          <div className="text-xs text-slate-400">Explore our solutions</div>
                        </div>
                      </div>
                      <ArrowRightIcon className="w-5 h-5 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </div>
                  
                  {/* Social Links */}
                  <div className="border-t border-slate-700 pt-6 mb-6">
                    <h3 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">
                      Connect
                    </h3>
                    <div className="flex justify-center space-x-4">
                      <a
                        href="https://www.linkedin.com/in/abhirup-dutta-1a92601b0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors shadow-lg"
                        aria-label="Personal LinkedIn"
                      >
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      
                      {/* <a
                        href="https://www.linkedin.com/company/acti-vateai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center transition-colors shadow-lg"
                        aria-label="Company LinkedIn"
                      >
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a> */}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center mt-8"
              >
                <p className="text-slate-500 text-sm">
                  Powered by ActivateAI
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
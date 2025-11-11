"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMobile } from '../hooks/useMobile';
import Link from 'next/link';
import { Bars3Icon, PhoneIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const MobileNav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWhatWeOfferOpen, setIsWhatWeOfferOpen] = useState(false);
  const [isWhoWeServeOpen, setIsWhoWeServeOpen] = useState(false);
  const { isMobile } = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsWhatWeOfferOpen(false);
    setIsWhoWeServeOpen(false);
    document.body.style.overflow = 'unset';
  };

  const toggleWhatWeOffer = () => {
    setIsWhatWeOfferOpen(!isWhatWeOfferOpen);
    setIsWhoWeServeOpen(false);
  };

  const toggleWhoWeServe = () => {
    setIsWhoWeServeOpen(!isWhoWeServeOpen);
    setIsWhatWeOfferOpen(false);
  };

  if (!isMobile) return null;

  return (
    <>
      {/* Bottom Navigation Bar */}
      <motion.nav
        className="fixed bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-md border-t border-gray-800 z-50 md:hidden"
        initial={{ y: 100 }}
        animate={{ y: isVisible ? 0 : 100 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="flex justify-around items-center h-16">
          {/* Menu Button */}
          <button
            onClick={toggleMenu}
            className="flex flex-col items-center justify-center w-full h-full text-white px-1"
            aria-label="Toggle menu"
          >
            <Bars3Icon className="h-6 w-6 mb-1" />
            <span className="text-xs font-medium">Menu</span>
          </button>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="flex flex-col items-center justify-center w-full h-full text-white px-1"
            onClick={() => {
              if (window.navigator.vibrate) {
                window.navigator.vibrate(25);
              }
            }}
          >
            <PhoneIcon className="h-6 w-6 mb-1" />
            <span className="text-xs font-medium">Contact</span>
          </Link>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={closeMenu}
            />
            
            {/* Menu Panel - Slides up from bottom */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-16 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 z-50 md:hidden max-h-[80vh] overflow-y-auto"
            >
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-4">
                  <button
                    onClick={closeMenu}
                    className="p-2 text-slate-300 hover:text-blue-400 transition-colors"
                    aria-label="Close menu"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                <nav className="space-y-4">
                  {/* Home */}
                  <Link
                    href="/"
                    className="block text-lg font-medium text-slate-300 hover:text-blue-400 transition-colors py-3 border-b border-slate-700"
                    onClick={closeMenu}
                  >
                    Home
                  </Link>

                  {/* What We Offer Dropdown */}
                  <div className="border-b border-slate-700">
                    <button
                      onClick={toggleWhatWeOffer}
                      className="flex items-center justify-between w-full text-lg font-medium text-slate-300 hover:text-blue-400 transition-colors py-3"
                    >
                      What We Offer
                      <ChevronDownIcon className={`h-5 w-5 transition-transform ${isWhatWeOfferOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isWhatWeOfferOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 space-y-2 pb-3">
                            <Link 
                              href="/what-we-offer/sales" 
                              className="block text-slate-400 hover:text-yellow-400 py-2 text-base"
                              onClick={closeMenu}
                            >
                              Sales
                            </Link>
                            <Link 
                              href="/what-we-offer/operations" 
                              className="block text-slate-400 hover:text-blue-400 py-2 text-base"
                              onClick={closeMenu}
                            >
                              Operations
                            </Link>
                            <Link 
                              href="/what-we-offer/admin" 
                              className="block text-slate-400 hover:text-purple-400 py-2 text-base"
                              onClick={closeMenu}
                            >
                              Admin
                            </Link>
                            <Link 
                              href="/what-we-offer/support" 
                              className="block text-slate-400 hover:text-green-400 py-2 text-base"
                              onClick={closeMenu}
                            >
                              Support
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Who We Serve Dropdown */}
                  <div className="border-b border-slate-700">
                    <button
                      onClick={toggleWhoWeServe}
                      className="flex items-center justify-between w-full text-lg font-medium text-slate-300 hover:text-blue-400 transition-colors py-3"
                    >
                      Who We Serve
                      <ChevronDownIcon className={`h-5 w-5 transition-transform ${isWhoWeServeOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isWhoWeServeOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 space-y-2 pb-3">
                            <Link 
                              href="/case-studies/solo-preneur" 
                              className="block text-slate-400 hover:text-blue-400 py-2 text-base"
                              onClick={closeMenu}
                            >
                              Solo-preneur
                            </Link>
                            <Link 
                              href="/case-studies/growing-business" 
                              className="block text-slate-400 hover:text-blue-400 py-2 text-base"
                              onClick={closeMenu}
                            >
                              Growing Business
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Activations */}
                  <Link
                    href="/services"
                    className="block text-lg font-medium text-slate-300 hover:text-blue-400 transition-colors py-3 border-b border-slate-700"
                    onClick={closeMenu}
                  >
                    Activations
                  </Link>

                  {/* Contact */}
                  <Link
                    href="/contact"
                    className="block text-lg font-medium text-slate-300 hover:text-blue-400 transition-colors py-3 border-b border-slate-700"
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                </nav>

                {/* Additional CTA */}
                <div className="mt-6 pt-4">
                  <a
                    href="https://calendar.app.google/mzfrpoUiWW9UFvzp6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    onClick={closeMenu}
                  >
                    Book Consultation
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav; 
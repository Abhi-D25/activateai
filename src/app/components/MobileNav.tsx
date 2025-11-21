"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMobile } from '../hooks/useMobile';
import Link from 'next/link';
import { Bars3Icon, PhoneIcon, XMarkIcon } from '@heroicons/react/24/outline';

const MobileNav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    document.body.style.overflow = 'unset';
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
                  <Link
                    href="/"
                    className="block text-lg font-medium text-slate-300 hover:text-blue-400 transition-colors py-3 border-b border-slate-700"
                    onClick={closeMenu}
                  >
                    Home
                  </Link>

                  <Link
                    href="/pricing"
                    className="block text-lg font-medium text-slate-300 hover:text-blue-400 transition-colors py-3 border-b border-slate-700"
                    onClick={closeMenu}
                  >
                    Pricing
                  </Link>

                  <Link
                    href="/solutions"
                    className="block text-lg font-medium text-slate-300 hover:text-blue-400 transition-colors py-3 border-b border-slate-700"
                    onClick={closeMenu}
                  >
                    Solutions
                  </Link>

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

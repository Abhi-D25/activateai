"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMobile } from '../hooks/useMobile';
import Link from 'next/link';

const MobileNav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
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

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Activations' },
    { href: '/case-studies', label: 'Who We Serve' },
    { href: '/contact', label: 'Contact' },
  ];

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
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center w-full h-full text-white"
              onClick={() => {
                if (window.navigator.vibrate) {
                  window.navigator.vibrate(25);
                }
              }}
            >
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </>
  );
};

export default MobileNav; 
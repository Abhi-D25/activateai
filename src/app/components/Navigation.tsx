'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWhoWeServeOpen, setIsWhoWeServeOpen] = useState(false);
  const [isWhatWeOfferOpen, setIsWhatWeOfferOpen] = useState(false);
  const whoWeServeDropdownRef = useRef<HTMLDivElement>(null);
  const whatWeOfferDropdownRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isWhoWeServeOpen && !isWhatWeOfferOpen) return;

      const nav = navRef.current;
      const whoWeServeDropdown = whoWeServeDropdownRef.current;
      const whatWeOfferDropdown = whatWeOfferDropdownRef.current;
      
      if (!nav) return;

      const navRect = nav.getBoundingClientRect();
      const whoWeServeRect = whoWeServeDropdown?.getBoundingClientRect();
      const whatWeOfferRect = whatWeOfferDropdown?.getBoundingClientRect();
      
      // Check if mouse is within navbar or dropdown areas
      const isInNav = e.clientY >= navRect.top && e.clientY <= navRect.bottom &&
                     e.clientX >= navRect.left && e.clientX <= navRect.right;
      
      const isInWhoWeServe = whoWeServeRect && 
        e.clientY >= whoWeServeRect.top && e.clientY <= whoWeServeRect.bottom &&
        e.clientX >= whoWeServeRect.left && e.clientX <= whoWeServeRect.right;
      
      const isInWhatWeOffer = whatWeOfferRect && 
        e.clientY >= whatWeOfferRect.top && e.clientY <= whatWeOfferRect.bottom &&
        e.clientX >= whatWeOfferRect.left && e.clientX <= whatWeOfferRect.right;
      
      // Close dropdowns if mouse is outside all areas
      if (!isInNav && !isInWhoWeServe) {
        setIsWhoWeServeOpen(false);
      }
      
      if (!isInNav && !isInWhatWeOffer) {
        setIsWhatWeOfferOpen(false);
      }
    };

    if (isWhoWeServeOpen || isWhatWeOfferOpen) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isWhoWeServeOpen, isWhatWeOfferOpen]);

  return (
    <nav ref={navRef} className="glassmorphism shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="/navbarLogo.jpg" 
                alt="ActivateAI Logo" 
                className="h-10 w-auto mr-4 mb-1"
              />
              <span className="text-2xl font-bold text-white hidden sm:block">
                ActivateAI
              </span>
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link href="/" className="text-slate-300 hover:text-blue-400">
              Home
            </Link>
            
            <Link href="/pricing" className="text-slate-300 hover:text-blue-400">
              Pricing
            </Link>
            
            <Link href="/contact" className="text-slate-300 hover:text-blue-400">
              Contact
            </Link>
            
            <Link href="/connect" className="text-slate-300 hover:text-blue-400">
              Connect
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center">
            <Link href="/contact" className="btn-secondary">
              Book Consultation
            </Link>
          </div>
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-blue-400"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden glassmorphism">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              <Link 
                href="/pricing" 
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              
              <Link 
                href="/contact" 
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <Link 
                href="/connect" 
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Connect
              </Link>
              
              <Link 
                href="/contact" 
                className="block w-full text-left px-3 py-2 text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
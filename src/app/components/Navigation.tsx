'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWhoWeServeOpen, setIsWhoWeServeOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isWhoWeServeOpen) return;

      const nav = navRef.current;
      const dropdown = dropdownRef.current;
      
      if (!nav || !dropdown) return;

      const navRect = nav.getBoundingClientRect();
      const dropdownRect = dropdown.getBoundingClientRect();
      
      // Check if mouse is within navbar or dropdown area
      const isInNav = e.clientY >= navRect.top && e.clientY <= navRect.bottom &&
                     e.clientX >= navRect.left && e.clientX <= navRect.right;
      
      const isInDropdown = e.clientY >= dropdownRect.top && e.clientY <= dropdownRect.bottom &&
                          e.clientX >= dropdownRect.left && e.clientX <= dropdownRect.right;
      
      // Close dropdown if mouse is outside both areas
      if (!isInNav && !isInDropdown) {
        setIsWhoWeServeOpen(false);
      }
    };

    if (isWhoWeServeOpen) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isWhoWeServeOpen]);

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
            <Link href="/services" className="text-slate-300 hover:text-blue-400">
              Activations
            </Link>
            
            {/* Who We Serve Dropdown */}
            <div className="relative">
              <Link
                href="/case-studies"
                className="flex items-center text-slate-300 hover:text-blue-400 transition-colors"
                onMouseEnter={() => setIsWhoWeServeOpen(true)}
              >
                Who We Serve
                <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform ${isWhoWeServeOpen ? 'rotate-180' : ''}`} />
              </Link>
              
              {isWhoWeServeOpen && (
                <div 
                  ref={dropdownRef}
                  className="absolute top-full left-0 mt-1 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-lg"
                >
                  <div className="py-2">
                    <Link 
                      href="/case-studies/solo-preneur" 
                      className="block px-4 py-2 text-slate-300 hover:text-blue-400 hover:bg-slate-700 transition-colors"
                      onClick={() => setIsWhoWeServeOpen(false)}
                    >
                      Solo-preneur
                    </Link>
                    <Link 
                      href="/case-studies/growing-business" 
                      className="block px-4 py-2 text-slate-300 hover:text-blue-400 hover:bg-slate-700 transition-colors"
                      onClick={() => setIsWhoWeServeOpen(false)}
                    >
                      Growing Business
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/contact" className="text-slate-300 hover:text-blue-400">
              Contact
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
              <Link href="/" className="block w-full text-left px-3 py-2 text-slate-300 hover:text-blue-400">
                Home
              </Link>
              <Link href="/services" className="block w-full text-left px-3 py-2 text-slate-300 hover:text-blue-400">
                Services
              </Link>
              
              {/* Mobile Who We Serve */}
              <div className="px-3 py-2">
                <div className="text-slate-300 font-medium mb-2 text-sm">Who We Serve</div>
                <div className="pl-4 space-y-1">
                  <Link 
                    href="/case-studies/solo-preneur" 
                    className="block text-slate-400 hover:text-blue-400 py-1 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Solo-preneur
                  </Link>
                  <Link 
                    href="/case-studies/growing-business" 
                    className="block text-slate-400 hover:text-blue-400 py-1 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Growing Business
                  </Link>
                </div>
              </div>
              
              <Link href="/contact" className="block w-full text-left px-3 py-2 text-slate-300 hover:text-blue-400">
                Contact
              </Link>
              <Link href="/contact" className="block w-full text-left px-3 py-2 text-blue-400">
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
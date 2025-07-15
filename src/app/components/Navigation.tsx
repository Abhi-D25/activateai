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
            <Link href="/services" className="text-slate-300 hover:text-blue-400">
              Activations
            </Link>
            
            {/* What We Offer Dropdown */}
            <div className="relative">
              <Link
                href="/what-we-offer"
                className="flex items-center text-slate-300 hover:text-blue-400 transition-colors"
                onMouseEnter={() => setIsWhatWeOfferOpen(true)}
              >
                What We Offer
                <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform ${isWhatWeOfferOpen ? 'rotate-180' : ''}`} />
              </Link>
              
              {isWhatWeOfferOpen && (
                <div 
                  ref={whatWeOfferDropdownRef}
                  className="absolute top-full left-0 mt-1 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-lg"
                >
                  <div className="py-2">
                    <Link 
                      href="/what-we-offer/sales" 
                      className="block px-4 py-2 text-slate-300 hover:text-yellow-400 hover:bg-slate-700 transition-colors"
                      onClick={() => setIsWhatWeOfferOpen(false)}
                    >
                      Sales
                    </Link>
                    <Link 
                      href="/what-we-offer/operations" 
                      className="block px-4 py-2 text-slate-300 hover:text-blue-400 hover:bg-slate-700 transition-colors"
                      onClick={() => setIsWhatWeOfferOpen(false)}
                    >
                      Operations
                    </Link>
                    <Link 
                      href="/what-we-offer/admin" 
                      className="block px-4 py-2 text-slate-300 hover:text-purple-400 hover:bg-slate-700 transition-colors"
                      onClick={() => setIsWhatWeOfferOpen(false)}
                    >
                      Admin
                    </Link>
                    <Link 
                      href="/what-we-offer/support" 
                      className="block px-4 py-2 text-slate-300 hover:text-green-400 hover:bg-slate-700 transition-colors"
                      onClick={() => setIsWhatWeOfferOpen(false)}
                    >
                      Support
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
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
                  ref={whoWeServeDropdownRef}
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
              
              {/* Mobile What We Offer */}
              <div className="px-3 py-2">
                <div className="text-slate-300 font-medium mb-2 text-sm">What We Offer</div>
                <div className="pl-4 space-y-1">
                  <Link 
                    href="/what-we-offer/sales" 
                    className="block text-slate-400 hover:text-yellow-400 py-1 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sales
                  </Link>
                  <Link 
                    href="/what-we-offer/operations" 
                    className="block text-slate-400 hover:text-blue-400 py-1 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Operations
                  </Link>
                  <Link 
                    href="/what-we-offer/admin" 
                    className="block text-slate-400 hover:text-purple-400 py-1 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Admin
                  </Link>
                  <Link 
                    href="/what-we-offer/support" 
                    className="block text-slate-400 hover:text-green-400 py-1 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Support
                  </Link>
                </div>
              </div>
              
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
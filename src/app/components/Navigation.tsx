'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="h-10 w-auto mr-4 mb-1 relative" style={{ width: '40px', height: '40px' }}>
                <Image
                  src="/navbarLogo.jpg"
                  alt="ActivateAI Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span className="text-2xl font-bold text-white hidden sm:block">
                ActivateAI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link href="/" className="text-slate-300 hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/pricing" className="text-slate-300 hover:text-blue-400 transition-colors">
              Pricing
            </Link>
            <Link href="/solutions" className="text-slate-300 hover:text-blue-400 transition-colors">
              Solutions
            </Link>
            <Link href="/integrations" className="text-slate-300 hover:text-blue-400 transition-colors">
              Integrations
            </Link>
            <Link href="/contact" className="text-slate-300 hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center">
            <a
              href="https://calendar.app.google/mzfrpoUiWW9UFvzp6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Book Consultation
            </a>
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

        {/* Mobile menu fallback */}
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
                href="/solutions"
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="/integrations"
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Integrations
              </Link>
              <Link
                href="/contact"
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

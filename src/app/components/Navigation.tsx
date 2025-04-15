'use client';

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-400">
              ActivateAI
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link href="/" className="text-slate-300 hover:text-blue-400">
              Home
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-blue-400">
              About
            </Link>
            <Link href="/services" className="text-slate-300 hover:text-blue-400">
              Services
            </Link>
            <Link href="/case-studies" className="text-slate-300 hover:text-blue-400">
              Case Studies
            </Link>
            <Link href="/contact" className="text-slate-300 hover:text-blue-400">
              Contact
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center">
            <Link href="/contact" className="btn-primary">
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
          <div className="sm:hidden bg-slate-900">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block w-full text-left px-3 py-2 text-slate-300 hover:text-blue-400">
                Home
              </Link>
              <Link href="/about" className="block w-full text-left px-3 py-2 text-slate-300 hover:text-blue-400">
                About
              </Link>
              <Link href="/services" className="block w-full text-left px-3 py-2 text-slate-300 hover:text-blue-400">
                Services
              </Link>
              <Link href="/case-studies" className="block w-full text-left px-3 py-2 text-slate-300 hover:text-blue-400">
                Case Studies
              </Link>
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
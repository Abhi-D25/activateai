'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-slate-900 shadow-sm fixed w-full z-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <button onClick={() => scrollToSection('home')} className="text-2xl font-bold text-blue-400">
                  ActivateAI
                </button>
              </div>
              <div className="hidden sm:flex sm:items-center sm:space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-slate-300 hover:text-blue-400">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-blue-400">
                  About
                </button>
                <button onClick={() => scrollToSection('services')} className="text-slate-300 hover:text-blue-400">
                  Services
                </button>
                <button onClick={() => scrollToSection('case-studies')} className="text-slate-300 hover:text-blue-400">
                  Case Studies
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-blue-400">
                  Contact
                </button>
              </div>
              <div className="hidden sm:flex sm:items-center">
                <button onClick={() => scrollToSection('contact')} className="btn-primary">
                  Book Consultation
                </button>
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
                  <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-slate-300 hover:text-blue-400">
                    Home
                  </button>
                  <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-slate-300 hover:text-blue-400">
                    About
                  </button>
                  <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-slate-300 hover:text-blue-400">
                    Services
                  </button>
                  <button onClick={() => scrollToSection('case-studies')} className="block w-full text-left px-3 py-2 text-slate-300 hover:text-blue-400">
                    Case Studies
                  </button>
                  <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-slate-300 hover:text-blue-400">
                    Contact
                  </button>
                  <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-blue-400">
                    Book Consultation
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>

        <main className="pt-16">{children}</main>

        <footer className="bg-slate-900 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">ActivateAI</h3>
                <p className="text-slate-300">
                  Empowering SMBs with AI to streamline operations and boost growth.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-blue-400">
                      About Us
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('services')} className="text-slate-300 hover:text-blue-400">
                      Services
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('case-studies')} className="text-slate-300 hover:text-blue-400">
                      Case Studies
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
                <ul className="space-y-2">
                  <li className="text-slate-300">contact@activateai.com</li>
                  <li className="text-slate-300">+1 (555) 123-4567</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-slate-300 hover:text-blue-400">
                    LinkedIn
                  </a>
                  <a href="#" className="text-slate-300 hover:text-blue-400">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-700 text-center text-slate-300">
              <p>&copy; {new Date().getFullYear()} ActivateAI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
} 
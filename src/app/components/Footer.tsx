'use client';

import Link from "next/link";

export default function Footer() {
  return (
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
                <Link href="/about" className="text-slate-300 hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-blue-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-slate-300 hover:text-blue-400">
                  Case Studies
                </Link>
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
  );
} 
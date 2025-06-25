'use client';

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-white mb-4">ActivateAI</h3>
            <p className="text-slate-300 max-w-xs">
              Empowering SMBs with AI to streamline operations and boost growth.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
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
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-slate-300">info@activateai.com</li>
              <li className="text-slate-300">+1 (972) 754-1499</li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-sm font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-300 hover:text-blue-400">
                LinkedIn
              </a>
              <a href="#" className="text-slate-300 hover:text-blue-400">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-700 text-center text-slate-300">
          <p>&copy; {new Date().getFullYear()} ActivateAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 
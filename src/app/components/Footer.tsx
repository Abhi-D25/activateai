'use client';

import Link from "next/link";
import Script from "next/script";

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-blue-300 mb-4">ActivateAI</h3>
            <p className="text-slate-300 max-w-xs">
              Empowering SMBs with AI to streamline operations and boost growth.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-sm font-semibold text-blue-300 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-300 hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-300 hover:text-blue-400">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-slate-300 hover:text-blue-400">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-sm font-semibold text-blue-300 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-slate-300">info@acti-vate.ai</li>
              <li className="text-slate-300">+1 (972) 476-8582</li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-sm font-semibold text-blue-300 mb-4">Follow Us</h4>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/company/acti-vateai/" className="text-slate-300 hover:text-blue-400">
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
      <Script
        src="https://static.newo.ai/newo-chat/web-chat.js"
        // @ts-expect-error: name is not in ScriptProps but required by vendor
        name="web-chat"
        data-client-secret="ba74f3e0-48c4-492b-9c05-b1a0160a3a24"
        strategy="lazyOnload"
      />
    </footer>
  );
} 
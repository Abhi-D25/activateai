import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ActivateAI - Empowering SMBs with AI Solutions",
  description: "Streamline operations and boost growth with tailored AI solutions for small and medium businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                  ActivateAI
                </Link>
              </div>
              <div className="hidden sm:flex sm:items-center sm:space-x-8">
                <Link href="/" className="text-slate-600 hover:text-blue-600">
                  Home
                </Link>
                <Link href="/about" className="text-slate-600 hover:text-blue-600">
                  About
                </Link>
                <Link href="/services" className="text-slate-600 hover:text-blue-600">
                  Services
                </Link>
                <Link href="/case-studies" className="text-slate-600 hover:text-blue-600">
                  Case Studies
                </Link>
                <Link href="/contact" className="text-slate-600 hover:text-blue-600">
                  Contact
                </Link>
              </div>
              <div className="hidden sm:flex sm:items-center">
                <Link href="/contact" className="btn-primary">
                  Book Consultation
                </Link>
              </div>
              <div className="sm:hidden flex items-center">
                <button className="text-slate-600 hover:text-blue-600">
                  <Bars3Icon className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main>{children}</main>

        <footer className="bg-slate-50 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">ActivateAI</h3>
                <p className="text-slate-600">
                  Empowering SMBs with AI to streamline operations and boost growth.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-slate-600 hover:text-blue-600">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-slate-600 hover:text-blue-600">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-studies" className="text-slate-600 hover:text-blue-600">
                      Case Studies
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-4">Contact</h4>
                <ul className="space-y-2">
                  <li className="text-slate-600">contact@activateai.com</li>
                  <li className="text-slate-600">+1 (555) 123-4567</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-slate-600 hover:text-blue-600">
                    LinkedIn
                  </a>
                  <a href="#" className="text-slate-600 hover:text-blue-600">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-200 text-center text-slate-600">
              <p>&copy; {new Date().getFullYear()} ActivateAI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
} 
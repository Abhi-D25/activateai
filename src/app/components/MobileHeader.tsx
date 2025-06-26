'use client';

import Link from 'next/link';

export default function MobileHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 z-50 md:hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <Link href="/" className="flex items-center">
            <img 
              src="/navbarLogo.jpg" 
              alt="ActivateAI Logo" 
              className="h-8 w-auto mr-2"
            />
            <span className="text-2xl font-bold text-blue-500">
              ActivateAI
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
} 
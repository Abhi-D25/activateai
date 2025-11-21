'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function MobileHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 z-50 md:hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <Link href="/" className="flex items-center">
            <div className="h-8 w-auto mr-2 relative" style={{ width: '32px', height: '32px' }}>
              <Image 
                src="/navbarLogo.jpg" 
                alt="ActivateAI Logo" 
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <span className="text-2xl font-bold text-white">
              ActivateAI
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
} 
"use client";

import { ReactNode } from 'react';
import { useMobile } from '../hooks/useMobile';
import Navigation from './Navigation';
import MobileNav from './MobileNav';
import MobileParticleBackground from './MobileParticleBackground';
import Footer from './Footer';
import { usePathname } from 'next/navigation';
import MobileHeader from './MobileHeader';

interface MobileLayoutProps {
  children: ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
  const { isMobile } = useMobile();
  const pathname = usePathname();
  
  // Don't render the mobile layout for admin pages
  if (pathname?.startsWith('/admin')) {
    return <>{children}</>;
  }

  return (
    <>
      <MobileParticleBackground />
      {isMobile ? (
        <>
          <MobileHeader />
          <MobileNav />
          <main className="pt-24 relative z-10 mobile-layout">{children}</main>
          <Footer />
        </>
      ) : (
        <>
          <Navigation />
          <main className="pt-16 relative z-10">{children}</main>
          <Footer />
        </>
      )}
    </>
  );
};

export default MobileLayout; 
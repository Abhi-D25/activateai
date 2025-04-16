"use client";

import { ReactNode } from 'react';
import { useMobile } from '../hooks/useMobile';
import Navigation from './Navigation';
import MobileNav from './MobileNav';
import MobileParticleBackground from './MobileParticleBackground';
import Footer from './Footer';

interface MobileLayoutProps {
  children: ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
  const { isMobile } = useMobile();

  return (
    <>
      <MobileParticleBackground />
      {isMobile ? (
        <>
          <MobileNav />
          <main className="pt-16 relative z-10">{children}</main>
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
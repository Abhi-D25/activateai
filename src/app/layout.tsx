import type { Metadata } from 'next';
import { Inter, DM_Sans } from "next/font/google";
import { Suspense } from 'react';
import "./globals.css";

import { Providers } from './providers';
import ClickTracker from '@/components/ClickTracker';
// import AIChat from './components/AIChat';

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://acti-vate.ai'),
  title: {
    default: 'ActivateAI | Free technical checkup for small businesses',
    template: '%s | ActivateAI',
  },
  description: "We find where money's leaking through missed calls, follow-ups, and after-hours chaos.",
  icons: {
    icon: [
      { url: '/logo.png' },
    ],
    apple: [
      { url: '/logo.png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://activateai.com/',
    siteName: 'ActivateAI',
    title: 'ActivateAI | Free technical checkup for small businesses',
    description: "We find where money's leaking through missed calls, follow-ups, and after-hours chaos.",
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'ActivateAI - AI Solutions for SMBs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ActivateAI | Free technical checkup for small businesses',
    description: "We find where money's leaking through missed calls, follow-ups, and after-hours chaos.",
    creator: '@activateai',
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <body className={`${inter.className} mobile-scroll antialiased selection:bg-blue-500/30`}>
        <Providers>
          <Suspense fallback={null}>
            <ClickTracker />
          </Suspense>
          {children}
        </Providers>
      </body>
    </html>
  );
} 
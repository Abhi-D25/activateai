import type { Metadata } from 'next';
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";

import { Providers } from './providers';
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
    default: 'ActivateAI - AI Solutions for Small & Medium Businesses',
    template: '%s | ActivateAI',
  },
  description: 'ActivateAI helps SMBs leverage artificial intelligence to automate workflows, enhance productivity, and drive growth through customized AI solutions.',
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
    title: 'ActivateAI - AI Solutions for Small & Medium Businesses',
    description: 'ActivateAI helps SMBs leverage artificial intelligence to automate workflows, enhance productivity, and drive growth through customized AI solutions.',
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
    title: 'ActivateAI - AI Solutions for Small & Medium Businesses',
    description: 'ActivateAI helps SMBs leverage artificial intelligence to automate workflows, enhance productivity, and drive growth through customized AI solutions.',
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
          {children}
        </Providers>
      </body>
    </html>
  );
} 
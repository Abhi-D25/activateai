import type { Metadata } from 'next';
import { Inter } from "next/font/google";
import "./globals.css";
import MobileLayout from "./components/MobileLayout";
import { Providers } from './providers';
import AIChat from './components/AIChat';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://acti-vate.ai'),
  title: {
    default: 'ActivateAI - AI Solutions for Small & Medium Businesses',
    template: '%s | ActivateAI',
  },
  description: 'ActivateAI helps SMBs leverage artificial intelligence to automate workflows, enhance productivity, and drive growth through customized AI solutions.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
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
        url: '/images/og-image.jpg',
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
    images: ['/images/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} mobile-scroll`}>
        <Providers>
          <MobileLayout>
            {children}
            <AIChat />
          </MobileLayout>
        </Providers>
      </body>
    </html>
  );
} 
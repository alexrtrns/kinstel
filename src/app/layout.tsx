import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Manrope, Lora } from 'next/font/google';

const fontSans = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontSerif = Lora({
  subsets: ['latin'],
  variable: '--font-serif',
});

const siteConfig = {
  name: 'Kinstel',
  url: 'https://kinstel.com', // Replace with your actual domain
  ogImage: 'https://kinstel.com/og-image.png', // Replace with your actual OG image URL
  description:
    'Kinstel is a web development agency specializing in UI-optimized, high-performance websites for law firms and lawyers.',
  keywords: [
    'law firm websites',
    'lawyer websites',
    'legal web design',
    'web development for lawyers',
    'legal marketing',
    'attorney websites',
  ],
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - UI-Optimized Websites for Law Firms`,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: 'Kinstel',
      url: siteConfig.url,
    },
  ],
  creator: 'Kinstel',
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@kinstel', // Replace with your Twitter handle
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable, fontSerif.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

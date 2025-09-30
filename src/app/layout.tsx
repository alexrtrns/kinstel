import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { fontSans, fontSerif } from '@/app/fonts';

const siteConfig = {
  name: 'Kinstel',
  url: 'https://kinstel.com', // Replace with your actual domain
  ogImage: 'https://kinstel.com/og-image.png', // Replace with your actual OG image URL
  description:
    'Kinstel is a web development agency specializing in UI-optimized, high-performance websites for law firms and lawyers.',
  keywords: [
    'website development for lawyers',
    'website developers for lawyers',
    'lawyer website development',
    'legal marketing firm',
    'seo for lawyers',
    'seo for law firm',
    'website development company',
    'website developers',
    'web development company',
  ],
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Law Firm website development company`,
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
  manifest: '/site.webmanifest',
  verification: {
    google: 'EUyo27rp0wgUUiKu3bCvTLHZXqdCnwwBqLlMEDyc5UM',
  },//for sitemap verify
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable, fontSerif.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

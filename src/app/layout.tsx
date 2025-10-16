import type { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/react"
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { fontSans, fontSerif } from '@/app/fonts';
import { WhatsAppWidget } from '@/components/ui/whatsapp-widget';

const siteConfig = {
  name: 'Kinstel Solutions',
  url: 'https://kinstel.com',
  ogImage: 'https://kinstel.com/og-image.png',
  description:
    'As a legal marketing firm, Kinstel Solutions offers expert law firm website development and SEO for lawyers. We build fast, credible websites to help lawyers attract more clients.',
  keywords: [
    'law firm marketing firm',
    'law marketing firm',
    'law firm website development',
    'legal marketing firm',
    'seo for lawyers',
    'website development company',
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Kinstel | Law Firm Marketing Firm ${siteConfig.name}`,
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
    creator: '@kinstels', 
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'EUyo27rp0wgUUiKu3bCvTLHZXqdCnwwBqLlMEDyc5UM',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const whatsappMessage = "Hello! I'm visiting your website and would like to inquire about your law firm website development services.";
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable, fontSerif.variable)}>
        {children}
        <Toaster />
        <Analytics />
        <WhatsAppWidget phoneNumber="919889988408" message={whatsappMessage} />
      </body>
    </html>
  );
}

import type {Metadata} from 'next';
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


export const metadata: Metadata = {
  title: 'Kinstel - UI-Optimized Websites for Law Firms',
  description: 'Kinstel is a web development agency specializing in UI-optimized, high-performance websites for law firms and lawyers.',
  icons: {
    icon: '/favicon.ico',
  },
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

'use client';

import Link from 'next/link';
import { Scale, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navContent = (
    <nav className={`flex items-center gap-6 ${isMobile ? 'flex-col space-y-4 pt-8' : 'space-x-6'}`}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium transition-colors hover:text-primary/80 dark:hover:text-primary-foreground/80"
        >
          {link.label}
        </Link>
      ))}
       <Button asChild className={isMobile ? 'w-full' : ''}>
          <Link href="#contact">Inquire Now</Link>
        </Button>
    </nav>
  );

  if (!isClient) {
    return (
      <header className="sticky top-0 z-50 w-full bg-transparent">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
           <Link href="/" className="flex items-center gap-2">
            <Scale className="h-6 w-6 text-accent" />
            <span className="text-xl font-bold font-headline text-primary dark:text-primary-foreground">
              Kinstel
            </span>
          </Link>
        </div>
      </header>
    );
  }

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'border-b bg-background/95 backdrop-blur' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Scale className="h-6 w-6 text-accent" />
          <span className="text-xl font-bold font-headline text-primary dark:text-primary-foreground">
            Kinstel
          </span>
        </Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pt-16">
              {navContent}
            </SheetContent>
          </Sheet>
        ) : (
          navContent
        )}
      </div>
    </header>
  );
}

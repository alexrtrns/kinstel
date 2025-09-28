import Link from 'next/link';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Link href="/" className="mb-4 flex items-center gap-2" aria-label="Kinstel Home">
              <span className="text-2xl font-bold font-headline"><span className="text-accent">K</span>instel</span>
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              A website development company specializing in high-performance websites for modern law firms.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-9 lg:justify-end lg:gap-16">
            <div className="grid gap-2">
              <h3 className="font-semibold">Navigation</h3>
              <Link href="#services" className="text-muted-foreground hover:text-foreground">Services</Link>
              <Link href="#portfolio" className="text-muted-foreground hover:text-foreground">Portfolio</Link>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
            </div>
            <div className="grid gap-2">
              <h3 className="font-semibold">Legal</h3>
              <Link href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</Link>
            </div>
            <div className="grid gap-2">
              <h3 className="font-semibold">Connect</h3>
               <div className="flex items-center space-x-4">
                  <Link href="#" className="text-muted-foreground hover:text-foreground" aria-label="Twitter">
                    contact@kinstel.com
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-foreground" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-foreground" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-foreground" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </Link>
                </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Kinstel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

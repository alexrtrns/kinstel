import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { HeroIllustration } from './hero-illustration';

export function Hero() {
  return (
    <section className="bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
              High-Performance Legal Websites That Convert
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We specialize in creating lightning-fast, UI-optimized websites for law firms. Attract more clients, establish authority, and grow your practice with a website that works as hard as you do.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button asChild size="lg">
                <Link href="#contact">
                  Start Your Project <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <HeroIllustration className="w-full h-auto max-w-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

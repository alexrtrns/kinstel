import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { HeroIllustration } from './hero-illustration';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="max-w-xl animate-in fade-in slide-in-from-left-12 duration-500">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
            Website Development for Lawyers That Converts
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            As a leading website development company, we specialize in creating lightning-fast, UI-optimized websites for law firms. Attract more clients, establish authority, and grow your practice.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="shadow-lg shadow-primary/20">
              <Link href="#contact">
                Start Your Project <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center animate-in fade-in slide-in-from-right-12 duration-500">
          <HeroIllustration className="w-full h-auto max-w-lg" />
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { ArrowRight, Zap, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <section className="relative h-[70vh] min-h-[500px] w-full text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl drop-shadow-md font-headline">
              High-Performance Legal Websites That Convert
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200 drop-shadow-sm max-w-2xl mx-auto">
              We specialize in creating lightning-fast, UI-optimized websites for law firms. Attract more clients, establish authority, and grow your practice with a website that works as hard as you do.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="#contact">
                  Start Your Project <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                <Link href="#portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

    
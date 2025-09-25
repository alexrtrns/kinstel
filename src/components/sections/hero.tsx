import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full">
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      <div className="relative z-10 flex h-full items-end pb-16 text-center sm:items-center sm:pb-0">
        <div className="container mx-auto px-4 text-white md:px-6">
          <div className="mx-auto max-w-3xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Crafting Digital Prestige for the Modern Law Firm.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-gray-300 md:text-xl">
              We build UI-optimized, high-performance websites that elevate your firm&apos;s online presence and attract discerning clients.
            </p>
            <div className="mt-10 flex justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="#contact">Get a Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const portfolioItems = [
  {
    id: 'portfolio-1',
    title: 'Corporate Law Firm Homepage',
    description: 'A design that conveys strength and tradition with a modern interface.',
  },
  {
    id: 'portfolio-2',
    title: 'Lead Attorney Profile',
    description: 'Highlighting individual expertise and building client trust.',
  },
  {
    id: 'portfolio-3',
    title: 'Legal Insights Blog',
    description: 'An elegant and readable format for publishing articles and case studies.',
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-secondary py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Conceptual Designs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A glimpse into the digital experiences we can create for your firm.
          </p>
        </div>
        <div className="mt-12">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {portfolioItems.map((item) => {
                const image = PlaceHolderImages.find((p) => p.id === item.id);
                return (
                  <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="overflow-hidden">
                        <CardContent className="relative flex aspect-[4/3] items-center justify-center p-0">
                          {image && (
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              data-ai-hint={image.imageHint}
                            />
                          )}
                        </CardContent>
                      </Card>
                      <div className="mt-4">
                        <h3 className="font-headline text-xl font-semibold">{item.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

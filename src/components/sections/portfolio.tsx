import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const portfolioItems = [
  {
    image: PlaceHolderImages.find(p => p.id === 'portfolio-1')?.imageUrl ?? "https://picsum.photos/seed/1/800/600",
    imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-1')?.imageHint,
    title: "Sterling & Associates",
    category: "Personal Injury Law",
    metrics: ["+150% Leads", "2.1s Load Time"]
  },
  {
    image: PlaceHolderImages.find(p => p.id === 'portfolio-2')?.imageUrl ?? "https://picsum.photos/seed/2/800/600",
    imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-2')?.imageHint,
    title: "Whitman Corporate Law",
    category: "Corporate & Business Law",
    metrics: ["+200% Traffic", "98% Performance"]
  },
  {
    image: PlaceHolderImages.find(p => p.id === 'portfolio-3')?.imageUrl ?? "https://picsum.photos/seed/3/800/600",
    imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-3')?.imageHint,
    title: "Rodriguez Family Law",
    category: "Family & Divorce Law",
    metrics: ["+180% Consultations", "Mobile First"]
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-background py-20 sm:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-wider text-primary">Proven Results</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our Work Speaks for Itself
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We've helped law firms across different practice areas increase their online presence and generate more qualified leads.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index}
              className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl animate-in fade-in slide-in-from-bottom-5"
              style={{animationDelay: `${index * 150}ms`, animationFillMode: 'backwards'}}
              data-testid={`portfolio-item-${index}`}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={`Showcase of the ${item.title} website project`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={item.imageHint}
                />
              </div>
              <CardContent className="flex flex-1 flex-col p-6">
                <p className="mb-2 text-sm font-semibold text-primary">{item.category}</p>
                <h3 className="mb-4 text-2xl font-headline font-semibold">{item.title}</h3>
                <div className="flex flex-wrap gap-2 text-sm">
                  {item.metrics.map((metric, metricIndex) => (
                    <Badge key={metricIndex} variant="secondary">
                      {metric}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                  <span className="flex items-center text-sm font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

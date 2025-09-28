import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

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
    metrics: ["+180% Consultations", "Mobile Optimized"]
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-secondary py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Proven Results for Law Firms
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See how we&apos;ve helped law firms across different practice areas increase their online presence and generate more qualified leads.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index}
              className="overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl animate-in fade-in slide-in-from-bottom-5"
              style={{animationDelay: `${index * 150}ms`, animationFillMode: 'backwards'}}
              data-testid={`portfolio-item-${index}`}
            >
              <CardHeader className="p-0">
                <div className="relative h-64 w-full">
                  <Image 
                    src={item.image} 
                    alt={`Showcase of the ${item.title} website project`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    data-ai-hint={item.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="mb-2 text-sm font-semibold text-accent">{item.category}</p>
                <CardTitle className="mb-4 text-2xl">{item.title}</CardTitle>
                <div className="flex flex-wrap gap-2 text-sm">
                  {item.metrics.map((metric, metricIndex) => (
                    <Badge key={metricIndex} variant="secondary">
                      {metric}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";
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
    metrics: ["+150% Leads", "2.1s Load Time"],
    link: "#"
  },
  {
    image: PlaceHolderImages.find(p => p.id === 'portfolio-2')?.imageUrl ?? "https://picsum.photos/seed/2/800/600",
    imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-2')?.imageHint,
    title: "Whitman Corporate Law",
    category: "Corporate & Business Law",
    metrics: ["+200% Traffic", "98% Performance"],
    link: "#"
  },
  {
    image: PlaceHolderImages.find(p => p.id === 'portfolio-3')?.imageUrl ?? "https://picsum.photos/seed/3/800/600",
    imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-3')?.imageHint,
    title: "Rodriguez Family Law",
    category: "Family & Divorce Law",
    metrics: ["+180% Consultations", "Mobile First"],
    link: "#"
  },
  {
    image: PlaceHolderImages.find(p => p.id === 'portfolio-4')?.imageUrl ?? "https://picsum.photos/seed/4/800/600",
    imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-4')?.imageHint,
    title: "Advocate Ratna Singh",
    category: "Independent Advocate",
    metrics: ["Modern Design", "Client-Focused"],
    link: "https://advratnasingh.vercel.app/"
  },
  {
    image: PlaceHolderImages.find(p => p.id === 'portfolio-5')?.imageUrl ?? "https://picsum.photos/seed/5/800/600",
    imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-5')?.imageHint,
    title: "Ababneh & Associates",
    category: "International Law Firm",
    metrics: ["Multilingual", "Corporate Branding"],
    link: "https://ababneh-law.vercel.app/"
  },
  {
    image: PlaceHolderImages.find(p => p.id === 'portfolio-6')?.imageUrl ?? "https://picsum.photos/seed/6/800/600",
    imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-6')?.imageHint,
    title: "Advonex",
    category: "Modern Legal Consultancy",
    metrics: ["Sleek UI", "Fast Load Times"],
    link: "https://advonex.vercel.app/"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-background py-20 sm:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-wider text-accent">Proven Results</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Legal Marketing That <span className="text-accent">Delivers Results</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We've helped law firms across different practice areas increase their online presence and generate more qualified leads through expert website development.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
             <Link key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="block h-full">
              <Card 
                className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl animate-in fade-in slide-in-from-bottom-5 h-full"
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
                  <p className="mb-2 text-sm font-semibold text-accent">{item.category}</p>
                  <h3 className="mb-4 text-2xl font-headline font-semibold">{item.title}</h3>
                  <div className="flex flex-wrap gap-2 text-sm mt-auto">
                    {item.metrics.map((metric, metricIndex) => (
                      <Badge key={metricIndex} variant="secondary">
                        {metric}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                    <span className="flex items-center text-sm font-semibold text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      View Live Site <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

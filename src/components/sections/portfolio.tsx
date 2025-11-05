import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const portfolioItems = [
  {
    image: "https://images.unsplash.com/photo-1589254065878-42c9da99709e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxsYXd5ZXJ8ZW58MHx8fHwxNzYyMzQwMjIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "professional advocate",
    title: "Advocate Ratna Singh",
    category: "Independent Advocate",
    metrics: ["Modern Design", "Client-Focused"],
    link: "https://advratnasingh.vercel.app/"
  },
  {
    image: "https://images.unsplash.com/photo-1588253197754-420d2d818035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBsYXdmaXJtfGVufDB8fHx8MTc2MjMzMjYwNnww&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "corporate lawfirm",
    title: "Ababneh & Associates",
    category: "International Law Firm",
    metrics: ["Multilingual", "Corporate Branding"],
    link: "https://ababneh-law.vercel.app/"
  },
  {
    image: "https://images.unsplash.com/photo-1758519288417-d359ac3c494d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxsZWdhbCUyMGNvbnN1bHRhbmN5fGVufDB8fHx8MTc2MjMzMjYwNnww&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "legal consultancy",
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

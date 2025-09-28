import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Palette, Rocket, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: <Palette className="h-8 w-8 text-accent" />,
    title: 'Lawyer Website Development',
    description: 'Visually stunning, custom websites that reflect the prestige and authority of your law firm.',
  },
  {
    icon: <Rocket className="h-8 w-8 text-accent" />,
    title: 'Performance Optimization',
    description: 'Built for speed and reliability, ensuring a seamless experience and better search rankings.',
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-accent" />,
    title: 'SEO for Law Firms',
    description: 'As a skilled legal marketing firm, we use SEO best practices to attract your ideal clientele.',
  },
];

export function Services() {
  return (
    <section id="services" className="bg-secondary py-20 sm:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-wider text-accent">Our Expertise</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            A Web Development Company for the <span className="text-accent">Legal Industry</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            From initial design to ongoing optimization, we provide a comprehensive suite of services to ensure your firm's online success.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col text-left p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg animate-in fade-in slide-in-from-bottom-5" style={{animationDelay: `${index * 150}ms`, animationFillMode: 'backwards'}}>
              <CardHeader className="p-0">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-2">
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

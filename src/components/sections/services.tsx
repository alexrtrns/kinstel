import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Zap, Library } from 'lucide-react';

const services = [
  {
    icon: <Palette className="h-10 w-10 text-accent" />,
    title: 'Bespoke Web Design',
    description: 'We create visually stunning, custom websites that reflect the prestige and authority of your law firm.',
  },
  {
    icon: <Zap className="h-10 w-10 text-accent" />,
    title: 'Performance Optimization',
    description: 'Our sites are built for speed and reliability, ensuring a seamless experience for your visitors and better search rankings.',
  },
  {
    icon: <Library className="h-10 w-10 text-accent" />,
    title: 'Content Strategy & SEO',
    description: 'We develop targeted content strategies and implement SEO best practices to attract your ideal clientele.',
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our Expertise
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Delivering digital excellence for the legal industry.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center p-6 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl animate-in fade-in slide-in-from-bottom-5" style={{animationDelay: `${index * 150}ms`, animationFillMode: 'backwards'}}>
              <CardHeader>
                {service.icon}
                <CardTitle className="mt-4 text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

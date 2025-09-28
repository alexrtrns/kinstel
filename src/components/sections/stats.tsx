import { Award, Users, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const stats = [
  {
    icon: <Zap className="h-8 w-8 text-accent" />,
    value: '98%',
    label: 'Page Speed Score',
    description: 'Blazing-fast load times to keep potential clients engaged.',
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    value: '150+',
    label: 'Law Firms Served',
    description: 'Trusted by legal professionals across various practice areas.',
  },
  {
    icon: <Award className="h-8 w-8 text-accent" />,
    value: '300%',
    label: 'Avg. Lead Increase',
    description: 'Our conversion-focused designs deliver measurable results.',
  },
];

export function Stats() {
  return (
    <section id="stats" className="bg-secondary py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="flex flex-col items-center justify-start p-6 text-center shadow-lg"
            >
              <div className="mb-4">{stat.icon}</div>
              <p className="text-4xl font-bold text-primary">{stat.value}</p>
              <h3 className="mt-2 text-lg font-semibold">{stat.label}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{stat.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

    
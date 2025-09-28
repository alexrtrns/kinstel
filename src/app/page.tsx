import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const Stats = dynamic(() => import('@/components/sections/stats').then(m => m.Stats), {
  loading: () => <Skeleton className="h-48 w-full" />,
});
const Services = dynamic(() => import('@/components/sections/services').then(m => m.Services), {
  loading: () => <Skeleton className="h-96 w-full" />,
});
const Portfolio = dynamic(() => import('@/components/sections/portfolio').then(m => m.Portfolio), {
    loading: () => <Skeleton className="h-[800px] w-full" />,
});
const Cta = dynamic(() => import('@/components/sections/cta').then(m => m.Cta), {
    loading: () => <Skeleton className="h-96 w-full" />,
});


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

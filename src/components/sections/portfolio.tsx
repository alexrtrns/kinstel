import { Card } from "@/components/ui/card";

const portfolioItems = [
  {
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    title: "Sterling & Associates",
    category: "Personal Injury Law",
    metrics: ["+150% Leads", "2.1s Load Time"]
  },
  {
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    title: "Whitman Corporate Law",
    category: "Corporate & Business Law",
    metrics: ["+200% Traffic", "98% Performance"]
  },
  {
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    title: "Rodriguez Family Law",
    category: "Family & Divorce Law",
    metrics: ["+180% Consultations", "Mobile Optimized"]
  }
];

const stats = [
  { value: "150%", label: "Average increase in qualified leads within 90 days", color: "text-secondary" },
  { value: "2.1s", label: "Average page load time across all our law firm sites", color: "text-accent" },
  { value: "98%", label: "Average Google PageSpeed performance score", color: "text-green-500" }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Proven Results for Law Firms
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've helped law firms across different practice areas increase their online presence and generate more qualified leads.
          </p>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl border border-border hover-lift"
              data-testid={`portfolio-item-${index}`}
            >
              <img 
                src={item.image} 
                alt={`${item.title} website`} 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 portfolio-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="mb-4">{item.category}</p>
                  <div className="flex justify-center gap-4 text-sm">
                    {item.metrics.map((metric, metricIndex) => (
                      <span key={metricIndex} className="bg-white/20 px-3 py-1 rounded">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Case Study Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-8" data-testid={`stat-card-${index}`}>
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

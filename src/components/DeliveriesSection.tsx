import { useEffect, useRef, useState } from "react";
import { BookOpen, Users, Brain, ChevronDown, Clock, Target } from "lucide-react";
import ResponsiveContainer from "@/components/enhanced/ResponsiveContainer";
import ResponsiveText from "@/components/enhanced/ResponsiveText";
import ResponsiveCard from "@/components/enhanced/ResponsiveCard";
import ResponsiveGrid from "@/components/enhanced/ResponsiveGrid";
const DeliveriesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(max-width: 640px)').matches) {
      if (!isVisible) setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.2,
      rootMargin: '-50px'
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [isVisible]);
  const scrollToNext = () => {
    const nextSection = document.getElementById('investment');
    if (nextSection) {
      const offset = 80;
      const elementPosition = nextSection.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };
  const capacitacaoTracks = [{
    icon: BookOpen,
    title: "Foundations",
    count: "20 trainings",
    description: "For entry‑level parliamentarians and aides"
  }, {
    icon: Brain,
    title: "Advanced Applications",
    count: "20 trainings",
    description: "For analysts and legislative consultants"
  }, {
    icon: Target,
    title: "Governance and Strategy",
    count: "10 trainings",
    description: "For managers and leadership"
  }];
  const investmentOptions = [{
    quantity: "1 training",
    unitPrice: "R$ 12.000 ($2,225.92)",
    total: "R$ 12.000 ($2,225.92)",
    discount: "-"
  }, {
    quantity: "10 trainings",
    unitPrice: "R$ 10.000 ($1,854.93)",
    total: "R$ 100.000 ($18,549.30)",
    discount: "17%"
  }, {
    quantity: "20 trainings",
    unitPrice: "R$ 9.000 ($1,669.44)",
    total: "R$ 180.000 ($33,388.74)",
    discount: "25%"
  }, {
    quantity: "30 trainings",
    unitPrice: "R$ 8.300 ($1,539.59)",
    total: "R$ 249.000 ($46,187.76)",
    discount: "31%"
  }, {
    quantity: "40 trainings",
    unitPrice: "R$ 7.900 ($1,465.39)",
    total: "R$ 316.000 ($58,615.79)",
    discount: "34%"
  }, {
    quantity: "50 trainings",
    unitPrice: "R$ 7.500 ($1,391.20)",
    total: "R$ 375.000 ($69,560.30)",
    discount: "37.5%"
  }];
  return <section id="deliveries" ref={sectionRef} className="section-padding bg-background text-foreground relative" aria-labelledby="deliveries-title">
      <ResponsiveContainer>
        
        {/* Section Header */}
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 id="deliveries-title" className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6">
            TRAINING STRUCTURE
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <ResponsiveText className="text-muted-foreground max-w-3xl mx-auto" size="lg">
            50 in‑person trainings organized into 3 specialized tracks.
          </ResponsiveText>
        </div>

        {/* Tracks Grid */}
        <ResponsiveGrid columns={{
        sm: 1,
        md: 3
      }} gap="md" className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {capacitacaoTracks.map((track, index) => {
          const Icon = track.icon;
          return <ResponsiveCard key={index} variant="interactive" className="bg-card/90 border-primary/20 backdrop-enhanced text-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <ResponsiveText size="xl" weight="bold" className="text-foreground mb-2">
                    {track.title}
                  </ResponsiveText>
                  <ResponsiveText size="lg" className="text-primary mb-3">
                    {track.count}
                  </ResponsiveText>
                  <ResponsiveText size="sm" className="text-muted-foreground">
                    {track.description}
                  </ResponsiveText>
                </div>
              </ResponsiveCard>;
        })}
        </ResponsiveGrid>

        {/* Methodology Section */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <ResponsiveCard variant="elevated" className="bg-card/90 border-primary/20 backdrop-enhanced">
            <div className="text-center mb-8">
              <ResponsiveText as="h3" size="2xl" weight="bold" className="text-foreground mb-4">
                Session methodology outline (2h each)
              </ResponsiveText>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
            <ResponsiveGrid columns={{
            sm: 1,
            md: 2,
            lg: 4
          }} gap="md">
              <div className="text-center">
                <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                <ResponsiveText size="lg" weight="semibold" className="text-primary mb-2">30min</ResponsiveText>
                <ResponsiveText size="sm" className="text-muted-foreground">Practical demonstration</ResponsiveText>
              </div>
              <div className="text-center">
                <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                <ResponsiveText size="lg" weight="semibold" className="text-primary mb-2">60min</ResponsiveText>
                <ResponsiveText size="sm" className="text-muted-foreground">Hands‑on with ChatGPT</ResponsiveText>
              </div>
              <div className="text-center">
                <Brain className="w-10 h-10 text-primary mx-auto mb-3" />
                <ResponsiveText size="lg" weight="semibold" className="text-primary mb-2">20min</ResponsiveText>
                <ResponsiveText size="sm" className="text-muted-foreground">Q&A</ResponsiveText>
              </div>
              <div className="text-center">
                <Target className="w-10 h-10 text-primary mx-auto mb-3" />
                <ResponsiveText size="lg" weight="semibold" className="text-primary mb-2">10min</ResponsiveText>
                <ResponsiveText size="sm" className="text-muted-foreground">Synthesis and recommendations</ResponsiveText>
              </div>
            </ResponsiveGrid>
          </ResponsiveCard>
        </div>

        {/* Investment Section */}
        <div id="investment" className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-8">
              <ResponsiveText as="h3" size="3xl" weight="bold" className="text-foreground mb-4">
              Investment
              </ResponsiveText>
              <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
              <ResponsiveText className="text-muted-foreground max-w-2xl mx-auto">
              Pricing by training volume with progressive discounts
              </ResponsiveText>
            </div>

          <ResponsiveCard variant="elevated" className="bg-card/90 border-primary/20 backdrop-enhanced max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-primary/20">
                    <th className="text-left py-4 px-4 text-foreground font-semibold">Quantity</th>
                    <th className="text-left py-4 px-4 text-foreground font-semibold">Price per Training</th>
                    <th className="text-left py-4 px-4 text-foreground font-semibold">Total Price</th>
                    <th className="text-left py-4 px-4 text-foreground font-semibold">Discount</th>
                  </tr>
                </thead>
                <tbody>
                  {investmentOptions.map((option, index) => <tr key={index} className={`border-b border-primary/10 transition-colors hover:bg-primary/5 ${index === investmentOptions.length - 1 ? 'bg-primary/10' : ''}`}>
                      <td className="py-4 px-4 text-foreground">{option.quantity}</td>
                      <td className="py-4 px-4 text-primary font-semibold">{option.unitPrice}</td>
                      <td className="py-4 px-4 text-foreground font-bold">{option.total}</td>
                      <td className="py-4 px-4 text-muted-foreground">{option.discount}</td>
                    </tr>)}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-center">
              <ResponsiveText size="sm" className="text-muted-foreground">
                Converted to USD at 1 BRL = $0.185493 USD on 2025-11-24 (source: Xe.com). Values show original BRL and converted USD.
              </ResponsiveText>
            </div>

            {/* Destaque pacote completo */}
            <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20">
              <div className="text-center">
                <ResponsiveText size="xl" weight="bold" className="text-foreground mb-2">FULL PACKAGE (50 TRAININGS)</ResponsiveText>
                <ResponsiveText size="3xl" weight="black" className="text-primary mb-2">
                  R$ 375.000,00 ($69,560.30)
                </ResponsiveText>
                <ResponsiveText className="text-muted-foreground mb-4">
                  50 in‑person trainings in Brasília over 12 months
                </ResponsiveText>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">R$ 7.500 per session ($1,391.20)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Full scheduling flexibility</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Post‑training support (30 days)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Observação e Exclusões */}
            <div className="mt-6 space-y-4">
              {/* Observação sobre hora adicional */}
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <ResponsiveText size="sm" weight="semibold" className="text-foreground mb-2">
                  Note:
                </ResponsiveText>
                <ResponsiveText size="sm" className="text-muted-foreground">
                  If a training extends beyond 2 hours, an additional R$ 2.000,00 ($370.99) per extra hour will be added.
                </ResponsiveText>
              </div>

              {/* O que NÃO está incluso */}
              <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                <ResponsiveText size="sm" weight="semibold" className="text-foreground mb-3">
                  What is NOT included:
                </ResponsiveText>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2"></div>
                    <ResponsiveText size="sm" className="text-muted-foreground">
                      <span className="font-medium">Infrastructure</span> (room, projector, internet) — provided by the institution
                    </ResponsiveText>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2"></div>
                    <ResponsiveText size="sm" className="text-muted-foreground">
                      <span className="font-medium">Computers</span> — participants use their own equipment
                    </ResponsiveText>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2"></div>
                    <ResponsiveText size="sm" className="text-muted-foreground">
                      <span className="font-medium">Travel, lodging, and fees</span>
                    </ResponsiveText>
                  </div>
                </div>
              </div>
            </div>
          </ResponsiveCard>
        </div>

      </ResponsiveContainer>

      {/* Navigation Button */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 sm:hidden">
        <button onClick={scrollToNext} className="flex flex-col items-center gap-1 text-foreground hover:text-primary transition-colors group touch-target focus-visible:focus" aria-label="View investment">
          <ChevronDown className="w-5 h-5 animate-bounce group-hover:animate-none text-primary" />
        </button>
      </div>
    </section>;
};
export default DeliveriesSection;

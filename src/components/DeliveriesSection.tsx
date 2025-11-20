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
    title: "Fundamentos",
    count: "20 capacitações",
    description: "Para parlamentares e assessores iniciantes"
  }, {
    icon: Brain,
    title: "Aplicações Avançadas",
    count: "20 capacitações",
    description: "Para analistas e consultores legislativos"
  }, {
    icon: Target,
    title: "Governança e Estratégia",
    count: "10 capacitações",
    description: "Para gestores e lideranças"
  }];
  const investmentOptions = [{
    quantity: "1 capacitação",
    unitPrice: "R$ 12.000",
    total: "R$ 12.000",
    discount: "-"
  }, {
    quantity: "10 capacitações",
    unitPrice: "R$ 10.000",
    total: "R$ 100.000",
    discount: "17%"
  }, {
    quantity: "20 capacitações",
    unitPrice: "R$ 9.000",
    total: "R$ 180.000",
    discount: "25%"
  }, {
    quantity: "30 capacitações",
    unitPrice: "R$ 8.300",
    total: "R$ 249.000",
    discount: "31%"
  }, {
    quantity: "40 capacitações",
    unitPrice: "R$ 7.900",
    total: "R$ 316.000",
    discount: "34%"
  }, {
    quantity: "50 capacitações",
    unitPrice: "R$ 7.500",
    total: "R$ 375.000",
    discount: "37,5%"
  }];
  return <section id="deliveries" ref={sectionRef} className="section-padding bg-background text-foreground relative" aria-labelledby="deliveries-title">
      <ResponsiveContainer>
        
        {/* Section Header */}
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 id="deliveries-title" className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6">
            ESTRUTURA DAS CAPACITAÇÕES
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <ResponsiveText className="text-muted-foreground max-w-3xl mx-auto" size="lg">
            50 capacitações presenciais organizadas em 3 trilhas especializadas.
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
                Ideia de metodologia das sessões (2h cada)
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
                <ResponsiveText size="sm" className="text-muted-foreground">Demonstração prática</ResponsiveText>
              </div>
              <div className="text-center">
                <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                <ResponsiveText size="lg" weight="semibold" className="text-primary mb-2">60min</ResponsiveText>
                <ResponsiveText size="sm" className="text-muted-foreground">Hands-on com ChatGPT</ResponsiveText>
              </div>
              <div className="text-center">
                <Brain className="w-10 h-10 text-primary mx-auto mb-3" />
                <ResponsiveText size="lg" weight="semibold" className="text-primary mb-2">20min</ResponsiveText>
                <ResponsiveText size="sm" className="text-muted-foreground">Resolução de dúvidas</ResponsiveText>
              </div>
              <div className="text-center">
                <Target className="w-10 h-10 text-primary mx-auto mb-3" />
                <ResponsiveText size="lg" weight="semibold" className="text-primary mb-2">10min</ResponsiveText>
                <ResponsiveText size="sm" className="text-muted-foreground">Síntese e recomendações</ResponsiveText>
              </div>
            </ResponsiveGrid>
          </ResponsiveCard>
        </div>

        {/* Investment Section */}
        <div id="investment" className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8">
            <ResponsiveText as="h3" size="3xl" weight="bold" className="text-foreground mb-4">
              Investimento
            </ResponsiveText>
            <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
            <ResponsiveText className="text-muted-foreground max-w-2xl mx-auto">
              Valores por volume de capacitações com descontos progressivos
            </ResponsiveText>
          </div>

          <ResponsiveCard variant="elevated" className="bg-card/90 border-primary/20 backdrop-enhanced max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-primary/20">
                    <th className="text-left py-4 px-4 text-foreground font-semibold">Quantidade</th>
                    <th className="text-left py-4 px-4 text-foreground font-semibold">Valor por Capacitação</th>
                    <th className="text-left py-4 px-4 text-foreground font-semibold">Valor Total</th>
                    <th className="text-left py-4 px-4 text-foreground font-semibold">Desconto</th>
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

            {/* Destaque pacote completo */}
            <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20">
              <div className="text-center">
                <ResponsiveText size="xl" weight="bold" className="text-foreground mb-2">PACOTE COMPLETO (50 CAPACITAÇÕES)                             </ResponsiveText>
                <ResponsiveText size="3xl" weight="black" className="text-primary mb-2">
                  R$ 375.000,00
                </ResponsiveText>
                <ResponsiveText className="text-muted-foreground mb-4">
                  50 capacitações presenciais em Brasília ao longo de 12 meses
                </ResponsiveText>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">R$ 7.500 por sessão</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Flexibilidade total de agendamento</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Suporte pós-capacitação (30 dias)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Observação e Exclusões */}
            <div className="mt-6 space-y-4">
              {/* Observação sobre hora adicional */}
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <ResponsiveText size="sm" weight="semibold" className="text-foreground mb-2">
                   Observação:
                </ResponsiveText>
                <ResponsiveText size="sm" className="text-muted-foreground">
                  Caso a capacitação se estenda além de 2 horas, será adicionado R$ 2.000,00 por hora adicional.
                </ResponsiveText>
              </div>

              {/* O que NÃO está incluso */}
              <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                <ResponsiveText size="sm" weight="semibold" className="text-foreground mb-3">
                   O que NÃO está incluso:
                </ResponsiveText>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2"></div>
                    <ResponsiveText size="sm" className="text-muted-foreground">
                      <span className="font-medium">Infraestrutura</span> (sala, projetor, internet) - fornecida pelo órgão
                    </ResponsiveText>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2"></div>
                    <ResponsiveText size="sm" className="text-muted-foreground">
                      <span className="font-medium">Computadores</span> - participantes usam equipamentos próprios
                    </ResponsiveText>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2"></div>
                    <ResponsiveText size="sm" className="text-muted-foreground">
                      <span className="font-medium">Deslocamentos, hospedagens e honorários</span>
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
        <button onClick={scrollToNext} className="flex flex-col items-center gap-1 text-foreground hover:text-primary transition-colors group touch-target focus-visible:focus" aria-label="Ver investimento">
          <ChevronDown className="w-5 h-5 animate-bounce group-hover:animate-none text-primary" />
        </button>
      </div>
    </section>;
};
export default DeliveriesSection;
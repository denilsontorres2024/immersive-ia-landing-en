
import { useEffect, useRef, useState } from "react";
import { Bot, ChevronDown } from "lucide-react";
import ResponsiveContainer from "@/components/enhanced/ResponsiveContainer";
import ResponsiveText from "@/components/enhanced/ResponsiveText";
import ResponsiveCard from "@/components/enhanced/ResponsiveCard";

const OpeningMessage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#deliveries');
    if (nextSection) {
      const offset = 80;
      const elementPosition = nextSection.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="opening" 
      ref={sectionRef} 
      className="section-padding-sm bg-card/20 relative pb-16 sm:pb-8"
      aria-labelledby="opening-title"
    >
      <ResponsiveContainer size="md">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <div className="mb-8 flex justify-center">
            <div className="bg-primary/10 p-4 rounded-2xl">
              <Bot className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
            </div>
          </div>

          <ResponsiveCard variant="elevated" className="bg-card/90 border-primary/20 backdrop-enhanced mb-12 sm:mb-0">
            <blockquote>
              <ResponsiveText size="lg" className="text-foreground leading-relaxed">
                "Capacitar parlamentares e equipes de órgãos públicos brasileiros no{" "}
                <span className="gradient-text font-semibold">uso prático do ChatGPT</span> para 
                atividades legislativas do dia a dia. São{" "}
                <span className="gradient-text font-semibold">50 capacitações presenciais</span>{" "}
                em Brasília ao longo de 12 meses, com foco em aplicações reais do contexto legislativo."
              </ResponsiveText>
            </blockquote>
          </ResponsiveCard>
        </div>
      </ResponsiveContainer>

      {/* Enhanced Navigation Button */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 sm:hidden">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center gap-1 text-foreground hover:text-primary transition-colors group touch-target focus-visible:focus"
          aria-label="Ver entregas e valores"
        >
          <ChevronDown className="w-5 h-5 animate-bounce group-hover:animate-none text-primary" />
        </button>
      </div>
    </section>
  );
};

export default OpeningMessage;

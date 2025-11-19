
import { useEffect, useRef, useState } from "react";
import { CheckCircle, FileText, PenTool, ChevronDown } from "lucide-react";

const NextStepsSection = () => {
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
    const nextSection = document.querySelector('#contact');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const steps = [
    {
      icon: CheckCircle,
      title: "Confirmação do Escopo",
      description: "Revisão e aprovação das entregas propostas. É necessário definir um cronograma concreto para os 12 meses de 2025.",
      number: "01"
    },
    {
      icon: FileText,
      title: "Documentação",
      description: "Envio de documentação PJ + CPF para compliance",
      number: "02"
    },
    {
      icon: PenTool,
      title: "Assinatura de Contrato",
      description: "Formalização do acordo com termos e condições",
      number: "03"
    }
  ];

  return (
    <section id="next-steps" ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-muted/5 text-foreground relative">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4">
            PRÓXIMOS PASSOS
          </h2>
          <div className="w-16 sm:w-20 h-0.5 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`card-responsive group hover:scale-[1.02] transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                <div className="text-3xl font-black text-primary opacity-50">
                  {step.number}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button 
            onClick={() => window.open('http://wa.me/+5511958149007?text=Olá! Tenho interesse na proposta de 50 Capacitações OpenAI para Órgãos Públicos.', '_blank')}
            className="btn-cta"
            aria-label="Iniciar próximos passos via WhatsApp"
          >
            Iniciar Próximos Passos
          </button>
        </div>
      </div>

      {/* Navigation Button */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center gap-1 text-foreground hover:text-primary transition-colors group"
        >
          <ChevronDown className="w-5 h-5 animate-bounce group-hover:animate-none" />
        </button>
      </div>
    </section>
  );
};

export default NextStepsSection;


import { useEffect, useRef, useState } from "react";
import { Brain, Target, TrendingUp, Sparkles } from "lucide-react";

const DifferentialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const differentials = [
    {
      icon: Brain,
      title: "Practical Experience in AI",
      description: "7+ years of automation, intelligent agents, and micro‑SaaS"
    },
    {
      icon: Target,
      title: "Accessible Content",
      description: "Clear language for micro and small business owners"
    },
    {
      icon: TrendingUp,
      title: "Real Revenue Cases",
      description: "$930k+ generated through AI solutions"
    },
    {
      icon: Sparkles,
      title: "Proposal Created with AI",
      description: "Practical demonstration of technology in action"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            DIFFERENTIALS
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {differentials.map((differential, index) => (
            <div
              key={index}
              className={`border border-muted/20 bg-muted/5 p-6 transition-all duration-1000 hover:border-primary/30 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <differential.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {differential.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {differential.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;

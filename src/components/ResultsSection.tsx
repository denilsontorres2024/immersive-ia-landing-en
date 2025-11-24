import { useEffect, useRef, useState } from "react";
import { DollarSign, Settings, Brain, TrendingUp, Users, Zap } from "lucide-react";

const ResultsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countersAnimated, setCountersAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          if (!countersAnimated) {
            setTimeout(() => {
              animateCounters();
              animateProgressBars();
              setCountersAnimated(true);
            }, 500);
          }
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible, countersAnimated]);

  const animateCounters = () => {
    const counters = document.querySelectorAll('.metric-counter');
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target') || '0');
      const suffix = counter.getAttribute('data-suffix') || '';
      const duration = 2500;
      const increment = target / (duration / 16);
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current).toString() + suffix;
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toString() + suffix;
        }
      };
      updateCounter();
    });
  };

  const animateProgressBars = () => {
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach((bar, index) => {
      setTimeout(() => {
        const progress = bar.getAttribute('data-progress') || '0';
        (bar as HTMLElement).style.width = progress + '%';
      }, index * 200);
    });
  };

  const metrics = [
    {
      icon: DollarSign,
      value: 5,
      suffix: "M+",
      label: "Generated with AI agents",
      description: "In direct revenue for clients",
      progress: 90,
      color: "text-green-400",
      gradient: "from-green-400/20 to-emerald-600/20"
    },
    {
      icon: Settings,
      value: 30,
      suffix: "+",
      label: "Automations implemented",
      description: "Processes optimized with AI",
      progress: 75,
      color: "text-blue-400",
      gradient: "from-blue-400/20 to-cyan-600/20"
    },
    {
      icon: Brain,
      value: 100,
      suffix: "%",
      label: "Direct impact on sales",
      description: "Project success rate",
      progress: 100,
      color: "text-purple-400",
      gradient: "from-purple-400/20 to-violet-600/20"
    },
    {
      icon: TrendingUp,
      value: 250,
      suffix: "%",
      label: "Average increase in conversions",
      description: "With intelligent agents",
      progress: 85,
      color: "text-orange-400",
      gradient: "from-orange-400/20 to-red-600/20"
    },
    {
      icon: Users,
      value: 500,
      suffix: "+",
      label: "People trained",
      description: "In AI technologies",
      progress: 80,
      color: "text-pink-400",
      gradient: "from-pink-400/20 to-rose-600/20"
    },
    {
      icon: Zap,
      value: 48,
      suffix: "h",
      label: "Process time reduction",
      description: "Average optimization",
      progress: 95,
      color: "text-yellow-400",
      gradient: "from-yellow-400/20 to-amber-600/20"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="particles-bg animate-float opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-hero opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-black gradient-text mb-6">
            Proven Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real numbers that demonstrate the impact of developed AI solutions
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`card-glow group relative overflow-hidden transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative p-8 text-center">
                {/* Icon */}
                <div className={`${metric.color} mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <metric.icon className="w-16 h-16" />
                </div>

                {/* Metric Value */}
                <div className="mb-4">
                  <div className="text-4xl md:text-5xl font-black gradient-text mb-2">
                    <span 
                      className="metric-counter" 
                      data-target={metric.value}
                      data-suffix={metric.suffix}
                    >
                      0{metric.suffix}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {metric.label}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6">
                  {metric.description}
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-muted/30 rounded-full h-2 mb-4">
                  <div 
                    className="progress-fill bg-gradient-primary h-2 rounded-full transition-all duration-2000 ease-out"
                    data-progress={metric.progress}
                    style={{ width: '0%' }}
                  ></div>
                </div>

                {/* Progress Percentage */}
                <div className="text-sm text-muted-foreground">
                  Efficiency: {metric.progress}%
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-xl transition-all duration-300"></div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="card-interactive p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Want similar results for your business?
            </h3>
            <p className="text-muted-foreground mb-6">
              Discover how to implement AI agents that generate real revenue
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-cyber px-8 py-3">
                Watch Free Live
              </button>
              <button className="btn-cyber bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;

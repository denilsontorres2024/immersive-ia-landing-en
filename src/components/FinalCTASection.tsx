import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Youtube, Play, Clock, Users, TrendingUp, Instagram } from "lucide-react";

const FinalCTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [subscribersCount, setSubscribersCount] = useState(0);
  const [timeToLive, setTimeToLive] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateSubscribers();
          startCountdown();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateSubscribers = () => {
    let current = 0;
    const target = 15000;
    const duration = 2000;
    const increment = target / (duration / 16);

    const updateCount = () => {
      current += increment;
      if (current < target) {
        setSubscribersCount(Math.floor(current));
        requestAnimationFrame(updateCount);
      } else {
        setSubscribersCount(target);
      }
    };
    updateCount();
  };

  const startCountdown = () => {
    // Simular próxima live (19h do dia atual ou próximo dia útil)
    const now = new Date();
    const nextLive = new Date();
    nextLive.setHours(19, 0, 0, 0);
    
    if (nextLive <= now) {
      nextLive.setDate(nextLive.getDate() + 1);
    }

    const updateCountdown = () => {
      const distance = nextLive.getTime() - new Date().getTime();
      
      if (distance > 0) {
        const hours = Math.floor(distance / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        setTimeToLive({ hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  };

  const handleYouTubeClick = () => {
    // Efeito de ripple épico
    const button = document.querySelector('.youtube-epic-btn');
    if (button) {
      button.classList.add('animate-mega-glow');
      setTimeout(() => {
        button.classList.remove('animate-mega-glow');
      }, 1000);
    }
    
    // Abrir YouTube com confirmação de inscrição
    window.open('https://www.youtube.com/@deniaitorres?sub_confirmation=1', '_blank');
  };

  const words = ["FOLLOW", "MY", "JOURNEY"];

  return (
    <section ref={sectionRef} className="py-32 pb-40 bg-background relative overflow-hidden">
      {/* Epic Background */}
      <div className="absolute inset-0">
        <div className="particles-bg animate-float opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsla(var(--primary)/0.1)_0%,transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Epic Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="space-y-4 mb-8">
            {words.map((word, index) => (
              <div
                key={word}
                className={`text-5xl md:text-7xl lg:text-8xl font-black transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  transform: isVisible ? 'translateX(0)' : `translateX(${(index + 1) * 20}px)`
                }}
              >
                {index === 2 ? (
                  <span className="gradient-text">{word}</span>
                ) : (
                  <span className="text-foreground">{word}</span>
                )}
              </div>
            ))}
          </div>
          
          <p className={`text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Every weekday at 7 PM, I demonstrate how everyday people can generate more revenue with AI agents.
          </p>
        </div>

        {/* Live Schedule Card */}
        <div className={`max-w-sm mx-auto mb-16 px-4 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <div className="card-glow p-6 md:p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 md:gap-4 mb-6">
                <Clock className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                <div className="text-center">
                  <div className="text-lg md:text-2xl font-bold">MON - FRI</div>
                  <div className="text-2xl md:text-3xl font-black gradient-text">7:00 PM</div>
                </div>
                <div className="w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full animate-pulse shadow-glow"></div>
              </div>
              
              {/* Countdown */}
              <div className="mb-4">
                <p className="text-xs md:text-sm text-muted-foreground mb-2">Next live in:</p>
                <div className="flex justify-center gap-1 md:gap-2 text-lg md:text-2xl font-bold">
                  <span className="bg-primary/20 px-2 md:px-3 py-1 rounded-lg text-sm md:text-base">{timeToLive.hours.toString().padStart(2, '0')}</span>
                  <span className="text-sm md:text-base">:</span>
                  <span className="bg-primary/20 px-2 md:px-3 py-1 rounded-lg text-sm md:text-base">{timeToLive.minutes.toString().padStart(2, '0')}</span>
                  <span className="text-sm md:text-base">:</span>
                  <span className="bg-primary/20 px-2 md:px-3 py-1 rounded-lg text-sm md:text-base">{timeToLive.seconds.toString().padStart(2, '0')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Epic YouTube Button */}
        <div className={`text-center mb-24 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <Button
            onClick={handleYouTubeClick}
            className="youtube-epic-btn btn-epic group relative overflow-hidden text-sm md:text-lg px-6 md:px-12 py-4 md:py-5 shadow-epic w-full max-w-md mx-auto"
          >
            {/* Background Animations */}
            <div className="absolute inset-0 bg-gradient-primary"></div>
            <div className="absolute inset-0 bg-gradient-hover opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Particles Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full animate-ping"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${20 + (i % 2) * 60}%`,
                    animationDelay: `${i * 100}ms`
                  }}
                ></div>
              ))}
            </div>
            
            {/* Content */}
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                <Youtube className="w-6 h-6 md:w-7 md:h-7" />
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <span className="font-bold text-xs sm:text-sm md:text-base">Watch Lives on YouTube</span>
                <span className="text-xs opacity-90">🔴 Live • Mon–Fri at 7 PM</span>
                </div>
                <Play className="w-4 h-4 md:w-5 md:h-5 animate-pulse hidden sm:block" />
              </div>
            
            {/* Glow Border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-full transition-all duration-300"></div>
          </Button>
        </div>


        {/* Final Message */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-6">
              🚀 Don’t miss the opportunity to be at the forefront of the AI revolution
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each live session is a new discovery, a new strategy, a new way to generate revenue with artificial intelligence.
              Join thousands of people already transforming their businesses with AI.
            </p>
          </div>
        </div>

        {/* Instagram Link */}
        <div className={`text-center mt-12 md:mt-16 pb-20 transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a 
            href="https://www.instagram.com/deniaitorres/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 text-sm underline-offset-4 hover:underline px-4"
          >
            <Instagram className="w-4 h-4" />
            <span>Go to Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;

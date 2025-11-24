import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Youtube, Linkedin, Play } from "lucide-react";
import heroCover from "@/assets/hero-cover.jpg";

const HeroSection = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const [showContent, setShowContent] = useState(false);
  const fullText = "DENILSON TORRES";

  useEffect(() => {
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypewriterText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => setShowContent(true), 500);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  const handleRippleEffect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    const ripple = document.createElement("span");
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: rgba(255,255,255,0.3);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    `;
    
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Particles Background */}
      <div className="particles-bg animate-float opacity-30"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-40"></div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Typewriter Title */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-wider">
            <span className="gradient-text">
              {typewriterText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
        </div>

        {/* Animated Subtitle */}
        <div className={`transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-8 text-shadow">
            I build <span className="gradient-text animate-glow-pulse">AI Agents</span>{" "}
            that <span className="gradient-text animate-glow-pulse">generate revenue</span>
          </h2>

          {/* Info Cards */}
          <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center">
            <div className="card-interactive hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm md:text-base">Free live sessions every weekday at 7 PM</span>
              </div>
            </div>
            <div className="card-interactive hover:scale-105 transition-transform duration-300">
              <span className="text-sm md:text-base">For those who want to drive more revenue with AI</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              className="btn-cyber text-lg px-8 py-4 group relative overflow-hidden"
              onClick={(e) => {
                handleRippleEffect(e);
                window.open('https://www.youtube.com/@deniaitorres', '_blank');
              }}
            >
              <Youtube className="w-6 h-6 mr-2" />
              <span>Watch Live on YouTube</span>
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Button>
            
            <Button 
              variant="outline" 
              className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://www.linkedin.com/in/denilson-torres-2002/', '_blank')}
            >
              <Linkedin className="w-6 h-6 mr-2" />
              <span>View LinkedIn Profile</span>
            </Button>
          </div>

          {/* Live Notification */}
          <div className="card-glow bg-red-500/10 border-red-500/30 p-4 rounded-xl mb-12 animate-scale-in">
            <div className="flex items-center justify-center gap-3">
              <Play className="w-5 h-5 text-red-500 animate-pulse" />
              <span className="text-red-400 font-semibold">
                Next live today at 7 PM — AI Agents for E‑commerce
              </span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-float">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <span className="text-sm">Scroll to learn more about Deni</span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('${heroCover}')`
        }}
      ></div>
    </section>
  );
};

export default HeroSection;

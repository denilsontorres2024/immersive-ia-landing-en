import { useEffect, useState } from "react";

const InteractiveEffects = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Scroll Progress
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      setShowScrollTop(scrollTop > 500);
    };

    // Mouse Position for Parallax
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    // Intersection Observer for Animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.animate-slide-up, .animate-slide-left, .animate-slide-right, .animate-scale-in').forEach(el => {
      observer.observe(el);
    });

    // Event Listeners
    window.addEventListener('scroll', updateScrollProgress);
    window.addEventListener('mousemove', updateMousePosition);

    // Social Proof Notifications
    const showRandomNotification = () => {
      const names = ['Ana Costa', 'João Silva', 'Carla Santos', 'Pedro Lima', 'Maria Oliveira'];
      const actions = ['se inscreveu no canal', 'curtiu o vídeo', 'comentou na live', 'compartilhou o conteúdo'];
      
      const notification = document.createElement('div');
      notification.className = 'fixed bottom-6 left-6 bg-card border border-primary/20 rounded-lg p-4 shadow-glow z-50 transform translate-y-full opacity-0 transition-all duration-500';
      notification.innerHTML = `
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
            ${names[Math.floor(Math.random() * names.length)][0]}
          </div>
          <div>
            <p class="text-sm font-semibold">${names[Math.floor(Math.random() * names.length)]}</p>
            <p class="text-xs text-muted-foreground">${actions[Math.floor(Math.random() * actions.length)]}</p>
          </div>
        </div>
      `;
      
      document.body.appendChild(notification);
      
      setTimeout(() => {
        notification.classList.remove('translate-y-full', 'opacity-0');
      }, 100);
      
      setTimeout(() => {
        notification.classList.add('translate-y-full', 'opacity-0');
        setTimeout(() => notification.remove(), 500);
      }, 4000);
    };

    // Show social proof notifications randomly
    const notificationInterval = setInterval(showRandomNotification, Math.random() * 15000 + 10000);

    // Reduced Motion Support
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
      document.body.classList.add('reduced-motion');
    }

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('mousemove', updateMousePosition);
      observer.disconnect();
      clearInterval(notificationInterval);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll Progress Ring */}
      <div className="fixed top-6 right-6 z-50">
        <div className="progress-ring">
          <svg className="progress-ring-svg" width="60" height="60">
            <circle
              className="progress-ring-background"
              cx="30"
              cy="30"
              r="26"
            />
            <circle
              className="progress-ring-progress"
              cx="30"
              cy="30"
              r="26"
              style={{
                strokeDasharray: `${2 * Math.PI * 26}`,
                strokeDashoffset: `${2 * Math.PI * 26 * (1 - scrollProgress / 100)}`
              }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-primary">
              {Math.round(scrollProgress)}%
            </span>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-glow hover:shadow-epic transition-all duration-300 hover:scale-110 z-[9999] flex items-center justify-center"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Mouse Glow Effect */}
      <div 
        className="fixed pointer-events-none z-0 w-96 h-96 bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl transition-all duration-300"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Loading Screen */}
      <div id="loading-screen" className="fixed inset-0 bg-background z-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="gradient-text text-xl font-bold animate-pulse">Carregando experiência...</p>
        </div>
      </div>

    </>
  );
};

export default InteractiveEffects;
import { useEffect, useState } from "react";
import { Building2, Calendar, MapPin, ChevronDown, Users, Award } from "lucide-react";
import ResponsiveContainer from "@/components/enhanced/ResponsiveContainer";
import ResponsiveText from "@/components/enhanced/ResponsiveText";
import ResponsiveCard from "@/components/enhanced/ResponsiveCard";
import heroCover from "@/assets/hero-cover.jpg";
const ProposalCover = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCount, setAnimatedCount] = useState(0);
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
    const animateCounter = () => {
      const target = 12000;
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;
      const updateCount = () => {
        current += increment;
        if (current < target) {
          setAnimatedCount(Math.floor(current));
          requestAnimationFrame(updateCount);
        } else {
          setAnimatedCount(target);
        }
      };
      setTimeout(updateCount, 1000);
    };
    animateCounter();
  }, []);
  const scrollToNext = () => {
    const nextSection = document.getElementById('opening');
    if (nextSection) {
      const offset = 80;
      const elementPosition = nextSection.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };
  const scrollToProfile = () => {
    const profileElements = document.querySelectorAll('h2');
    let profileSection = null;
    profileElements.forEach(element => {
      if (element.textContent?.includes('DENILSON TORRES')) {
        profileSection = element.closest('section');
      }
    });
    if (profileSection) {
      const offset = 80;
      const elementPosition = profileSection.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };
  return <section id="cover" className="relative min-h-screen flex flex-col items-center justify-center bg-background text-foreground overflow-hidden" role="banner">
      {/* Enhanced Background with Better Performance */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url('${heroCover}')`,
      willChange: 'transform'
    }} aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50"></div>
      </div>

      <ResponsiveContainer className="relative z-10 flex-1 flex flex-col justify-center">
        
        {/* Enhanced Header Info - More Responsive */}
        <div className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 text-muted-foreground">
            <div className="flex items-center gap-2 touch-target">
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <ResponsiveText size="sm" className="text-muted-foreground">Órgãos Públicos</ResponsiveText>
            </div>
            <div className="w-1 h-1 bg-primary rounded-full hidden sm:block" aria-hidden="true"></div>
            <div className="flex items-center gap-2 touch-target">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <ResponsiveText size="sm" className="text-muted-foreground">2025</ResponsiveText>
            </div>
            <div className="w-1 h-1 bg-primary rounded-full hidden sm:block" aria-hidden="true"></div>
            <div className="flex items-center gap-2 touch-target">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <ResponsiveText size="sm" className="text-muted-foreground">Brasília</ResponsiveText>
            </div>
          </div>
        </div>

        {/* Enhanced Main Content - Better Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center mb-8">
          
          {/* Enhanced Text Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            <div className={`transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <ResponsiveText as="h1" size="5xl" weight="black" className="leading-tight mb-4 sm:mb-6 text-white">
                50 CAPACITAÇÕES{" "}
                <br className="hidden sm:block" />
                <span className="text-white text-center">OPEN AI</span>
              </ResponsiveText>
              
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <ResponsiveText as="h2" size="3xl" weight="bold" className="text-foreground">
                  PARA ÓRGÃOS PÚBLICOS
                </ResponsiveText>
                <ResponsiveText as="h3" size="xl" weight="medium" className="text-primary/90">
                  ChatGPT em Atividades Legislativas
                </ResponsiveText>
              </div>

              <div className="w-16 sm:w-24 h-1 bg-primary mx-auto lg:mx-0 mb-6 sm:mb-8 rounded-full"></div>
            </div>

            {/* Enhanced CTA Section */}
        <div className={`transition-all duration-800 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                <button onClick={scrollToNext} className="btn-cta hover:scale-105 focus-visible:focus text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4" aria-label="Ver proposta completa de 50 capacitações OpenAI">
                  Ver Proposta
                </button>
                <button onClick={scrollToProfile} className="btn-secondary hover:scale-105 focus-visible:focus text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4" aria-label="Conhecer o perfil de Denilson Torres">
                  Quem é Denilson Torres
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Professional Info Card */}
          <div className={`transition-all duration-800 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <ResponsiveCard variant="glow" className="max-w-md mx-auto lg:max-w-none hover:scale-105 transition-transform duration-300">
              
              {/* Social Proof */}
              <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  <ResponsiveText size="xl" weight="bold" className="text-primary">
                    +{animatedCount.toLocaleString('pt-BR')}
                  </ResponsiveText>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  <ResponsiveText size="sm" weight="medium">Professor IA</ResponsiveText>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <ResponsiveText as="h4" size="2xl" weight="bold" className="text-foreground">
                  DENILSON TORRES
                </ResponsiveText>
                <ResponsiveText size="base" className="text-muted-foreground">
                  Professor em IA Generativa • Proposta OPEN AI        
                </ResponsiveText>
                
                {/* Trust Indicators */}
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-primary/10 border border-primary/30 px-4 py-3 rounded-lg">
                    <ResponsiveText size="sm" weight="medium" className="text-primary">
                      +12K Alunos Capacitados
                    </ResponsiveText>
                  </div>
                  <div className="bg-primary/10 border border-primary/30 px-4 py-3 rounded-lg">
                    <ResponsiveText size="sm" weight="medium" className="text-primary">
                      Professor MBA IA • Professor SEBRAE • ex-TJSP
                    </ResponsiveText>
                  </div>
                  <div className="bg-primary/10 border border-primary/30 px-4 py-3 rounded-lg">
                    <ResponsiveText size="sm" weight="medium" className="text-primary">
                      +20 Prêmios Tech • MBA AI Vale do Silício
                    </ResponsiveText>
                  </div>
                </div>
              </div>
            </ResponsiveCard>
          </div>
        </div>
      </ResponsiveContainer>

      {/* Enhanced Navigation Button */}
      <div className="relative z-20 pb-8">
        <button onClick={scrollToNext} className="flex flex-col items-center gap-2 text-foreground hover:text-primary transition-colors group touch-target focus-visible:focus" aria-label="Ver Proposta">
          <ResponsiveText size="sm" weight="medium">Ver Proposta</ResponsiveText>
          <ChevronDown className="w-6 h-6 animate-bounce group-hover:animate-none text-primary" />
        </button>
      </div>
    </section>;
};
export default ProposalCover;
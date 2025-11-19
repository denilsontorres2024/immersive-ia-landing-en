import { useEffect, useRef, useState } from "react";
import { Award, BookOpen, Users, Code, Trophy, Globe, Utensils, Camera } from "lucide-react";

// Imports das imagens locais
import deniTrophy from "@/assets/deni-trophy.jpg";
import graduationFiap from "@/assets/graduation-fiap.jpg";
import academiaEvent from "@/assets/academia-event.jpg";
import foundersAi from "@/assets/founders-ai.jpg";
import startupIdwall from "@/assets/startup-idwall.jpg";
import siliconValley from "@/assets/silicon-valley.jpg";
const ProfileSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Todos");
  const sectionRef = useRef<HTMLDivElement>(null);
  const filters = ["Todos", "Educação", "Palestras", "Projetos", "Competições", "Workshops", "Internacional"];
  const achievements = [{
    id: 2,
    category: "Competições",
    title: "Ganhador de competições de tecnologia",
    subtitle: "Vencedor em Diversas Competições de Tecnologia",
    description: "Denilson Torres conquistou múltiplos prêmios em competições nacionais e internacionais de tecnologia, demonstrando sua expertise em soluções inovadoras e consolidando sua posição como referência no setor tech.",
    image: deniTrophy,
    icon: Trophy
  }, {
    id: 3,
    category: "Educação",
    title: "Formatura FIAP",
    subtitle: "Bolsista Integral",
    description: "Formação completa de Denilson Torres como bolsista integral na FIAP, construindo uma base sólida em tecnologia e inovação.",
    image: graduationFiap,
    icon: BookOpen
  }, {
    id: 4,
    category: "Palestras",
    title: "Academia Lendár[IA]™",
    subtitle: "Palestra sobre IA para Receita",
    description: "Apresentação de Denilson Torres na Academia Lendária sobre como gerar receita real com IA, compartilhando estratégias práticas e comprovadas.",
    image: academiaEvent,
    icon: Users
  }, {
    id: 5,
    category: "Workshops",
    title: "Founders AI Workshop",
    subtitle: "Agente de Criação de Conteúdo",
    description: "Workshop prático ministrado por Denilson Torres sobre desenvolvimento de agentes de IA para criação de conteúdo automatizado e escalável.",
    image: foundersAi,
    icon: Code
  }, {
    id: 6,
    category: "Projetos",
    title: "Passagem por Grandes Startups",
    subtitle: "Automação e Growth",
    description: "Desenvolvimento por Denilson Torres de soluções avançadas de automação e growth em grandes startups durante +6 anos, transformando processos, otimizando operações e acelerando resultados exponenciais através de tecnologia e estratégias data-driven.",
    image: startupIdwall,
    icon: Code
  }, {
    id: 7,
    category: "Internacional",
    title: "Vale do Silício",
    subtitle: "Preparação MBA IA",
    description: "Preparação de Denilson Torres para MBA em Inteligência Artificial no Vale do Silício, absorvendo as melhores práticas do epicentro mundial da tecnologia.",
    image: siliconValley,
    icon: Globe
  }];
  const filteredAchievements = activeFilter === "Todos" ? achievements : achievements.filter(achievement => achievement.category === activeFilter);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [isVisible]);
  return <section ref={sectionRef} className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4">
            DENILSON TORRES
          </h2>
          <div className="w-16 sm:w-20 h-0.5 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            +6 anos em startups de crescimento transformando negócios com IA e automação, compartilhando conhecimento através de lives diárias e formando +12k alunos na área
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={`mb-8 lg:mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {filters.map(filter => <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter ? "bg-primary text-primary-foreground" : "bg-card text-card-foreground hover:bg-accent"}`}>
                {filter}
              </button>)}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredAchievements.map((achievement, index) => {
          const IconComponent = achievement.icon;
          return <div key={achievement.id} className={`card-responsive group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
            transitionDelay: `${300 + index * 100}ms`
          }}>
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg h-48 mb-4">
                  <img src={achievement.image} alt={achievement.title} className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${achievement.id === 5 ? 'object-cover object-top' : 'object-cover'}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="flex items-center gap-2">
                      <IconComponent className="w-4 h-4" />
                      <span className="text-xs font-medium bg-primary px-2 py-1 rounded">
                        {achievement.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {achievement.title}
                  </h3>
                  <h4 className="text-sm font-semibold text-primary mb-2">
                    {achievement.subtitle}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default ProfileSection;

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Eye, ExternalLink } from "lucide-react";
import deniTrophy from "@/assets/deni-trophy.jpg";
import graduationFiap from "@/assets/graduation-fiap.jpg";
import academiaEvent from "@/assets/academia-event.jpg";
import foundersAi from "@/assets/founders-ai.jpg";
import startupIdwall from "@/assets/startup-idwall.jpg";
import siliconValley from "@/assets/silicon-valley.jpg";

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const galleryItems = [
    {
      id: 1,
      title: "Competição Nacional",
      description: "1º Lugar em Tecnologia",
      category: "competition",
      image: deniTrophy,
      details: "Conquista histórica de Denilson Torres do primeiro lugar em competição nacional de tecnologia, demonstrando sua capacidade de desenvolver soluções inovadoras que se destacam no cenário brasileiro de inovação."
    },
    {
      id: 2,
      title: "Formatura FIAP",
      description: "Bolsista Integral",
      category: "education",
      image: graduationFiap,
      details: "Formação acadêmica sólida de Denilson Torres como bolsista integral na FIAP, onde construiu as bases técnicas que hoje aplicam na criação de agentes de IA que geram receita real para empresários brasileiros."
    },
    {
      id: 3,
      title: "Academia Lendár[IA]™",
      description: "Palestra sobre IA para Receita",
      category: "speaking",
      image: academiaEvent,
      details: "Apresentação marcante de Denilson Torres na Academia Lendária sobre estratégias práticas de como gerar receita com IA, compartilhando métodos comprovados que já transformaram +12k alunos • +6 anos em startups através do ensino."
    },
    {
      id: 4,
      title: "Link School Workshop",
      description: "Agente de Criação de Conteúdo",
      category: "workshop",
      image: foundersAi,
      details: "Workshop hands-on ministrado por Denilson Torres sobre desenvolvimento de agentes de IA para criação de conteúdo automatizado, ensinando como transformar processos manuais em sistemas inteligentes que escalam negócios."
    },
    {
      id: 5,
      title: "Passagem por Grandes Startups",
      description: "Automação e Growth",
      category: "work",
      image: startupIdwall,
      details: "Experiência prática de Denilson Torres no desenvolvimento de soluções avançadas de automação e growth em grandes startups durante +6 anos, aplicando IA para otimizar processos e acelerar o crescimento de empresas brasileiras."
    },
    {
      id: 6,
      title: "Vale do Silício",
      description: "Preparação MBA IA",
      category: "international",
      image: siliconValley,
      details: "Preparação internacional de Denilson Torres para MBA em Inteligência Artificial no Vale do Silício, absorvendo as melhores práticas do epicentro mundial da tecnologia para aplicar no mercado brasileiro."
    }
  ];

  const filters = [
    { key: "all", label: "Todos" },
    { key: "education", label: "Educação" },
    { key: "speaking", label: "Palestras" },
    { key: "work", label: "Projetos" },
    { key: "competition", label: "Competições" },
    { key: "workshop", label: "Workshops" },
    { key: "international", label: "Internacional" }
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-muted/10 relative overflow-hidden">
      <div className="absolute inset-0 particles-bg opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-black gradient-text mb-4">
            Denilson Torres
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            7 anos transformando negócios com IA e automação, compartilhando conhecimento em agentes de IA que geram receita real
          </p>
        </div>

        {/* Filters */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? "default" : "outline"}
              className={`transition-all duration-300 ${
                activeFilter === filter.key 
                  ? 'bg-primary text-primary-foreground border-primary shadow-glow' 
                  : 'bg-background text-foreground border-border hover:bg-primary hover:text-primary-foreground hover:border-primary'
              }`}
              onClick={() => handleFilterChange(filter.key)}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="gallery-item group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary transition-all duration-500 hover:scale-105"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-primary/80 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                    {filters.find(f => f.key === item.category)?.label}
                  </span>
                </div>

                {/* Corner Glow Effect */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {item.description}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.details}
                </p>

                {/* Progress Bar */}
                <div className="mt-4 w-full bg-muted/30 rounded-full h-1">
                  <div 
                    className="bg-gradient-primary h-1 rounded-full transition-all duration-1000"
                    style={{ 
                      width: hoveredItem === item.id ? '100%' : '0%',
                      transitionDelay: hoveredItem === item.id ? '200ms' : '0ms'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GallerySection;

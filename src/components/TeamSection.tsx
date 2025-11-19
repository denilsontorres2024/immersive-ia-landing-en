import { useEffect, useRef, useState } from "react";
import { Award, BookOpen, Users, TrendingUp, ChevronDown, Linkedin } from "lucide-react";
import ResponsiveContainer from "@/components/enhanced/ResponsiveContainer";
import ResponsiveText from "@/components/enhanced/ResponsiveText";
import ResponsiveCard from "@/components/enhanced/ResponsiveCard";
import ResponsiveGrid from "@/components/enhanced/ResponsiveGrid";
const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
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
  const scrollToNext = () => {
    const nextSection = document.getElementById('next-steps');
    if (nextSection) {
      const offset = 80;
      const elementPosition = nextSection.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };
  const coordinator = {
    name: "Denilson Torres",
    role: "Coordenador e Instrutor Principal",
    title: "Professor em IA Generativa",
    bio: "Professor em IA Generativa com passagem pelo TJSP e 6 anos de experiência em grandes startups aplicando inteligência artificial em escala. Formado pela FIAP como bolsista em tecnologia com imersão programada no Vale do Silício e vencedor de mais de 20 competições de tecnologia. Professor do MBA de IA no Grupo Primo, professor e palestrante de IA no SEBRAE, responsável pela capacitação de mais de 12.000 alunos em IA Generativa na Academia Lendár[IA]. Especializado em traduzir conceitos técnicos complexos em aplicações práticas para públicos diversos, com foco em ferramentas OpenAI.",
    highlights: ["+12.000 alunos capacitados", "Professor MBA IA Grupo Primo", "Palestrante SEBRAE Nacional", "Passagem TJSP", "+20 prêmios em competições tech", "Vale do Silício (FIAP)"],
    icon: Award
  };
  const team = [{
    name: "José Carlos Amorim",
    role: "Professor Convidado",
    title: "Especialista em IA Generativa",
    bio: "Técnico em Mecatrônica e educador especializado em IA Generativa com formações em Harvard, Anthropic e IBM. Parceiro Sebrae Nacional, especialista Academia Lendár[IA], com experiência capacitando parlamentares no Amazonas e empresários em todo Brasil. Autor do livro 'Nexialismo: A última inteligência'.",
    highlights: ["Formações Harvard, Anthropic, IBM", "Parceiro SEBRAE Nacional", "Capacitou parlamentares AM", "Autor 'Nexialismo'"],
    icon: BookOpen,
    linkedin: "https://www.linkedin.com/in/jos%C3%A9-carlos-amorim-%E2%99%BE%EF%B8%8F-b78475229/"
  }, {
    name: "Gio Mangoni",
    role: "Professora Convidada",
    title: "Consultora e Pesquisadora em IA",
    bio: "Consultora, educadora e pesquisadora em IA especializada em cocriação humano-IA. LinkedIn Top Voice com 45 mil+ seguidores. Experiência em startups como Adapta, palestrante em eventos Red Bull e UNIMED. Professora em UFSC, FGV, FUCAPE, FIAP e IEFP (Portugal).",
    highlights: ["LinkedIn Top Voice 45k+", "Professora UFSC, FGV, FIAP", "Palestrante Red Bull, UNIMED", "Especialista cocriação humano-IA"],
    icon: Users,
    linkedin: "https://www.linkedin.com/in/giomangoni/"
  }, {
    name: "Roger Medke",
    role: "Professor Convidado",
    title: "Empreendedor e Autor",
    bio: "Empreendedor serial com 15+ anos, fundador AURION Ventures. Autor best-seller de cinco livros sobre IA e transformação digital. PM do movimento Fundadores Lendários. Mais de 200 palestras sobre IA e Indústria 5.0.",
    highlights: ["Fundador AURION Ventures", "Autor de 5 livros best-seller", "+200 palestras IA", "PM Fundadores Lendários"],
    icon: TrendingUp,
    linkedin: "https://www.linkedin.com/in/rogermedke/?locale=en"
  }];
  return <section id="team" ref={sectionRef} className="section-padding bg-background text-foreground relative" aria-labelledby="team-title">
      <ResponsiveContainer>
        
        {/* Section Header */}
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 id="team-title" className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6">
            CORPO DOCENTE
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <ResponsiveText className="text-muted-foreground max-w-3xl mx-auto" size="lg">
            Equipe de especialistas com expertise em IA Generativa e ferramentas OpenAI
          </ResponsiveText>
        </div>

        {/* Coordinator Card - Destacado */}
        <ResponsiveCard variant="glow" className={`mb-12 bg-card/90 border-primary/40 backdrop-enhanced transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-start gap-6 flex-col lg:flex-row">
            <div className="flex-shrink-0">
              <div className="bg-primary/20 p-6 rounded-2xl">
                <coordinator.icon className="w-16 h-16 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-4">
                <ResponsiveText size="3xl" weight="black" className="text-foreground mb-2">
                  {coordinator.name}
                </ResponsiveText>
                <ResponsiveText size="lg" weight="semibold" className="text-primary mb-1">
                  {coordinator.role}
                </ResponsiveText>
                <ResponsiveText size="base" className="text-muted-foreground">
                  {coordinator.title}
                </ResponsiveText>
              </div>
              <ResponsiveText size="base" className="text-foreground leading-relaxed mb-6">
                {coordinator.bio}
              </ResponsiveText>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {coordinator.highlights.map((highlight, index) => <div key={index} className="bg-primary/10 px-3 py-2 rounded-lg border border-primary/20">
                    <ResponsiveText size="sm" weight="medium" className="text-primary text-center">
                      {highlight}
                    </ResponsiveText>
                  </div>)}
              </div>
            </div>
          </div>
        </ResponsiveCard>

        {/* Team Grid */}
        <div className={`mb-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <ResponsiveText size="xl" weight="bold" className="text-foreground mb-6 text-center">
            Professores Convidados
          </ResponsiveText>
          <ResponsiveGrid columns={{
          sm: 1,
          md: 3
        }} gap="lg">
            {team.map((member, index) => {
            const Icon = member.icon;
            return <ResponsiveCard key={index} variant="interactive" className="bg-card/90 border-primary/20 backdrop-enhanced h-full">
                  <div className="text-center mb-4">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <ResponsiveText size="xl" weight="bold" className="text-foreground mb-1">
                      {member.name}
                    </ResponsiveText>
                    <ResponsiveText size="sm" weight="semibold" className="text-primary mb-1">
                      {member.role}
                    </ResponsiveText>
                    <ResponsiveText size="sm" className="text-muted-foreground">
                      {member.title}
                    </ResponsiveText>
                  </div>
                  <ResponsiveText size="sm" className="text-foreground leading-relaxed mb-4">
                    {member.bio}
                  </ResponsiveText>
                  <div className="space-y-2 mb-4">
                    {member.highlights.map((highlight, idx) => <div key={idx} className="bg-primary/5 px-3 py-2 rounded-lg">
                        <ResponsiveText size="xs" className="text-muted-foreground">
                          • {highlight}
                        </ResponsiveText>
                      </div>)}
                  </div>
                  {member.linkedin && (
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors w-full justify-center touch-target"
                      aria-label={`Ver perfil do LinkedIn de ${member.name}`}
                    >
                      <Linkedin className="w-4 h-4" />
                      <ResponsiveText size="sm" weight="medium">
                        Ver LinkedIn
                      </ResponsiveText>
                    </a>
                  )}
                </ResponsiveCard>;
          })}
          </ResponsiveGrid>
        </div>

        {/* Note */}
        <ResponsiveCard variant="elevated" className={`bg-primary/10 border-primary/30 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <ResponsiveText size="sm" className="text-muted-foreground text-center">
            A equipe de professores convidados poderá ministrar capacitações conforme expertise específica e demanda dos temas, garantindo flexibilidade e qualidade técnica. O corpo docente poderá ser expandido eventualmente conforme necessidade.        
          </ResponsiveText>
        </ResponsiveCard>

      </ResponsiveContainer>

      {/* Navigation Button */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 sm:hidden">
        <button onClick={scrollToNext} className="flex flex-col items-center gap-1 text-foreground hover:text-primary transition-colors group touch-target focus-visible:focus" aria-label="Ver próximos passos">
          <ChevronDown className="w-5 h-5 animate-bounce group-hover:animate-none text-primary" />
        </button>
      </div>
    </section>;
};
export default TeamSection;
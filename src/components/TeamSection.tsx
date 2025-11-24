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
    role: "Coordinator and Lead Instructor",
    title: "Instructor in Generative AI",
    bio: "Instructor in Generative AI with experience at TJSP and 6 years in major startups applying artificial intelligence at scale. Graduated from FIAP as a technology scholarship student with planned immersion in Silicon Valley and winner of more than 20 technology competitions. AI MBA instructor at Grupo Primo, AI instructor and speaker at SEBRAE, responsible for training over 12,000 students in Generative AI at Lendár[IA] Academy. Specialized in translating complex technical concepts into practical applications for diverse audiences, focusing on OpenAI tools.",
    highlights: ["12,000+ students trained", "AI MBA Instructor (Grupo Primo)", "SEBRAE National Speaker", "Experience at TJSP", "20+ awards in tech competitions", "Silicon Valley (FIAP)"],
    icon: Award
  };
  const team = [{
    name: "José Carlos Amorim",
    role: "Guest Instructor",
    title: "Generative AI Specialist",
    bio: "Mechatronics technician and educator specialized in Generative AI with training from Harvard, Anthropic, and IBM. SEBRAE National partner, Lendár[IA] Academy specialist, with experience training parliamentarians in Amazonas and entrepreneurs across Brazil. Author of the book 'Nexialism: The Final Intelligence'.",
    highlights: ["Harvard, Anthropic, IBM training", "SEBRAE National partner", "Trained parliamentarians in AM", "Author 'Nexialism'"],
    icon: BookOpen,
    linkedin: "https://www.linkedin.com/in/jos%C3%A9-carlos-amorim-%E2%99%BE%EF%B8%8F-b78475229/"
  }, {
    name: "Gio Mangoni",
    role: "Guest Instructor",
    title: "Consultant and AI Researcher",
    bio: "Consultant, educator, and AI researcher specialized in human‑AI co‑creation. LinkedIn Top Voice with 45k+ followers. Experience in startups like Adapta, speaker at Red Bull and UNIMED events. Instructor at UFSC, FGV, FUCAPE, FIAP, and IEFP (Portugal).",
    highlights: ["LinkedIn Top Voice 45k+", "Instructor at UFSC, FGV, FIAP", "Speaker at Red Bull, UNIMED", "Specialist in human‑AI co‑creation"],
    icon: Users,
    linkedin: "https://www.linkedin.com/in/giomangoni/"
  }, {
    name: "Roger Medke",
    role: "Guest Instructor",
    title: "Entrepreneur and Author",
    bio: "Serial entrepreneur with 15+ years, founder of AURION Ventures. Best‑selling author of five books on AI and digital transformation. PM of the Lendários Founders movement. Over 200 talks on AI and Industry 5.0.",
    highlights: ["Founder of AURION Ventures", "Author of 5 best‑selling books", "200+ AI talks", "PM Lendários Founders"],
    icon: TrendingUp,
    linkedin: "https://www.linkedin.com/in/rogermedke/?locale=en"
  }];
  return <section id="team" ref={sectionRef} className="section-padding bg-background text-foreground relative" aria-labelledby="team-title">
      <ResponsiveContainer>
        
        {/* Section Header */}
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 id="team-title" className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6">
            FACULTY
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <ResponsiveText className="text-muted-foreground max-w-3xl mx-auto" size="lg">
            Team of specialists with expertise in Generative AI and OpenAI tools
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
            Guest Instructors
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
                      aria-label={`View ${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="w-4 h-4" />
                      <ResponsiveText size="sm" weight="medium">
                        View LinkedIn
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
            The guest instructor team may deliver trainings according to specific expertise and topic demand, ensuring flexibility and technical quality. The faculty may be expanded as needed.
          </ResponsiveText>
        </ResponsiveCard>

      </ResponsiveContainer>

      {/* Navigation Button */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 sm:hidden">
        <button onClick={scrollToNext} className="flex flex-col items-center gap-1 text-foreground hover:text-primary transition-colors group touch-target focus-visible:focus" aria-label="View next steps">
          <ChevronDown className="w-5 h-5 animate-bounce group-hover:animate-none text-primary" />
        </button>
      </div>
    </section>;
};
export default TeamSection;

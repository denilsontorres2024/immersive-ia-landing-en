import { useEffect, useRef, useState } from "react";
import { BookOpen, Brain, Target, ChevronDown } from "lucide-react";
import ResponsiveContainer from "@/components/enhanced/ResponsiveContainer";
import ResponsiveText from "@/components/enhanced/ResponsiveText";
import ResponsiveCard from "@/components/enhanced/ResponsiveCard";
const CapacitacoesTableSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<"fundamentos" | "avancadas" | "governanca">("fundamentos");
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
    const nextSection = document.getElementById('team');
    if (nextSection) {
      const offset = 80;
      const elementPosition = nextSection.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };
  const fundamentos = [
    "Introduction to ChatGPT: First Steps in the Legislative Context",
    "Effective Prompting: How to Ask the Right Questions",
    "Rapid Analysis of Bills with AI",
    "Summarizing Long Documents in Minutes",
    "Accelerated Legislative Research with ChatGPT",
    "Fact-Checking: Verifying Information with AI",
    "Drafting Technical Opinions Assisted by AI",
    "Parliamentary Communication: Speeches and Notes with ChatGPT",
    "Time Management: AI as an Executive Assistant",
    "Scheduling and Prioritization with AI",
    "Preparation for Debates and Public Hearings",
    "Impact Analysis of Legislative Proposals",
    "Monitoring Topics of Interest with AI",
    "Drafting Amendments and Substitutes",
    "Communication with Voters: Fast and Personalized Responses",
    "Simplified Budget Data Analysis",
    "Executive Summaries of Plenary Sessions",
    "Translation and Analysis of International Legislation",
    "Communication Crisis Management with AI",
    "Ethics and Limits in the Use of AI in the Legislative Branch"
  ];
  const avancadas = [
    "Deep Search: Advanced Research in Legislative Databases",
    "Comparative Analysis of State/Federal Legislation",
    "Identification of Relevant Precedents and Case Law",
    "Custom GPTs for Parliamentary Offices",
    "Automation of Periodic Reports",
    "Regulatory Impact Analysis with AI",
    "Mapping Stakeholders and Relevant Actors",
    "Development of Technical Studies and White Papers",
    "Feasibility Analysis of Proposals",
    "Automated Monitoring of Legislative Proceedings",
    "Semantic Analysis of Similar Proposals",
    "Preparation of Briefings for Committees",
    "Large‑Scale Analysis of Budget Amendments",
    "Knowledge Management: Intelligent Digital Library",
    "Sentiment Analysis in Public Consultations",
    "Drafting Legislative Proposals Assisted by AI",
    "Review and Improvement of Normative Texts",
    "Preliminary Constitutionality Analysis",
    "Mapping Legislative Gaps",
    "International Benchmarking of Public Policies"
  ];
  const governanca = [
    "AI Governance in Public Agencies",
    "Information Security and Data Protection with AI",
    "AI Implementation: From Pilot to Institutional Scale",
    "AI ROI in the Legislative Branch: Metrics and KPIs",
    "Change Management: AI Adoption by Teams",
    "Compliance and LGPD in the Use of Generative AI",
    "Institutional Communication Strategies with AI",
    "AI and Transparency: Accountability to Citizens",
    "Strategic Planning with Artificial Intelligence",
    "The Future of AI in the Legislature: Trends 2025–2030"
  ];
  const tabs = [{
    id: "fundamentos" as const,
    label: "Foundations",
    icon: BookOpen,
    count: 20,
    data: fundamentos
  }, {
    id: "avancadas" as const,
    label: "Advanced Applications",
    icon: Brain,
    count: 20,
    data: avancadas
  }, {
    id: "governanca" as const,
    label: "Governance",
    icon: Target,
    count: 10,
    data: governanca
  }];
  const activeTabData = tabs.find(tab => tab.id === activeTab);
  return <section id="capacitacoes" ref={sectionRef} className="section-padding bg-muted/30 text-foreground relative" aria-labelledby="capacitacoes-title">
      <ResponsiveContainer>
        
        {/* Section Header */}
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 id="capacitacoes-title" className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6">
            ALL TRAININGS
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <ResponsiveText className="text-muted-foreground max-w-3xl mx-auto" size="lg">
            Detailed topics of the 50 trainings organized by learning track
          </ResponsiveText>
        </div>

        {/* Tabs Navigation */}
        <div className={`flex flex-col sm:flex-row gap-4 mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {tabs.map(tab => {
          const Icon = tab.icon;
          return <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex-1 p-4 rounded-lg transition-all duration-300 ${activeTab === tab.id ? 'bg-primary text-primary-foreground shadow-lg scale-105' : 'bg-card hover:bg-card/80 text-foreground'}`}>
                <div className="flex items-center justify-center gap-3">
                  <Icon className="w-5 h-5" />
                    <div className="text-left">
                      <div className="font-bold text-sm sm:text-base">{tab.label}</div>
                      <div className="text-xs opacity-80">{tab.count} trainings</div>
                    </div>
                </div>
              </button>;
        })}
        </div>

        {/* Content Table */}
        <ResponsiveCard variant="elevated" className={`bg-card/90 border-primary/20 backdrop-enhanced transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6 flex items-center gap-3">
            {activeTabData && <>
                <div className="bg-primary/10 p-3 rounded-lg">
                  <activeTabData.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <ResponsiveText size="xl" weight="bold" className="text-foreground">
                    TRACK: {activeTabData.label.toUpperCase()}
                  </ResponsiveText>
                  <ResponsiveText size="sm" className="text-muted-foreground">
                    {activeTabData.count} practical 2‑hour trainings
                  </ResponsiveText>
                </div>
              </>}
          </div>

          <div className="space-y-3">
            {activeTabData?.data.map((capacitacao, index) => <div key={index} className="flex items-start gap-4 p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-colors">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{index + 1}</span>
                </div>
                <ResponsiveText size="base" className="text-foreground flex-1">
                  {capacitacao}
                </ResponsiveText>
              </div>)}
          </div>

          {/* Note */}
          <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
            <ResponsiveText size="sm" className="text-muted-foreground text-center">
              Topics are initial suggestions and may vary according to the specific needs of the served public agencies
            </ResponsiveText>
          </div>
        </ResponsiveCard>

      </ResponsiveContainer>

      {/* Navigation Button */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 sm:hidden">
        <button onClick={scrollToNext} className="flex flex-col items-center gap-1 text-foreground hover:text-primary transition-colors group touch-target focus-visible:focus" aria-label="View team">
          <ChevronDown className="w-5 h-5 animate-bounce group-hover:animate-none text-primary" />
        </button>
      </div>
    </section>;
};
export default CapacitacoesTableSection;

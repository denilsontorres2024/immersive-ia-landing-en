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
  const fundamentos = ["Introdução ao ChatGPT: Primeiros Passos no Contexto Legislativo", "Prompting Eficaz: Como Fazer as Perguntas Certas", "Análise Rápida de Projetos de Lei com IA", "Síntese de Documentos Extensos em Minutos", "Pesquisa Legislativa Acelerada com ChatGPT", "Fact-Checking: Verificação de Informações com IA", "Elaboração de Pareceres Técnicos Assistida por IA", "Comunicação Parlamentar: Discursos e Notas com ChatGPT", "Gestão de Tempo: IA como Assistente Executivo", "Organização de Agenda e Prioridades com IA", "Preparação para Debates e Audiências Públicas", "Análise de Impacto de Proposições Legislativas", "Monitoramento de Temas de Interesse com IA", "Elaboração de Emendas e Substitutivos", "Comunicação com Eleitores: Respostas Rápidas e Personalizadas", "Análise de Dados Orçamentários Simplificada", "Resumos Executivos de Sessões Plenárias", "Tradução e Análise de Legislação Internacional", "Gestão de Crises de Comunicação com IA", "Ética e Limites no Uso de IA no Poder Legislativo"];
  const avancadas = ["Deep Search: Pesquisa Aprofundada em Bases Legislativas", "Análise Comparativa de Legislações Estaduais/Federais", "Identificação de Precedentes e Jurisprudência Relevante", "GPTs Customizados para Gabinetes Parlamentares", "Automatização de Relatórios Periódicos", "Análise de Impacto Regulatório com IA", "Mapeamento de Stakeholders e Atores Relevantes", "Elaboração de Estudos Técnicos e White Papers", "Análise de Viabilidade de Proposições", "Monitoramento de Tramitação Legislativa Automatizado", "Análise Semântica de Proposições Similares", "Preparação de Briefings para Comissões", "Análise de Emendas Orçamentárias em Escala", "Gestão de Conhecimento: Biblioteca Digital Inteligente", "Análise de Sentimento em Consultas Públicas", "Elaboração de Proposições Legislativas Assistida por IA", "Revisão e Aperfeiçoamento de Textos Normativos", "Análise de Constitucionalidade Preliminar", "Mapeamento de Lacunas Legislativas", "Benchmarking Internacional de Políticas Públicas"];
  const governanca = ["Governança de IA em Órgãos Públicos", "Segurança da Informação e Proteção de Dados com IA", "Implementação de IA: Da Piloto à Escala Institucional", "ROI de IA no Poder Legislativo: Métricas e KPIs", "Gestão de Mudança: Adoção de IA por Equipes", "Compliance e LGPD no Uso de IA Generativa", "Estratégias de Comunicação Institucional com IA", "IA e Transparência: Prestação de Contas ao Cidadão", "Planejamento Estratégico com Inteligência Artificial", "Futuro da IA no Legislativo: Tendências 2025-2030"];
  const tabs = [{
    id: "fundamentos" as const,
    label: "Fundamentos",
    icon: BookOpen,
    count: 20,
    data: fundamentos
  }, {
    id: "avancadas" as const,
    label: "Aplicações Avançadas",
    icon: Brain,
    count: 20,
    data: avancadas
  }, {
    id: "governanca" as const,
    label: "Governança",
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
            TODAS AS CAPACITAÇÕES
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <ResponsiveText className="text-muted-foreground max-w-3xl mx-auto" size="lg">
            Temas detalhados das 50 capacitações organizadas por trilha de aprendizado
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
                    <div className="text-xs opacity-80">{tab.count} capacitações</div>
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
                    TRILHA: {activeTabData.label.toUpperCase()}
                  </ResponsiveText>
                  <ResponsiveText size="sm" className="text-muted-foreground">
                    {activeTabData.count} capacitações práticas de 2 horas
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
              Os temas são sugestões iniciais e poderão variar conforme necessidades específicas dos órgãos públicos atendidos
            </ResponsiveText>
          </div>
        </ResponsiveCard>

      </ResponsiveContainer>

      {/* Navigation Button */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 sm:hidden">
        <button onClick={scrollToNext} className="flex flex-col items-center gap-1 text-foreground hover:text-primary transition-colors group touch-target focus-visible:focus" aria-label="Ver corpo docente">
          <ChevronDown className="w-5 h-5 animate-bounce group-hover:animate-none text-primary" />
        </button>
      </div>
    </section>;
};
export default CapacitacoesTableSection;
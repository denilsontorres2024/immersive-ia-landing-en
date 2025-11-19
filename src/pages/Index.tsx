import { useEffect } from "react";
import ProposalCover from "@/components/ProposalCover";
import OpeningMessage from "@/components/OpeningMessage";
import DeliveriesSection from "@/components/DeliveriesSection";
import CapacitacoesTableSection from "@/components/CapacitacoesTableSection";
import TeamSection from "@/components/TeamSection";
import AboutSection from "@/components/AboutSection";
import TrajetoriaSection from "@/components/TrajetoriaSection";
import NextStepsSection from "@/components/NextStepsSection";
import ContactSection from "@/components/ContactSection";
import ProgressNavigation from "@/components/ProgressNavigation";
import ProfileSection from "@/components/ProfileSection";
const Index = () => {
  useEffect(() => {
    // Remove loading screen after component mounts
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
          loadingScreen.remove();
        }, 500);
      }, 1000);
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "EducationalEvent",
      "name": "50 Capacitações OpenAI para Órgãos Públicos",
      "description": "Capacitações presenciais em ChatGPT para atividades legislativas do dia a dia",
      "startDate": "2025-01-01",
      "endDate": "2025-12-31",
      "location": {
        "@type": "Place",
        "name": "Brasília - DF",
        "address": "Brasília, Distrito Federal, Brasil"
      },
      "organizer": {
        "@type": "Person",
        "name": "Denilson Torres",
        "jobTitle": "Professor em IA Generativa"
      },
      "offers": {
        "@type": "Offer",
        "price": "375000",
        "priceCurrency": "BRL",
        "description": "Pacote completo de 50 capacitações presenciais"
      }
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    return () => {
      // Cleanup structured data on unmount
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);
  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Progress Navigation */}
      <ProgressNavigation />
      
      {/* Main Content */}
      <main role="main">
        {/* Proposal Cover */}
        <ProposalCover />
        
        {/* Opening Message */}
        <OpeningMessage />
        
        {/* Deliveries & Values Section */}
        <DeliveriesSection />
        
        {/* All Capacitacoes Table */}
        <CapacitacoesTableSection />
        
        {/* Team Section - Corpo Docente */}
        <TeamSection />
        
        {/* Profile Section - Quem sou eu */}
        <ProfileSection />
        
        {/* About Section - Deni's Experience */}
        <AboutSection />
        
        {/* Trajetória Section */}
        
        
        {/* Next Steps Section */}
        <NextStepsSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Loading Screen - Performance Optimized */}
      <div id="loading-screen" className="fixed inset-0 bg-background z-50 flex items-center justify-center" role="status" aria-label="Carregando conteúdo">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-primary text-xl font-bold animate-pulse">Carregando proposta OPEN AI</p>
          
        </div>
      </div>
    </div>;
};
export default Index;

import { useEffect, useState } from "react";
import { ChevronUp, Menu, X } from "lucide-react";

const ProgressNavigation = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('cover');

  const sections = [
    { id: 'cover', label: 'Proposta', offset: 0 },
    { id: 'opening', label: 'Abertura', offset: 0 },
    { id: 'deliveries', label: 'Entregas', offset: 0 },
    { id: 'investment', label: 'Investimento', offset: 0 },
    { id: 'about', label: 'Sobre', offset: 0 },
    { id: 'next-steps', label: 'Próximos Passos', offset: 0 },
    { id: 'contact', label: 'Contato', offset: 0 }
  ];

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setScrollProgress(Math.min(progress, 100));
      setShowScrollTop(scrollTop > 500);
    };

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    const handleScroll = () => {
      updateProgress();
      updateActiveSection();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Progress Bar */}
      <div 
        className="progress-bar"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Progresso da leitura: ${Math.round(scrollProgress)}%`}
      />

      {/* Sticky Navigation - Desktop */}
      <nav 
        className="fixed top-4 right-4 z-50 hidden lg:block"
        role="navigation"
        aria-label="Navegação por seções"
      >
        <div className="bg-card/90 backdrop-blur-md border border-border rounded-lg p-2 shadow-lg">
          <div className="text-center mb-2">
            <span className="text-xs text-muted-foreground font-medium">
              {Math.round(scrollProgress)}%
            </span>
          </div>
          
          <div className="space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`block w-full text-left px-3 py-2 text-xs rounded transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
                aria-current={activeSection === section.id ? 'page' : undefined}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 right-4 z-50 lg:hidden bg-card/90 backdrop-blur-md border border-border rounded-lg p-3 shadow-lg touch-target"
        aria-label="Abrir menu de navegação"
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <Menu className="w-5 h-5" />
        )}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          
          <div className="fixed top-20 right-4 z-50 lg:hidden bg-card backdrop-blur-md border border-border rounded-lg p-4 shadow-lg min-w-[200px]">
            <div className="text-center mb-4">
              <span className="text-sm text-muted-foreground font-medium">
                Progresso: {Math.round(scrollProgress)}%
              </span>
            </div>
            
            <div className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full text-left px-3 py-3 text-sm rounded-lg transition-all duration-200 touch-target ${
                    activeSection === section.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                  aria-current={activeSection === section.id ? 'page' : undefined}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 bg-primary text-primary-foreground rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 touch-target"
          aria-label="Voltar ao topo"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default ProgressNavigation;

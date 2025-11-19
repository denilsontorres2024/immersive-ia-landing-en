import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Bot, CheckCircle, Sparkles, Brain, Zap } from "lucide-react";

const AcademiaSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const fullMessage = "Olá! Sou a Alana Lendária da Academia Lendár[IA]™. Como posso ajudar você a descobrir o futuro da educação em IA?";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => {
            startTypingAnimation();
          }, 1000);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const startTypingAnimation = () => {
    setIsTyping(true);
    let currentIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullMessage.length) {
        setChatMessage(fullMessage.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
      }
    }, 50);
  };

  const features = [
    {
      icon: CheckCircle,
      text: "Curte suas mensagens",
      delay: "0ms"
    },
    {
      icon: CheckCircle,
      text: "Entende áudio e texto",
      delay: "200ms"
    },
    {
      icon: CheckCircle,
      text: "Marca reunião com especialistas",
      delay: "400ms"
    },
    {
      icon: CheckCircle,
      text: "Explica todo o ecossistema",
      delay: "600ms"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-muted/5 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="particles-bg animate-float opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-black gradient-text mb-6">
                ACADEMIA LENDÁR[IA]™
              </h2>
              <div className="w-24 h-1 bg-gradient-primary rounded-full mb-8"></div>
            </div>

            {/* Future Vision */}
            <div className="mb-8 p-6 card-interactive">
              <div className="flex items-start gap-4 mb-4">
                <Brain className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3 gradient-text">O Futuro da Educação</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Em um futuro onde o trabalho humano está sendo substituído por IA, a{" "}
                    <span className="gradient-text font-semibold">Academia Lendár[IA]™</span>{" "}
                    é o ecossistema que prepara pessoas e negócios para prosperarem na Era da Inteligência Artificial.
                  </p>
                </div>
              </div>
            </div>

            {/* Role Highlight */}
            <div className="mb-8 p-6 card-interactive">
              <div className="flex items-start gap-4">
                <Sparkles className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3 gradient-text">Minha Contribuição</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Como <span className="gradient-text font-semibold">creator e AI Creator</span>, 
                    desenvolvo conteúdos técnicos dentro deste ecossistema, capacitando pessoas a gerar receita sustentável com agentes inteligentes.
                  </p>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Bot className="w-6 h-6 text-primary" />
                Nossa IA pode:
              </h3>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-500 hover:bg-primary/5 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
                  }`}
                  style={{ transitionDelay: feature.delay }}
                >
                  <feature.icon className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-foreground">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Chatbot Preview */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative max-w-sm mx-auto">
              {/* Phone Mockup */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-epic">
                <div className="bg-background rounded-[2.5rem] overflow-hidden">
                  {/* Screen Content */}
                  <div className="relative h-[600px] bg-gradient-to-br from-background to-muted/20">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center p-4 text-xs text-muted-foreground">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2 border border-current rounded-sm">
                          <div className="w-3 h-1 bg-current rounded-sm"></div>
                        </div>
                      </div>
                    </div>

                    {/* Chat Header */}
                    <div className="flex items-center gap-3 p-4 border-b border-border bg-card/50 backdrop-blur-sm">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/30">
                          <img 
                            src={heroCover} 
                            alt="Alana Lendária"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-background"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold">Alana Lendária</h4>
                        <p className="text-xs text-success">Online</p>
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="p-4 flex-1">
                      <div className="bg-primary/10 rounded-2xl rounded-tl-sm p-4 max-w-[80%] backdrop-blur-sm border border-primary/20">
                        <p className="text-sm leading-relaxed">
                          {chatMessage}
                          {isTyping && <span className="animate-pulse">|</span>}
                        </p>
                      </div>
                      
                      {/* Typing Indicator */}
                      {isTyping && (
                        <div className="flex items-center gap-2 mt-4 text-muted-foreground text-xs">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                          <span>IA está digitando...</span>
                        </div>
                      )}
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-border bg-card/30 backdrop-blur-sm">
                      <div className="flex items-center gap-3 bg-muted/30 rounded-full px-4 py-3">
                        <input 
                          type="text" 
                          placeholder="Digite sua mensagem..."
                          className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                        />
                        <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                          <MessageCircle className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center animate-float">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full backdrop-blur-sm border border-primary/30 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Bot className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold gradient-text mb-6">
              Converse com Nossa IA Agora
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Descubra como a Academia Lendár[IA]™ pode transformar sua carreira na era da IA
            </p>
            
            <Button 
              className="btn-glow text-lg px-12 py-4 group relative overflow-hidden"
              onClick={() => window.open('http://wa.me/+11958149007', '_blank')}
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <MessageCircle className="w-6 h-6 mr-3" />
              <span>Conversar com nossa IA</span>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-full transition-all duration-300"></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademiaSection;
import heroCover from "@/assets/hero-cover.jpg";

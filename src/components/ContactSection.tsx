import { useEffect, useRef, useState } from "react";
import { Phone, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.3
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [isVisible]);
  const contactMethods = [{
    icon: Phone,
    label: "WhatsApp",
    value: "(11) 95814-9007",
    link: "http://wa.me/+11958149007"
  }, {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/denilson-torres-2002",
    link: "https://www.linkedin.com/in/denilson-torres-2002/"
  }, {
    icon: Mail,
    label: "Email",
    value: "denidetorres@gmail.com",
    link: "mailto:denidetorres@gmail.com"
  }];
  return <section id="contact" ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4">
            CONTACT
          </h2>
          <div className="w-16 sm:w-20 h-0.5 bg-primary mx-auto mb-6"></div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
            Get in touch to clarify questions or formalize a partnership
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          
          {/* Contact Info */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Professional Card */}
            <div className="card-responsive text-center mb-6">
              <h3 className="text-xl font-bold text-foreground mb-2">DENILSON TORRES</h3>
              <p className="text-muted-foreground text-base font-medium mb-2">Instructor in Generative AI</p>
              <p className="text-sm text-muted-foreground">In‑person trainings in Brasília</p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-3">
              {contactMethods.map((method, index) => <div key={index} className={`card-responsive transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`} style={{
              animationDelay: `${index * 150}ms`
            }}>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <method.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-foreground">{method.label}</h4>
                      <a href={method.link} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                        {method.value}
                      </a>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>

          {/* CTA Section */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="card-responsive text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Shall we talk?
              </h3>
              
              <p className="text-sm text-muted-foreground mb-6">
                Available to clarify questions about this proposal and discuss how to maximize value.
              </p>

              <div className="space-y-3">
                <button className="w-full btn-primary flex items-center justify-center gap-2" onClick={() => window.open('http://wa.me/+11958149007?text=Hello! I am interested in the proposal for the Órbita 2025 event.', '_blank')}>
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </button>
                
                <button className="w-full btn-secondary flex items-center justify-center gap-2" onClick={() => window.open('mailto:denidetorres@gmail.com?subject=OPEN AI Proposal', '_blank')}>
                  <Mail className="w-4 h-4" />
                  Email
                </button>
              </div>

              <div className="mt-4 p-3 bg-muted/50 rounded-lg text-center">
                <p className="text-xs text-muted-foreground">
                  <span className="text-foreground font-semibold">Response:</span> WhatsApp 2h • Email 24h
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="card-responsive">
            <p className="text-xs text-muted-foreground">Proposal developed with OpenAI models (e.g., GPT-5) — Demonstrating in practice how the technology can optimize governmental processes.</p>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;

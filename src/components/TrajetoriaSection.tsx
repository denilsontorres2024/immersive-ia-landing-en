import { useEffect, useRef, useState } from "react";
const TrajetoriaSection = () => {
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
  return <section ref={sectionRef} className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 particles-bg opacity-5"></div>
      
      
    </section>;
};
export default TrajetoriaSection;
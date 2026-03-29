import { useEffect } from "react";
import AnimatedBackground from "./AnimatedBackground";

const CalendlySection = () => {
  useEffect(() => {
    // Load Calendly script if not already loaded
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id="calendly" className="relative section-spacing bg-background overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto container-padding relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Book a <span className="bg-gradient-primary bg-clip-text text-transparent">Discovery Call</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Let's discuss how Humance can transform your clinic's operations. 
            Schedule a 20-minute call with our team to explore your specific needs.
          </p>
        </div>

        {/* Calendly Widget */}
        <div className="max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-card rounded-3xl border border-border p-8 shadow-large">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/deepmindclub/30min?primary_color=03f38e" 
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-primary/10 rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              What to Expect
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>• 20-minute consultation</div>
              <div>• Personalized solution demo</div>
              <div>• ROI analysis for your clinic</div>
              <div>• Implementation roadmap</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;

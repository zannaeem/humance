import { CheckCircle } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

const CTASection = () => {

  return (
    <section id="waitlist" className="relative section-spacing bg-background overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto container-padding relative z-10">
        
        {/* Main CTA */}
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <div className="space-y-6 mb-12">
            <h2 className="text-title leading-tight">
              Are you the clinic we're{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                referring to?
              </span>
            </h2>
            
            <div className="space-y-8 max-w-5xl mx-auto">
              <div className="flex items-center gap-6 p-8 bg-card/60 backdrop-blur-sm border border-border rounded-xl">
                <CheckCircle className="w-8 h-8 text-primary flex-shrink-0" />
                <span className="text-xl text-foreground">WhatsApp, Telegram and Phone Calls are the main communication tools.</span>
              </div>
              <div className="flex items-center gap-6 p-8 bg-card/60 backdrop-blur-sm border border-border rounded-xl">
                <CheckCircle className="w-8 h-8 text-primary flex-shrink-0" />
                <span className="text-xl text-foreground">Scheduling and follow-ups are made manually.</span>
              </div>
              <div className="flex items-center gap-6 p-8 bg-card/60 backdrop-blur-sm border border-border rounded-xl">
                <CheckCircle className="w-8 h-8 text-primary flex-shrink-0" />
                <span className="text-xl text-foreground">Repetitive administrative tasks.</span>
              </div>
            </div>
          </div>

        </div>

        
      </div>
    </section>
  );
};

export default CTASection;











import { CheckCircle, Bot, Globe } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

const FeaturesSection = () => {
  return (
    <section id="features" className="relative section-spacing bg-background overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto container-padding relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            How do we help your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">clinic?</span>
          </h2>
        </div>

        {/* Main Features - Text Focused */}
        <div className="max-w-5xl mx-auto space-y-16 mb-20">
          
          {/* AI Receptionist */}
          <div className="animate-fade-up">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Bot className="w-12 h-12 text-primary" />
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                  AI Receptionist
                </h3>
              </div>
            </div>
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-xl md:text-2xl text-foreground leading-relaxed font-medium">
                    24/7 intelligent assistant that handles patient inquiries, 
                    schedules appointments, and provides instant support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Personalized Website */}
          <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Globe className="w-12 h-12 text-primary" />
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                  Personalized Website
                </h3>
              </div>
            </div>
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-xl md:text-2xl text-foreground leading-relaxed font-medium">
                    Professional website designed for healthcare providers with 
                    easy appointment booking and patient resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Summary */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            In short, we will...
          </h3>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-4 p-6 bg-card/60 backdrop-blur-sm border border-border rounded-xl hover:border-primary/30 transition-all duration-300">
              <CheckCircle className="w-8 h-8 text-primary flex-shrink-0" />
              <span className="text-lg md:text-xl text-foreground font-medium">Handle booking appointments automatically</span>
            </div>
            <div className="flex items-center gap-4 p-6 bg-card/60 backdrop-blur-sm border border-border rounded-xl hover:border-primary/30 transition-all duration-300">
              <CheckCircle className="w-8 h-8 text-primary flex-shrink-0" />
              <span className="text-lg md:text-xl text-foreground font-medium">Provide 24/7 customer service support</span>
            </div>
            <div className="flex items-center gap-4 p-6 bg-card/60 backdrop-blur-sm border border-border rounded-xl hover:border-primary/30 transition-all duration-300">
              <CheckCircle className="w-8 h-8 text-primary flex-shrink-0" />
              <span className="text-lg md:text-xl text-foreground font-medium">Create a beautiful, user-friendly website</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default FeaturesSection;

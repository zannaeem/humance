import { Brain, Zap, Shield, Heart } from "lucide-react";
import solutionImage from "@/assets/solution-success.jpg";

const SolutionSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Intelligent Analytics",
      description: "AI-powered insights that help healthcare providers make faster, more accurate decisions."
    },
    {
      icon: Zap,
      title: "Instant Processing",
      description: "Automate routine tasks and paperwork, freeing up time for what matters most - patient care."
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Bank-level security with full HIPAA compliance to protect sensitive patient data."
    },
    {
      icon: Heart,
      title: "Human-Centric",
      description: "Technology that enhances human connection rather than replacing it."
    }
  ];

  return (
    <section className="section-spacing bg-background">
      <div className="container mx-auto container-padding">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-title mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent text-7xl md:text-8xl lg:text-9xl font-bold">
              HUMANCE
            </span>
            <br />
            <span className="text-3xl md:text-4xl text-foreground font-bold">AI FOR CLINICS</span>
          </h2>
          <p className="text-subtitle">
            We provide an AI-powered solution for clinics to save time and simplify operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Features Grid */}
          <div className="space-y-6 animate-fade-up">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-soft group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Solution Image */}
          <div className="relative animate-fade-up-delay">
            <div className="relative">
              <img
                src={solutionImage}
                alt="Healthcare professionals using AI solutions successfully"
                className="w-full h-auto rounded-2xl shadow-medium"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl" />
              
              {/* Success indicators */}
              <div className="absolute top-6 left-6 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                ✓ 50% Faster Workflows
              </div>
              <div className="absolute bottom-6 right-6 bg-card/90 backdrop-blur-sm border border-border px-4 py-2 rounded-full text-sm font-medium">
                99.9% Uptime
              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Ready to transform your healthcare practice?
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default SolutionSection;
import { Brain, Clock, Shield, TrendingUp } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

const FourFrameGridSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Smart AI Technology",
      description: "Advanced artificial intelligence that understands context and provides human-like responses to patient inquiries."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a patient call again. Our AI receptionist works around the clock to handle appointments and inquiries."
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "HIPAA-compliant technology ensures patient data is protected while maintaining the highest security standards."
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Clinics using Humance see 40% reduction in administrative workload and 60% improvement in patient satisfaction."
    }
  ];

  return (
    <section className="relative section-spacing bg-background overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto container-padding relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            What makes us{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">different?</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover the key advantages that set Humance apart from traditional clinic management solutions.
          </p>
        </div>

        {/* Four Frame Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-8 bg-card/60 backdrop-blur-sm border border-border rounded-2xl hover:border-primary/30 transition-all duration-300 hover:shadow-large animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-6">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default FourFrameGridSection;

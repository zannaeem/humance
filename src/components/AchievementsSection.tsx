import AnimatedBackground from "./AnimatedBackground";
import win1 from "@/assets/win1.jpg";
import win2 from "@/assets/win2.jpg";
import win3 from "@/assets/win3.jpg";
import win4 from "@/assets/win4.jpg";

const AchievementsSection = () => {
  const competitionImages = [
    { src: win1, alt: "Humance winning startup pitch competition 1" },
    { src: win2, alt: "Humance winning startup pitch competition 2" },
    { src: win3, alt: "Humance winning startup pitch competition 3" },
    { src: win4, alt: "Humance winning startup pitch competition 4" },
  ];

  return (
    <section className="relative section-spacing bg-background overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto container-padding relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-4xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-title font-bold leading-tight mb-8">
            <div className="md:hidden">
              <div className="text-foreground">Our</div>
              <div className="bg-gradient-primary bg-clip-text text-transparent">achievements</div>
            </div>
            <div className="hidden md:block">
              <span className="text-foreground">Our </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">achievements</span>
            </div>
          </h2>
          <p className="text-base text-foreground leading-relaxed mb-8">
            In July 2025, we won the Sabah startup pitching competition. Early proof that clinics need this, and that we're building the right thing.
          </p>
        </div>

        {/* Four Competition Images Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {competitionImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-large animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-video bg-card/60 backdrop-blur-sm">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default AchievementsSection;

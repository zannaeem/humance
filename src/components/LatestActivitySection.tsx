import AnimatedBackground from "./AnimatedBackground";

const LatestActivitySection = () => {
  const eventImages = [
    { src: "/images/activities/activity1.jpg", alt: "Humance event photo 1" },
    { src: "/images/activities/activity2.jpg", alt: "Humance event photo 2" },
    { src: "/images/activities/activity3.jpg", alt: "Humance event photo 3" },
    { src: "/images/activities/activity4.jpg", alt: "Humance event photo 4" },
  ];

  return (
    <section className="relative section-spacing bg-background overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto container-padding relative z-10">

        {/* Section Header */}
        <div className="text-left max-w-4xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-title font-bold leading-tight mb-8">
            <div className="md:hidden">
              <div className="text-foreground">Our latest</div>
              <div className="bg-gradient-primary bg-clip-text text-transparent">activity</div>
            </div>
            <div className="hidden md:block">
              <span className="text-foreground">Our latest </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">activity</span>
            </div>
          </h2>
        </div>

        {/* Four Event Images Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {eventImages.map((image, index) => (
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

export default LatestActivitySection;

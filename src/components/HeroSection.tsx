import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import najibHead from "@/assets/kepalanajib.jpeg";
import { useState, useEffect } from "react";
import AnimatedBackground from "./AnimatedBackground";

const VideoEmbed = () => {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/MdL2lJtwwow?autoplay=1&rel=0"
          title="Humance Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div
      className="relative aspect-video cursor-pointer group"
      onClick={() => setPlaying(true)}
    >
      <img
        src="/demo-thumbnail.png"
        alt="Humance Demo"
        className="w-full h-full object-cover"
      />
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary/80 transition-colors duration-300">
          <Play className="w-7 h-7 text-white fill-white ml-1" />
        </div>
      </div>
      {/* Label */}
      <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2">
        <div className="flex items-center gap-2">
          <Play className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-medium">Humance Demo</span>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const rotatingTexts = [
    "AI receptionist"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => 
        prevIndex === rotatingTexts.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  return (
    <section className="relative pt-40 pb-20 bg-background overflow-hidden">
      <AnimatedBackground />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Main Headline */}
          <div className="mb-6 animate-fade-up">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
              Helping <span className="relative">clinics<div className="absolute -bottom-1 left-0 w-full h-1"><div className="animate-doodle-line h-full bg-gradient-to-r from-primary via-primary/60 to-primary/20 rounded-full"></div></div></span> grow with
            </h1>
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <div className="h-16 md:h-20 flex items-center justify-center md:min-w-[450px]">
                <span className="animate-shine text-4xl md:text-7xl lg:text-8xl font-bold leading-none">
                  AI Receptionist
                </span>
              </div>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-up">
            We're making healthcare more efficient and human-centric through intelligent AI solutions that solve real problems for patients and providers.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center items-center gap-3 mb-8 animate-fade-up">
            <Button 
              className="px-8 py-4 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl shadow-medium hover:shadow-large transition-all duration-300 group"
              onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 shadow-medium">
              <img src={najibHead} alt="Najib" className="w-full h-full object-cover object-center" />
            </div>
          </div>
          
          {/* Video Demo Section */}
          <div className="animate-fade-up-delay">
            <div className="relative w-full max-w-5xl mx-auto bg-card rounded-2xl overflow-hidden" style={{
              boxShadow: '0 0 20px rgba(34, 197, 94, 0.3), 0 0 40px rgba(34, 197, 94, 0.2), 0 0 60px rgba(34, 197, 94, 0.1)',
              border: '2px solid rgba(34, 197, 94, 0.4)'
            }}>
              <VideoEmbed />
            </div>
          </div>
          
          {/* Video description - separated */}
          <div className="mt-8 text-center animate-fade-up-delay">
            <h3 className="text-xl font-semibold text-foreground mb-3">See Humance in Action</h3>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Here's a quick look at how Humance works in a real clinic setting.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
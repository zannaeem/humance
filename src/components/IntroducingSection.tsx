import AnimatedBackground from "./AnimatedBackground";

const IntroducingSection = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto container-padding relative z-10">
        <div className="pt-20 text-center px-6">
          <div className="max-w-4xl mx-auto space-y-8">
        
            
           
            
            {/* Description paragraph */}
            <div className="max-w-4xl mx-auto mt-12 animate-fade-up" style={{ animationDelay: '1.2s' }}>
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                At <span className="text-white font-bold">HUMANCE</span>, we provide an <span className="text-yellow-400 font-bold">AI-powered receptionist for clinics</span>
                <br />
                that'll help them save time and simplify operational workflow.
              </p>
            </div>
          </div>
        </div>
        
        {/* Space for additional content below */}
        <div className="mt-20">
          {/* Add your additional content here */}
        </div>
      </div>
    </section>
  );
};

export default IntroducingSection;

import visionImage from "@/assets/future-vision.jpg";

const VisionSection = () => {
  return (
    <section className="section-spacing bg-gradient-to-br from-primary/5 via-background to-muted/20 relative overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary-glow/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container mx-auto container-padding relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Vision Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                Our Vision
              </div>
              
              <h2 className="text-title leading-tight">
                We envision a world where{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  technology empowers
                </span>
                {" "}the human element of care
              </h2>
              
              <div className="space-y-4 text-body-large text-muted-foreground">
                <p>
                  Healthcare should be about healing, not paperwork. Our AI doesn't replace 
                  the human touch—it amplifies it.
                </p>
                <p>
                  We're building a future where doctors spend more time with patients, 
                  where diagnoses are faster and more accurate, and where everyone has 
                  access to world-class healthcare.
                </p>
              </div>
            </div>

            {/* Vision Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-card/80 backdrop-blur-sm border border-border rounded-xl">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  10x
                </div>
                <div className="text-sm text-muted-foreground">
                  Improvement in care efficiency
                </div>
              </div>
              <div className="p-6 bg-card/80 backdrop-blur-sm border border-border rounded-xl">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  85%
                </div>
                <div className="text-sm text-muted-foreground">
                  Reduction in admin tasks
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="p-6 bg-primary/10 border border-primary/20 rounded-xl">
              <blockquote className="text-foreground font-medium leading-relaxed">
                "Technology should make healthcare more human, not less. 
                That's the future we're building at Humance."
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-full" />
                <div>
                  <div className="text-sm font-semibold text-foreground">Humance Team</div>
                  <div className="text-xs text-muted-foreground">Healthcare AI Pioneers</div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Image */}
          <div className="relative animate-fade-up-delay">
            <div className="relative">
              <img
                src={visionImage}
                alt="Future of healthcare with AI and human collaboration"
                className="w-full h-auto rounded-2xl shadow-large"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-2xl" />
              
              {/* Future indicators */}
              <div className="absolute top-6 right-6 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium animate-pulse-glow">
                The Future is Now
              </div>
              
              {/* Floating future elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-glow/30 rounded-2xl animate-float blur-sm" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-3xl animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
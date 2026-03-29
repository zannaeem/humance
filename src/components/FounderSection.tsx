import AnimatedBackground from "./AnimatedBackground";
import founderImg from "@/assets/naeembg.png";
import ceoSign from "@/assets/ceosign.png";

const FounderSection = () => {
  return (
    <section className="relative bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 py-16 md:py-16 lg:py-16 relative z-10 min-h-[200px] md:min-h-[650px] lg:min-h-[600px]">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Content - Desktop Layout Locked */}
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Left Side - Text Content - Desktop Locked */}
            <div className="space-y-6 lg:space-y-6">
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                WHAT MAKES US DIFFERENT
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                We're a <span className="text-primary">healthcare AI partner</span>, not just a tech company.
              </h2>
              
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Our mission is clear: we enable healthcare providers to achieve peak operational efficiency, freeing clinics from administrative burden.
                </p>
                <p>
                  Our innovative AI solution gained significant validation by winning the Sabah startup pitching competition in July 2025. This success confirms strong market demand for our approach to reducing clinic inefficiencies and combating staff burnout.
                </p>
                <p>
                  Humance revolutionizes clinic operations with our AI receptionist system, transforming patient communication and appointment management. We offer a true partnership for digital transformation, helping clinics unlock their full potential and create the future of patient care.
                </p>
              </div>
            </div>

            {/* Right Side - Founder Image - Desktop Layout Locked */}
            <div className="relative h-full lg:h-full min-h-[600px] md:min-h-[500px] lg:min-h-[400px]">
              {/* Founder Image - Mobile: New Layout, Desktop: Original Layout Locked */}
              <div className="absolute bottom-5 md:bottom-[-20px] lg:bottom-[-64px] right-2 md:right-5 lg:right-[40px]">
                
                {/* Mobile: Rounded Square Frame */}
                <div className="md:hidden flex flex-col items-center" style={{ transform: 'translateY(-160px) translateX(-40px)' }}>
                  <div className="w-[320px] h-[350px] rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                    <img src={founderImg} alt="Najib - Founder of Humance" className="w-full h-full object-cover" style={{ objectPosition: 'center 10%' }} />
                  </div>
                  
                  {/* Name and Title Below Frame - Mobile Only */}
                  <div className="mt-6 text-center">
                    <div className="text-lg text-gray-900 font-bold mb-1">
                      HAMIZAN NAEEM BIN HAZLAN
                    </div>
                    <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">
                      FOUNDER OF HUMANCE
                    </div>
                  </div>
                </div>

                {/* Desktop: Original Layout Locked */}
                <div className="hidden md:block lg:w-[550px] lg:h-[650px] lg:rounded-2xl lg:overflow-hidden">
                  <img src={founderImg} alt="Najib - Founder of Humance" className="w-full h-full object-cover object-center" />
                  
                  {/* Desktop: Original Signature Overlay */}
                  <div className="lg:absolute" style={{ top: '80px', right: '10px', zIndex: 10 }}>
                    <div className="mb-2">
                      <img src={ceoSign} alt="Najib Signature" className="h-24 w-auto" />
                    </div>
                    <div className="text-xs text-black font-bold mb-1">
                      HAMIZAN NAEEM BIN HAZLAN
                    </div>
                    <div className="text-[10px] text-black font-semibold uppercase tracking-wide">
                      FOUNDER OF HUMANCE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;

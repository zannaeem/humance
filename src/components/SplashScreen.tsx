import { useState, useEffect } from "react";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    // Phase 1: Logo appears
    const timer1 = setTimeout(() => {
      setAnimationPhase(1);
    }, 300);

    // Phase 2: Logo scales up
    const timer2 = setTimeout(() => {
      setAnimationPhase(2);
    }, 1200);

    // Phase 3: Fade out
    const timer3 = setTimeout(() => {
      setAnimationPhase(3);
    }, 2500);

    // Phase 4: Hide splash screen
    const timer4 = setTimeout(() => {
      setIsVisible(false);
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-background flex items-center justify-center transition-all duration-1000 ${
        animationPhase === 3 ? 'translate-y-[-100vh]' : 'translate-y-0'
      }`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
      
      {/* Logo container */}
      <div className="relative z-10 text-center">
        {/* Main logo */}
        <div 
          className={`transition-all duration-1000 ${
            animationPhase === 0 
              ? 'opacity-0 scale-75' 
              : animationPhase === 1 
              ? 'opacity-100 scale-100' 
              : animationPhase === 2 
              ? 'opacity-100 scale-105' 
              : 'opacity-100 scale-100'
          }`}
        >
          <h1 className="text-6xl sm:text-7xl md:text-9xl lg:text-[12rem] font-bold mb-0 animate-logo-float leading-none px-6 tracking-tight">
            <span className="text-white">
              HUMANCE
            </span>
          </h1>
        </div>
        
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-primary-glow/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default SplashScreen;

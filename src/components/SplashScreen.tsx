import { useState, useEffect } from "react";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    // Phase 1: Logo fades in
    const timer1 = setTimeout(() => {
      setAnimationPhase(1);
    }, 300);

    // Phase 2: Fade out splash
    const timer2 = setTimeout(() => {
      setAnimationPhase(2);
    }, 1800);

    // Phase 3: Hide
    const timer3 = setTimeout(() => {
      setIsVisible(false);
    }, 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex items-center justify-center transition-transform duration-1000 ease-in-out ${
        animationPhase === 2 ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <h1
        className={`text-6xl sm:text-7xl md:text-9xl lg:text-[12rem] font-bold leading-none px-6 tracking-tight text-white transition-opacity duration-1000 ${
          animationPhase === 0 ? 'opacity-0' : 'opacity-100'
        }`}
      >
        HUMANCE
      </h1>
    </div>
  );
};

export default SplashScreen;

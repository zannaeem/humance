import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface SplashContextType {
  showSplash: boolean;
  setShowSplash: (show: boolean) => void;
}

const SplashContext = createContext<SplashContextType | undefined>(undefined);

export const useSplash = () => {
  const context = useContext(SplashContext);
  if (context === undefined) {
    throw new Error("useSplash must be used within a SplashProvider");
  }
  return context;
};

interface SplashProviderProps {
  children: ReactNode;
}

export const SplashProvider = ({ children }: SplashProviderProps) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Show splash screen on every page load/refresh
    setShowSplash(true); // Reset to true on every effect run
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <SplashContext.Provider value={{ showSplash, setShowSplash }}>
      {children}
    </SplashContext.Provider>
  );
};

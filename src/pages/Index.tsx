import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import BenefitsSection from "@/components/BenefitsSection";
import FounderSection from "@/components/FounderSection";
import AchievementsSection from "@/components/AchievementsSection";
import WaitlistSection from "@/components/WaitlistSection";
import FinalCTASection from "@/components/FinalCTASection";
import ScrollNavigation from "@/components/ScrollNavigation";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <HeroSection />
        <ProblemSection />
        <BenefitsSection />
        {/* <FounderSection /> */}
        <AchievementsSection />
        <WaitlistSection />
        <FinalCTASection />
      </main>
      <ScrollNavigation />
    </>
  );
};

export default Index;
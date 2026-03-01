import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import FeatureCards from "@/components/FeatureCards";
import WelcomeSection from "@/components/WelcomeSection";
import StatsSection from "@/components/StatsSection";
import VirtualTour from "@/components/VirtualTour";
import LatestPosts from "@/components/LatestPosts";
import LifeAtCCH from "@/components/LifeAtCCH";
import JoinCTA from "@/components/JoinCTA";
import InstructorsSection from "@/components/InstructorsSection";
import AlumniSection from "@/components/AlumniSection";
import BottomStats from "@/components/BottomStats";
import PartnersBar from "@/components/PartnersBar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <HeroSlider />
      <FeatureCards />
      <WelcomeSection />
      <StatsSection />
      <VirtualTour />
      <LatestPosts />
      <LifeAtCCH />
      <JoinCTA />
      <InstructorsSection />
      <AlumniSection />
      <BottomStats />
      <PartnersBar />
      <Footer />
    </div>
  );
};

export default Index;

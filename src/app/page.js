import AboutSection from "@/components/AboutSection";
import FrameworksSection from "@/components/FrameworksSection";
import HeroBanner from "@/components/HeroBanner";
import KeynotesSection from "@/components/KeynotesSection";
import VenturesSection from "@/components/VenturesSection";


export default function Home() {
  return (
  <div>
    <HeroBanner></HeroBanner>
    <AboutSection></AboutSection>
    <VenturesSection></VenturesSection>
    <FrameworksSection></FrameworksSection>
    <KeynotesSection></KeynotesSection>
  </div>
  );
}

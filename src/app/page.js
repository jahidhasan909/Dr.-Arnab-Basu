import AboutSection from "@/components/AboutSection";
import FrameworksSection from "@/components/FrameworksSection";
import HeroBanner from "@/components/HeroBanner";
import VenturesSection from "@/components/VenturesSection";
import Image from "next/image";

export default function Home() {
  return (
  <div>
    <HeroBanner></HeroBanner>
    <AboutSection></AboutSection>
    <VenturesSection></VenturesSection>
    <FrameworksSection></FrameworksSection>
  </div>
  );
}

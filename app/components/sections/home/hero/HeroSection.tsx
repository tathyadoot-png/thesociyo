import HeroScene from "@/app/components/r3f/HeroScene";
import HeroContent from "./HeroContent";
import Atmosphere from "@/app/components/r3f/Atmosphere";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden border-b border-[color:var(--border)]">
      
      {/* R3F */}
      <HeroScene />

      {/* Atmosphere */}
      <Atmosphere />

      {/* Content */}
      <HeroContent />
    </section>
  );
}
import HeroSection from "@/app/components/sections/home/hero/HeroSection";
import CapabilitiesSection from "@/app/components/sections/home/capabilities/CapabilitiesSection";
import CinematicLayer from "@/app/components/cinematic/CinematicLayer";
import CinematicBackground from "@/app/components/cinematic/CinematicBackground"; // ← Added
import InsideSociyo from "../components/sections/home/insideSociyo/InsideSociyo";
import ManifestoSection from "../components/sections/home/manifesto/ManifestoSection";
import SelectedAssociationsSection from "../components/sections/home/associations/SelectedAssociationsSection";
import EcosystemsSection from "@/app/components/sections/home/ecosystem/EcosystemsSection";
import SociyoMethodSection from "../components/sections/home/method/SociyoMethodSection";
import TestimonialEditorialSlider from "../components/sections/home/testimonials/TestimonialEditorialSlider";

export default function Home() {
  return (
    <main
      className="
        relative
        overflow-hidden
        bg-[var(--bg)]
        text-[var(--text)]
        transition-colors
        duration-500
      "
    >
      {/* Reusable Cinematic Background */}
      <CinematicBackground />

      <CinematicLayer />

      {/* HERO */}
      <section className="relative z-10">
        <HeroSection />
      </section>

      {/* <SignalTransition /> */}

      <InsideSociyo />
      <EcosystemsSection />
      <CapabilitiesSection />
      <SociyoMethodSection/>
      <ManifestoSection />
      <SelectedAssociationsSection />
      {/* <TestimonialEditorialSlider/> */}
    </main>
  );
}
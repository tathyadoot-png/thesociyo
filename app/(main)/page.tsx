import HeroSection from "@/app/components/sections/home/hero/HeroSection";
import PhilosophySection from "@/app/components/sections/home/ecosystem/EcosystemsSection";
import CapabilitiesSection from "@/app/components/sections/home/capabilities/CapabilitiesSection";

import CinematicLayer from "@/app/components/cinematic/CinematicLayer";
import SignalTransition from "../components/sections/home/transition/SignalTransition";
import InsideSociyo from "../components/sections/home/insideSociyo/InsideSociyo";
import ManifestoSection from "../components/sections/home/manifesto/ManifestoSection";
import SelectedAssociationsSection from "../components/sections/home/associations/SelectedAssociationsSection";

export default function Home() {
  return (
    <main
      className="
        relative
        overflow-hidden
        bg-[#0A1325]
        text-[var(--text)]
        transition-colors
        duration-500
      "
    >
      {/* CLEAN ATMOSPHERE - No Left Red Glow */}
      <div
        className="
          fixed
          inset-0
          z-0
          pointer-events-none
          opacity-65

          bg-[radial-gradient(ellipse_at_70%_60%,rgba(0,160,255,0.09),transparent_50%),
               radial-gradient(circle_at_center,rgba(255,255,255,0.035),transparent_75%)]

          blur-[130px]
        "
      />

      {/* GLOBAL FILM GRAIN */}
      <div
        className="
          fixed
          inset-0
          z-0
          opacity-[0.05]
          mix-blend-soft-light
          pointer-events-none
          bg-[url('/noise.png')]
        "
      />

      {/* VIGNETTE */}
      <div
        className="
          fixed
          inset-0
          z-0
          pointer-events-none
          bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.93))]
        "
      />

      <CinematicLayer />

      {/* HERO */}
      <section className="relative z-10">
        <HeroSection />
      </section>

      <SignalTransition />

      <InsideSociyo />
      <PhilosophySection />
      <CapabilitiesSection />
      <ManifestoSection />
      <SelectedAssociationsSection />
    </main>
  );
}
import HeroSection from "@/app/components/sections/home/hero/HeroSection";
import PhilosophySection from "@/app/components/sections/home/ecosystem/EcosystemsSection";
import CapabilitiesSection from "@/app/components/sections/home/capabilities/CapabilitiesSection";

import ScrollScaleText from "@/app/components/cinematic/ScrollScaleText";
import WordReveal from "@/app/components/cinematic/WordReveal";
import MaskReveal from "@/app/components/cinematic/MaskReveal";
import TextScatter from "@/app/components/cinematic/TextScatter";
import PinSection from "@/app/components/cinematic/PinSection";
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
        bg-[#050505]
        text-[var(--text)]
        transition-colors
        duration-500
      "
    >
      {/* GLOBAL CINEMATIC ATMOSPHERE */}
      <div
        className="
          fixed
          inset-0
          z-0
          pointer-events-none
          opacity-80

          bg-[radial-gradient(circle_at_top,rgba(255,45,85,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,0,102,0.10),transparent_35%),radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_60%)]

          blur-3xl
        "
      />

      {/* GLOBAL FILM GRAIN */}
      <div
        className="
          fixed
          inset-0
          z-0
          opacity-[0.035]
          mix-blend-soft-light
          pointer-events-none
          bg-[url('/noise.png')]
        "
      />

      {/* GLOBAL VIGNETTE */}
      <div
        className="
          fixed
          inset-0
          z-0
          pointer-events-none
          bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.72))]
        "
      />

      {/* GLOBAL CINEMATIC LAYER */}
      <CinematicLayer />

      {/* HERO */}
      <section className="relative z-10">
        <HeroSection />
      </section>
      <SignalTransition />

      {/* INSIDE SOCIYO EXPERIENCE */}
      <InsideSociyo />
      {/* PHILOSOPHY */}
      <section className="relative z-10">
        <PhilosophySection />
      </section>


      {/* CAPABILITIES */}
      <section className="relative z-10">
        <CapabilitiesSection />
      </section>

      <ManifestoSection />

      <SelectedAssociationsSection />



    </main>
  );
}
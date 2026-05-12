import HeroSection from "@/app/components/sections/home/hero/HeroSection";
import PhilosophySection from "@/app/components/sections/home/philosophy/PhilosophySection";
import CapabilitiesSection from "@/app/components/sections/home/capabilities/CapabilitiesSection";

import ScrollScaleText from "@/app/components/cinematic/ScrollScaleText";
import WordReveal from "@/app/components/cinematic/WordReveal";
import MaskReveal from "@/app/components/cinematic/MaskReveal";
import TextScatter from "@/app/components/cinematic/TextScatter";
import PinSection from "@/app/components/cinematic/PinSection";
import CinematicLayer from "@/app/components/cinematic/CinematicLayer";

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

          bg-[radial-gradient(circle_at_top,rgba(254,0,0,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(254,0,0,0.08),transparent_35%),radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_60%)]

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



      {/* PHILOSOPHY */}
      <section className="relative z-10">
        <PhilosophySection />
      </section>


      {/* CAPABILITIES */}
      <section className="relative z-10">
        <CapabilitiesSection />
      </section>

      {/* CINEMATIC TEXT DISTORTION */}
      <section
        className="
          relative
          z-10
          overflow-hidden
          px-6
          md:px-12
          py-52
        "
      >
        <TextScatter text="Stories Build Authority" />
      </section>

      {/* PINNED CINEMATIC IMMERSION */}
      <section className="relative z-10">
        <PinSection
          title="Perception"
          desc="
            The most powerful organizations are not the loudest.
            They are the ones that shape interpretation,
            engineer trust, and define public memory.
          "
        />
      </section>

      {/* FINAL ATMOSPHERIC SPACE */}
      <div className="h-[25vh]" />
    </main>
  );
}
import HeroScene from "@/app/components/r3f/HeroScene";
import HeroContent from "./HeroContent";
import Atmosphere from "@/app/components/r3f/Atmosphere";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        h-[100vh]
      "
    >
      <div
        className="
          sticky
          top-0
          h-screen
          overflow-hidden
          border-b
          border-[var(--border)]
        "
      >
        {/* 3D Scene */}
        <HeroScene />

        {/* Atmosphere */}
        <Atmosphere />

        {/* Content */}
        <HeroContent />
      </div>
    </section>
  );
}
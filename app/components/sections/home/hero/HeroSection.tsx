import HeroScene from "@/app/components/r3f/HeroScene";
import HeroContent from "./HeroContent";

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
        md:p-5
        p-0
        "
      >
        {/* 3D Scene */}
        <HeroScene />

        {/* Content */}
        <HeroContent />
      </div>
    </section>
  );
}
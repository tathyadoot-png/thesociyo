import HeroScene from "@/app/components/r3f/HeroScene";
import HeroContent from "./HeroContent";
import HeroActionButtons from "./HeroActionButtons";

export default function HeroSection() {
  return (
    <section
      className="
        relative
in-h-screen
      "
    >
      <div
        className="
          sticky
          top-0
          h-full
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
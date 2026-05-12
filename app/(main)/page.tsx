import Navbar from "../components/layout/navbar/Navbar";
import HeroSection from "../components/sections/home/hero/HeroSection";

export default function Home() {
  return (
  <main
      className="
        bg-[var(--background)]
        text-[var(--text)]
        overflow-hidden
        transition-colors
        duration-500
      "
    >

      <HeroSection />
    </main>
  );
}
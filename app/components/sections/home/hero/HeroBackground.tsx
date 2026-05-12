"use client";

import dynamic from "next/dynamic";
import Atmosphere from "@/app/components/r3f/Atmosphere";

const HeroScene = dynamic(
  () => import("@/app/components/r3f/HeroScene"),
  {
    ssr: false,
  }
);

export default function HeroBackground() {
  return (
    <>
      {/* R3F Scene */}
      <HeroScene />

      {/* Atmosphere */}
      <Atmosphere />

      {/* Cinematic Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[var(--background)]" />

      {/* Red Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-[#fe0000]/10 blur-3xl z-10" />
    </>
  );
}
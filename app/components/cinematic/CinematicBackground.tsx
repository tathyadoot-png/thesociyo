"use client";

export default function CinematicBackground() {
  return (
    <>
      {/* BASE */}
      <div
        className="
          absolute inset-0 z-0 pointer-events-none
          bg-[var(--bg)]
        "
      />

      {/* VERY SOFT RED AMBIENT */}
      <div
        className="
          absolute inset-0 z-0 pointer-events-none
          cinematic-ambient

          opacity-40

          blur-[180px]
        "
      />

      {/* SUBTLE TOP LIGHT */}
      <div
        className="
          absolute inset-0 z-0 pointer-events-none

          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_58%)]
        "
      />

      {/* GRAIN */}
      <div
        className="
          absolute inset-0 z-0 pointer-events-none
          cinematic-noise
        "
      />

      {/* VERY SOFT VIGNETTE */}
      <div
        className="
          absolute inset-0 z-0 pointer-events-none

          bg-[radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,0.03))]
        "
      />
    </>
  );
}
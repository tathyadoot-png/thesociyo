"use client";

export default function Atmosphere() {
  return (
    <>
      {/* Main Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#111113]/40 to-[#111113]" />

      {/* Red Glow */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_rgba(254,0,0,0.18),transparent_60%)]" />

      {/* Top Fade */}
      <div className="absolute inset-x-0 top-0 h-40 z-10 bg-gradient-to-b from-[#111113] to-transparent" />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-60 z-10 bg-gradient-to-t from-[#111113] to-transparent" />

      {/* Noise Overlay */}
      <div
        className="
          absolute
          inset-0
          z-20
          opacity-[0.03]
          mix-blend-soft-light
          pointer-events-none
          bg-[url('/noise.png')]
        "
      />
    </>
  );
}
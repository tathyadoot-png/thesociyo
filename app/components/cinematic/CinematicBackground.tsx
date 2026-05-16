"use client";

export default function CinematicBackground() {
  return (
    <>
      {/* MAIN BLUE AMBIENT */}
      <div
        className="
          absolute
          inset-0
          z-0
          pointer-events-none

          bg-[radial-gradient(ellipse_at_20%_20%,rgba(0,140,255,0.18),transparent_40%),
               radial-gradient(ellipse_at_80%_30%,rgba(80,120,255,0.14),transparent_45%),
               radial-gradient(ellipse_at_50%_80%,rgba(0,90,255,0.12),transparent_50%),
               radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_75%)]

          blur-[120px]
        "
      />

      {/* EXTRA BLUE WASH */}
      <div
        className="
          absolute
          inset-0
          z-0
          pointer-events-none

          bg-[#07111F]/60
        "
      />

      {/* NOISE */}
      <div
        className="
          absolute
          inset-0
          z-0
          pointer-events-none

          opacity-[0.035]
          mix-blend-soft-light

          bg-[url('/noise.png')]
        "
      />

      {/* LIGHT VIGNETTE */}
      <div
        className="
          absolute
          inset-0
          z-0
          pointer-events-none

          bg-[radial-gradient(circle_at_center,transparent_38%,rgba(0,0,0,0.55))]
        "
      />
    </>
  );
}
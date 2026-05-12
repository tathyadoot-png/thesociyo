"use client";

export default function Atmosphere() {
  return (
    <>
      {/* Grid Overlay */}
      <div
        className="
          absolute inset-0 z-10
          opacity-[0.035]
          bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),
          linear-gradient(to_bottom,var(--border)_1px,transparent_1px)]
          bg-[size:120px_120px]
        "
      />

      {/* Scanlines */}
      <div
        className="
          absolute inset-0 z-20
          opacity-[0.025]
          bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.03)_50%)]
          bg-[length:100%_4px]
        "
      />
    </>
  );
}
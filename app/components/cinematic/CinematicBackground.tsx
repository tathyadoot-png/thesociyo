"use client";

export default function CinematicBackground() {
  return (
    <>
      {/* BASE */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background: "var(--bg)",
          transform: "translateZ(0)",
        }}
      />

      {/* AMBIENT */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.28,
          background:
            "radial-gradient(circle at center, rgba(255,45,45,0.12) 0%, transparent 70%)",
          filter: "blur(90px)",
          transform: "translateZ(0)",
        }}
      />

      {/* TOP LIGHT */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(circle at top, rgba(255,255,255,0.10), transparent 60%)",
          transform: "translateZ(0)",
        }}
      />

      {/* NOISE */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.03,
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"140\" height=\"140\" viewBox=\"0 0 140 140\"%3E%3Cg fill=\"white\" fill-opacity=\"1\"%3E%3Ccircle cx=\"2\" cy=\"2\" r=\"1\"/%3E%3C/g%3E%3C/svg%3E')",
          transform: "translateZ(0)",
        }}
      />

      {/* VIGNETTE */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(circle at center, transparent 55%, rgba(0,0,0,0.12))",
          transform: "translateZ(0)",
        }}
      />
    </>
  );
}
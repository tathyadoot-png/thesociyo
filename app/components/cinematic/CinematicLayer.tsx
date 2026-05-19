"use client";

import { motion } from "framer-motion";

export default function CinematicLayer() {
  return (
    <>
      {/* PRIMARY ACCENT GLOW */}
      <motion.div
        animate={{
          opacity: [0.12, 0.25, 0.12],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[38rem]
          w-[38rem]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full

          bg-[var(--ambient-1)]
          blur-[120px]
        "
      />

      {/* SECONDARY ACCENT */}
      <motion.div
        animate={{
          opacity: [0.08, 0.18, 0.08],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[45rem]
          w-[45rem]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full

          bg-[var(--ambient-2)]
          blur-[140px]
        "
      />

      {/* NOISE */}
      <div
        className="
          absolute
          inset-0
          cinematic-noise
        "
      />

      {/* VIGNETTE */}
      <div
        className="
          absolute
          inset-0
          cinematic-vignette
        "
      />
    </>
  );
}
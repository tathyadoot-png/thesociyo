"use client";

import { motion } from "framer-motion";

export default function CinematicLayer() {
  return (
    <>
      {/* RED GLOW */}
      <motion.div
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          left-1/2
          top-1/2

          h-[40rem]
          w-[40rem]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#fe0000]/10

          blur-3xl
        "
      />

      {/* NOISE */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.03]

          mix-blend-soft-light

          bg-[url('/noise.png')]
        "
      />

      {/* VIGNETTE */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.55))]
        "
      />
    </>
  );
}
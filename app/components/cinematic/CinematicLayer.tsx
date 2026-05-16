"use client";

import { motion } from "framer-motion";

export default function CinematicLayer() {
  return (
    <>
      {/* SOFT SUBTLE GLOW (Red ko bahut kam kiya) */}
      <motion.div
        animate={{ opacity: [0.12, 0.25, 0.12], scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-[38rem] w-[38rem] 
                   -translate-x-1/2 -translate-y-1/2 rounded-full 
                   bg-[#fe0000]/6 blur-[120px]"
      />

      {/* Optional Blue Accent Glow (better balance ke liye) */}
      <motion.div
        animate={{ opacity: [0.08, 0.18, 0.08], scale: [1, 1.06, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-[45rem] w-[45rem] 
                   -translate-x-1/2 -translate-y-1/2 rounded-full 
                   bg-[#00b4ff]/5 blur-[140px]"
      />

      {/* NOISE */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          mix-blend-soft-light
          bg-[url('/noise.png')]
        "
      />

      {/* VIGNETTE */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.75))]
        "
      />
    </>
  );
}
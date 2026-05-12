"use client";

import { motion } from "framer-motion";

export default function NavbarCTA() {
  return (
    <motion.button
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        hidden
        md:flex
        items-center
        justify-center
        rounded-full
        bg-[#fe0000]
        px-5
        py-3
        text-sm
        font-medium
        uppercase
           
        text-white
        shadow-[0px_0px_40px_rgba(254,0,0,0.25)]
        transition-all
        duration-500
      "
    >
      Start a Conversation
    </motion.button>
  );
}
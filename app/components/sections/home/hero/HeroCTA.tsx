"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function HeroCTA() {
  return (
    <motion.button
      whileHover={{
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        flex
        items-center
        gap-3
        px-5
        py-3
        rounded-full
        border
        border-[color:var(--border)]
        bg-white/5
        backdrop-blur-md
        hover:bg-[#fe0000]
        transition-all
        duration-500
      "
    >
      <span className="text-sm uppercase  ">
        Start a Conversation
      </span>

      <ArrowUpRight
        size={16}
        className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </motion.button>
  );
}
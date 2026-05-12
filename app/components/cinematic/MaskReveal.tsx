"use client";

import { motion } from "framer-motion";

import { typography } from "@/app/styles/theme/typography";

interface Props {
  text: string;
}

export default function MaskReveal({
  text,
}: Props) {
  return (
    <div
      className="
        relative
        overflow-hidden
      "
    >
      <motion.div
        initial={{
          y: "100%",
        }}
        whileInView={{
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <h2
          className={`
            ${typography.sectionTitle}

            text-[var(--text)]
          `}
        >
          {text}
        </h2>
      </motion.div>
    </div>
  );
}
"use client";

import { motion } from "framer-motion";

interface Props {
  text: string;
}

export default function TextScatter({
  text,
}: Props) {
  const letters = text.split("");

  return (
    <div className="flex flex-wrap">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{
            opacity: 0,
            y: 100,
            rotate: -20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotate: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: index * 0.03,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            inline-block

            text-[10vw]
            font-display font-normal
            uppercase
 

            text-[#fe0000]
          "
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
}
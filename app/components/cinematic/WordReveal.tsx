"use client";

import { motion } from "framer-motion";

import { typography } from "@/app/styles/theme/typography";

interface Props {
  text: string;
}

export default function WordReveal({
  text,
}: Props) {
  const words = text.split(" ");

  return (
    <div className="overflow-hidden">
      {words.map((word, index) => (
        <span
          key={index}
          className="
            mr-5
            inline-flex
            overflow-hidden
          "
        >
          <motion.span
            initial={{
              y: "120%",
            }}
            whileInView={{
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`
             text-lg
md:text-2xl
leading-relaxed
font-light

              block
              text-[var(--text)]
            `}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
}
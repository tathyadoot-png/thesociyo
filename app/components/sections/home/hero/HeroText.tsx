"use client";

import { motion } from "framer-motion";

const words = [
  {
    title: "Strategies",
    subtitle: "shape perception",
    accent: false,
  },
  {
    title: "Stories",
    subtitle: "build influence",
    accent: true,
  },
  {
    title: "Success",
    subtitle: "moves markets",
    accent: false,
  },
];

export default function HeroText() {
  return (
    <div className="flex flex-col justify-center flex-1 py-16 md:py-24">
      <div className="space-y-10">
        {words.map((word, index) => (
          <motion.div
            key={word.title}
            initial={{
              opacity: 0,
              y: 120,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.2,
              delay: index * 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={index === 1 ? "pl-10 md:pl-24" : ""}
          >
            <h1
              className={`
                text-[4rem]
                md:text-[9rem]
                lg:text-[12rem]
                leading-[0.9]
                tracking-[-0.08em]
                font-black
                uppercase
                ${word.accent ? "text-[#fe0000]" : ""}
              `}
            >
              {word.title}
            </h1>

            <p className="uppercase tracking-[0.25em] text-sm md:text-base ml-2 text-[var(--muted)]">
              {word.subtitle}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
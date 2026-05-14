"use client";

import { motion } from "framer-motion";
import { signalTransitionData } from "@/app/data/home/signalTransitionData";

const { words } = signalTransitionData;

export default function SignalTransition() {
  return (
    <section
      className="
        relative

        h-14
        md:h-16

        overflow-hidden

        border-y
        border-white/10

        bg-black
      "
    >
      {/* SUBTLE RED ATMOSPHERE */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,rgba(254,0,0,0.08),transparent_60%)]

          opacity-70
        "
      />

      {/* TOP LIGHT */}
      <div
        className="
          absolute
          top-0
          left-0

          h-px
          w-full

          bg-gradient-to-r
          from-transparent
          via-[#fe0000]/40
          to-transparent
        "
      />

      {/* MOVING TRACK */}
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          flex
          h-full

          items-center

          whitespace-nowrap

          will-change-transform
        "
      >
        {[...words, ...words, ...words].map(
          (word, index) => (
            <div
              key={index}
              className="
                mx-6
                md:mx-8

                flex
                items-center
                gap-6
                md:gap-8
              "
            >
              {/* DOT */}
              <motion.div
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.08,
                }}
                className="
                  h-1.5
                  w-1.5

                  rounded-full

                  bg-[#fe0000]

                  shadow-[0_0_10px_rgba(254,0,0,0.8)]
                "
              />

              {/* WORD */}
              <span
                className="
                  font-body
                  uppercase

                  text-[10px]
                  md:text-xs

                  tracking-[0.35em]

                  text-white/35

                  transition-colors
                  duration-500

                  hover:text-white/70
                "
              >
                {word}
              </span>
            </div>
          )
        )}
      </motion.div>

      {/* CENTER FADE */}
      <div
        className="
          pointer-events-none

          absolute
          inset-y-0
          left-0

          w-24

          bg-gradient-to-r
          from-black
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none

          absolute
          inset-y-0
          right-0

          w-24

          bg-gradient-to-l
          from-black
          to-transparent
        "
      />

      {/* NOISE */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0

          opacity-[0.03]

          mix-blend-soft-light

          bg-[url('/noise.png')]
        "
      />
    </section>
  );
}
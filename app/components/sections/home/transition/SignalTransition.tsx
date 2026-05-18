"use client";

import { motion } from "framer-motion";
import { signalTransitionData } from "@/app/data/home/signalTransitionData";

const { words } = signalTransitionData;

export default function SignalTransition() {
  return (
    <section
      className="
        relative

        h-[72px]

        overflow-hidden

        border-y
        border-white/5

        bg-[#18090B]
      "
    >
      {/* BASE GLOW */}
      <div
        className="
          absolute
          inset-0

          bg-[linear-gradient(to_right,#07111F,rgba(0,140,255,0.08),#07111F)]
        "
      />

      {/* MOVING LIGHT SWEEP */}
      <motion.div
        animate={{
          x: ["-100%", "120%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          top-0
          left-0

          h-full
          w-[20%]

          bg-[linear-gradient(to_right,transparent,rgba(125,184,255,0.10),transparent)]

          blur-2xl
        "
      />

      {/* CENTER LINE */}
      <div
        className="
          absolute
          left-0
          top-1/2

          h-px
          w-full

          -translate-y-1/2

          bg-gradient-to-r
          from-transparent
          via-[#7DB8FF]/20
          to-transparent
        "
      />

      {/* TRACK */}
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          relative
          z-10

          flex
          h-full
          items-center

          whitespace-nowrap
        "
      >
        {[...words, ...words].map((word, index) => (
          <div
            key={index}
            className="
              relative

              flex
              items-center

              px-8
              md:px-12
            "
          >
            {/* CONNECTOR LINE */}
            <div
              className="
                absolute
                left-0
                top-1/2

                h-px
                w-full

                -translate-y-1/2

                bg-gradient-to-r
                from-transparent
                via-white/[0.03]
                to-transparent
              "
            />

            {/* DOT */}
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.1,
              }}
              className="
                relative
                z-10

                mr-4

                h-1.5
                w-1.5

                rounded-full

                bg-[#7DB8FF]

                shadow-[0_0_14px_rgba(125,184,255,0.9)]
              "
            />

            {/* WORD */}
            <span
              className="
                relative
                z-10

                font-body
                uppercase

                text-[10px]
                md:text-[11px]

                tracking-[0.35em]

                text-white/45
              "
            >
              {word}
            </span>
          </div>
        ))}
      </motion.div>

      {/* TOP EDGE */}
      <div
        className="
          absolute
          top-0
          left-0

          h-px
          w-full

          bg-gradient-to-r
          from-transparent
          via-white/[0.08]
          to-transparent
        "
      />

      {/* BOTTOM EDGE */}
      <div
        className="
          absolute
          bottom-0
          left-0

          h-px
          w-full

          bg-gradient-to-r
          from-transparent
          via-[#7DB8FF]/15
          to-transparent
        "
      />

      {/* NOISE */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.02]

          mix-blend-soft-light

          bg-[url('/noise.png')]
        "
      />
    </section>
  );
}
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
        border-[var(--border)]

        bg-[var(--bg)]
      "
    >
      {/* BASE CINEMATIC GLOW */}
      <div
        className="
          absolute
          inset-0

          bg-[linear-gradient(to_right,
          transparent,
          var(--ambient-1),
          transparent)]
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

          bg-[linear-gradient(to_right,
          transparent,
          rgba(255,70,95,0.10),
          transparent)]

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
          via-[var(--accent)]/15
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
            {/* CONNECTOR */}
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
                via-[var(--border)]
                to-transparent
              "
            />

            {/* DOT */}
            <motion.div
              animate={{
                opacity: [0.45, 1, 0.45],
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

                bg-[var(--accent)]

                shadow-[0_0_14px_rgba(255,46,87,0.75)]
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

                text-[var(--muted)]
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
          via-[var(--border)]
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
          via-[var(--accent)]/20
          to-transparent
        "
      />

      {/* NOISE */}
      <div
        className="
          absolute
          inset-0

          cinematic-noise
        "
      />
    </section>
  );
}
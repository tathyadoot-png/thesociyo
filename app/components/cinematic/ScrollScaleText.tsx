"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef } from "react";

import { typography } from "@/app/styles/theme/typography";

interface Props {
  text: string;
}

export default function ScrollScaleText({
  text,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  /* SCALE */
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 4]
  );

  /* OPACITY */
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [1, 1, 0]
  );

  /* BLUR */
  const blur = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 30]
  );

  const filter = useMotionTemplate`
    blur(${blur}px)
  `;

  return (
    <section
      ref={ref}
      className="
        relative
        h-[300vh]
      "
    >
      {/* STICKY CINEMA */}
      <div
        className="
          sticky
          top-0

          flex
          h-screen
          items-center
          justify-center

          overflow-hidden
        "
      >
        {/* ATMOSPHERE */}
        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_center,rgba(254,0,0,0.08),transparent_60%)]
          "
        />

        {/* MASSIVE TEXT */}
        <motion.h2
          style={{
            scale,
            opacity,
            filter,
          }}
          className={`
            ${typography.hero}

            relative
            z-10

            whitespace-nowrap

            text-[var(--text)]

            will-change-transform
          `}
        >
          {text}
        </motion.h2>
      </div>
    </section>
  );
}
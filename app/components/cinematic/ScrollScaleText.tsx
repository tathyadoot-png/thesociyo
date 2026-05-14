"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

import { useRef } from "react";

interface Props {
  text: string;
}

export default function ScrollScaleText({
  text,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.6]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    [1, 1, 0]
  );

  const blur = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 12]
  );

  const filter = useMotionTemplate`
    blur(${blur}px)
  `;

  return (
    <section
      ref={ref}
      className="
        relative
        h-[120vh]
      "
    >
      <div
        className="
          sticky
          top-0

          flex
          h-screen
          items-center

          overflow-hidden
        "
      >
        <motion.h2
          style={{
            scale,
            opacity,
            filter,
          }}
          className="
            max-w-6xl

            text-5xl
            md:text-7xl
            xl:text-[8rem]

            leading-[0.9]

            font-display
            uppercase

            text-[var(--text)]

            will-change-transform
          "
        >
          {text}
        </motion.h2>
      </div>
    </section>
  );
}
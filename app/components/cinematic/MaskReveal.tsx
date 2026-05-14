"use client";

import {
  motion,
  useInView,
} from "framer-motion";

import {
  ReactNode,
  useRef,
} from "react";

interface Props {
  children: ReactNode;
}

export default function MaskReveal({
  children,
}: Props) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-10%",
  });

  return (
    <div
      ref={ref}
      className="
        relative
        overflow-hidden
      "
    >
      {/* TEXT */}
      <motion.div
        initial={{
          y: "120%",
          rotate: 2,
          skewY: 6,
          opacity: 0,
        }}
        animate={
          isInView
            ? {
                y: 0,
                rotate: 0,
                skewY: 0,
                opacity: 1,
              }
            : {}
        }
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>

      {/* CINEMATIC LIGHT PASS */}
      <motion.div
        initial={{
          x: "-120%",
        }}
        animate={
          isInView
            ? {
                x: "120%",
              }
            : {}
        }
        transition={{
          duration: 1.8,
          ease: "easeInOut",
          delay: 0.2,
        }}
        className="
          pointer-events-none

          absolute
          inset-0

          bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.18),transparent)]

          blur-2xl
        "
      />
    </div>
  );
}
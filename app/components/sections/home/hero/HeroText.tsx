"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  heroLines,
} from "@/app/data/home/heroTextData";
import HeroActionButtons from "./HeroActionButtons";

export default function HeroText() {
  const { scrollYProgress } = useScroll();

  const heroOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.45], [1, 1.08]);
  const heroBlur = useTransform(scrollYProgress, [0, 0.45], [0, 8]);

  const blurFilter = useTransform(
    heroBlur,
    (v) => `blur(${v}px)`
  );

  return (
    <motion.section
      style={{
        opacity: heroOpacity,
        scale: heroScale,
        filter: blurFilter,
      }}
      className="
        relative
        flex
        min-h-[100svh]
        md:min-h-screen
        items-center
        justify-center
        overflow-hidden
        sm:px-6
      "
    >
      {/* MAIN CONTENT */}
      <div
        className="
          relative
          z-20
          flex
          w-full
          max-w-[1700px]
          flex-col
          items-center
          justify-center
          text-center
          pt-10
        "
      >
        <div
          className="
            relative
            flex
            flex-col
            items-center
            justify-center
            gap-2
            md:gap-0
          "
        >
          {heroLines.map((line, index) => {
            const y = useTransform(
              scrollYProgress,
              [0, 1],
              [0, index === 0 ? -220 : index === 1 ? -120 : -60]
            );

            const x = useTransform(
              scrollYProgress,
              [0, 1],
              [0, index === 0 ? -120 : index === 1 ? 0 : 80]
            );

            const scale = useTransform(
              scrollYProgress,
              [0, 1],
              [1, index === 1 ? 1.15 : 0.9]
            );

            const rotate = useTransform(
              scrollYProgress,
              [0, 1],
              [0, index === 0 ? -4 : index === 2 ? 4 : 0]
            );

            return (
              <motion.div
                key={line.text}
                style={{ y, x, scale, rotate }}
                initial={{ opacity: 0, y: 120 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.6,
                  delay: index * 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  flex
                  flex-col
                  items-center
                  justify-center
                "
              >
{line.accent && (
  <div
    className="
      absolute
      inset-0

      pointer-events-none


      opacity-20

      blur-[120px]
    "
  />
)}             {/* TYPOGRAPHY */}
                <div className="relative overflow-hidden">
                <motion.h1
  initial={{
    y: "120%",
    opacity: 0,
    filter: "blur(12px)",
  }}
  animate={{
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
  }}
  transition={{
    duration: 1.8,
    delay: 0.2 + index * 0.15,
    ease: [0.22, 1, 0.36, 1],
  }}
  className={`
    relative
    z-20

    whitespace-nowrap

    font-display
    uppercase

    text-[clamp(5rem,14vw,14rem)]
md:text-[clamp(4.5rem,8.5vw,9rem)]

    leading-[0.82]

    select-none
    will-change-transform

    ${
      line.accent
        ? `
          cherry-gradient-text
          text-cinematic-shadow
        `
        : `
          text-primary
        `
    }
  `}
>
  {line.text}
</motion.h1>
                </div>

                {/* SUBTITLE */}
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 1 + index * 0.15,
                  }}
                  className="
                    my-1
                    md:my-3

                    font-body
                    text-[10px]
                    md:text-xs

                    uppercase
                    tracking-[0.28em]

                    text-[var(--muted)]
                  "
                >
                  {line.subtitle}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
<section
  className="
    relative
    z-50

    mt-16
    md:mt-20

    flex
    justify-center
  "
>
  <HeroActionButtons />
</section>
      </div>
    </motion.section>
  );
}
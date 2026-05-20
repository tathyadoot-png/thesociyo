"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { useRef } from "react";

import {
  ecosystemsData,
  ecosystemsHeading,
} from "@/app/data/home/ecosystems";

import CinematicLayer from "@/app/components/cinematic/CinematicLayer";
import CinematicBackground from "@/app/components/cinematic/CinematicBackground";
import CinematicSectionHeading from "@/app/components/ui/CinematicSectionHeading";

export default function EcosystemsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
  });

  const orbY = useTransform(smooth, [0, 1], [0, -120]);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden

        border-y
        border-[var(--border)]

        py-20
        md:py-40

        px-6
        md:px-48

        bg-[var(--bg)]
      "
    >
      {/* BACKGROUND */}
      <CinematicBackground />

      {/* GLOBAL DEPTH */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-b
          from-transparent
          via-[var(--ambient-1)]/5
          to-black/[0.04]

          dark:to-black/25
        "
      />

      {/* CHERRY ORB */}
      <motion.div
        style={{ y: orbY }}
        className="
          absolute
          left-1/2
          top-40

          h-[30rem]
          w-[30rem]

          -translate-x-1/2

          rounded-full

          bg-[var(--accent)]/10

          blur-[120px]
        "
      />

      {/* HEADING */}
      <CinematicSectionHeading
        {...ecosystemsHeading}
        className="relative z-20"
      />

      {/* PANELS */}
      <div
        className="
          relative
          z-20

          flex
          flex-col

          gap-14
          md:gap-[12vh]
          xl:gap-[14vh]

          pb-14
          md:pb-[10vh]
        "
      >
        {ecosystemsData.map((item, index) => (
          <section
            key={item.number}
            className="
              relative
              min-h-[auto]
              overflow-hidden
            "
          >
            {/* HUGE BG NUMBER */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 1.12,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.6,
              }}
              className="
                pointer-events-none

                absolute
                inset-0

                flex
                items-center
                justify-center
              "
            >
              <div
                className="
                  font-display
                  uppercase

                  text-[30vw]
                  md:text-[18vw]

                  leading-none
                  tracking-[-0.08em]

                  text-[var(--text)]/[0.025]
                "
              >
                0{index + 1}
              </div>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{
                opacity: 0,
                y: 90,
                rotate: -3,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate:
                  index % 2 === 0
                    ? -1.5
                    : 1.5,
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`
                relative
                lg:z-20
                overflow-hidden

                rounded-[1.4rem]

                border
                border-[var(--border)]

                glass-card

                shadow-[0_30px_80px_rgba(0,0,0,0.18)]

                w-[82%]
                sm:w-[68%]
                md:w-[42vw]
                lg:w-[26vw]
                xl:w-[22vw]

                ${
                  index % 2 === 0
                    ? "lg:ml-0"
                    : "lg:mr-0 lg:ml-auto"
                }
              `}
            >
              <motion.img
                whileHover={{
                  scale: 1.04,
                }}
                transition={{
                  duration: 1,
                }}
                src={item.image}
                alt={item.title}
                className="
                  aspect-[4/5]
                  w-full

                  object-cover

                  brightness-[0.72]
                  contrast-[1.05]

                  transition-transform
                  duration-[1800ms]
                "
              />

              {/* OVERLAY */}
              {/* <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-black/80
                  via-black/30
                  to-transparent
                "
              /> */}

              {/* AMBIENT */}
              <div
                className="
                  absolute
                  inset-0

                  bg-[radial-gradient(circle_at_top_right,var(--ambient-1),transparent_50%)]

                  opacity-70
                "
              />
            </motion.div>

            {/* TEXT */}
            <div
              className={`
                relative
                z-20

                mt-4
                lg:-mt-[14rem]

                flex
                items-center

                px-0
                md:px-2
                lg:px-4

                ${
                  index % 2 === 0
                    ? "justify-end"
                    : "justify-start"
                }
              `}
            >
              <div className="max-w-[90%] xl:max-w-2xl">
                {/* META */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x:
                      index % 2 === 0
                        ? 40
                        : -40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  className="
                    mb-5

                    flex
                    items-center
                    gap-3
                  "
                >
                  <div
                    className="
                      h-1
                      w-10

                      rounded-full

                      bg-gradient-to-r
                      from-[var(--accent-light)]
                      to-transparent
                    "
                  />

                  <span
                    className="
                      text-[10px]

                      uppercase
                      tracking-[0.35em]

                      text-[var(--muted)]
                    "
                  >
                    Ecosystem 0{index + 1}
                  </span>
                </motion.div>

                {/* TITLE */}
                <motion.h2
                  initial={{
                    y: "120%",
                    skewY: 6,
                  }}
                  whileInView={{
                    y: 0,
                    skewY: 0,
                  }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    font-display
                    uppercase

                    text-[1.5rem]
                    sm:text-[2rem]
                    md:text-[3rem]
                    xl:text-[4rem]

                    leading-[0.84]
                    tracking-[-0.065em]

                    text-[var(--text)]
                  "
                >
                  {item.title}
                </motion.h2>

                {/* DESCRIPTION */}
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.2,
                  }}
                  className="
                    mt-7

                    text-sm
                    sm:text-base
                    md:text-lg

                    leading-[1.8]

                    text-[var(--muted)]
                  "
                >
                  {item.description}
                </motion.p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
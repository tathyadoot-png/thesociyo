"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { useRef } from "react";

interface CinematicSectionHeadingProps {
  sectionLabel?: string;

  heading: {
    first?: string;
    highlight?: string;
    last?: string;
  };

  shortText?: string;

  className?: string;
}

export default function CinematicSectionHeading({
  sectionLabel,
  heading,
  shortText,
  className = "",
}: CinematicSectionHeadingProps) {


const sectionRef = useRef<HTMLDivElement | null>(null);

const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start 85%", "end 20%"],
});

const smooth = useSpring(scrollYProgress, {
  stiffness: 120,
  damping: 24,
  mass: 0.5,
});


const headingY = useTransform(smooth, [0, 1], [120, -40]);

const headingScale = useTransform(
  smooth,
  [0, 1],
  [0.92, 1]
);

const headingOpacity = useTransform(
  smooth,
  [0, 0.2],
  [0, 1]
);

const blurValue = useTransform(
  smooth,
  [0, 0.15],
  [12, 0]
);

const blurFilter = useTransform(
  blurValue,
  (value) => `blur(${value}px)`
);

const glowOpacity = useTransform(
  smooth,
  [0, 0.4],
  [0.08, 0.18]
);

const sweepX = useTransform(
  smooth,
  [0, 1],
  ["-120%", "120%"]
);

const paragraphY = useTransform(
  smooth,
  [0, 1],
  [60, 0]
);

const paragraphOpacity = useTransform(
  smooth,
  [0.15, 0.35],
  [0, 1]
);

  return (
    <div
      ref={sectionRef}
      className={`
       mb-12 md:mb-16 lg:mb-20

        flex
        flex-col

        gap-8 md:gap-10 xl:gap-16

        xl:flex-row
        xl:items-end
        xl:justify-between

        ${className}
      `}
    >
      {/* LEFT */}
      <div className="max-w-full xl:max-w-[850px]">
        {/* LABEL */}
        {sectionLabel && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              relative

          mb-6 md:mb-8

              flex
              items-center
              gap-5
            "
          >
            {/* SWEEP LIGHT */}
            <motion.div
              animate={{
                x: ["-120%", "120%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                left-0
                top-1/2

                h-8
                w-20

                -translate-y-1/2

                bg-[linear-gradient(to_right,transparent,rgba(254,0,0,0.18),transparent)]

                blur-xl
              "
            />

            {/* LEFT LINE */}
            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 80,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative

                h-px

                overflow-hidden

                bg-white/10
              "
            >
              <motion.div
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  left-0
                  top-0

                  h-full
                  w-10

                  bg-gradient-to-r
                  from-[#fe0000]
                  to-transparent
                "
              />
            </motion.div>

            {/* LABEL TEXT */}
            <div
              className="
                relative

                flex
                items-center
                gap-3
              "
            >
              {/* RED DOT */}
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative

                  h-1.5
                  w-1.5

                  rounded-full

                  bg-[#fe0000]

                  shadow-[0_0_12px_rgba(254,0,0,0.8)]
                "
              >
                <div
                  className="
                    absolute
                    inset-0

                    rounded-full

                    bg-[#fe0000]

                    blur-sm
                  "
                />
              </motion.div>

              {/* TEXT */}
              <motion.span
                initial={{
                  opacity: 0,
                  letterSpacing: "0.2em",
                }}
                whileInView={{
                  opacity: 1,
                  letterSpacing: "0.5em",
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1,
                }}
                className="
                  font-body
                  text-[10px]
                  md:text-[11px]

                  uppercase

                  text-white/45
                "
              >
                {sectionLabel}
              </motion.span>
            </div>
          </motion.div>
        )}

        {/* HEADING */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 70,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="
            relative

            overflow-hidden

            font-display
            uppercase

            text-[clamp(3.5rem,11vw,5.8rem)]
sm:text-[clamp(4rem,10vw,6.5rem)]
lg:text-[clamp(4.5rem,7vw,7rem)]

            leading-[0.82]
           tracking-[-0.06em] md:tracking-[-0.075em]

            text-white
          "
        >
          {/* SWEEP LIGHT */}
          <motion.div
            animate={{
              x: ["-100%", "120%"],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              inset-0

              bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.04),transparent)]

              blur-2xl
            "
          />

          <div className="relative z-10">
            {heading.first}

            {heading.highlight && (
              <>
                <br />

                <span
                  className="
                    text-transparent

                    bg-gradient-to-b
                    from-[#ff0000]
                    via-[#ff6666]
                    to-[#ffd0d0]

                    bg-clip-text

                    drop-shadow-[0_0_40px_rgba(254,0,0,0.22)]
                  "
                >
                  {heading.highlight}
                </span>
              </>
            )}

            {heading.last && (
              <>
                <br />
                {heading.last}
              </>
            )}
          </div>
        </motion.h2>
      </div>

      {/* RIGHT TEXT */}
      {shortText && (
        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="
            max-w-full xl:max-w-[380px]

           text-sm
sm:text-base
md:text-[15px]
lg:text-base
            leading-[1.9]

            text-white/55
          "
        >
          {shortText}
        </motion.p>
      )}
    </div>
  );
}
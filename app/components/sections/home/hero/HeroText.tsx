"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const lines = [
  {
    text: "Strategies",
    subtitle: "Shape Perception",
    accent: false,
  },
  {
    text: "Story",
    subtitle: "Build Influence",
    accent: true,
  },
  {
    text: "Success",
    subtitle: "Move Culture",
    accent: false,
  },
];

export default function HeroText() {
  const { scrollYProgress } = useScroll();

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.45],
    [1, 0]
  );

  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.45],
    [1, 1.08]
  );

  const heroBlur = useTransform(
    scrollYProgress,
    [0, 0.45],
    [0, 8]
  );

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

  px-4
  sm:px-6
"
    >
      

      {/* Cinematic Sweep */}
      <motion.div
        animate={{
          x: ["-100%", "120%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          top-0
          left-0
          h-full
          w-[30vw]
          bg-[linear-gradient(to_right,transparent,rgba(254,0,0,0.08),transparent)]
          blur-3xl
        "
      />

    

   {/* Editorial Frame */}
<div
  className="
    pointer-events-none

    absolute

    inset-3
    sm:inset-4
    md:inset-6
    lg:inset-8
    xl:inset-10

    border
    border-white/10

    opacity-40
  "
>

  

</div>

      {/* Side Label */}
      <div
        className="
          absolute
          left-5
          top-1/2
          hidden
          xl:flex
          -translate-y-1/2
          rotate-180
        "
        style={{
          writingMode: "vertical-rl",
        }}
      >
        <span
          className="
            font-body
            text-[10px]
            uppercase
            text-[var(--muted)]
          "
        >
          Narrative Intelligence Framework
        </span>
      </div>

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
        "
      >
        {/* TOP METADATA */}
        {/* <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          className="
            mb-10
            flex
            flex-wrap
            items-center
            justify-center
            gap-4
            md:gap-8
            font-body
            text-[10px]
            md:text-xs
            uppercase
            text-[var(--muted)]
          "
        >
          <span>Media Intelligence</span>
          <span>Influence Systems</span>
          <span>Narrative Architecture</span>
          <span>Public Perception</span>
        </motion.div> */}

        {/* TYPOGRAPHY STACK */}
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
          {lines.map((line, index) => {
         const y = useTransform(
  scrollYProgress,
  [0, 1],
  [
    0,
    index === 0
      ? -220
      : index === 1
      ? -120
      : -60,
  ]
);

const x = useTransform(
  scrollYProgress,
  [0, 1],
  [
    0,
    index === 0
      ? -120
      : index === 1
      ? 0
      : 80,
  ]
);

const scale = useTransform(
  scrollYProgress,
  [0, 1],
  [
    1,
    index === 1 ? 1.15 : 0.9,
  ]
);

const rotate = useTransform(
  scrollYProgress,
  [0, 1],
  [
    0,
    index === 0
      ? -4
      : index === 2
      ? 4
      : 0,
  ]
);

            return (
              <motion.div
                key={line.text}
               style={{
  y,
  x,
  scale,
  rotate,
}}
                initial={{
                  opacity: 0,
                  y: 120,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
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
                {/* RED GLOW */}
                {line.accent && (
                  <motion.div
                    animate={{
                      opacity: [0.25, 0.55, 0.25],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      absolute
                      inset-0
                      bg-[radial-gradient(circle_at_center,rgba(254,0,0,0.25),transparent_70%)]
                      blur-3xl
                      pointer-events-none
                    "
                  />
                )}

                {/* TYPOGRAPHY WRAPPER */}
                <div className="relative overflow-hidden">

                  {/* CINEMATIC ECHO */}
                  <motion.h1
                    animate={{
                      x: [-2, 2, -2],
                      opacity: [0.05, 0.12, 0.05],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`
                      absolute
                      inset-0
                      z-0
                      whitespace-nowrap
                      font-display
                      uppercase
                      text-[clamp(5rem,14vw,14rem)]
                      md:text-[clamp(7rem,15vw,18rem)]
                      leading-[0.82]
                      text-transparent
                      blur-[2px]
                    `}
                    style={{
                      WebkitTextStroke: line.accent
                        ? "2px rgba(254,0,0,0.22)"
                        : "1px rgba(255,255,255,0.08)",
                    }}
                  >
                    {line.text}
                  </motion.h1>

                  {/* SCANLINE */}
                  <motion.div
                    animate={{
                      x: ["-120%", "120%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
                      absolute
                      inset-0
                      z-10
                      bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.10),transparent)]
                      mix-blend-overlay
                      blur-xl
                      pointer-events-none
                    "
                  />

                  {/* MAIN WORD */}
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
                      md:text-[clamp(6rem,15vw,18rem)]
                      leading-[0.82]
                      select-none
                      will-change-transform
                      ${
                        line.accent
                          ? `
                            text-transparent
                            bg-clip-text
                            bg-gradient-to-b
                            from-[#ff0000]
                            via-[#ff4d4d]
                            to-[#ffb3b3]
                            drop-shadow-[0_0_45px_rgba(254,0,0,0.28)]
                          `
                          : `
                            text-[var(--text)]
                          `
                      }
                    `}
                    style={{
                      WebkitTextStroke: line.accent
                        ? "1px rgba(255,255,255,0.12)"
                        : "0px transparent",
                      textShadow: line.accent
                        ? "0 0 30px rgba(254,0,0,0.22)"
                        : "0 0 20px rgba(255,255,255,0.04)",
                    }}
                  >
                    {line.text}
                  </motion.h1>
                </div>

                {/* SIGNAL */}
                <motion.div
                  initial={{
                    scaleX: 0,
                    opacity: 0,
                  }}
                  animate={{
                    scaleX: 1,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.8 + index * 0.15,
                  }}
                  className="
                    mt-2
                    h-px
                    w-[140px]
                    md:w-[240px]
                    origin-center
                    bg-gradient-to-r
                    from-transparent
                    via-[var(--accent)]
                    to-transparent
                  "
                />

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
                    mt-3
                    font-body
                    text-[10px]
                    md:text-xs
                    uppercase
                    text-[var(--muted)]
                  "
                >
                  {line.subtitle}
                </motion.p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 2,
            duration: 1.4,
          }}
          className="
            mt-14
            flex
            items-center
            gap-5
          "
        >
          {/* <motion.div
            animate={{
              width: [60, 120, 60],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              h-px
              bg-gradient-to-r
              from-[var(--accent)]
              to-transparent
            "
          /> */}

          {/* <span
            className="
              font-body
              text-[10px]
              md:text-xs
              uppercase
              text-[var(--text)]
            "
          >
            Enter The System
          </span> */}
        </motion.div>
      </div>


    </motion.section>
  );
}
"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { useRef } from "react";

import {
  manifestoContent,
  manifestoHeading,
} from "@/app/data/home/manifesto";

import CinematicLayer from "@/app/components/cinematic/CinematicLayer";

export default function ManifestoSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const glowY = useTransform(
    smooth,
    [0, 1],
    [0, -120]
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden

        bg-[#050505]

    px-10
        md:px-40
 

        py-24
        md:py-32
      "
    >
      {/* BACKGROUND */}
      <CinematicLayer />

      {/* GLOW */}
      <motion.div
        style={{
          y: glowY,
        }}
        className="
          absolute
          right-0
          top-0

          h-[28rem]
          w-[28rem]

          rounded-full

          bg-[#ff2d2d]/10

          blur-[140px]
        "
      />

      {/* GRID */}
      <div
        className="
          absolute
          inset-0

          bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]

          bg-[size:80px_80px]

          opacity-20
        "
      />

      <div
        className="
          relative
          z-20

    
        
        
        "
      >
        {/* TOP */}
        <div
          className="
            grid
            gap-14

            xl:grid-cols-[1fr_420px]
            xl:items-end
          "
        >
          {/* LEFT */}
          <div>
            {/* LABEL */}
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
                mb-8

                flex
                items-center
                gap-4
              "
            >
              <div
                className="
                  h-px
                  w-12

                  bg-[#ff2d2d]
                "
              />

              <span
                className="
                  text-[10px]
                  uppercase

                  tracking-[0.5em]

                  text-white/40
                "
              >
                {manifestoHeading.sectionLabel}
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 40,
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
           

                font-display
                uppercase

                text-[3rem]
                sm:text-[4rem]
                md:text-[5rem]
                xl:text-[6rem]

                leading-[0.86]
                tracking-[-0.08em]

                text-white
              "
            >
              {manifestoHeading.heading.first}

              <span
                className="
                  text-[#ff2d2d]
                "
              >
                {" "}
                {manifestoHeading.heading.highlight}
              </span>

              <br />

              {manifestoHeading.heading.last}
            </motion.h2>
          </div>

          {/* RIGHT TEXT */}
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
              duration: 1,
              delay: 0.15,
            }}
            className="
              xl:pb-2
            "
          >
            <p
              className="
                text-base
                md:text-lg

                leading-relaxed

                text-white/60
              "
            >
              {manifestoHeading.shortText}
            </p>
          </motion.div>
        </div>

        {/* CONTENT */}
<div
  className="
    relative

    mt-24
    md:mt-32
  "
>
  {/* CENTER LINE */}
  <div
    className="
      absolute
      left-1/2
      top-0

      hidden
      md:block

      h-full
      w-px

      -translate-x-1/2

      bg-gradient-to-b
      from-transparent
      via-white/10
      to-transparent
    "
  />

  <div className="space-y-28 md:space-y-36">
    {manifestoContent.map((item, index) => (
      <motion.div
        key={item.id}
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1,
          delay: index * 0.15,
        }}
        className={`
          relative

          flex

          ${
            index % 2 === 0
              ? "justify-start"
              : "justify-end"
          }
        `}
      >
        {/* ORB */}
        <div
          className="
            absolute
            left-1/2
            top-10

            hidden
            md:block

            h-5
            w-5

            -translate-x-1/2

            rounded-full

            border
            border-[#ff2d2d]/40

            bg-black
          "
        >
          <div
            className="
              absolute
              inset-0

              rounded-full

              bg-[#ff2d2d]/30

              blur-md
            "
          />
        </div>

        {/* CONTENT */}
        <div
          className={`
            relative

            w-full
            md:w-[46%]

            ${
              index % 2 === 0
                ? "md:pr-16"
                : "md:pl-16"
            }
          `}
        >
          {/* HUGE NUMBER */}
          <div
            className="
              pointer-events-none
              absolute
              -top-8
              font-display
              uppercase
              text-[6rem]
              md:text-[8rem]
              leading-none
              tracking-[-0.12em]
              text-white/[0.03]
            "
          >
            {item.id}
          </div>

          {/* SMALL LABEL */}
          <div
            className="
              mb-6
              flex
              items-center
              gap-4
            "
          >
            <div
              className="
                h-px
                w-10
                bg-[#ff2d2d]
              "
            />

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.45em]
                text-white/35
              "
            >
              Manifesto
            </span>
          </div>

          {/* TEXT */}
          <p
            className="
              relative
              z-10
              text-[1.7rem]
              md:text-[2.2rem]
              font-light
              leading-[1.02]
              tracking-[-0.07em]
              text-white/92
            "
          >
            {item.text}
          </p>

          {/* BOTTOM FADE */}
          <div
            className="
              mt-8

              h-px
              w-32

              bg-gradient-to-r
              from-[#ff2d2d]
              to-transparent
            "
          />
        </div>
      </motion.div>
    ))}
  </div>
</div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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

            mt-20
            md:mt-28

            border-t
            border-white/10

            pt-12
            md:pt-16
          "
        >
          {/* BG WORD */}
          <div
            className="
              pointer-events-none

              absolute
              right-0
              top-1/2

              -translate-y-1/2

              font-display
              uppercase

              text-[12vw]

              leading-none
              tracking-[-0.14em]

              text-white/[0.03]
            "
          >
            MEMORY
          </div>

          {/* CONTENT */}
          <div
            className="
              relative
              z-10

              flex
              flex-col
              gap-5

              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <div>
              <div
                className="
                  mb-4

                  text-[10px]
                  uppercase

                  tracking-[0.7em]

                  text-white/35
                "
              >
                Communication Philosophy
              </div>

              <h3
                className="
                  font-display
                  uppercase

                  text-[2.5rem]
                  sm:text-[3rem]
                  md:text-[4rem]

                  leading-[0.9]
                  tracking-[-0.08em]

                  text-white
                "
              >
                Not Just Seen.
              </h3>
            </div>

            <h2
              className="
                font-display
                uppercase

                text-[3rem]
                sm:text-[4rem]
                md:text-[6rem]

                leading-none
                tracking-[-0.1em]

                text-transparent

                bg-gradient-to-b
                from-[#ff2d2d]
                via-[#ff8c8c]
                to-[#ffffff]

                bg-clip-text
              "
            >
              Remembered
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
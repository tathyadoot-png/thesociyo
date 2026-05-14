"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { useRef } from "react";

import { philosophyData } from "@/app/data/home/philosophy";

import CinematicLayer from "@/app/components/cinematic/CinematicLayer";
import PinSection from "@/app/components/cinematic/PinSection";

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
  });

  const orbY = useTransform(
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

        border-b
        border-white/10
py-20 md:py-40
px-6 md:px-10 lg:px-16
        bg-black
      "
    >
      {/* BACKGROUND */}
      <CinematicLayer />

      {/* RED ORB */}
      <motion.div
        style={{
          y: orbY,
        }}
        className="
          absolute
          left-1/2
          top-40

          h-[30rem]
          w-[30rem]

          -translate-x-1/2

          rounded-full

          bg-[#fe0000]/10

          blur-[120px]
        "
      />


{/* CINEMATIC PANELS */}
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
  {philosophyData.map((item, index) => (
    <section
      key={item.id}
      className="
        relative

        min-h-[62vh]
        md:min-h-[68vh]

        overflow-hidden
      "
    >
      {/* HUGE TYPO BG */}
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
            text-[30vw]
            md:text-[18vw]

            font-display
            uppercase
            leading-none

            tracking-[-0.08em]

            text-white/[0.02]
          "
        >
          0{index + 1}
        </div>
      </motion.div>

      {/* FLOATING IMAGE */}
      <motion.div
        initial={{
          opacity: 0,
          y: 90,
          rotate: -3,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          rotate: index % 2 === 0 ? -1.5 : 1.5,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          relative
          z-10

          overflow-hidden

          rounded-[1.1rem]
          md:rounded-[1.5rem]

          shadow-2xl

          w-[82%]
          sm:w-[68%]
          md:w-[42vw]
          lg:w-[22vw]
          xl:w-[20vw]

          mx-auto

          ${
            index % 2 === 0
              ? `
                lg:ml-[10%]
              `
              : `
                lg:mr-[10%]
                lg:ml-auto
              `
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

            grayscale

            brightness-[0.72]
            contrast-[1.05]
          "
        />

        {/* FILM OVERLAY */}
        <div
          className="
            absolute
            inset-0

            bg-[linear-gradient(to_top,rgba(0,0,0,0.72),transparent)]
          "
        />

        {/* LIGHT PASS */}
        <motion.div
          animate={{
            x: ["-120%", "120%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            inset-0

            bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1),transparent)]

            blur-2xl
          "
        />
      </motion.div>

      {/* TEXT BLOCK */}
      <div
        className={`
          relative
          z-20

          flex
          items-center

          mt-8
          lg:-mt-[5vh]

          px-4
          md:px-8
          lg:px-12

          ${
            index % 2 === 0
              ? "justify-end"
              : "justify-start"
          }
        `}
      >
        <div className="max-w-2xl">
          {/* LABEL */}
          <motion.div
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? 40 : -40,
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
                h-px
                w-12

                bg-[#fe0000]
              "
            />

            <span
              className="
                text-[10px]
                uppercase

                tracking-[0.35em]

                text-[#fe0000]
              "
            >
              Philosophy 0{index + 1}
            </span>
          </motion.div>

          {/* TITLE */}
          <div className="overflow-hidden">
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
                text-[2.4rem]
                sm:text-[3.2rem]
                md:text-[4.8rem]
                xl:text-[5.8rem]

                leading-[0.84]

                tracking-[-0.065em]

                font-display
                uppercase

                text-white
              "
            >
              {item.title}
            </motion.h2>
          </div>

          {/* DESC */}
          <motion.div
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

              grid
              gap-6

              lg:grid-cols-[1fr_auto]
            "
          >
            <p
              className="
                text-sm
                sm:text-base
                md:text-lg

                leading-[1.8]

                text-white/70
              "
            >
              {item.description}
            </p>

            {/* FLOATING META */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="
                hidden
                lg:flex

                items-end
                justify-end
              "
            >
              <div
                className="
                  text-right

                  text-[10px]
                  uppercase

                  leading-[1.8]

                  tracking-[0.35em]

                  text-white/20
                "
              >
                Narrative
                <br />
                Systems
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  ))}
</div>


    </section>
  );
}
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { capabilitiesData } from "@/app/data/home/capabilities";
import CinematicLayer from "@/app/components/cinematic/CinematicLayer";

export default function CapabilitiesSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="
        relative
        overflow-x-hidden

        bg-black

        py-24
        md:py-36
      "
    >
      {/* BG */}
      <CinematicLayer />

      {/* RED ATMOSPHERE */}
      <div
        className="
          absolute
          left-1/2
          top-1/2

          h-[40rem]
          w-[40rem]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#fe0000]/10

          blur-[160px]
        "
      />

      <div
        className="
          relative
          z-20

          px-6
          md:px-10
          lg:px-16
        "
      >
        {/* HEADER */}
        <div
          className="
            flex
            items-end
            justify-between

            border-b
            border-white/10

            pb-10
          "
        >
          <div>
            <div
              className="
                mb-5

                flex
                items-center
                gap-4
              "
            >
              <div
                className="
                  h-px
                  w-14

                  bg-[#fe0000]
                "
              />

              <span
                className="
                  text-[10px]
                  uppercase

                  tracking-[0.45em]

                  text-[#fe0000]
                "
              >
                Capabilities
              </span>
            </div>

            <motion.h2
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
              }}
              transition={{
                duration: 1.2,
              }}
              className="
                text-[3rem]
                sm:text-[4rem]
                md:text-[6rem]
                xl:text-[7rem]

                leading-[0.85]

                tracking-[-0.08em]

                font-display
                uppercase

                text-white
              "
            >
              Strategic
              <br />
              Operating System
            </motion.h2>
          </div>

          <div
            className="
              hidden
              xl:block

              text-right

              text-[10px]
              uppercase

              leading-[2]

              tracking-[0.45em]

              text-white/20
            "
          >
            Narrative
            <br />
            Communication
            <br />
            Infrastructure
          </div>
        </div>
{/* COMPACT CINEMATIC EDITORIAL LIST */}
<div
  className="
    mt-20

    flex
    flex-col

    border-t
    border-white/10
  "
>
  {capabilitiesData.map((item, index) => {
    const isActive = active === index;

    return (
      <motion.div
        key={item.number}
        onMouseEnter={() => setActive(index)}
        onViewportEnter={() => setActive(index)}
        viewport={{
          amount: 0.45,
        }}
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: index * 0.05,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          group
          relative

          overflow-hidden

          border-b
          border-white/10
        "
      >
        {/* BG IMAGE */}
        <motion.div
          animate={{
            opacity: isActive ? 1 : 0,
            scale: isActive ? 1 : 1.08,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            absolute
            inset-0
          "
        >
          <img
            src={item.image}
            alt={item.title}
            className="
              h-full
              w-full

              object-cover

              grayscale

              brightness-[0.18]
            "
          />

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-r
              from-black
              via-black/85
              to-black/60
            "
          />
        </motion.div>

        {/* CONTENT */}
        <div
          className="
            relative
            z-20

            grid
            items-center
            gap-6

            px-0
            py-8

            md:grid-cols-[80px_1fr_60px]
          "
        >
          {/* NUMBER */}
          <motion.div
            animate={{
              opacity: isActive ? 1 : 0.18,
            }}
            transition={{
              duration: 0.4,
            }}
            className={`
              text-3xl
              md:text-4xl

              leading-none

              tracking-[-0.08em]

              font-display

              transition-all
              duration-500

              ${
                isActive
                  ? "text-[#fe0000]"
                  : "text-white/20"
              }
            `}
          >
            {item.number}
          </motion.div>

          {/* CENTER */}
          <div>
            {/* TOP ROW */}
            <div
              className="
                flex
                items-center
                gap-4
              "
            >
              <div
                className={`
                  h-px
                  w-10

                  transition-all
                  duration-500

                  ${
                    isActive
                      ? "bg-[#fe0000]"
                      : "bg-white/20"
                  }
                `}
              />

              <div
                className="
                  text-[10px]
                  uppercase

                  tracking-[0.35em]

                  text-white/35
                "
              >
                Capability
              </div>
            </div>

            {/* TITLE */}
            <motion.h3
              animate={{
                x: isActive ? 10 : 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className={`
                mt-4

                text-2xl
                sm:text-3xl
                md:text-4xl
                xl:text-5xl

                leading-[0.92]

                tracking-[-0.07em]

                font-display
                uppercase

                transition-all
                duration-500

                ${
                  isActive
                    ? "text-white"
                    : "text-white/35"
                }
              `}
            >
              {item.title}
            </motion.h3>

            {/* DESCRIPTION */}
            <motion.p
              animate={{
                opacity: isActive ? 1 : 0.5,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                mt-4

                max-w-2xl

                md:text-lg
                text-sm


                leading-[1.9]

                text-white/60
              "
            >
              {item.description}
            </motion.p>
          </div>

          {/* ARROW */}
          <div
            className="
              hidden
              md:flex

              justify-end
            "
          >
            <motion.div
              animate={{
                x: isActive ? 8 : 0,
                rotate: isActive ? 0 : -20,
                opacity: isActive ? 1 : 0.2,
              }}
              transition={{
                duration: 0.5,
              }}
              className={`
                text-3xl

                transition-all
                duration-500

                ${
                  isActive
                    ? "text-[#fe0000]"
                    : "text-white/20"
                }
              `}
            >
              ↗
            </motion.div>
          </div>
        </div>

        {/* ACTIVE LINE */}
        <motion.div
          animate={{
            scaleX: isActive ? 1 : 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            absolute
            bottom-0
            left-0

            h-px
            w-full

            origin-left

            bg-gradient-to-r
            from-[#fe0000]
            via-white/20
            to-transparent
          "
        />

        {/* LIGHT PASS */}
        {isActive && (
          <motion.div
            animate={{
              x: ["-100%", "120%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              inset-0

              bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.05),transparent)]

              blur-2xl
            "
          />
        )}
      </motion.div>
    );
  })}
</div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";

import {
  manifestoContent,
  manifestoHeading,
} from "@/app/data/home/manifesto";

import CinematicBackground from "@/app/components/cinematic/CinematicBackground";
import CinematicSectionHeading from "@/app/components/ui/CinematicSectionHeading";

export default function ManifestoSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#18090B]
        py-24 md:py-32
        border-t border-white/20
        px-5
        
      "
    >
      {/* BACKGROUND */}
      <CinematicBackground />

      {/* SOFT RED GLOW */}
      <div
        className="
          absolute
          left-1/2
          top-0

          h-[26rem]
          w-[26rem]

          -translate-x-1/2

          rounded-full

          bg-[#fe0000]/10

          blur-[130px]
        "
      />

      {/* GRID */}
      <div
        className="
          absolute
          inset-0

          bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),
                       linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]

          bg-[size:70px_70px]

          opacity-20
        "
      />

      <div
        className="
          relative
          z-10

          w-[92%]
          xl:w-[82%]

          mx-auto
        "
      >
        {/* TOP */}
        <CinematicSectionHeading
  {...manifestoHeading}
/>

        {/* MANIFESTO ROWS */}
        <div
          className="
            mt-20
            md:mt-24

            divide-y
            divide-white/6
          "
        >
          {manifestoContent.map((item, index) => (
            <motion.div
              key={item.id}
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.06,
              }}
              className="
                group

                grid
                gap-8

                py-10
                md:py-12

                md:grid-cols-[80px_1fr_120px]
                md:items-center
              "
            >
              {/* LEFT NUMBER */}
              <div
                className="
                  flex
                  items-center
                  gap-4
                "
              >
                <div
                  className="
                    h-px
                    w-8

                    bg-[#fe0000]

                    transition-all
                    duration-300

                    group-hover:w-14
                  "
                />

                <span
                  className="
                    font-display

                    text-2xl

                    tracking-[-0.08em]

                    text-[#fe0000]
                  "
                >
                  {item.id}
                </span>
              </div>

              {/* TEXT */}
              <h3
                className="
                  max-w-4xl

                  text-[1.35rem]
                  md:text-[1.8rem]

                  font-light

                  leading-[1.15]
                  tracking-[-0.03em]

                  text-white/90

                  transition-all
                  duration-300

                  group-hover:text-white
                "
              >
                {item.text}
              </h3>

              {/* RIGHT */}
              <div
                className="
                  hidden
                  md:flex

                  justify-end
                "
              >
                <div
                  className="
                    h-10
                    w-10

                    rounded-full

                    border
                    border-white/10

                    bg-white/[0.03]

                    transition-all
                    duration-300

                    group-hover:border-[#fe0000]/40
                    group-hover:bg-[#fe0000]/10
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* FINAL */}
        <motion.div
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
            duration: 0.8,
          }}
          className="
            mt-24
            md:mt-28

            border-t
            border-white/10

            pt-12
            md:pt-16
          "
        >
          <div
            className="
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

                  tracking-[0.6em]

                  text-white/35
                "
              >
                Communication Philosophy
              </div>

              <h3
                className="
                  font-display
                  uppercase

                  text-[2rem]
                  sm:text-[2.5rem]
                  md:text-[3rem]

                  leading-[0.95]
                  tracking-[-0.06em]

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

                text-[2.8rem]
                sm:text-[3.5rem]
                md:text-[4.5rem]

                leading-none
                tracking-[-0.08em]

                text-transparent

                bg-gradient-to-b
                from-[#fe0000]
                via-[#ff7a7a]
                to-white

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
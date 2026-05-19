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

        bg-[var(--bg)]

        py-24
        md:py-32

        border-t
        border-[var(--border)]

        px-5
      "
    >
      {/* BACKGROUND */}
      <CinematicBackground />

      {/* DEPTH OVERLAY */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-b
          from-transparent
          via-[var(--ambient-1)]/5
          to-black/[0.05]

          dark:to-black/30
        "
      />

      {/* CHERRY GLOW */}
      <div
        className="
          absolute
          left-1/2
          top-0

          h-[26rem]
          w-[26rem]

          -translate-x-1/2

          rounded-full

          bg-[var(--accent)]/10

          blur-[130px]
        "
      />

      {/* GRID */}
      <div
        className="
          absolute
          inset-0

          bg-[linear-gradient(
            to_right,
            rgba(255,255,255,0.025)_1px,
            transparent_1px
          ),
          linear-gradient(
            to_bottom,
            rgba(255,255,255,0.025)_1px,
            transparent_1px
          )]

          bg-[size:70px_70px]

          opacity-20
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10

          mx-auto

          w-[92%]
          xl:w-[82%]
        "
      >
        {/* HEADING */}
        <CinematicSectionHeading
          {...manifestoHeading}
        />

        {/* MANIFESTO LIST */}
        <div
          className="
            mt-20
            md:mt-24

            divide-y
            divide-[var(--border)]
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
                relative

                grid
                gap-8

                overflow-hidden

                py-10
                md:py-12

                md:grid-cols-[80px_1fr_120px]
                md:items-center
              "
            >
              {/* HOVER AMBIENT */}
              <div
                className="
                  pointer-events-none

                  absolute
                  inset-0

                  opacity-0

                  transition-opacity
                  duration-500

                  group-hover:opacity-100

                  bg-[radial-gradient(circle_at_left,var(--ambient-1),transparent_60%)]
                "
              />

              {/* LEFT */}
              <div
                className="
                  relative
                  z-10

                  flex
                  items-center
                  gap-4
                "
              >
                {/* LINE */}
                <div
                  className="
                    h-px
                    w-8

                    bg-[var(--accent)]

                    transition-all
                    duration-300

                    group-hover:w-14
                  "
                />

                {/* NUMBER */}
                <span
                  className="
                    font-display

                    text-2xl

                    tracking-[-0.08em]

                    text-[var(--accent)]
                  "
                >
                  {item.id}
                </span>
              </div>

              {/* TEXT */}
              <h3
                className="
                  relative
                  z-10

                  max-w-4xl

                  text-[1.35rem]
                  md:text-[1.8rem]

                  font-light

                  leading-[1.15]
                  tracking-[-0.03em]

                  text-[var(--text)]/88

                  transition-all
                  duration-300

                  group-hover:text-[var(--accent)]
                "
              >
                {item.text}
              </h3>

              {/* RIGHT */}
              <div
                className="
                  relative
                  z-10

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
                    border-[var(--border)]

                    glass-card

                    transition-all
                    duration-300

                    group-hover:border-[var(--accent)]
                    group-hover:bg-[var(--accent)]/10
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* FINAL STATEMENT */}
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
            border-[var(--border)]

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
            {/* LEFT */}
            <div>
              <div
                className="
                  mb-4

                  text-[10px]

                  uppercase
                  tracking-[0.6em]

                  text-[var(--muted)]
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

                  text-[var(--text)]
                "
              >
                Not Just Seen.
              </h3>
            </div>

            {/* RIGHT */}
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
                bg-clip-text

                bg-gradient-to-b
                from-[var(--accent-light)]
                via-[var(--accent)]
                to-[#ffd5dc]

                drop-shadow-[0_0_40px_rgba(255,46,87,0.18)]
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
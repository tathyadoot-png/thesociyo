"use client";

import Image from "next/image";

import { motion, type Variants } from "framer-motion";

import CinematicBackground from "@/app/components/cinematic/CinematicBackground";

import { politicalCommunicationData } from "@/app/data/work/politicalCommunicationData";

const data = politicalCommunicationData;

const fadeUp: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function PoliticalCommunication() {
  return (
    <main className="relative overflow-hidden bg-[var(--bg)]  pt-20 md:pt-40 text-[var(--text)]">
      <CinematicBackground />

{/* HERO */}
<section
  className="
    relative

    overflow-hidden

    border-b
    border-[var(--border)]

    bg-[var(--bg)]
  "
>
  {/* SOFT BACKLIGHT */}
  <div
    className="
      absolute
      inset-0

      bg-[radial-gradient(circle_at_top_left,rgba(254,0,0,0.04),transparent_35%)]

      pointer-events-none
    "
  />

  <div
    className="
      relative
      z-10

      grid
      min-h-screen

      xl:grid-cols-[1.05fr_0.95fr]
    "
  >
    {/* LEFT CONTENT */}
    <div
      className="
        relative

        flex
        flex-col
        justify-between

        px-6
        py-10

        md:px-10
        lg:px-20
      "
    >
      {/* TOP */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-px w-16 bg-[var(--accent)]" />

          <span
            className="
              text-[10px]
              uppercase

              tracking-[0.45em]

              text-[var(--muted)]
            "
          >
            Ecosystem {data.id}
          </span>
        </div>

        <span
          className="
            hidden
            md:block

            text-[10px]
            uppercase

            tracking-[0.45em]

            text-[var(--muted)]
          "
        >
          Political Strategy Division
        </span>
      </div>

      {/* CENTER */}
      <div className="relative py-16">
        {/* BIG NUMBER */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            absolute
            -top-12
            left-0

            font-display

            text-[6rem]
            md:text-[14rem]

            leading-none
            tracking-[-0.12em]

            text-black/[0.03]
          "
        >
          02
        </motion.div>

        {/* TITLE */}
        <motion.h1
          variants={fadeUp}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            relative
            z-10

            max-w-5xl

            font-display
            uppercase

            text-[4rem]
            sm:text-[5rem]
            lg:text-[8rem]
            xl:text-[9rem]

            leading-[0.82]
            tracking-[-0.12em]
          "
        >
          {data.short}
        </motion.h1>

        {/* DESCRIPTION */}
        <div className="mt-16 max-w-2xl">
          <p
            className="
              text-base
              md:text-xl

              leading-[2]

              text-[var(--muted)]
            "
          >
            {data.cover.description}
          </p>

          <p
            className="
              mt-8

              font-display
              uppercase

              text-2xl
              md:text-4xl

              leading-[1]

              tracking-[-0.06em]

              text-[var(--accent)]
            "
          >
            {data.cover.tagline}
          </p>

          {/* BUTTONS */}
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="/ecosystem/political_eng.pdf"
              download
              className="
                rounded-full

                border
                border-[var(--border)]

                bg-white

                px-7
                py-4

                text-[10px]
                uppercase

                tracking-[0.32em]

                text-[var(--text)]

                transition-all
                duration-500

                hover:border-[var(--accent)]/30
                hover:shadow-[0_10px_30px_rgba(254,0,0,0.08)]
              "
            >
              Download English PDF
            </a>

            <a
              href="/ecosystem/Political_Hindi.pdf"
              download
              className="
                rounded-full

                border
                border-[var(--border)]

                bg-[var(--surface)]

                px-7
                py-4

                text-[10px]
                uppercase

                tracking-[0.32em]

                text-[var(--muted)]

                transition-all
                duration-500

                hover:border-[var(--accent)]/20
                hover:bg-white
                hover:text-[var(--text)]
              "
            >
              हिंदी PDF डाउनलोड
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div
        className="
          flex
          items-end
          justify-between

          border-t
          border-[var(--border)]

          pt-6
        "
      >
        <span
          className="
            text-xs
            uppercase

            tracking-[0.4em]

            text-[var(--muted)]
          "
        >
          Elections • Influence • Leadership
        </span>

        <span
          className="
            font-display

            text-5xl

            tracking-[-0.08em]

            text-black/[0.08]
          "
        >
          2026
        </span>
      </div>
    </div>

    {/* RIGHT VISUAL */}
    <motion.div
      initial={{
        opacity: 0,
        scale: 1.06,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative

        hidden
        xl:flex

        items-center
        justify-center

        p-10
      "
    >
      {/* CARD */}
      <div
        className="
          relative

          h-[82vh]
          w-full

          overflow-hidden

          rounded-[2.5rem]

          border
          border-[var(--border)]

          bg-white

          shadow-[0_30px_80px_rgba(0,0,0,0.10)]
        "
      >
        {/* IMAGE */}
        <Image
          src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1800&auto=format&fit=crop"
          alt="Political Communication"
          fill
          priority
          className="
            object-cover

            brightness-[0.9]
            contrast-[1.05]

            saturate-[0.88]
          "
        />

        {/* OVERLAY */}
        <div
          className="
            absolute
            inset-0

            bg-[linear-gradient(to_top,rgba(0,0,0,0.42),transparent_35%)]

            pointer-events-none
          "
        />

        {/* FLOATING INFO */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0

            p-10
          "
        >
          <div
            className="
              rounded-[2rem]

              border
              border-white/10

              bg-black/45

              p-8

              backdrop-blur-xl
            "
          >
            <span
              className="
                text-[10px]
                uppercase

                tracking-[0.4em]

                text-white/50
              "
            >
              Political Ecosystem
            </span>

            <h3
              className="
                mt-4

                font-display
                uppercase

                text-4xl

                leading-[0.9]
                tracking-[-0.06em]

                text-white
              "
            >
              Narrative.
              <br />
              Influence.
              <br />
              Public Trust.
            </h3>

            <p
              className="
                mt-6

                max-w-md

                text-sm

                leading-[2]

                text-white/70
              "
            >
              Strategic communication systems built for elections,
              governance positioning, media outreach and long-term
              political influence.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* SERVICES */}
      <section className="relative px-6 py-28 md:px-10 lg:px-20">
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.45em] text-[var(--text)]/30">
            Our Services
          </span>

          <h2
            className="
              mt-8

              max-w-6xl

              font-display
              uppercase

              text-[3rem]
              md:text-[6rem]

              leading-[0.82]
              tracking-[-0.1em]
            "
          >
            Political
            <br />
            Operations &
            <br />
            Communication
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {data.services.map((item, index) => (
            <motion.div
              key={item.title}
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
                duration: 0.8,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
              }}
              className="
  group
  relative

  min-h-[24rem]

  overflow-hidden

  rounded-[2rem]

  border
  border-[var(--border)]

  bg-[var(--glass)]

  backdrop-blur-xl

  p-8

  transition-all
  duration-500

  hover:-translate-y-2
  hover:border-[var(--accent)]/20
  hover:bg-white
"
            >
              <div
                className="
                  absolute
                  inset-0

                  opacity-0

                  transition-opacity
                  duration-500

                  group-hover:opacity-100

                  bg-[radial-gradient(circle_at_top,rgba(125,184,255,0.18),transparent_65%)]
                "
              />

              <div className="relative z-10">
                <span className="font-display text-7xl tracking-[-0.12em] text-[var(--text)]/[0.05]">
                  {(index + 1).toString().padStart(2, "0")}
                </span>

                <h3
                  className="
                    mt-8

                    max-w-[10ch]

                    font-display
                    uppercase

                    text-3xl

                    leading-[0.9]
                    tracking-[-0.08em]
                  "
                >
                  {item.title}
                </h3>

                <p className="mt-6 text-sm leading-[2] text-[var(--muted)]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="relative border-t border-[var(--border)] px-6 py-28 md:px-10 lg:px-20">
        <div className="mb-24">
          <span className="text-[10px] uppercase tracking-[0.45em] text-[var(--text)]/30">
            How We Work
          </span>

          <h2
            className="
              mt-8

              max-w-6xl

              font-display
              uppercase

              text-[3rem]
              md:text-[6rem]

              leading-[0.82]
              tracking-[-0.1em]
            "
          >
            Strategy.
            <br />
            Analytics.
            <br />
            Influence.
          </h2>
        </div>

        <div className="space-y-6">
          {data.workflow.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{
                opacity: 0,
                y: 60,
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
                delay: index * 0.05,
              }}
              className="
  group

  grid
  gap-10

  rounded-[2rem]

  border
  border-[var(--border)]

  bg-[var(--glass)]

  backdrop-blur-xl

  p-8

  transition-all
  duration-500

  hover:border-[var(--accent)]/25
  hover:bg-white

  lg:grid-cols-[0.2fr_0.5fr_1fr]
"
            >
              <div className="font-display text-[5rem] leading-none tracking-[-0.1em] text-[var(--text)]/[0.08]">
                {item.step}
              </div>

              <h3
                className="
                  font-display
                  uppercase

                  text-3xl
                  md:text-5xl

                  leading-[0.9]
                  tracking-[-0.08em]
                "
              >
                {item.title}
              </h3>

              <p className="max-w-2xl text-sm leading-[2] text-[var(--muted)] md:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
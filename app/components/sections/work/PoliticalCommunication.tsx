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
    <main className="relative overflow-hidden bg-[#18090B] md:px-32 pt-32 md:pt-40 text-white">
      <CinematicBackground />

      {/* HERO */}
      <section className="relative min-h-screen border-b border-white/10">
        {/* IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 1.1,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="
            absolute
            right-0
            top-0

            hidden
            h-full
            w-[42%]

            overflow-hidden

            xl:block
          "
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-l from-transparent via-[#18090B]/40 to-[#18090B]" />

          <Image
            src="/About-Us.jpg"
            alt="Political Communication"
            fill
            priority
            className="object-cover opacity-60"
          />
        </motion.div>

        <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 py-10 md:px-10 lg:px-20">
          {/* TOP */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-px w-16 bg-[#7DB8FF]" />

              <span className="text-[10px] uppercase tracking-[0.45em] text-white/40">
                Ecosystem {data.id}
              </span>
            </div>

            <span className="hidden text-[10px] uppercase tracking-[0.45em] text-white/20 md:block">
              Political Strategy Division
            </span>
          </div>

          {/* CENTER */}
          <div className="relative py-20">
            <motion.div
              variants={fadeUp}
initial="initial"
whileInView="whileInView"
viewport={{ once: true, amount: 0.2 }}
              className="
                absolute
                -top-10
                left-0

                font-display

                text-[7rem]
                md:text-[16rem]

                leading-none
                tracking-[-0.14em]

                text-white/[0.03]
              "
            >
              02
            </motion.div>

            <motion.h1
              variants={fadeUp}
initial="initial"
whileInView="whileInView"
viewport={{ once: true, amount: 0.2 }}
              className="
                relative
                z-10

                max-w-7xl

                font-display
                uppercase

                text-[4rem]
                sm:text-[6rem]
                lg:text-[9rem]
                xl:text-[12rem]

                leading-[0.8]
                tracking-[-0.12em]
              "
            >
              {data.short}
            </motion.h1>

            <div className="mt-14 grid gap-10 lg:grid-cols-[0.7fr_1fr]">
              <div>
                <div className="mb-5 h-px w-24 bg-white/20" />

                <p className="max-w-sm text-xs uppercase tracking-[0.4em] leading-[2] text-white/30">
                  Electoral strategy, public positioning and political influence
                  systems built for modern leadership.
                </p>
              </div>

              <div>
                <p className="max-w-3xl text-base leading-[2] text-white/60 md:text-xl">
                  {data.cover.description}
                </p>

                <p
                  className="
                    mt-8

                    font-display
                    uppercase

                    text-2xl
                    md:text-4xl

                    tracking-[-0.06em]

                    text-[#7DB8FF]
                  "
                >
                  {data.cover.tagline}
                </p>

                <div className="mt-12 flex flex-wrap gap-4">
  {/* ENGLISH PDF */}
  <a
    href="/pdfs/corporate-en.pdf"
    download
    className="
      group
      relative

      overflow-hidden

      rounded-full

      border
      border-[#7DB8FF]/30

      bg-[#7DB8FF]/10

      px-7
      py-4

      text-[10px]
      uppercase

      tracking-[0.3em]

      text-white

      transition-all
      duration-500

      hover:border-[#7DB8FF]
      hover:bg-[#7DB8FF]/20
    "
  >
    <span className="relative z-10">
      Download English PDF
    </span>

    <div
      className="
        absolute
        inset-0

        translate-y-full

        bg-[#7DB8FF]/10

        transition-transform
        duration-500

        group-hover:translate-y-0
      "
    />
  </a>

  {/* HINDI PDF */}
  <a
    href="/pdfs/corporate-hi.pdf"
    download
    className="
      group
      relative

      overflow-hidden

      rounded-full

      border
      border-white/10

      bg-white/[0.05]

      px-7
      py-4

      text-[10px]
      uppercase

      tracking-[0.3em]

      text-white/80

      transition-all
      duration-500

      hover:border-white/20
      hover:bg-white/[0.08]
    "
  >
    <span className="relative z-10">
      हिंदी PDF डाउनलोड
    </span>

    <div
      className="
        absolute
        inset-0

        translate-y-full

        bg-white/[0.06]

        transition-transform
        duration-500

        group-hover:translate-y-0
      "
    />
  </a>
</div>
              </div>
              
            </div>
          </div>

          {/* BOTTOM */}
          <div className="flex items-end justify-between border-t border-white/10 pt-6">
            <span className="text-xs uppercase tracking-[0.4em] text-white/20">
              Elections • Influence • Leadership
            </span>

            <span className="font-display text-5xl tracking-[-0.08em] text-white/10">
              2026
            </span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative px-6 py-28 md:px-10 lg:px-20">
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.45em] text-white/30">
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
                border-white/10

                bg-white/[0.03]

                p-8
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
                <span className="font-display text-7xl tracking-[-0.12em] text-white/[0.05]">
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

                <p className="mt-6 text-sm leading-[2] text-white/55">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="relative border-t border-white/10 px-6 py-28 md:px-10 lg:px-20">
        <div className="mb-24">
          <span className="text-[10px] uppercase tracking-[0.45em] text-white/30">
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
                border-white/10

                bg-white/[0.02]

                p-8

                transition-all
                duration-500

                hover:border-[#7DB8FF]/40
                hover:bg-white/[0.04]

                lg:grid-cols-[0.2fr_0.5fr_1fr]
              "
            >
              <div className="font-display text-[5rem] leading-none tracking-[-0.1em] text-white/[0.08]">
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

              <p className="max-w-2xl text-sm leading-[2] text-white/55 md:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
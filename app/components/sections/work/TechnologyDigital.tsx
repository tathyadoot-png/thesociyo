"use client";

import { motion } from "framer-motion";

import CinematicBackground from "@/app/components/cinematic/CinematicBackground";

import { technologyDigitalData } from "@/app/data/work/technologySolutionData";

const data = technologyDigitalData;

export default function TechnologyDigital() {
  return (
    <main className="relative overflow-hidden md:px-32 pt-32 md:pt-40 bg-[#05080F] text-white">
      <CinematicBackground />

      {/* HERO */}
      <section className="relative min-h-screen border-b border-white/10">
        <div className="relative z-10 px-6 py-32 md:px-10 lg:px-20">
          <div className="max-w-7xl">
            {/* LABEL */}
            <div className="flex items-center gap-4">
              <div className="h-px w-16 bg-[#7DB8FF]" />

              <span className="text-[10px] uppercase tracking-[0.45em] text-white/40">
                Information & Technology
              </span>
            </div>

            {/* HUGE GRID HERO */}
            <div className="mt-20 grid gap-10 xl:grid-cols-[1.2fr_0.8fr]">
              {/* LEFT */}
              <div>
                <motion.h1
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
                    duration: 1,
                  }}
                  className="
                    max-w-5xl

                    font-display
                    uppercase

                    text-[4rem]
                    sm:text-[6rem]
                    lg:text-[8rem]

                    leading-[0.82]
                    tracking-[-0.12em]
                  "
                >
                  Build
                  <br />
                  Digital
                  <br />
                  Systems
                  <br />
                  That Scale.
                </motion.h1>

                <p
                  className="
                    mt-10

                    max-w-2xl

                    text-lg

                    leading-[2]

                    text-white/60
                  "
                >
                  {data.cover.description}
                </p>

                {/* STACK */}
                <div className="mt-14 flex flex-wrap gap-3">
                  {[
                    "Web",
                    "UI/UX",
                    "Cloud",
                    "DevOps",
                    "Platforms",
                    "Infrastructure",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        rounded-full

                        border
                        border-[#7DB8FF]/20

                        bg-[#7DB8FF]/10

                        px-5
                        py-3

                        text-sm

                        text-[#C7DFFF]
                      "
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT */}
              <div className="grid gap-4 sm:grid-cols-2">
                {data.environment.points.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="
                      group
                      relative

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

                        bg-[radial-gradient(circle_at_top,rgba(125,184,255,0.15),transparent_65%)]
                      "
                    />

                    <div className="relative z-10">
                      <span className="font-display text-5xl tracking-[-0.08em] text-white/[0.06]">
                        0{index + 1}
                      </span>

                      <h3 className="mt-10 text-2xl leading-[1.2] text-white/80">
                        {item}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FRAMEWORK */}
      <section className="relative border-b border-white/10 px-6 py-32 md:px-10 lg:px-20">
        <div className="mb-20 flex flex-col gap-10 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-[0.45em] text-white/30">
              The Digital Framework
            </span>

            <h2
              className="
                mt-8

                max-w-5xl

                font-display
                uppercase

                text-[3rem]
                md:text-[6rem]

                leading-[0.84]
                tracking-[-0.1em]
              "
            >
              Experience.
              <br />
              Performance.
              <br />
              Systems.
            </h2>
          </div>

          <p className="max-w-md text-base leading-[2] text-white/45">
            Technology works best when design, infrastructure and functionality
            operate together.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {data.framework.map((item, index) => (
            <motion.div
              key={item.title}
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
                delay: index * 0.08,
              }}
              className="
                relative

                min-h-[24rem]

                overflow-hidden

                rounded-[2rem]

                border
                border-white/10

                bg-white/[0.03]

                p-10
              "
            >
              <div className="font-display text-[7rem] tracking-[-0.12em] text-white/[0.04]">
                0{index + 1}
              </div>

              <h3
                className="
                  mt-12

                  font-display
                  uppercase

                  text-4xl

                  tracking-[-0.08em]
                "
              >
                {item.title}
              </h3>

              <p className="mt-6 text-base leading-[2] text-white/55">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative px-6 py-32 md:px-10 lg:px-20">
        <div className="mb-24">
          <span className="text-[10px] uppercase tracking-[0.45em] text-white/30">
            What We Build
          </span>

          <h2
            className="
              mt-8

              max-w-6xl

              font-display
              uppercase

              text-[3rem]
              md:text-[6rem]

              leading-[0.84]
              tracking-[-0.1em]
            "
          >
            Technology
            <br />
            Solutions
            <br />
            Designed
            <br />
            For Scale.
          </h2>
        </div>

        <div className="grid gap-[1px] overflow-hidden rounded-[2rem] bg-white/10 lg:grid-cols-2">
          {data.services.map((item, index) => (
            <motion.div
              key={item.title}
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
                delay: index * 0.05,
              }}
              className="
                relative

                bg-[#070B13]

                p-10
              "
            >
              <div className="absolute right-8 top-6 font-display text-6xl tracking-[-0.1em] text-white/[0.04]">
                {(index + 1).toString().padStart(2, "0")}
              </div>

              <h3
                className="
                  max-w-[12ch]

                  font-display
                  uppercase

                  text-3xl

                  leading-[0.9]
                  tracking-[-0.08em]
                "
              >
                {item.title}
              </h3>

              <p className="mt-8 max-w-xl text-base leading-[2] text-white/55">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ECOSYSTEMS */}
      <section className="relative border-t border-white/10 px-6 py-32 md:px-10 lg:px-20">
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.45em] text-white/30">
            Digital Ecosystems We've Built
          </span>

          <h2
            className="
              mt-8

              max-w-5xl

              font-display
              uppercase

              text-[3rem]
              md:text-[5rem]

              leading-[0.84]
              tracking-[-0.1em]
            "
          >
            Platforms
            <br />
            Across
            <br />
            Diverse Sectors.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {data.ecosystems.categories.map((category) => (
            <motion.div
              key={category.title}
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
              className="
                rounded-[2rem]

                border
                border-white/10

                bg-white/[0.03]

                p-8
              "
            >
              <h3
                className="
                  font-display
                  uppercase

                  text-3xl

                  tracking-[-0.08em]
                "
              >
                {category.title}
              </h3>

              <div className="mt-8 flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <div
                    key={item}
                    className="
                      rounded-full

                      border
                      border-white/10

                      bg-white/[0.04]

                      px-4
                      py-2

                      text-sm
                      text-white/60
                    "
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
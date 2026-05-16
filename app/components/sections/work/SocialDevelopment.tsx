"use client";

import { motion } from "framer-motion";

import CinematicBackground from "@/app/components/cinematic/CinematicBackground";

import { socialDevelopmentData } from "@/app/data/work/socialCommunicationData";

const data = socialDevelopmentData;

export default function SocialDevelopment() {
  return (
    <main className="relative overflow-hidden bg-[#05080F] md:px-32 pt-32 md:pt-40 text-white">
      <CinematicBackground />

      {/* HERO */}
      <section className="relative min-h-screen border-b border-white/10">
        <div className="relative z-10 px-6 py-32 md:px-10 lg:px-20">
          <div className="max-w-7xl">
            {/* TOP */}
            <div className="flex items-center gap-4">
              <div className="h-px w-16 bg-[#7DB8FF]" />

              <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">
                Social Impact & Development
              </span>
            </div>

            {/* CONTENT */}
            <div className="mt-20 grid gap-20 lg:grid-cols-[1.2fr_0.8fr]">
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

                    text-[4rem]
                    md:text-[7rem]

                    leading-[0.9]
                    tracking-[-0.08em]
                  "
                >
                  Building
                  <br />
                  Systems
                  <br />
                  That Create
                  <span className="text-[#7DB8FF]"> Impact.</span>
                </motion.h1>

                <p
                  className="
                    mt-12

                    max-w-2xl

                    text-lg

                    leading-[2]

                    text-white/60
                  "
                >
                  {data.cover.description}
                </p>

                <div className="mt-14 flex flex-wrap gap-4">
                  {[
                    "Communication",
                    "Outreach",
                    "Ground Execution",
                    "Development Support",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        rounded-full

                        border
                        border-white/10

                        bg-white/[0.04]

                        px-5
                        py-3

                        text-sm
                        text-white/60
                      "
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col justify-end">
                <div
                  className="
                    relative

                    overflow-hidden

                    rounded-[2.5rem]

                    border
                    border-white/10

                    bg-white/[0.03]

                    p-10
                  "
                >
                  <div className="font-display text-[7rem] leading-none tracking-[-0.12em] text-white/[0.04]">
                    IMPACT
                  </div>

                  <div className="mt-16 space-y-10">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-white/30">
                        Philosophy
                      </p>

                      <p className="mt-3 text-xl leading-[1.8] text-white/70">
                        Awareness creates participation.
                        Participation creates engagement.
                        Engagement creates impact.
                      </p>
                    </div>

                    <div className="h-px w-full bg-white/10" />

                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <div className="font-display text-5xl tracking-[-0.08em] text-[#7DB8FF]">
                          2018
                        </div>

                        <p className="mt-2 text-sm text-white/40">
                          Founded
                        </p>
                      </div>

                      <div>
                        <div className="font-display text-5xl tracking-[-0.08em] text-[#7DB8FF]">
                          360°
                        </div>

                        <p className="mt-2 text-sm text-white/40">
                          Support Ecosystem
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REALITY SECTION */}
      <section className="relative px-6 py-32 md:px-10 lg:px-20">
        <div className="grid gap-20 lg:grid-cols-[0.7fr_1fr]">
          {/* LEFT */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">
              The Social Reality
            </span>

            <h2
              className="
                mt-8

                font-display

                text-[3rem]
                md:text-[5rem]

                leading-[0.9]
                tracking-[-0.08em]
              "
            >
              Good Intentions
              <br />
              Need Better
              <br />
              Systems.
            </h2>
          </div>

          {/* RIGHT */}
          <div className="space-y-5">
            {data.reality.points.map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.8,
                }}
                className="
                  flex
                  items-center
                  justify-between

                  rounded-[1.5rem]

                  border
                  border-white/10

                  bg-white/[0.03]

                  px-8
                  py-7
                "
              >
                <span className="text-lg text-white/70">
                  {item}
                </span>

                <span className="font-display text-4xl text-white/[0.08]">
                  0{index + 1}
                </span>
              </motion.div>
            ))}

            <p className="pt-8 text-lg leading-[2] text-white/50">
              {data.reality.description}
            </p>
          </div>
        </div>
      </section>

      {/* FRAMEWORK */}
      <section className="relative border-t border-white/10 px-6 py-32 md:px-10 lg:px-20">
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">
            The Impact Framework
          </span>

          <h2
            className="
              mt-8

              max-w-5xl

              font-display

              text-[3rem]
              md:text-[5rem]

              leading-[0.9]
              tracking-[-0.08em]
            "
          >
            A Process Designed
            <br />
            Around Human
            <br />
            Engagement.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
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

                overflow-hidden

                rounded-[2rem]

                border
                border-white/10

                bg-white/[0.03]

                p-10
              "
            >
              <div className="font-display text-[6rem] tracking-[-0.1em] text-white/[0.04]">
                0{index + 1}
              </div>

              <h3
                className="
                  mt-10

                  font-display

                  text-4xl

                  tracking-[-0.06em]
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
    </main>
  );
}
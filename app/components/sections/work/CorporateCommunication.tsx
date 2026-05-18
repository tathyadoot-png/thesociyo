"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

import CinematicBackground from "@/app/components/cinematic/CinematicBackground";

import { corporateCommunicationData } from "@/app/data/work/corporateCommunicationData";

const data = corporateCommunicationData;

const fadeUp: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CorporateCommunication() {
  return (
    <main className="relative overflow-hidden bg-[#05080F] md:px-32 pt-32 md:pt-40 text-white">
      {/* CINEMATIC BG */}
      <CinematicBackground />

      {/* HERO */}
      <section className="relative min-h-screen border-b border-white/10">
        {/* FLOATING IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 1.2,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.6,
          }}
          className="
            absolute
            right-0
            top-0
            z-0

            hidden
            h-full
            w-[42%]

            overflow-hidden

            xl:block
          "
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-l from-transparent via-[#05080F]/40 to-[#05080F]" />

          <Image
            src="/images/work/corporate/hero.jpg"
            alt="Corporate Communication"
            fill
            priority
            className="
              object-cover
              opacity-60
              scale-[1.05]
            "
          />
        </motion.div>

        <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 py-8 md:px-10 lg:px-20">
          {/* TOP */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: 70,
                }}
                transition={{
                  duration: 1,
                }}
                className="h-px bg-[#7DB8FF]"
              />

              <span className="text-[10px] uppercase tracking-[0.45em] text-white/40">
                Ecosystem {data.id}
              </span>
            </div>

            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.4,
              }}
              className="
                hidden
                text-[10px]
                uppercase
                tracking-[0.45em]
                text-white/20

                md:block
              "
            >
              Corporate Communication Division
            </motion.span>
          </div>

          {/* CENTER */}
          <div className="relative py-20 md:py-24">
            {/* HUGE NUMBER */}
            <motion.div
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.3,
              }}
              className="
                absolute
                -top-10
                left-0

                font-display

                text-[7rem]
                sm:text-[10rem]
                xl:text-[18rem]

                leading-none
                tracking-[-0.14em]

                text-white/[0.03]
              "
            >
              01
            </motion.div>

            {/* TITLE */}
            <motion.h1
              {...fadeUp}
              className="
                relative
                z-10

                max-w-7xl

                font-display
                uppercase

                text-[4rem]
                sm:text-[6rem]
                md:text-[8rem]
                xl:text-[12rem]

                leading-[0.8]
                tracking-[-0.12em]
              "
            >
              {data.short}
            </motion.h1>

            {/* INFO */}
            <motion.div
              {...fadeUp}
              transition={{
                delay: 0.2,
                duration: 1,
              }}
              className="
                mt-14

                grid
                gap-10

                lg:grid-cols-[0.7fr_1fr]
              "
            >
              <div>
                <div className="mb-5 h-px w-24 bg-white/20" />

                <p
                  className="
                    max-w-sm

                    text-xs
                    uppercase

                    tracking-[0.4em]

                    leading-[2]

                    text-white/30
                  "
                >
                  Strategic narrative building for institutions, leaders,
                  governance ecosystems and modern organizations.
                </p>
              </div>

              <div>
                <p
                  className="
                    max-w-3xl

                    text-base
                    md:text-xl

                    leading-[2]

                    text-white/60
                  "
                >
                  {data.cover.description}
                </p>

                <motion.p
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
                    delay: 0.3,
                    duration: 1,
                  }}
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
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* BOTTOM */}
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
              delay: 0.6,
            }}
            className="
              flex
              flex-col
              gap-5

              border-t
              border-white/10

              pt-6

              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <span className="text-xs uppercase tracking-[0.4em] text-white/20">
              Narrative • Reputation • Influence
            </span>

            <span className="font-display text-5xl tracking-[-0.08em] text-white/10">
              2026
            </span>
          </motion.div>
        </div>
      </section>

      {/* PERSPECTIVE */}
      <section className="relative border-b border-white/10 px-6 py-28 md:px-10 lg:px-20">
        <div className="grid gap-20 xl:grid-cols-[0.6fr_1fr]">
          {/* LEFT VISUAL */}
          <motion.div
            {...fadeUp}
            className="sticky top-24 h-fit"
          >
            <div
              className="
                relative

                overflow-hidden

                rounded-[2.5rem]

                border
                border-white/10

                bg-white/[0.03]
              "
            >
              <div className="relative h-[24rem]">
                <Image
                  src="/images/work/corporate/perspective.jpg"
                  alt="Perspective"
                  fill
                  className="object-cover opacity-60"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#05080F] via-transparent to-transparent" />
              </div>

              <div className="p-8">
                <div className="font-display text-6xl tracking-[-0.1em] text-white/10">
                  THINK
                </div>

                <p className="mt-6 max-w-sm text-sm leading-[2] text-white/45">
                  Communication shapes perception, authority, trust and long-term
                  positioning.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <div>
            <motion.span
              {...fadeUp}
              className="
                text-[10px]
                uppercase

                tracking-[0.45em]

                text-white/30
              "
            >
              Our Perspective
            </motion.span>

            <motion.h2
              {...fadeUp}
              className="
                mt-8

                max-w-5xl

                font-display
                uppercase

                text-[3rem]
                md:text-[6rem]

                leading-[0.82]
                tracking-[-0.1em]
              "
            >
              {data.perspective.title}
            </motion.h2>

            <div className="mt-16 space-y-10">
              {data.perspective.description.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: 60,
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
                    duration: 0.9,
                  }}
                  className="
                    group

                    border-l
                    border-white/10

                    pl-8

                    transition-all
                    duration-500

                    hover:border-[#7DB8FF]
                  "
                >
                  <span
                    className="
                      font-display

                      text-5xl

                      tracking-[-0.08em]

                      text-[#7DB8FF]/40
                    "
                  >
                    0{index + 1}
                  </span>

                  <p
                    className="
                      mt-5

                      max-w-3xl

                      text-base
                      md:text-lg

                      leading-[2]

                      text-white/55
                    "
                  >
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="relative px-6 py-28 md:px-10 lg:px-20">
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.45em] text-white/30">
            Our Capabilities
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
            Communication
            <br />
            Architecture
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {data.capabilities.map((item, index) => (
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

                min-h-[30rem]

                overflow-hidden

                rounded-[2rem]

                border
                border-white/10

                bg-white/[0.03]
              "
            >
              {/* IMAGE */}
              <div className="relative h-[14rem] overflow-hidden">
                <Image
                  src={`/images/work/corporate/capability-${index + 1}.jpg`}
                  alt={item.title}
                  fill
                  className="
                    object-cover

                    opacity-70

                    transition-transform
                    duration-700

                    group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#05080F] to-transparent" />
              </div>

              <div className="relative p-8">
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

                    leading-[0.88]
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
    </main>
  );
}
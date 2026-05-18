"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import CinematicBackground from "@/app/components/cinematic/CinematicBackground";

import { socialDevelopmentData } from "@/app/data/work/socialCommunicationData";

const data = socialDevelopmentData;

export default function SocialDevelopment() {
  return (
    <main className="relative overflow-hidden bg-[#05080F] pt-32 text-white md:px-32 md:pt-40">
      <CinematicBackground />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden border-b border-white/10">
        {/* BG IMAGE */}
        <div className="absolute inset-0">
          <Image
            src="/About-Us.jpg"
            alt="Social Development"
            fill
            priority
            className="object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#05080F]/70 to-[#05080F]" />
        </div>

        <div className="relative z-10 px-6 py-24 md:px-10 lg:px-20">
          <div className="grid min-h-screen items-end gap-20 lg:grid-cols-[1fr_0.45fr]">
            {/* LEFT */}
            <div>
              <span className="text-[10px] uppercase tracking-[0.45em] text-[#7DB8FF]">
                Social Impact & Development
              </span>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                }}
                className="
                  mt-10

                  max-w-6xl

                  font-display

                  text-[4rem]
                  sm:text-[6rem]
                  md:text-[8rem]

                  leading-[0.82]
                  tracking-[-0.1em]
                "
              >
                Building
                <br />
                Systems
                <br />
                For
                <span className="text-[#7DB8FF]">
                  {" "}
                  Human Impact.
                </span>
              </motion.h1>

              <p
                className="
                  mt-10

                  max-w-2xl

                  text-lg
                  md:text-xl

                  leading-[2]

                  text-white/60
                "
              >
                {data.cover.description}
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

            {/* RIGHT */}
            <div className="space-y-6">
              {[
                "Awareness",
                "Participation",
                "Engagement",
                "Transformation",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    x: 60,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="
                    rounded-[2rem]

                    border
                    border-white/10

                    bg-white/[0.04]

                    p-7

                    backdrop-blur-xl
                  "
                >
                  <div className="font-display text-5xl tracking-[-0.08em] text-[#7DB8FF]/40">
                    0{index + 1}
                  </div>

                  <p className="mt-4 text-lg text-white/70">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REALITY */}
      <section className="relative border-b border-white/10 px-6 py-32 md:px-10 lg:px-20">
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

            <div className="relative mt-14 overflow-hidden rounded-[2rem]">
              <div className="relative h-[34rem]">
                <Image
                  src="/About-Us.jpg"
                  alt="Reality"
                  fill
                  className="object-cover opacity-70"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#05080F] via-transparent to-transparent" />
              </div>
            </div>
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

                  backdrop-blur-xl
                "
              >
                <span className="max-w-[80%] text-lg leading-[1.8] text-white/70">
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
      <section className="relative px-6 py-32 md:px-10 lg:px-20">
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
                group
                relative

                overflow-hidden

                rounded-[2rem]

                border
                border-white/10

                bg-white/[0.03]

                p-6
              "
            >
              {/* IMAGE */}
              <div className="relative mb-8 h-[14rem] overflow-hidden rounded-[1.5rem]">
                <Image
           src="/About-Us.jpg"
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

              <div className="font-display text-[5rem] tracking-[-0.1em] text-white/[0.04]">
                0{index + 1}
              </div>

              <h3
                className="
                  mt-6

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
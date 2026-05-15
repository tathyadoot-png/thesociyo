"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { insideSociyoData } from "@/app/data/home/insideSociyoData";
import CinematicSectionHeading from "@/app/components/ui/CinematicSectionHeading";

const {
    sectionLabel,
    heading,
    shortText,
    cards,
} = insideSociyoData;

export default function InsideSociyo() {
    return (
        <section
            className="
        relative
        overflow-hidden

        bg-black
px-1md:px-24
        py-28
        md:py-40
      "
        >
            {/* ATMOSPHERIC GLOW */}
            <div
                className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top_left,rgba(254,0,0,0.08),transparent_35%)]

          pointer-events-none
        "
            />

            {/* GRID */}
            <div
                className="
          absolute
          inset-0

          opacity-[0.025]

          [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px)]

          [background-size:100px_100px]
        "
            />

            <div
                className="
          relative
          z-10

          mx-auto
          w-[94%]
          max-w-[1750px]
        "
            >
                {/* TOP */}
<CinematicSectionHeading
  {...insideSociyoData}
/>

                {/* MAIN CINEMATIC LAYOUT */}
                <div
                    className="
            grid
            gap-8

            lg:grid-cols-12
          "
                >
                    {/* LEFT IMAGE BLOCK */}
                    <motion.div
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
              relative

              overflow-hidden

              lg:col-span-7

              min-h-[650px]
            "
                    >
                        {/* IMAGE */}
                        <div
                            className="
                absolute
                inset-0

                overflow-hidden
              "
                        >
                            <Image
                                src="/About-Us.jpg"
                                alt="Inside Sociyo"
                                fill
                                className="
                  object-cover

                  grayscale

                  transition-all
                  duration-[2500ms]

                  hover:scale-105
                  hover:grayscale-0
                "
                            />
                        </div>

                        {/* DARK OVERLAY */}
                        <div
                            className="
                absolute
                inset-0

                bg-gradient-to-t
                from-black
                via-black/40
                to-black/10
              "
                        />

                        {/* RED LIGHT */}
                        <div
                            className="
                absolute
                inset-0

                bg-[radial-gradient(circle_at_top_left,rgba(254,0,0,0.20),transparent_40%)]
              "
                        />

                        {/* FLOATING TEXT */}
                        <div
                            className="
                absolute
                bottom-10
                left-10

                max-w-[600px]
              "
                        >
                            <span
                                className="
                  text-[11px]
                  uppercase

                  tracking-[0.45em]

                  text-[#fe0000]
                "
                            >
                                Narrative Communication Ecosystem
                            </span>

                            <h3
                                className="
                  mt-5

                  font-display
                  uppercase

                  text-4xl
                  md:text-6xl

                  leading-[0.88]
                  tracking-[-0.07em]

                  text-white
                "
                            >
                                Communication
                                <br />
                                That Moves
                                <br />
                                People
                            </h3>
                        </div>
                    </motion.div>

                    {/* RIGHT CONTENT */}
                    <div
                        className="
              flex
              flex-col

              justify-between

              lg:col-span-5
            "
                    >
                        {cards.map((item, index) => (
                            <motion.div
                                key={item.title}
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
                                    duration: 1,
                                    delay: index * 0.15,
                                }}
                                className="
                  group

                  border-b
                  border-white/10

                  py-10
                "
                            >
                                {/* TOP */}
                                <div
                                    className="
                    mb-6

                    flex
                    items-center
                    justify-between
                  "
                                >
                                    <span
                                        className="
                      text-[11px]
                      uppercase

                      tracking-[0.35em]

                      text-[#fe0000]
                    "
                                    >
                                        0{index + 1}
                                    </span>

                                    <div
                                        className="
                      h-px
                      w-20

                      bg-gradient-to-l
                      from-[#fe0000]/40
                      to-transparent
                    "
                                    />
                                </div>

                                {/* TITLE */}
                                <h3
                                    className="
                    max-w-[500px]

                    font-display
                    uppercase

                    text-3xl
                    md:text-5xl

                    leading-[0.9]
                    tracking-[-0.06em]

                    text-white

                    transition-all
                    duration-500

                    group-hover:translate-x-2
                  "
                                >
                                    {item.title}
                                </h3>

                                {/* DESC */}
                                <p
                                    className="
                    mt-6

                    max-w-[540px]

                    text-sm
                    md:text-base

                    leading-[2]

                    text-white/50
                  "
                                >
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* NOISE */}
            <div
                className="
          pointer-events-none

          absolute
          inset-0

          opacity-[0.04]

          mix-blend-soft-light

          bg-[url('/noise.png')]
        "
            />
        </section>
    );
}
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { insideSociyoData } from "@/app/data/home/insideSociyoData";

import CinematicSectionHeading from "@/app/components/ui/CinematicSectionHeading";
import CinematicBackground from "@/app/components/cinematic/CinematicBackground";

const { cards } = insideSociyoData;

export default function InsideSociyo() {
  return (
    <section
      className="
        relative
        overflow-hidden

        bg-[var(--bg)]

        px-4
        md:px-24

        py-28
        md:py-40
      "
    >
      {/* CINEMATIC BACKGROUND */}
      <CinematicBackground />

      {/* DEPTH OVERLAY */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-b
          from-transparent
          via-[var(--ambient-1)]/10
          to-black/[0.05]

          dark:via-black/25
          dark:to-black/35
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10

          mx-auto
          w-[94%]
          max-w-[1750px]
        "
      >
        <CinematicSectionHeading {...insideSociyoData} />

        <div className="grid gap-8 lg:grid-cols-12">
          {/* IMAGE SIDE */}
{/* IMAGE SIDE */}
<motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2 }}
  className="
    relative
    overflow-hidden

    lg:col-span-7

    min-h-[300px]
    md:min-h-[420px]
    lg:min-h-[520px]

    rounded-[2rem]

    border
    border-[var(--border)]

    glass-card
  "
>
  {/* IMAGE */}
  <Image
    src="/wordcloud.png"
    alt="Inside Sociyo"
    fill
 className="
  object-contain
  p-4
  md:p-6

  rounded-[2rem]
"
  />

  {/* SOFT RED AMBIENT */}
  <div
    className="
      absolute
      inset-0

      bg-[radial-gradient(circle_at_top_right,var(--ambient-1),transparent_45%)]
    "
  />
</motion.div>

          {/* CONTENT CARDS */}
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
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: index * 0.15,
                }}
                className="
                  group

                  relative

                  border-b
                  border-[var(--border)]
px-5
                  py-10
                "
              >
                {/* TOP META */}
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

                      text-[var(--muted)]
                    "
                  >
                    0{index + 1}
                  </span>

                  <div
                    className="
                      h-px
                      w-20

                      bg-gradient-to-l
                      from-[var(--accent-light)]/30
                      to-transparent
                    "
                  />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    font-display
                    uppercase

                    text-3xl
                    md:text-5xl

                    leading-[0.9]
                    tracking-[-0.06em]

                    text-[var(--text)]

                    transition-all
                    duration-500

                    group-hover:translate-x-2
                    group-hover:text-[var(--accent)]
                  "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-6

                    max-w-[90%]

                    text-sm
                    md:text-base

                    leading-relaxed

                    text-[var(--muted)]
                  "
                >
                  {item.description}
                </p>

                {/* HOVER GLOW */}
                <div
                  className="
                    pointer-events-none

                    absolute
                    inset-0

                    opacity-0

                    transition-opacity
                    duration-500

                    group-hover:opacity-100

                    bg-[radial-gradient(circle_at_left,var(--ambient-1),transparent_55%)]
                  "
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
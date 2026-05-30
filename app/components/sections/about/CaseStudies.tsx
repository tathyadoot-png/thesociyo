// app/components/home/CaseStudies.tsx

"use client";

import {
  caseStudies,
  caseStudiesHeading,
} from "@/app/data/about/caseStories";
import CinematicSectionHeading from "../../ui/CinematicSectionHeading";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


export default function CaseStudies() {

  const [activeIndex, setActiveIndex] = useState(0);

const active = caseStudies[activeIndex];

  return (
    <section className="relative overflow-hidden py-28 md:py-36 bg-[var(--bg)]">
      {/* BG GLOW */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-20%] left-1/2 -translate-x-1/2"
          style={{
            width: "1200px",
            height: "1200px",
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(255,45,45,0.12) 0%, transparent 72%)",
            filter: "blur(140px)",
          }}
        />

        <div
          className="
            absolute inset-0
            opacity-[0.03]
            bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
            bg-[size:70px_70px]
          "
        />
      </div>

      <div className="relative z-10 w-[94%] lg:w-[88%] mx-auto">
        <CinematicSectionHeading {...caseStudiesHeading} />

   <div className="hidden md:flex mt-16 flex-wrap justify-center gap-3">
  {caseStudies.map((item, index) => (
    <button
      key={index}
      onClick={() => setActiveIndex(index)}
  className={`
  relative

  px-5 py-3

  text-xs
  md:text-sm

  font-medium
  uppercase

  tracking-[0.35em]

  transition-all
  duration-500

  ${
    activeIndex === index
      ? "text-[var(--accent)]"
      : "text-[var(--muted)] hover:text-[var(--text)]"
  }
`}
    >
     <>
  {item.year}

  {activeIndex === index && (
    <motion.div
      layoutId="yearIndicator"
      className="
        absolute
        -bottom-1
        left-0
        right-0
        h-px
        bg-[var(--accent)]
      "
    />
  )}
</>
    </button>
  ))}
</div>


<div className="hidden md:flex mt-12 flex-wrap justify-center gap-6">
  {caseStudies.map((item, index) => (
    <button
      key={index}
      onClick={() => setActiveIndex(index)}
  className={`
  group

  relative

  h-28
  w-28

  rounded-[32px]

  overflow-hidden

  border

  transition-all
  duration-500

  ${
    activeIndex === index
      ? `
        border-[var(--accent)]
        scale-110

        shadow-[0_0_40px_rgba(255,45,45,0.25)]
      `
      : `
        border-[var(--border)]
        hover:border-[var(--accent)]/40
      `
  }
`}
    >

      <div
  className="
    absolute
    inset-0

    bg-gradient-to-b
    from-white/[0.06]
    to-transparent
  "
/>
      <Image
        src={item.logo}
        alt={item.title}
        width={96}
        height={96}
        className="h-full w-full object-contain p-4"
      />
    </button>
  ))}
</div>
{/* MOBILE CASE STUDIES */}
<div className="md:hidden mt-10 space-y-5">
  {caseStudies.map((item) => (
    <div
      key={item.year}
      className="
        rounded-[28px]

        border border-[var(--border)]

        bg-[var(--glass)]

        backdrop-blur-xl

        overflow-hidden
      "
    >
      <div className="p-5">
        {/* TOP */}
        <div className="flex items-center gap-4">
          <div
            className="
              h-16
              w-16

              rounded-2xl

              border border-[var(--border)]

              flex
              items-center
              justify-center
            "
          >
            <Image
              src={item.logo}
              alt={item.title}
              width={48}
              height={48}
              className="object-contain"
            />
          </div>

          <div>
            <div
              className="
                text-xs

                uppercase

                tracking-[0.25em]

                text-[var(--accent)]
              "
            >
              {item.year}
            </div>

            <h3
              className="
                mt-1

                text-lg

                font-bold

                text-[var(--text)]
              "
            >
              {item.title}
            </h3>
          </div>
        </div>

        {/* DIVIDER */}
        <div
          className="
            my-5

            h-px

            bg-gradient-to-r
            from-transparent
            via-[var(--accent)]
            to-transparent
          "
        />

        {/* DESCRIPTION */}
        <p
          className="
            text-sm

            leading-7

            text-[var(--muted)]
          "
        >
          {item.description}
        </p>
      </div>
    </div>
  ))}
</div>

<div className="hidden md:block">
<AnimatePresence mode="wait">
  <motion.div
    key={activeIndex}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -40 }}
    transition={{ duration: 0.4 }}
    className="relative mt-16"
  >
    {/* WATERMARK */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <span
        className="
          font-display
          text-[8rem]
          md:text-[16rem]
          lg:text-[22rem]

          tracking-[-0.12em]

          text-[var(--text)]/[0.02]

          leading-none
        "
      >
        {active.year}
      </span>
    </div>

    {/* PANEL */}
    <div
      className="
        relative z-10

        max-w-6xl
        mx-auto

        rounded-[32px]

        border border-[var(--border)]

        bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),rgba(255,255,255,0.015))]

        backdrop-blur-xl

        overflow-hidden
      "
    >
      {/* GLOW */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,45,45,.08), transparent 65%)",
        }}
      />

      <div className="relative z-10 p-8 md:p-8">
        {/* LOGO */}
       

        {/* YEAR */}
        <div
          className="
            mt-4

            text-center

            font-display

            text-6xl
          

            tracking-[-0.08em]

            bg-gradient-to-b
            from-[var(--accent)]
            to-[var(--text)]

            bg-clip-text
            text-transparent
          "
        >
          {active.year}
        </div>

        {/* TITLE */}
        <h3
          className="
            mt-6

            text-center

            font-display
            uppercase

           text-5xl
           

            leading-[0.9]
            tracking-[-0.07em]

            text-[var(--text)]
          "
        >
          {active.title}
        </h3>

        {/* DIVIDER */}
        <div
          className="
            mx-auto
            mt-10

            h-px
            w-40

            bg-gradient-to-r
            from-transparent
            via-[var(--accent)]
            to-transparent
          "
        />

        {/* DESCRIPTION */}
        <p
          className="
            mt-10

            max-w-4xl
            mx-auto

            text-center

            text-base
            md:text-lg

            leading-[2]

            whitespace-pre-line

            text-[var(--muted)]
          "
        >
          {active.description}
        </p>
      </div>
    </div>
  </motion.div>
</AnimatePresence>
</div>
      </div>
    </section>
  );
}
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
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};
export default function CorporateCommunication() {
  return (
    <main className="relative overflow-hidden bg-[var(--bg)]   pt-20 md:pt-40 text-[var(--text)]">
      {/* CINEMATIC BG */}
      <CinematicBackground />

<section
  className="
    relative

    overflow-hidden

    border-b
    border-[var(--border)]

    bg-[var(--bg)]
  "
>
  {/* MAIN GRID */}
  <div
    className="
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
        py-8

        md:px-12
        lg:px-16
        xl:px-20
      "
    >
      {/* TOP BAR */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-px w-14 bg-[var(--accent)]" />

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
            lg:block

            text-[10px]
            uppercase

            tracking-[0.4em]

            text-[var(--muted)]
          "
        >
          Corporate Communication Systems
        </span>
      </div>

      {/* HERO */}
      <div
        className="
          relative

          flex
          flex-col
          justify-center

          py-16
          md:py-20
        "
      >
        {/* BG NUMBER */}
        <div
          className="
            pointer-events-none

            absolute
            -top-4
            left-0

            font-display

            text-[5rem]
            md:text-[9rem]
            xl:text-[12rem]

            leading-none
            tracking-[-0.12em]

            text-black/[0.03]
          "
        >
          01
        </div>

        {/* TITLE */}
        <motion.h1
          variants={fadeUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="
            relative
            z-10

            max-w-[8ch]

            font-display
            uppercase

            text-[3rem]
            sm:text-[4.5rem]
            md:text-[6rem]
            xl:text-[7rem]

            leading-[0.88]

            tracking-[-0.09em]

            text-[var(--text)]
          "
        >
          {data.short}
        </motion.h1>

        {/* DESCRIPTION */}
        <div className="mt-12 space-y-8">
          <p
            className="
              max-w-[42ch]

              text-base
              md:text-xl

              leading-[1.9]

              text-[var(--muted)]
            "
          >
            {data.cover.description}
          </p>

          {/* TAGLINE */}
          <p
            className="
              max-w-[18ch]

              font-display
              uppercase

              text-[1.8rem]
              md:text-[3rem]

              leading-[0.95]

              tracking-[-0.05em]

              text-[var(--accent)]
            "
          >
            {data.cover.tagline}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="/ecosystem/corporate_eng.pdf"
              download
              className="
                rounded-full

                bg-[var(--accent)]

                px-7
                py-4

                text-[10px]
                uppercase

                tracking-[0.32em]

                text-white

                transition-all
                duration-500

                hover:scale-[1.03]
              "
            >
              Download English PDF
            </a>

            <button
              className="
                rounded-full

                border
                border-[var(--border)]

                bg-white/70

                px-7
                py-4

                text-[10px]
                uppercase

                tracking-[0.32em]

                text-[var(--text)]

                backdrop-blur-xl

                transition-all
                duration-500

                hover:border-[var(--accent)]/20
              "
            >
              Explore Case Studies
            </button>
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
            text-[10px]
            uppercase

            tracking-[0.4em]

            text-[var(--muted)]
          "
        >
          Narrative • Reputation • Influence
        </span>

        <span
          className="
            font-display

            text-4xl
            md:text-5xl

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
        x: 60,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1.1,
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
      {/* IMAGE WRAPPER */}
      <div
        className="
          relative

          h-full
          w-full

          overflow-hidden

          rounded-[2.5rem]

          border
          border-[var(--border)]

          shadow-[0_30px_80px_rgba(0,0,0,0.12)]
        "
      >
        {/* IMAGE */}
        <Image
          src="/ecosystem/1.avif"
          alt="Corporate Communication"
          fill
          priority
          className="
            object-cover

            brightness-[0.85]
            contrast-[1.04]

            scale-[1.03]
          "
        />

        {/* OVERLAY */}
        <div
          className="
            absolute
            inset-0

            bg-[linear-gradient(to_top,rgba(0,0,0,0.35),transparent_40%)]
          "
        />

        {/* TOP LABEL */}
        <div
          className="
            absolute
            left-8
            top-8

            rounded-full

            border
            border-white/10

            bg-black/20

            px-5
            py-3

            backdrop-blur-xl
          "
        >
          <span
            className="
              text-[10px]
              uppercase

              tracking-[0.4em]

              text-white/70
            "
          >
            Corporate Division
          </span>
        </div>

        {/* FLOAT CARD */}
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
            delay: 0.4,
            duration: 1,
          }}
          className="
            absolute
            bottom-8
            left-8

            max-w-[380px]

            rounded-[2rem]

            border
            border-white/10

            bg-black/35

            p-8

            backdrop-blur-2xl
          "
        >
          <span
            className="
              text-[10px]
              uppercase

              tracking-[0.38em]

              text-white/45
            "
          >
            Communication Architecture
          </span>

          <h3
            className="
              mt-5

              max-w-[8ch]

              font-display
              uppercase

              text-[3.2rem]

              leading-[0.9]
              tracking-[-0.08em]

              text-white
            "
          >
            Building Institutional Trust
          </h3>

          <p
            className="
              mt-6

              max-w-[34ch]

              text-sm

              leading-[1.9]

              text-white/70
            "
          >
            Strategic communication systems for governance,
            leadership positioning and institutional influence.
          </p>
        </motion.div>
      </div>
    </motion.div>
  </div>
</section>
      {/* PERSPECTIVE */}
 <section
  className="
    relative

    overflow-hidden

    border-b
    border-[var(--border)]

    bg-[var(--surface)]

    px-6
    py-28

    md:px-10
    lg:px-20
  "
>
  {/* AMBIENT */}
  <div
    className="
      absolute
      right-0
      top-0

      h-[32rem]
      w-[32rem]

      rounded-full

      bg-[radial-gradient(circle,rgba(254,0,0,0.05),transparent_70%)]

      blur-3xl
    "
  />

  {/* HEADER */}
  <div className="relative z-10 mb-24 max-w-6xl">
    <motion.span
      variants={fadeUp}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="
        inline-flex
        items-center
        gap-4

        text-[10px]
        uppercase

        tracking-[0.45em]

        text-[var(--muted)]
      "
    >
      <div className="h-px w-12 bg-[var(--accent)]" />
      Our Perspective
    </motion.span>

    <motion.h2
      variants={fadeUp}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="
        mt-8

        font-display
        uppercase

        text-[3rem]
        md:text-[6rem]

        leading-[0.82]
        tracking-[-0.1em]

        text-[var(--text)]
      "
    >
      {data.perspective.title}
    </motion.h2>
  </div>

  {/* CONTENT */}
  <div
    className="
      relative
      z-10

      grid
      gap-8

      xl:grid-cols-3
    "
  >
    {data.perspective.description.map((item, index) => (
      <motion.div
        key={index}
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
          duration: 0.9,
          delay: index * 0.08,
        }}
        whileHover={{
          y: -8,
        }}
        className="
          group
          relative

          overflow-hidden

          rounded-[2.5rem]

          border
          border-[var(--border)]

          bg-white

          p-10

          transition-all
          duration-500

          hover:border-[var(--accent)]/20
          hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]
        "
      >
        {/* NUMBER */}
        <div
          className="
            absolute
            right-6
            top-4

            font-display

            text-[6rem]

            leading-none
            tracking-[-0.1em]

            text-black/[0.03]
          "
        >
          0{index + 1}
        </div>

        {/* TOP */}
        <div className="relative z-10">
          <div
            className="
              flex
              h-16
              w-16

              items-center
              justify-center

              rounded-2xl

              border
              border-[var(--border)]

              bg-[var(--surface)]

              text-sm
              font-medium

              tracking-[0.3em]

              text-[var(--accent)]

              transition-all
              duration-500

              group-hover:bg-[var(--accent)]
              group-hover:text-white
            "
          >
            0{index + 1}
          </div>

          <p
            className="
              mt-10

              text-base
              md:text-lg

              leading-[2]

              text-[var(--muted)]

              transition-colors
              duration-500

              group-hover:text-[var(--text)]
            "
          >
            {item}
          </p>
        </div>

        {/* HOVER GLOW */}
        <div
          className="
            absolute
            inset-0

            opacity-0

            transition-opacity
            duration-500

            group-hover:opacity-100

            bg-[radial-gradient(circle_at_top_right,rgba(254,0,0,0.06),transparent_45%)]
          "
        />
      </motion.div>
    ))}
  </div>
</section>

  {/* CAPABILITIES */}
<section
  className="
    relative

    overflow-hidden

    border-t
    border-[var(--border)]

    bg-[var(--surface)]

    px-6
    py-28

    md:px-10
    lg:px-20
  "
>
  {/* AMBIENT */}
  <div
    className="
      absolute
      left-0
      top-20

      h-[28rem]
      w-[28rem]

      rounded-full

      bg-[radial-gradient(circle,rgba(254,0,0,0.05),transparent_72%)]

      blur-3xl
    "
  />

  {/* HEADER */}
  <div className="relative z-10 mb-24 flex flex-col gap-10 xl:flex-row xl:items-end xl:justify-between">
    <div>
      <span
        className="
          inline-flex
          items-center
          gap-4

          text-[10px]
          uppercase

          tracking-[0.45em]

          text-[var(--muted)]
        "
      >
        <div className="h-px w-12 bg-[var(--accent)]" />
        Our Capabilities
      </span>

      <h2
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
        Communication
        <br />
        Architecture
      </h2>
    </div>

    <p
      className="
        max-w-xl

        text-base
        md:text-lg

        leading-[2]

        text-[var(--muted)]
      "
    >
      {data.capabilities.heading}
      <br />
      <br />
      {data.capabilities.intro}
    </p>
  </div>

  {/* SERVICES */}
  <div className="relative z-10 space-y-6">
    {data.capabilities.services.map((item, index) => (
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
          delay: index * 0.05,
        }}
        whileHover={{
          x: 10,
        }}
        className="
          group
          relative

          overflow-hidden

          rounded-[2.5rem]

          border
          border-[var(--border)]

          bg-white

          px-8
          py-8

          transition-all
          duration-500

          hover:border-[var(--accent)]/20
          hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)]

          lg:px-12
          lg:py-10
        "
      >
        {/* BG NUMBER */}
        <div
          className="
            absolute
            right-6
            top-1/2

            hidden

            -translate-y-1/2

            font-display

            text-[8rem]

            leading-none
            tracking-[-0.12em]

            text-black/[0.03]

            lg:block
          "
        >
          {(index + 1).toString().padStart(2, "0")}
        </div>

        <div
          className="
            relative
            z-10

            grid
            gap-10

            lg:grid-cols-[0.2fr_0.5fr_1fr]
            lg:items-start
          "
        >
          {/* NUMBER */}
          <div
            className="
              flex
              items-center
              gap-5
            "
          >
            <div
              className="
                flex
                h-16
                w-16

                items-center
                justify-center

                rounded-2xl

                border
                border-[var(--border)]

                bg-[var(--surface)]

                font-display

                text-xl

                tracking-[-0.08em]

                text-[var(--accent)]

                transition-all
                duration-500

                group-hover:bg-[var(--accent)]
                group-hover:text-white
              "
            >
              {(index + 1).toString().padStart(2, "0")}
            </div>
          </div>

          {/* TITLE */}
          <div>
            <h3
              className="
                font-display
                uppercase

                text-3xl
                md:text-5xl

                leading-[0.9]
                tracking-[-0.08em]

                text-[var(--text)]
              "
            >
              {item.title}
            </h3>
          </div>

          {/* DESCRIPTION */}
          <div>
            <p
              className="
                max-w-2xl

                text-sm
                md:text-base

                leading-[2]

                text-[var(--muted)]

                transition-colors
                duration-500

                group-hover:text-[var(--text)]
              "
            >
              {item.description}
            </p>
          </div>
        </div>

        {/* HOVER GLOW */}
        <div
          className="
            absolute
            inset-0

            opacity-0

            transition-opacity
            duration-500

            group-hover:opacity-100

            bg-[radial-gradient(circle_at_right,rgba(254,0,0,0.05),transparent_40%)]
          "
        />
      </motion.div>
    ))}
  </div>


  {/* MARKET REALITY */}
<section
  className="
    relative

    overflow-hidden

    border-b
    border-[var(--border)]

    bg-[var(--surface)]


    py-28

   
  "
>
  {/* AMBIENT */}
  {/* <div
    className="
      absolute
      left-[-10rem]
      top-20

      h-[30rem]
      w-[30rem]

      rounded-full

      bg-[radial-gradient(circle,rgba(254,0,0,0.06),transparent_70%)]

      blur-3xl
    "
  /> */}

  <div
    className="
      relative
      z-10

      grid
      gap-20

      xl:grid-cols-[0.7fr_1fr]
    "
  >
    {/* LEFT */}
    <div className="sticky top-24 h-fit">
      <span
        className="
          inline-flex
          items-center
          gap-4

          text-[10px]
          uppercase

          tracking-[0.45em]

          text-[var(--muted)]
        "
      >
        <div className="h-px w-12 bg-[var(--accent)]" />
        Market Reality
      </span>

      <h2
        className="
          mt-8

          font-display
          uppercase

          text-[3rem]
          md:text-[6rem]

          leading-[0.82]
          tracking-[-0.1em]
        "
      >
        Perception
        <br />
        Shapes
        <br />
        Markets
      </h2>

      <p
        className="
          mt-10

          max-w-md

          text-base
          md:text-lg

          leading-[2]

          text-[var(--muted)]
        "
      >
        {data.marketReality.conclusion}
      </p>
    </div>

    {/* RIGHT */}
    <div>
      {/* INTRO */}
      <motion.div
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
          duration: 0.9,
        }}
        className="
          rounded-[2.5rem]

          border
          border-[var(--border)]

          bg-white

          p-10

          shadow-[0_10px_40px_rgba(0,0,0,0.03)]
        "
      >
        <h3
          className="
            max-w-4xl

            font-display
            uppercase

            text-3xl
            md:text-5xl

            leading-[0.95]
            tracking-[-0.08em]
          "
        >
          {data.marketReality.title}
        </h3>

        <p
          className="
            mt-8

            max-w-3xl

            text-base
            md:text-lg

            leading-[2]

            text-[var(--muted)]
          "
        >
          {data.marketReality.intro}
        </p>
      </motion.div>

      {/* PROBLEMS */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {data.marketReality.problems.map((item, index) => (
          <motion.div
            key={item}
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
              delay: index * 0.08,
            }}
            whileHover={{
              y: -8,
            }}
            className="
              group
              relative

              overflow-hidden

              rounded-[2rem]

              border
              border-[var(--border)]

              bg-white

              p-8

              transition-all
              duration-500

              hover:border-[var(--accent)]/20
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)]
            "
          >
            {/* NUMBER */}
            <div
              className="
                absolute
                right-5
                top-2

                font-display

                text-[5rem]

                tracking-[-0.1em]

                text-black/[0.03]
              "
            >
              0{index + 1}
            </div>

            <div
              className="
                flex
                h-14
                w-14

                items-center
                justify-center

                rounded-2xl

                border
                border-[var(--border)]

                bg-[var(--surface)]

                text-sm

                tracking-[0.3em]

                text-[var(--accent)]

                transition-all
                duration-500

                group-hover:bg-[var(--accent)]
                group-hover:text-white
              "
            >
              0{index + 1}
            </div>

            <h4
              className="
                mt-8

                font-display
                uppercase

                text-2xl

                leading-[1]
                tracking-[-0.06em]
              "
            >
              {item}
            </h4>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* DIFFERENTIATOR */}
<section
  className="
    relative

    overflow-hidden

    border-b
    border-[var(--border)]

 

   
    py-28

   
  "
>
  <div className="relative z-10">
    {/* TOP */}
    <div className="max-w-6xl">
      <span
        className="
          inline-flex
          items-center
          gap-4

          text-[10px]
          uppercase

          tracking-[0.45em]

          text-[var(--muted)]
        "
      >
        <div className="h-px w-12 bg-[var(--accent)]" />
        Why Sociyo Different
      </span>

      <h2
        className="
          mt-8

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
        As Business
        <br />
        Architecture
      </h2>
    </div>

    {/* CENTER */}
    <div
      className="
        mt-20

        grid
        gap-10

        xl:grid-cols-[1fr_0.8fr]
      "
    >
      {/* LEFT */}
      <div
        className="
          rounded-[2.5rem]

          border
          border-[var(--border)]

       

          p-10
        "
      >
        <h3
          className="
            max-w-4xl

            font-display
            uppercase

            text-3xl
            md:text-5xl

            leading-[0.95]
            tracking-[-0.08em]
          "
        >
          {data.differentiator.title}
        </h3>

        <p
          className="
            mt-8

            max-w-3xl

            text-base
            md:text-lg

            leading-[2]

            text-[var(--muted)]
          "
        >
          {data.differentiator.description}
        </p>

        <p
          className="
            mt-10

            max-w-3xl

            text-base
            md:text-lg

            leading-[2]

            text-[var(--muted)]
          "
        >
          {data.differentiator.conclusion}
        </p>
      </div>

      {/* RIGHT */}
      <div className="space-y-6">
        {data.differentiator.connects.map((item, index) => (
          <motion.div
            key={item}
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
              duration: 0.8,
              delay: index * 0.08,
            }}
            className="
              flex
              items-center
              gap-6

              rounded-[2rem]

              border
              border-[var(--border)]

              bg-white

              px-8
              py-8
            "
          >
            <div
              className="
                flex
                h-14
                w-14

                shrink-0

                items-center
                justify-center

                rounded-2xl

                bg-[var(--accent)]

                font-display

                text-lg

                text-white
              "
            >
              0{index + 1}
            </div>

            <h4
              className="
                font-display
                uppercase

                text-2xl

                leading-[1]
                tracking-[-0.06em]
              "
            >
              {item}
            </h4>
          </motion.div>
        ))}

        {/* PHILOSOPHY */}
        <div
          className="
            rounded-[2rem]

            border
            border-[var(--accent)]/20

            bg-[var(--accent)]/[0.04]

            p-8
          "
        >
          <p
            className="
              text-base
              md:text-lg

              leading-[2]

              text-[var(--text)]
            "
          >
            {data.differentiator.philosophy}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* FRAMEWORK */}
<section
  className="
    relative

    overflow-hidden

    border-b
    border-[var(--border)]

    bg-[var(--surface)]


    py-28

   
  "
>
  {/* HEADER */}
  <div className="mb-24 max-w-6xl">
    <span
      className="
        inline-flex
        items-center
        gap-4

        text-[10px]
        uppercase

        tracking-[0.45em]

        text-[var(--muted)]
      "
    >
      <div className="h-px w-12 bg-[var(--accent)]" />
      Communication Framework
    </span>

    <h2
      className="
        mt-8

        font-display
        uppercase

        text-[3rem]
        md:text-[6rem]

        leading-[0.82]
        tracking-[-0.1em]
      "
    >
      {data.framework.heading}
    </h2>

    <p
      className="
        mt-10

        max-w-3xl

        text-base
        md:text-lg

        leading-[2]

        text-[var(--muted)]
      "
    >
      {data.framework.intro}
    </p>
  </div>

  {/* STAGES */}
  <div className="grid gap-8 xl:grid-cols-3">
    {data.framework.stages.map((item) => (
      <motion.div
        key={item.step}
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
          duration: 0.9,
        }}
        whileHover={{
          y: -10,
        }}
        className="
          group
          relative

          overflow-hidden

          rounded-[2.5rem]

          border
          border-[var(--border)]

          bg-white

          p-10

          transition-all
          duration-500

          hover:border-[var(--accent)]/20
        "
      >
        <span
          className="
            font-display

            text-[6rem]

            leading-none
            tracking-[-0.1em]

            text-black/[0.03]
          "
        >
          {item.step}
        </span>

        <h3
          className="
            mt-6

            font-display
            uppercase

            text-4xl

            leading-[0.9]
            tracking-[-0.08em]
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-6

            text-lg

            leading-[1.8]

            text-[var(--text)]
          "
        >
          {item.subtitle}
        </p>

        <p
          className="
            mt-6

            text-base

            leading-[2]

            text-[var(--muted)]
          "
        >
          {item.description}
        </p>

        <div
          className="
            mt-8

            rounded-2xl

            bg-[var(--surface)]

            p-5
          "
        >
          <p
            className="
              text-sm

              leading-[1.8]

              text-[var(--muted)]
            "
          >
            {item.note}
          </p>
        </div>
      </motion.div>
    ))}
  </div>

  {/* CONCLUSION */}
  <div
    className="
      mt-16

      rounded-[2rem]

      border
      border-[var(--accent)]/20

      bg-[var(--accent)]/[0.04]

      p-8
    "
  >
    <p
      className="
        max-w-4xl

        text-lg

        leading-[2]

        text-[var(--text)]
      "
    >
      {data.framework.conclusion}
    </p>
  </div>
</section>
</section>



    </main>
  );
}
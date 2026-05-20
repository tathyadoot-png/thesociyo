"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import CinematicBackground from "@/app/components/cinematic/CinematicBackground";

import { technologyDigitalData } from "@/app/data/work/technologySolutionData";

const data = technologyDigitalData;

export default function TechnologyDigital() {
  return (
    <main className="relative overflow-hidden bg-[var(--bg)] text-[var(--text)] md:px-32 pt-32 md:pt-40">
      <CinematicBackground />

  <section className="relative overflow-hidden border-b border-[var(--border)]">
  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute left-0 top-0 h-[40rem] w-[40rem] rounded-full bg-[var(--accent)]/10 blur-[140px]" />

    <div className="absolute bottom-0 right-0 h-[35rem] w-[35rem] rounded-full glass-card
dark:bg-white/[0.03] blur-[120px]" />

    <div
      className="
        absolute
        inset-0

        bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]

        bg-[size:120px_120px]

        opacity-30
      "
    />
  </div>

  <div className="relative z-10 px-6 py-24 md:px-10 lg:px-20">
    {/* TOP STRIP */}
    <div className="flex flex-wrap items-center justify-between gap-6">
      <div className="flex items-center gap-4">
        <div className="h-px w-20 bg-[var(--accent)]" />

        <span className="text-[10px] uppercase tracking-[0.45em] text-[var(--muted)]">
          Information & Technology
        </span>
      </div>

      <div className="hidden items-center gap-3 md:flex">
        <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />

        <span className="text-[10px] uppercase tracking-[0.35em] text-[var(--text)]/30">
          Digital Ecosystem Division
        </span>
      </div>
    </div>

    {/* MAIN HERO */}
    <div className="mt-20 grid gap-16 xl:grid-cols-[1.15fr_0.85fr]">
      {/* LEFT */}
      <div>
        {/* BIG TITLE */}
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
            duration: 1,
          }}
        >
          <div className="mb-8 flex items-center gap-5">
            <span className="font-display text-7xl tracking-[-0.12em] text-[var(--text)]/[0.06]">
              04
            </span>

            <div className="h-px flex-1 glass-card" />
          </div>

          <h1
            className="
              max-w-6xl

              font-display
              uppercase

              text-[4rem]
              sm:text-[6rem]
              lg:text-[8rem]

              leading-[0.78]
              tracking-[-0.12em]
            "
          >
            Technology
            <br />
            Built Around
            <br />
            Human
            <br />
            Experience.
          </h1>
        </motion.div>

        {/* DESCRIPTION */}
        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
            duration: 1,
          }}
          className="
            mt-12

            max-w-2xl

            text-lg
            leading-[2]

            text-[var(--muted)]
          "
        >
          {data.cover.description}
        </motion.p>

        <div className="flex flex-wrap gap-4 pt-6">
            <a
              href="/ecosystem/it_eng.pdf"
              download
              className="
                rounded-full

                bg-[var(--accent)]

                px-8
                py-4

                text-[10px]
                uppercase

                tracking-[0.32em]

                text-white

                transition-all
                duration-500

                hover:scale-[1.04]
              "
            >
              Download English PDF
            </a>

            {/* <a
              href="/pdfs/corporate-hi.pdf"
              download
              className="
                rounded-full

                border
                border-[var(--border)]

                bg-white

                px-8
                py-4

                text-[10px]
                uppercase

                tracking-[0.32em]

                text-[var(--text)]

                transition-all
                duration-500

                hover:border-[var(--accent)]/20
              "
            >
              हिंदी PDF डाउनलोड
            </a> */}
          </div>
      </div>

      {/* RIGHT SIDE */}
      <motion.div
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
          delay: 0.2,
          duration: 1,
        }}
        className="relative"
      >
        <div
          className="
            relative

            overflow-hidden

            rounded-[2.5rem]

            border
            border-[var(--border)]

            glass-card
dark:bg-white/[0.03]

            p-10
          "
        >
          {/* TYPO */}
          <div
            className="
              absolute
              right-0
              top-0

              font-display

              text-[10rem]

              leading-none
              tracking-[-0.14em]

              text-[var(--text)]/[0.03]
            "
          >
            UX
          </div>

          {/* CONTENT */}
          <div className="relative z-10">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--accent)]">
              Digital-First Environment
            </span>

            <h2
              className="
                mt-8

                font-display
                uppercase

                text-[2.5rem]
                md:text-[4rem]

                leading-[0.88]
                tracking-[-0.08em]
              "
            >
              Perception
              <br />
              Starts With
              <br />
              Experience.
            </h2>

            <p
              className="
                mt-8

                text-base
                leading-[2]

                text-[var(--muted)]
              "
            >
              {data.environment.outro}
            </p>

            {/* POINTS */}
            <div className="mt-14 space-y-6">
              {data.environment.points.map((item, index) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    justify-between

                    border-b
                    border-[var(--border)]

                    pb-5
                  "
                >
                  <div className="flex items-center gap-5">
                    <span
                      className="
                        font-display

                        text-3xl

                        tracking-[-0.08em]

                        text-[var(--text)]/[0.12]
                      "
                    >
                      0{index + 1}
                    </span>

                    <span
                      className="
                        text-sm
                        uppercase

                        tracking-[0.3em]

                        text-[var(--text)]/70
                      "
                    >
                      {item}
                    </span>
                  </div>

                  <div className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

  
    <div className="space-y-56">
  {data.ecosystems.categories.map((category, categoryIndex) => {
  const projects = data.snapshots.filter(
  (snapshot) => snapshot.ecosystem === category.title
);

    return (
      <section
        key={category.title}
        className="relative"
      >
        {/* SECTION TOP */}
        <div
          className="
            mb-24

            flex
            flex-col
            gap-10

            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-5">
              <span
                className="
                  font-display

                  text-6xl

                  tracking-[-0.12em]

                  text-[var(--text)]/[0.06]
                "
              >
                {(categoryIndex + 1)
                  .toString()
                  .padStart(2, "0")}
              </span>

              <div className="h-px w-20 bg-[var(--accent)]" />
            </div>

            <h3
              className="
                mt-8

                max-w-4xl

                font-display
                uppercase

                text-[3rem]
                md:text-[5rem]

                leading-[0.82]
                tracking-[-0.1em]
              "
            >
              {category.title}
            </h3>
          </div>

          {/* RIGHT */}
          <div className="max-w-md">
            <p
              className="
                text-base
                leading-[2]

                text-[var(--text)]/45
              "
            >
              {projects.length} platforms developed across this digital
              ecosystem with scalable infrastructure and editorial-first user
              experience.
            </p>
          </div>
        </div>

        {/* EDITORIAL PROJECT WALL */}
     <div className="space-y-0">
  {projects.map((project, index) => (
    <motion.a
      href={project.liveLink}
      target="_blank"
      key={project.title}
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
        duration: 1,
        delay: index * 0.06,
      }}
      className="
        group
        relative
        block

        border-t
        border-[var(--border)]

        py-14
      "
    >
      <div
        className="
          grid
          gap-10

          lg:grid-cols-[0.9fr_1.1fr]
          lg:items-center
        "
      >
        {/* IMAGE */}
        <div className="relative overflow-hidden rounded-[2rem]">
          <div className="relative h-[22rem] overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="
                object-cover

                transition-all
                duration-700

                group-hover:scale-105
              "
            />

            {/* OVERLAY */}
            <div
              className="
                absolute
                inset-0

                bg-gradient-to-t
                from-[#111111]
                via-[#111111]/10
                to-transparent
              "
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="relative">
          {/* BIG INDEX */}
          <div
            className="
              absolute
              -top-10
              left-0

              font-display

              text-[7rem]

              leading-none
              tracking-[-0.12em]

              text-[var(--text)]/[0.03]
            "
          >
            {(index + 1)
              .toString()
              .padStart(2, "0")}
          </div>

          <div className="relative z-10">
            <span
              className="
                text-[10px]
                uppercase

                tracking-[0.45em]

                text-[var(--accent)]
              "
            >
              {project.category}
            </span>

            <h4
              className="
                mt-6

                max-w-3xl

                font-display
                uppercase

                text-[3rem]
                md:text-[5rem]

                leading-[0.86]
                tracking-[-0.08em]

                transition-all
                duration-500

                group-hover:translate-x-4
              "
            >
              {project.title}
            </h4>

            <div className="mt-10 flex items-center gap-6">
              <div
                className="
                  h-px
                  w-20

                  bg-white/20

                  transition-all
                  duration-500

                  group-hover:w-32
             group-hover:bg-[var(--accent)]
                "
              />

              <span
                className="
                  text-xs
                  uppercase

                  tracking-[0.35em]

                  text-[var(--text)]/45
                "
              >
                Open Live Platform
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* HOVER GLOW */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0

          opacity-0

          transition-opacity
          duration-700

          group-hover:opacity-100

          bg-[radial-gradient(circle_at_center,rgba(125,184,255,0.08),transparent_60%)]
        "
      />
    </motion.a>
  ))}
</div>
      </section>
    );
  })}
</div>
    </main>
  );
}
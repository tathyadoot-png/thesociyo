
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import CinematicBackground from "@/app/components/cinematic/CinematicBackground";
import { socialDevelopmentData } from "@/app/data/work/socialCommunicationData";

const data = socialDevelopmentData;

export default function SocialDevelopment() {
  return (
    <main className="relative overflow-hidden bg-[var(--bg)] text-[var(--text)]">
      <CinematicBackground />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <Image
            src="/ecosystem/3.jpg"
            alt="Social Development"
            fill
            priority
            className="object-cover opacity-[0.14]"
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--ambient-1),transparent_40%)]" />

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),var(--bg))]" />
        </div>

        {/* FLOATING ORBS */}
        <div className="absolute left-[-10rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[var(--accent)]/10 blur-3xl" />

        <div className="absolute bottom-[-12rem] right-[-10rem] h-[32rem] w-[32rem] rounded-full bg-[var(--ambient-2)] blur-3xl" />

        <div className="relative z-10 px-6 pb-28 pt-32 md:px-20">
          <div className="mx-2 md:mx-32 grid min-h-screen items-center gap-20 xl:grid-cols-[1.05fr_0.7fr]">
            {/* LEFT */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-4"
              >
                <div className="h-px w-14 bg-[var(--accent)]" />

                <span className="text-[10px] uppercase tracking-[0.45em] text-[var(--accent)]">
                  Social Impact Division
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 1 }}
                className="mt-10 max-w-6xl font-display text-[4.2rem] leading-[0.82] tracking-[-0.11em] sm:text-[6rem] lg:text-[8rem]"
              >
                Building
                <br />
                Systems
                <br />
                For
                <span className="text-[var(--accent)]"> Human Impact</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.9 }}
                className="mt-10 max-w-2xl text-lg leading-[2] text-[var(--muted)] md:text-xl"
              >
                {data.cover.description}
              </motion.p>
 {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-6">
            <a
              href="/ecosystem/social_eng.pdf"
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
              {/* STATS */}
              <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {[
                  {
                    title: "Awareness",
                    value: "01",
                  },
                  {
                    title: "Participation",
                    value: "02",
                  },
                  {
                    title: "Execution",
                    value: "03",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.8rem] border border-[var(--border)] bg-[var(--glass)] p-6 backdrop-blur-2xl"
                  >
                    <div className="font-display text-4xl tracking-[-0.08em] text-[var(--accent)]">
                      {item.value}
                    </div>

                    <p className="mt-3 text-[11px] uppercase tracking-[0.35em] text-[var(--muted)]">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="relative overflow-hidden rounded-[3rem] border border-[var(--border)] bg-[var(--glass)] p-6 backdrop-blur-2xl"
            >
              <div className="relative overflow-hidden rounded-[2.4rem]">
                <div className="relative h-[40rem]">
                  <Image
                    src="/ecosystem/3.jpg"
                    alt="Impact"
                    fill
                    className="object-cover brightness-[0.8]"
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,12,0.92),transparent_55%)]" />
                </div>

                <div className="absolute bottom-0 left-0 p-10">
                  <span className="text-[10px] uppercase tracking-[0.35em] text-white/50">
                    People • Process • Impact
                  </span>

                  <h3 className="mt-6 max-w-sm font-display text-5xl leading-[0.88] tracking-[-0.08em] text-white">
                    Turning
                    <br />
                    Awareness Into
                    <br />
                    Action
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= REALITY ================= */}
      <section className="relative overflow-hidden border-b border-[var(--border)] px-6 py-32 md:px-10 lg:px-20">
        <div className="absolute left-[-10rem] top-[-8rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,var(--ambient-1),transparent_70%)] blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-24 lg:grid-cols-[0.9fr_1fr]">
            {/* LEFT */}
            <div>
              <span className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-[var(--accent)]">
                <div className="h-px w-12 bg-[var(--accent)]" />
                The Social Reality
              </span>

              <h2 className="mt-8 font-display text-[3.8rem] leading-[0.84] tracking-[-0.09em] md:text-[6rem]">
                Impact
                <br />
                Breaks
                <br />
                Without
                <br />
                Structure
              </h2>

              <p className="mt-10 max-w-xl text-lg leading-[2] text-[var(--muted)]">
                {data.reality.description}
              </p>
            </div>

            {/* RIGHT */}
            <div className="space-y-12">
              {data.reality.points.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.8 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--glass)] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[var(--accent)]/20"
                >
                  <div className="absolute right-6 top-2 font-display text-[5rem] tracking-[-0.08em] text-[var(--accent)]/8 transition-all duration-500 group-hover:text-[var(--accent)]/15">
                    0{index + 1}
                  </div>

                  <div className="mb-6 h-px w-14 bg-[var(--accent)] transition-all duration-500 group-hover:w-24" />

                  <h3 className="max-w-xl font-display text-3xl leading-[1] tracking-[-0.06em] text-[var(--text)] md:text-4xl">
                    {item}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FRAMEWORK ================= */}
      <section className="relative overflow-hidden px-6 py-32 md:px-10 lg:px-20">
        <div className="absolute bottom-[-10rem] right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,var(--ambient-2),transparent_70%)] blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* HEADER */}
          <div className="max-w-5xl">
            <span className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-[var(--accent)]">
              <div className="h-px w-12 bg-[var(--accent)]" />
              Impact Framework
            </span>

            <h2 className="mt-8 font-display text-[3.8rem] leading-[0.84] tracking-[-0.09em] md:text-[6rem]">
              Awareness.
              <br />
              Participation.
              <br />
              Impact.
            </h2>

          </div>

          {/* FRAMEWORK GRID */}
          <div className="mt-24 grid gap-8 lg:grid-cols-3">
            {data.framework.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-[2.6rem] border border-[var(--border)] bg-[var(--glass)] p-10 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-[var(--accent)]/20"
              >
                {/* BACK NUMBER */}
                <div className="absolute right-6 top-0 font-display text-[7rem] tracking-[-0.08em] text-[var(--accent)]/5">
                  0{index + 1}
                </div>

                {/* TOP ICON */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--border)] bg-white text-sm font-medium tracking-[0.3em] text-[var(--accent)] shadow-xl shadow-black/10">
                  0{index + 1}
                </div>

                <h3 className="mt-10 font-display text-4xl leading-[0.92] tracking-[-0.07em] md:text-[4rem]">
                  {item.title}
                </h3>

                <p className="mt-6 text-base leading-[2] text-[var(--muted)] md:text-lg">
                  {item.description}
                </p>

                <div className="mt-10 h-px w-full bg-[linear-gradient(to_right,var(--accent),transparent)] opacity-40" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

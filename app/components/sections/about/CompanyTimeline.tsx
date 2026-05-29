// app/components/company/CompanyTimeline.tsx

"use client";

import { motion } from "framer-motion";
import CinematicSectionHeading from "@/app/components/ui/CinematicSectionHeading";
import { companyTimeline } from "@/app/data/about/companyTimeline";

export default function CompanyTimeline() {
  return (
    <section
      className="
        relative
        overflow-hidden

        py-28
        md:py-36

        bg-[var(--bg)]
        text-[var(--text)]
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* BIG GLOW */}
        <div
          className="absolute top-[-20%] left-1/2 -translate-x-1/2"
          style={{
            width: "1100px",
            height: "1100px",
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(255,45,45,0.14) 0%, transparent 72%)",
            filter: "blur(140px)",
          }}
        />

        {/* GRID */}
        <div
          className="
            absolute
            inset-0

            opacity-[0.03]

            bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

            bg-[size:70px_70px]
          "
        />
      </div>

      <div className="relative z-10 w-[94%] lg:w-[88%] mx-auto">
        {/* HEADING */}
        <CinematicSectionHeading
          sectionLabel="Company Journey"
          heading={{
            first: "Timeline",
            highlight: "2018 — 2026",
          }}
          shortText="
            A cinematic journey of strategic communication,
            political consulting, media systems and
            narrative-driven growth.
          "
          className="relative z-20 mb-28"
        />

{/* TIMELINE */}
<div className="relative mt-20">
  {/* CENTER LINE */}
  <div className="absolute left-[34px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--border)] to-transparent" />

  <div className="space-y-14 md:space-y-20">
    {companyTimeline.map((yearBlock, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`relative flex ${
          index % 2 === 0
            ? "md:justify-start"
            : "md:justify-end"
        }`}
      >
        {/* DOT */}
        <div className="absolute left-[34px] md:left-1/2 top-10 md:-translate-x-1/2 z-20">
          <div className="h-5 w-5 rounded-full border-4 border-[var(--bg)] bg-[var(--accent)] shadow-[0_0_25px_rgba(255,45,45,0.5)]" />
        </div>

        {/* CARD */}
        <div
          className={`
            relative

            ml-20
            md:ml-0

            w-full
            md:w-[46%]

            overflow-hidden

            rounded-[28px]

            border border-[var(--border)]

            bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),rgba(255,255,255,0.015))]

            backdrop-blur-xl

            p-6
            md:p-8
            lg:p-10

            transition-all
            duration-500

            hover:border-[var(--accent)]/40
          `}
        >
          {/* AMBIENT */}
          <div
            className="absolute inset-0 opacity-60"
            style={{
              background:
                index % 2 === 0
                  ? "radial-gradient(circle at top left, rgba(255,45,45,.08), transparent 50%)"
                  : "radial-gradient(circle at top right, rgba(255,45,45,.08), transparent 50%)",
            }}
          />

          {/* YEAR */}
          <div className="relative z-10 mb-8">
            <span className="font-display text-5xl md:text-7xl tracking-[-0.08em] bg-gradient-to-b from-[var(--accent)] to-[var(--text)] bg-clip-text text-transparent">
              {yearBlock.year}
            </span>
          </div>

          {/* ITEMS */}
          <div className="relative z-10 space-y-8">
            {yearBlock.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={
                  itemIndex !== yearBlock.items.length - 1
                    ? "border-b border-[var(--border)] pb-8"
                    : ""
                }
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-2 w-2 rounded-full bg-[var(--accent)]" />

                  <span className="text-[10px] uppercase tracking-[0.35em] text-[var(--muted)]">
                    Campaign Record
                  </span>
                </div>

                <h3 className="font-display uppercase text-xl md:text-3xl leading-[1] tracking-[-0.05em] text-[var(--text)]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm md:text-base leading-[1.9] text-[var(--muted)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* YEAR NUMBER BG */}
          <div className="absolute right-3 top-0 font-display text-[7rem] md:text-[10rem] leading-none tracking-[-0.1em] text-[var(--text)]/[0.03]">
            {yearBlock.year.slice(-2)}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
}
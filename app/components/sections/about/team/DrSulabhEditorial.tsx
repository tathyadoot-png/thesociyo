// app/components/team/DrSulabhEditorial.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { drSulabhSingh } from "@/app/data/about/drSulabhSingh";
import CinematicSectionHeading from "@/app/components/ui/CinematicSectionHeading";

export default function DrSulabhEditorial() {
  return (
<section className="relative overflow-hidden py-20 md:py-28 xl:py-36 bg-[var(--bg)] text-[var(--text)]">
      {/* AMBIENT BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* RED GLOW */}
        <div
          className="absolute top-[-20%] left-1/2 -translate-x-1/2"
          style={{
            width: "900px",
            height: "900px",
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(255,45,45,0.12) 0%, transparent 72%)",
            filter: "blur(120px)",
          }}
        />

        {/* LIGHT AMBIENT */}
        <div
          className="absolute right-[-10%] top-[10%]"
          style={{
            width: "500px",
            height: "500px",
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
            filter: "blur(90px)",
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

 <div className="relative z-10 w-[96%] lg:w-[88%] mx-auto">
  {/* TOP */}
<CinematicSectionHeading
  sectionLabel="Founder Editorial"
  heading={{
    first: "Strategic",
    highlight: "Intelligence",
  }}
  shortText="
    Building communication systems where narrative,
    strategy, influence and technology work together
    to create long-term public memory.
  "
  className="
    w-full
    relative
    z-20
    mb-20
  "
/>   

{/* MAIN */}
<div
  className="
    relative

    grid
    gap-28
  "
>
  {/* HERO EDITORIAL */}
{/* HERO EDITORIAL */}
<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="relative grid lg:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-14 xl:gap-20 items-center"
>
  {/* LEFT */}
  <div className="relative flex justify-center">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[5rem] sm:text-[8rem] md:text-[12rem] xl:text-[16rem] leading-none tracking-[-0.15em] text-[var(--text)]/[0.03]">
      01
    </div>

    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(circle at center, rgba(255,45,45,0.14), transparent 60%)",
        filter: "blur(100px)",
      }}
    />

    <Image
      src={drSulabhSingh.coverImage}
      alt={drSulabhSingh.name}
      width={1200}
      height={1400}
      priority
      className="relative z-10 w-full max-w-[350px] md:max-w-[450px]  h-auto object-contain"
      style={{
        filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.25))",
      }}
    />
  </div>

  {/* RIGHT */}
  <div className="relative">
    <div className="flex items-center gap-4">
      <div className="h-px w-12 bg-[var(--accent)]" />
      <span className="text-[10px] uppercase tracking-[0.55em] text-[var(--muted)]">
        Founder Editorial
      </span>
    </div>

    <h3 className="mt-6 font-display uppercase text-[2rem] sm:text-[3rem] md:text-[4rem] xl:text-[5.5rem] leading-[0.85] tracking-[-0.08em] text-[var(--text)]">
      {drSulabhSingh.name}
    </h3>

    <p className="mt-4 text-sm sm:text-base md:text-xl text-[var(--muted)]">
      {drSulabhSingh.designation}
    </p>

    <div className="mt-6 h-px w-20 bg-gradient-to-r from-[var(--accent)] to-transparent" />

    <p className="mt-6 text-[15px] md:text-[17px] leading-[2] text-[var(--muted)]">
      {drSulabhSingh.shortBio}
    </p>

    <div className="mt-8 flex flex-wrap gap-2">
      {[
        "Political Consulting",
        "Strategic Communication",
        "Election Strategy",
        "Digital Innovation",
      ].map((item, index) => (
        <span
          key={index}
          className="rounded-full border border-[var(--border)] px-3 py-1.5 text-[11px] md:text-xs text-[var(--muted)] transition-all duration-300 hover:border-[var(--accent)]/40"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
</motion.div>

{/* CINEMATIC EDITORIAL STACK */}
<div className="space-y-20">
  {drSulabhSingh.details.map((item, index) => (
    <motion.div
      key={index}
      className="grid lg:grid-cols-[120px_1fr] gap-8 border-b border-[var(--border)] pb-14"
    >
      <div>
        <span className="font-display text-5xl md:text-7xl text-[var(--accent)]/20">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div>
        <h3 className="font-display text-3xl md:text-5xl uppercase tracking-[-0.06em] mb-6">
          {item.title}
        </h3>

        <p className="max-w-4xl text-[15px] md:text-lg leading-9 text-left text-[var(--muted)]">
          {item.content}
        </p>
      </div>
    </motion.div>
  ))}
</div>
</div>
      </div>
    </section>
  );
}
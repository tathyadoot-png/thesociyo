"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";


import CinematicBackground from "@/app/components/cinematic/CinematicBackground";
import CinematicSectionHeading from "@/app/components/ui/CinematicSectionHeading";

import {
  associations,
  associationsHeading,
} from "@/app/data/home/associations";

export default function SelectedAssociationsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
const [activeIndex, setActiveIndex] = useState(0);

const active = associations[activeIndex];
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const glowY = useTransform(smooth, [0, 1], [0, -120]);

  return (
    <section
  ref={sectionRef}
  className="relative overflow-hidden border-t border-[var(--border)] bg-transparent py-24 md:py-32"
>
      {/* BACKGROUND */}
      <CinematicBackground />

      {/* SOFT DEPTH */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(254,0,0,0.015)_40%,transparent_100%)]" /> */}

      {/* MAIN AMBIENT */}
      <motion.div
        style={{ y: glowY }}
        className="absolute left-1/2 top-[28%] h-[26rem] w-[58rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(254,0,0,0.08),rgba(254,0,0,0.03),transparent_72%)] opacity-90 blur-[90px]"
      />

      {/* LIGHT SPOT */}
      <div className="absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.045),transparent_72%)] opacity-40 blur-[100px]" />

      {/* CONTENT */}
      <div className="relative z-20 w-[96%] lg:w-[88%] mx-auto">
        {/* HEADING */}
       <div className="relative z-30 mb-12 md:mb-16">
          <CinematicSectionHeading
            {...associationsHeading}
            className="relative z-20"
          />
        </div>

{/* TRUST MOSAIC */}
<div className="relative mt-16">

  {/* BIG CENTER GLOW */}
  <div
    className="
      absolute
      left-1/2
      top-1/2

      h-[28rem]
      w-[28rem]

      -translate-x-1/2
      -translate-y-1/2

      rounded-full

      bg-[var(--accent)]/8

      blur-[140px]
    "
  />

  {/* WATERMARK */}
  <div
    className="
      absolute
      inset-0

      flex
      items-center
      justify-center

      pointer-events-none

      font-display

      text-[4rem]
      md:text-[8rem]
      lg:text-[12rem]

      tracking-[-0.12em]

      text-[var(--text)]/[0.03]
    "
  >
    TRUSTED
  </div>

  <div
    className="
      relative
      z-20

      grid

      grid-cols-2
      md:grid-cols-3
      xl:grid-cols-4

      gap-4
      md:gap-6
    "
  >
    {associations.map((item, index) => (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: index * 0.03,
        }}
        className="
          group
          relative

          overflow-hidden

          rounded-[32px]

          border
          border-[var(--border)]

          bg-[var(--glass)]

          backdrop-blur-xl

          h-[180px]
          md:h-[220px]

          flex
          flex-col
          items-center
          justify-center

          transition-all
          duration-500

          hover:-translate-y-2
          hover:border-[var(--accent)]/30

          hover:shadow-[0_20px_60px_rgba(254,0,0,0.12)]
        "
      >
        {/* Hover Glow */}
        <div
          className="
            absolute
            inset-0

            opacity-0

            transition-opacity
            duration-500

            group-hover:opacity-100

            bg-[radial-gradient(circle_at_center,rgba(254,0,0,0.08),transparent_70%)]
          "
        />

        {/* Number */}
        <div
          className="
            absolute

            top-4
            right-4

            font-display

            text-3xl
            md:text-5xl

            text-[var(--accent)]/[0.08]
          "
        >
          {item.id}
        </div>

        {/* Logo */}
        <div
          className="
            relative
            z-10

            h-14
            w-28

            md:h-20
            md:w-40
          "
        >
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="
              object-contain

              transition-all
              duration-500

              group-hover:scale-105
            "
          />
        </div>

        {/* Name */}
        <p
          className="
            mt-5

            px-4

            text-center

            text-[10px]
            md:text-[11px]

            uppercase

            tracking-[0.22em]

            text-[var(--muted)]
          "
        >
          {item.name}
        </p>
      </motion.div>
    ))}
  </div>
</div>

        {/* BOTTOM */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative border-t border-[var(--border)] pt-10 md:pt-14"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-2xl">
              And collaborations across corporate, political, social and digital
              ecosystems.
            </p>

            <h2 className="bg-gradient-to-b from-[var(--accent-light)] via-[var(--accent)] to-[#ffe1e6] bg-clip-text font-display text-[3rem] uppercase leading-[0.85] tracking-[-0.12em] text-transparent drop-shadow-[0_0_30px_rgba(255,0,0,0.15)] sm:text-[4rem] md:text-[6rem]">
              Trusted.
            </h2>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
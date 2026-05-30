"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

import CinematicBackground from "@/app/components/cinematic/CinematicBackground";
import CinematicSectionHeading from "@/app/components/ui/CinematicSectionHeading";

import {
  associations,
  associationsHeading,
} from "@/app/data/home/associations";

export default function SelectedAssociationsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

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

        {/* LOGO CLOUD */}
    <div className="relative mt-6 overflow-hidden md:mt-10">
          {/* CENTER GLOW */}
          <div className="absolute left-1/2 top-1/2 h-[16rem] w-[16rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/10 blur-[120px] md:h-[28rem] md:w-[28rem]" />

          {/* MOBILE */}
       <div className="relative z-20 grid grid-cols-2 gap-4 md:hidden mx-5">
  {associations.map((item, index) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.04,
      }}
      className="
        group
        relative
        overflow-hidden

        rounded-[1.8rem]

        border border-white/[0.08]

        bg-[rgba(255,255,255,0.55)]

        shadow-[0_10px_30px_rgba(0,0,0,0.08)]

        p-5

        before:absolute
        before:inset-0
        before:bg-[linear-gradient(180deg,rgba(255,255,255,0.22),transparent)]
        before:pointer-events-none
      "
    >
      {/* SOFT HOVER GLOW */}
      <div
        className="
          absolute
          inset-0

          opacity-0
          transition-opacity
          duration-500

          group-hover:opacity-100

          bg-[radial-gradient(circle_at_top,rgba(254,0,0,0.08),transparent_70%)]
        "
      />

      {/* NUMBER */}
      <div className="relative z-10 mb-6 font-display text-[1.4rem] leading-none tracking-[-0.08em] text-[var(--muted)]">
        {item.id}
      </div>

      {/* LOGO */}
      <div className="relative z-10 mb-6 flex items-center justify-center">
        <div className="relative h-10 w-24">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* NAME */}
      <h3 className="relative z-10 text-center text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
        {item.name}
      </h3>
    </motion.div>
  ))}
</div>


{/* DESKTOP + TABLET MARQUEE */}
<div
  className="
    relative
    hidden
    md:block

    py-6

    rounded-[2rem]

    border border-[var(--border)]

    bg-white/[0.02]

    backdrop-blur-sm
  "
>
  {/* TOP FADE */}
  <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-52 bg-gradient-to-r from-[var(--bg)] to-transparent" />
  <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-52 bg-gradient-to-l from-[var(--bg)] to-transparent" />

  {/* ROW 1 */}
 <div className="mb-4 overflow-hidden">
    <motion.div
      animate={{
        x: ["0%", "-50%"],
      }}
      transition={{
        duration: 80,
        repeat: Infinity,
        ease: "linear",
      }}
      className="flex w-max gap-8"
    >
      {[...associations, ...associations].map((item, index) => (
        <div
          key={`row1-${index}`}
          className="
            group
            relative

            flex
    h-[120px]
w-[220px]

            shrink-0
            items-center
            justify-center

            overflow-hidden
            rounded-[2rem]

            border
            border-white/10

            bg-white/[0.03]
            backdrop-blur-xl

            transition-all
            duration-500

            hover:border-[var(--accent)]/40
            hover:bg-white/[0.05]
          "
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(254,0,0,0.08),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative h-24 w-28">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-4 left-0 right-0 px-3 text-center">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
              {item.name}
            </p>
          </div>
        </div>
      ))}
    </motion.div>
  </div>

  {/* ROW 2 */}
  <div className="overflow-hidden">
    <motion.div
      animate={{
        x: ["-50%", "0%"],
      }}
      transition={{
        duration: 70,
        repeat: Infinity,
        ease: "linear",
      }}
     className="flex w-max gap-5"
    >
      {[...associations, ...associations].map((item, index) => (
        <div
          key={`row2-${index}`}
          className="
            group
            relative

            flex
           h-[120px]
w-[220px]

            shrink-0
            items-center
            justify-center

            overflow-hidden
            rounded-[2rem]

            border
            border-white/10

            bg-white/[0.03]
            backdrop-blur-xl

            transition-all
            duration-500

            hover:border-[var(--accent)]/40
            hover:bg-white/[0.05]
          "
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(254,0,0,0.08),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

         <div className="relative h-14 w-36">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-4 left-0 right-0 px-3 text-center">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
              {item.name}
            </p>
          </div>
        </div>
      ))}
    </motion.div>
  </div>
</div>
        </div>

        {/* BOTTOM */}
        <motion.div
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
        </motion.div>
      </div>
    </section>
  );
}
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
      className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--bg)] py-24 md:py-32"
    >
      {/* BACKGROUND */}
      <CinematicBackground />

      {/* SOFT DEPTH */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(254,0,0,0.015)_40%,transparent_100%)]" />

      {/* MAIN AMBIENT */}
      <motion.div
        style={{ y: glowY }}
        className="absolute left-1/2 top-[28%] h-[26rem] w-[58rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(254,0,0,0.08),rgba(254,0,0,0.03),transparent_72%)] opacity-90 blur-[90px]"
      />

      {/* LIGHT SPOT */}
      <div className="absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.045),transparent_72%)] opacity-40 blur-[100px]" />

      {/* CONTENT */}
      <div className="relative z-20 px-6 md:px-16 xl:px-32">
        {/* HEADING */}
        <div className="relative z-30 mb-20 md:mb-28">
          <CinematicSectionHeading
            {...associationsHeading}
            className="relative z-20"
          />
        </div>

        {/* LOGO CLOUD */}
        <div className="relative mt-20 overflow-hidden md:mt-32">
          {/* CENTER GLOW */}
          <div className="absolute left-1/2 top-1/2 h-[16rem] w-[16rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/10 blur-[120px] md:h-[28rem] md:w-[28rem]" />

          {/* MOBILE */}
       <div className="relative z-20 grid grid-cols-2 gap-4 md:hidden">
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

{/* DESKTOP CLOUD */}
<motion.div
  style={{
    y: useTransform(smooth, [0, 1], [0, -80]),
    scale: useTransform(
      smooth,
      [0, 0.5, 1],
      [0.98, 1, 1.01]
    ),
  }}
  className="
    relative

    hidden
    md:block

    h-[760px]
    lg:h-[900px]
    xl:h-[1100px]
  "
>
  {associations.map((item, index) => {
    const positions = [
      // TOP
      "left-[14%] top-[10%]",
      "left-1/2 top-[2%] -translate-x-1/2",
      "right-[14%] top-[10%]",

      // UPPER MID
      "left-[4%] top-[34%]",
      "left-[28%] top-[26%]",
      "right-[28%] top-[26%]",
      "right-[4%] top-[34%]",

      // BOTTOM
"left-[20%] bottom-[26%]",
"left-1/2 bottom-[18%] -translate-x-1/2",
"right-[20%] bottom-[26%]",

      // CENTER
      "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
    ];

    return (
      <motion.div
        key={item.id}
        initial={{
          opacity: 0,
          scale: 0.85,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: index * 0.05,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`absolute ${positions[index]}`}
      >
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4 + index * 0.25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.05,
            y: -5,
          }}
          className="
            group
            relative

            flex
            items-center
            justify-center

            overflow-hidden

            rounded-full

            border
            border-white/[0.08]

            bg-white/[0.03]

            backdrop-blur-xl

            shadow-[0_20px_50px_rgba(0,0,0,0.18)]

            transition-all
            duration-700

            hover:border-[var(--accent)]/30
            hover:bg-white/[0.05]

            h-[120px]
            w-[120px]

            lg:h-[150px]
            lg:w-[150px]

            xl:h-[170px]
            xl:w-[170px]
          "
        >
          {/* AMBIENT */}
          <div
            className="
              absolute
              inset-0

              rounded-full

              bg-[radial-gradient(circle_at_center,rgba(254,0,0,0.10),transparent_70%)]

              opacity-60
            "
          />

          {/* ROTATING RING */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute

              rounded-full

              border
              border-white/[0.08]

              h-[92px]
              w-[92px]

              lg:h-[118px]
              lg:w-[118px]

              xl:h-[135px]
              xl:w-[135px]
            "
          />

          {/* LIGHT */}
          <div
            className="
              absolute
              top-0

              h-1/2
              w-full

              bg-[linear-gradient(180deg,rgba(255,255,255,0.10),transparent)]
            "
          />

          {/* LOGO */}
          <div
            className="
              relative
              z-10

              h-14
              w-16

              lg:h-16
              lg:w-20

              xl:h-20
              xl:w-24
            "
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-contain"
            />
          </div>

          {/* NAME */}
          <div
            className="
              absolute

              bottom-4
              lg:bottom-5
              xl:bottom-7

              px-3

              text-center
            "
          >
            <h3
              className="
                text-[8px]
                lg:text-[9px]
                xl:text-[10px]

                uppercase

                tracking-[0.14em]
                lg:tracking-[0.16em]
                xl:tracking-[0.18em]

                text-[var(--muted)]
              "
            >
              {item.name}
            </h3>
          </div>
        </motion.div>
      </motion.div>
    );
  })}
</motion.div>
        </div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mt-20 border-t border-[var(--border)] pt-10 md:mt-24 md:pt-14"
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
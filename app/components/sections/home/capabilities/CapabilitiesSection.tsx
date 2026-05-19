"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import {
  capabilitiesData,
  capabilitiesHeading,
} from "@/app/data/home/capabilities";

import CinematicBackground from "@/app/components/cinematic/CinematicBackground";
import CinematicSectionHeading from "@/app/components/ui/CinematicSectionHeading";

export default function CapabilitiesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[var(--bg)] py-24 md:py-36">
      {/* BG */}
      <CinematicBackground />

      {/* GRID */}
      <div className="absolute inset-0 grid-overlay opacity-[0.04]" />

      {/* RED AMBIENT */}
      <div className="absolute left-1/2 top-[30%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full glow-cherry opacity-70 blur-[140px]" />

      {/* CONTENT */}
      <div className="relative z-20 section-padding">
        {/* HEADING */}
        <CinematicSectionHeading
          {...capabilitiesHeading}
          className="relative z-20"
        />

        {/* LIST */}
        <div className="mt-20 flex flex-col">
          {capabilitiesData.map((item, index) => {
            const isActive = active === index;

            return (
              <motion.div
                key={item.number}
                onMouseEnter={() => setActive(index)}
                onViewportEnter={() => setActive(index)}
                viewport={{ amount: 0.45 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.05,
                }}
                className="group relative overflow-hidden"
              >
                {/* IMAGE BG */}
                <motion.div
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1 : 1.03,
                  }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover opacity-45 transition-all duration-[2000ms] group-hover:scale-105"
                  />

                  {/* LIGHT RED FADE */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[rgba(17,17,19,0.72)] via-[rgba(80,0,0,0.42)] to-[rgba(254,0,0,0.12)]" />

                  {/* CHERRY LIGHT */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(254,0,0,0.18),transparent_60%)] opacity-100" />
                </motion.div>

                {/* CONTENT */}
                <div className="relative z-20 grid items-center gap-10 px-4 py-10 md:grid-cols-[90px_1fr_70px] md:px-10 md:py-14 xl:px-16">
                  
                  {/* NUMBER */}
                  <motion.div
                    animate={{
                      opacity: isActive ? 1 : 0.22,
                      y: isActive ? -4 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className={`font-display text-3xl leading-none tracking-[-0.08em] transition-all duration-500 md:text-5xl ${
                      isActive
                        ? "text-[var(--accent)]"
                        : "text-[var(--graphite)]"
                    }`}
                  >
                    {item.number}
                  </motion.div>

                  {/* CENTER */}
                  <div className="max-w-4xl">

                    {/* META */}
                    <div className="flex items-center gap-4">
                      <motion.div
                        animate={{ width: isActive ? 70 : 40 }}
                        transition={{ duration: 0.5 }}
                        className={`h-px ${
                          isActive
                            ? "bg-[var(--accent)]"
                            : "bg-[var(--border)]"
                        }`}
                      />

                      <div
                        className={`text-[10px] uppercase tracking-[0.35em] ${
                          isActive
                            ? "text-white/80"
                            : "text-[var(--muted)]"
                        }`}
                      >
                        Capability
                      </div>
                    </div>

                    {/* TITLE */}
                    <motion.h3
                      animate={{ x: isActive ? 12 : 0 }}
                      transition={{ duration: 0.5 }}
                      className={`mt-5 font-display text-2xl uppercase leading-[0.92] tracking-[-0.06em] transition-all duration-500 sm:text-3xl md:text-4xl xl:text-5xl ${
                        isActive
                          ? "text-white"
                          : "text-[var(--text)]"
                      }`}
                    >
                      {item.title}
                    </motion.h3>

                    {/* DESC */}
                    <motion.p
                      animate={{
                        opacity: isActive ? 1 : 0.55,
                        y: isActive ? 0 : 6,
                      }}
                      transition={{ duration: 0.5 }}
                      className={`mt-5 max-w-2xl text-sm leading-[1.9] md:text-lg ${
                        isActive
                          ? "text-white/80"
                          : "text-[var(--muted)]"
                      }`}
                    >
                      {item.description}
                    </motion.p>
                  </div>

                  {/* ARROW */}
                  <div className="hidden justify-end md:flex">
                    <motion.div
                      animate={{
                        x: isActive ? 10 : 0,
                        rotate: isActive ? 0 : -20,
                        opacity: isActive ? 1 : 0.25,
                      }}
                      transition={{ duration: 0.5 }}
                      className={`text-4xl transition-all duration-500 ${
                        isActive
                          ? "text-white"
                          : "text-[var(--graphite)]"
                      }`}
                    >
                      ↗
                    </motion.div>
                  </div>
                </div>

                {/* ACTIVE LINE */}
                <motion.div
                  animate={{
                    scaleX: isActive ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-[var(--accent)] via-[var(--accent-light)] to-transparent"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
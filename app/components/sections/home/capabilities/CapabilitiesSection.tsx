"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { capabilitiesData, capabilitiesHeading } from "@/app/data/home/capabilities";
import CinematicLayer from "@/app/components/cinematic/CinematicLayer";
import CinematicBackground from "@/app/components/cinematic/CinematicBackground";   // ← Added
import CinematicSectionHeading from "@/app/components/ui/CinematicSectionHeading";

export default function CapabilitiesSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="
        relative
        overflow-x-hidden
        bg-[#05080F]        // Consistent dark background
        py-24 md:py-36
      "
    >
      {/* Consistent Cinematic Background */}
      <CinematicBackground />

      {/* Optional Red Orb (kept light) */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[40rem]
          w-[40rem]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#fe0000]/8
          blur-[160px]
        "
      />

      <div className="relative z-20 px-6 md:px-10 lg:px-48">
        {/* HEADER */}
        <CinematicSectionHeading
          {...capabilitiesHeading}
          className="relative z-20"
        />

        {/* COMPACT CINEMATIC EDITORIAL LIST */}
        <div className="mt-20 flex flex-col border-t border-white/10">
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
                transition={{ duration: 0.8, delay: index * 0.05 }}
                className="
    group
    relative

    overflow-hidden

    border-b
    border-white/10
  "
              >
                {/* BG IMAGE */}
                <motion.div
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1 : 1.06,
                  }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
      absolute
      inset-0
    "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
        h-full
        w-full
        object-cover

        grayscale

        transition-all
        duration-[2000ms]

        group-hover:scale-105
      "
                  />

                  {/* OVERLAY */}
                  <div
                    className="
        absolute
        inset-0

        bg-gradient-to-r
        from-[#05080F]
        via-[#05080F]/85
        to-[#05080F]/65
      "
                  />

                  {/* RED TINT */}
                  <div
                    className="
        absolute
        inset-0

        bg-[#fe0000]/[0.05]
      "
                  />
                </motion.div>

                {/* CONTENT */}
                <div
                  className="
      relative
      z-20

      grid
      items-center
      gap-10

      px-4
      py-10

      md:px-10
      md:py-14

      xl:px-16

      md:grid-cols-[90px_1fr_70px]
    "
                >
                  {/* NUMBER */}
                  <motion.div
                    animate={{
                      opacity: isActive ? 1 : 0.18,
                      y: isActive ? -4 : 0,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className={`
        font-display

        text-3xl
        md:text-5xl

        leading-none
        tracking-[-0.08em]

        transition-all
        duration-500

        ${isActive
                        ? "text-[#fe0000]"
                        : "text-white/20"
                      }
      `}
                  >
                    {item.number}
                  </motion.div>

                  {/* CENTER */}
                  <div className="max-w-4xl">
                    <div className="flex items-center gap-4">
                      <motion.div
                        animate={{
                          width: isActive ? 70 : 40,
                        }}
                        transition={{
                          duration: 0.5,
                        }}
                        className={`
            h-px

            ${isActive
                            ? "bg-[#fe0000]"
                            : "bg-white/20"
                          }
          `}
                      />

                      <div
                        className="
            text-[10px]
            uppercase

            tracking-[0.35em]

            text-white/35
          "
                      >
                        Capability
                      </div>
                    </div>

                    {/* TITLE */}
                    <motion.h3
                      animate={{
                        x: isActive ? 12 : 0,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                      className={`
          mt-5

          font-display
          uppercase

          text-2xl
          sm:text-3xl
          md:text-4xl
          xl:text-5xl

          leading-[0.92]
          tracking-[-0.06em]

          transition-all
          duration-500

          ${isActive
                          ? "text-white"
                          : "text-white/40"
                        }
        `}
                    >
                      {item.title}
                    </motion.h3>

                    {/* DESC */}
                    <motion.p
                      animate={{
                        opacity: isActive ? 1 : 0.55,
                        y: isActive ? 0 : 6,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                      className="
          mt-5

          max-w-2xl

          text-sm
          md:text-lg

          leading-[1.9]

          text-white/60
        "
                    >
                      {item.description}
                    </motion.p>
                  </div>

                  {/* ARROW */}
                  <div className="hidden md:flex justify-end">
                    <motion.div
                      animate={{
                        x: isActive ? 10 : 0,
                        rotate: isActive ? 0 : -20,
                        opacity: isActive ? 1 : 0.2,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                      className={`
          text-4xl

          transition-all
          duration-500

          ${isActive
                          ? "text-[#fe0000]"
                          : "text-white/20"
                        }
        `}
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
                  className="
      absolute
      bottom-0
      left-0

      h-px
      w-full

      origin-left

      bg-gradient-to-r
      from-[#fe0000]
      via-white/20
      to-transparent
    "
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
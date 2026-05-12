"use client";

import { motion } from "framer-motion";

import { capabilitiesData } from "@/app/data/home/capabilities";

import MaskReveal from "@/app/components/cinematic/MaskReveal";

export default function CapabilitiesSection() {
  return (
    <section
      className="
        relative
        overflow-hidden

        border-b
        border-black/10
        dark:border-white/10

        px-6
        md:px-10
        lg:px-16

        py-32
        md:py-44
      "
    >
      {/* ATMOSPHERE */}
      <div
        className="
          absolute
          right-0
          top-0

          h-[30rem]
          w-[30rem]

          rounded-full

          bg-[#fe0000]/10

          blur-3xl
        "
      />

      {/* HEADER */}
      <div className="relative z-10">
        <p
          className="
            mb-8

            text-[10px]
            uppercase
            tracking-[0.3em]

            text-[#fe0000]
          "
        >
          Capabilities
        </p>

        <MaskReveal text="Communication systems designed for influence." />
      </div>

      {/* LIST */}
      <div className="relative z-10 mt-32">
        {capabilitiesData.map((item, index) => (
          <motion.div
            key={item.number}
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
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              group

              grid
              gap-8

              border-t
              border-black/10
              dark:border-white/10

              py-12

              md:grid-cols-[120px_1fr]
              lg:grid-cols-[180px_1fr]
            "
          >
            {/* NUMBER */}
            <div>
              <span
                className="
                  text-3xl
                  md:text-5xl

                  font-display font-normal
                  tracking-[-0.06em]

                  text-[#fe0000]
                "
              >
                {item.number}
              </span>
            </div>

            {/* CONTENT */}
            <div className="relative">
              <h3
                className="
                  max-w-4xl

                  text-3xl
                  md:text-5xl
                  lg:text-6xl

                  font-display font-normal
                  uppercase
                  tracking-[-0.06em]
                  leading-[0.95]

                  text-black
                  dark:text-white

                  transition-all
                  duration-700

                  group-hover:translate-x-4
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-8

                  max-w-3xl

                  text-base
                  md:text-xl

                  leading-relaxed

                  text-black/60
                  dark:text-white/60
                "
              >
                {item.description}
              </p>

              {/* HOVER LINE */}
              <div
                className="
                  mt-10
                  h-px
                  w-0

                  bg-gradient-to-r
                  from-[#fe0000]
                  to-transparent

                  transition-all
                  duration-700

                  group-hover:w-full
                "
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
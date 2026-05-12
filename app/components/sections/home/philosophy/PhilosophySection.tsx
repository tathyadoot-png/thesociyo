"use client";

import { motion } from "framer-motion";

import { philosophyData } from "@/app/data/home/philosophy";

import WordReveal from "@/app/components/cinematic/WordReveal";

export default function PhilosophySection() {
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
      {/* BACKGROUND TYPO */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0

          flex
          items-center
          justify-center
        "
      >
        <h2
          className="
            text-[20vw]
            font-display font-normal
            uppercase
 

            text-black/[0.03]
            dark:text-white/[0.03]
          "
        >
          PERCEPTION
        </h2>
      </div>

      {/* TOP */}
      <div className="relative z-10 max-w-6xl">
        <p
          className="
            mb-8

            text-[10px]
            uppercase
            tracking-[0.3em]

            text-[#fe0000]
          "
        >
          Philosophy
        </p>

        <WordReveal text="Perception shapes influence." />
      </div>

      {/* GRID */}
      <div
        className="
          relative
          z-10

          mt-28

          grid
          gap-16

          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {philosophyData.map((item, index) => (
          <motion.div
            key={item.id}
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
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              group
              relative
            "
          >
            {/* RED LINE */}
            <div
              className="
                mb-8
                h-px
                w-20

                bg-gradient-to-r
                from-[#fe0000]
                to-transparent

                transition-all
                duration-700

                group-hover:w-40
              "
            />

            {/* TITLE */}
            <h3
              className="
                text-3xl
                md:text-4xl

                font-display font-normal
                uppercase
                  
                leading-[1]

                text-black
                dark:text-white
              "
            >
              {item.title}
            </h3>

            {/* DESC */}
            <p
              className="
                mt-8

                max-w-md

                text-base
                md:text-lg

                leading-relaxed

                text-black/60
                dark:text-white/60
              "
            >
              {item.description}
            </p>

            {/* HOVER GLOW */}
            <div
              className="
                absolute
                -left-10
                top-10

                h-32
                w-32

                rounded-full

                bg-[#fe0000]/0

                blur-3xl

                transition-all
                duration-700

                group-hover:bg-[#fe0000]/10
              "
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
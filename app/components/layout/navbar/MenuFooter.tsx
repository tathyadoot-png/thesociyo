"use client";

import { motion } from "framer-motion";

export default function MenuFooter() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.8,
        duration: 1,
      }}
      className="
        relative

        mt-10
        pt-6
      "
    >
      {/* RED LINE */}
      <motion.div
        animate={{
          opacity: [0.3, 1, 0.3],
          scaleX: [0.9, 1, 0.9],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          absolute
          left-0
          top-0

          h-px
          w-full

          origin-left

          bg-gradient-to-r
          from-[#ff2d2d]
          via-[#ff8a8a]
          to-transparent
        "
      />

      <div
        className="
          flex
          flex-col
          gap-6

          md:flex-row
          md:items-end
          md:justify-between
        "
      >
        {/* LEFT */}
        <div>
          <div
            className="
              mb-2

              text-[10px]
              uppercase

              tracking-[0.5em]

              text-white/25
            "
          >
            Sociyo Communications
          </div>

          <p
            className="
              max-w-md

              text-xs
              md:text-sm

              leading-[1.8]

              text-white/40
            "
          >
            Systems, narratives and experiences
            designed to influence perception and
            create lasting recall.
          </p>
        </div>

        {/* RIGHT */}
        <div
          className="
            flex
            items-center
            gap-3

            text-[10px]
            uppercase

            tracking-[0.45em]

            text-white/20
          "
        >
          <span>DISCOVER</span>

          <div className="h-px w-6 bg-white/10" />

          <span>DECODE</span>

          <div className="h-px w-6 bg-white/10" />

          <span>DELIVER</span>
        </div>
      </div>
    </motion.div>
  );
}
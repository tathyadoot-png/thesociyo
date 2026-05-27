// app/components/ui/HeroActionButtons.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroActionButtons() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        delay: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        flex
        items-center
        justify-center
text-left
        gap-4
        md:gap-5
      "
    >
      {/* ABOUT */}
      <Link
        href="/about"
        className="
          group
          relative

          overflow-hidden

          border
          border-black/10

          bg-black

          px-7
          md:px-9

          py-4

          transition-all
          duration-500

          hover:border-primary
          hover:shadow-[0_20px_60px_rgba(255,0,0,0.12)]
        "
      >
        {/* cinematic hover bg */}
        <div
          className="
            absolute
            inset-0

            origin-left
            scale-x-0

            bg-primary

            transition-transform
            duration-700

            group-hover:scale-x-100
          "
        />

        {/* top line */}
        <div
          className="
            absolute
            left-0
            top-0

            h-px
            w-full

            bg-white/10
          "
        />

        <div
          className="
            relative
            z-10

            flex
            items-center
            gap-5
          "
        >
          {/* index */}
          <span
            className="
              text-[10px]

              font-medium

              tracking-[0.35em]

              text-white/40
            "
          >
            01
          </span>

          <div className="flex flex-col items-start">
            <span
              className="
                text-[9px]

                uppercase

                tracking-[0.32em]

                text-white/40
              "
            >
              Enter
            </span>

            <span
              className="
                mt-1

                text-[11px]
                md:text-xs

                font-semibold

                uppercase

                tracking-[0.28em]

                text-white
              "
            >
              About The Studio
            </span>
          </div>
        </div>
      </Link>

      {/* CONTACT */}
      <Link
        href="/contact"
        className="
          group
          relative

          overflow-hidden

          border
          border-black/10

          bg-white/90

          px-7
          md:px-9

          py-4

          backdrop-blur-xl

          transition-all
          duration-500

          hover:border-primary/20
          hover:bg-white
          hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]
        "
      >
        {/* subtle hover */}
        <div
          className="
            absolute
            inset-0

            origin-left
            scale-x-0

            bg-primary/5

            transition-transform
            duration-700

            group-hover:scale-x-100
          "
        />

        {/* top line */}
        <div
          className="
            absolute
            left-0
            top-0

            h-px
            w-full

            bg-black/5
          "
        />

        <div
          className="
            relative
            z-10

            flex
            items-center
            gap-5
          "
        >
          {/* index */}
          <span
            className="
              text-[10px]

              font-medium

              tracking-[0.35em]

              text-primary/70
            "
          >
            02
          </span>

          <div className="flex flex-col items-start">
            <span
              className="
                text-[9px]

                uppercase

                tracking-[0.32em]

                text-black/35
              "
            >
              Connect
            </span>

            <span
              className="
                mt-1

                text-[11px]
                md:text-xs

                font-semibold

                uppercase

                tracking-[0.28em]

                text-black
              "
            >
              Start A Conversation
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
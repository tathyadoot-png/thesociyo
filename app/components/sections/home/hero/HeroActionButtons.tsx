"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
        flex-wrap
        items-center
        justify-center

        gap-3
        md:gap-4
      "
    >
      {/* ABOUT */}
      <Link
        href="/about"
        className="
          group

          inline-flex
          items-center
          gap-2

          rounded-full

          border
          border-[var(--border)]

          bg-black

          px-5
          md:px-6

          py-3

          text-[11px]
          md:text-xs

          font-semibold
          uppercase

          tracking-[0.18em]

          text-white

          transition-all
          duration-300

          hover:border-[var(--accent)]
          hover:bg-[var(--accent)]
        "
      >
        About Us

        <ArrowUpRight
          size={15}
          className="
            transition-transform
            duration-300

            group-hover:translate-x-0.5
            group-hover:-translate-y-0.5
          "
        />
      </Link>

      {/* CONTACT */}
      <Link
        href="/contact"
        className="
          group

          inline-flex
          items-center
          gap-2

          rounded-full

          border
          border-[var(--border)]

          bg-[var(--glass)]

          backdrop-blur-xl

          px-5
          md:px-6

          py-3

          text-[11px]
          md:text-xs

          font-semibold
          uppercase

          tracking-[0.18em]

          text-[var(--text)]

          transition-all
          duration-300

          hover:border-[var(--accent)]
          hover:text-[var(--accent)]
        "
      >
        Contact Us

        <ArrowUpRight
          size={15}
          className="
            transition-transform
            duration-300

            group-hover:translate-x-0.5
            group-hover:-translate-y-0.5
          "
        />
      </Link>
    </motion.div>
  );
}
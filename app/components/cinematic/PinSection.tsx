"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  desc: string;
}

export default function PinSection({
  title,
  desc,
}: Props) {
  return (
    <section
      className="
        relative
        z-20

        border-t
        border-white/10

        bg-black

        px-6
        md:px-10
        lg:px-16

        py-24
        md:py-32
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
        "
      >
        {/* TITLE */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
          }}
          className="
            text-5xl
            md:text-7xl
            xl:text-[7rem]

            leading-[0.9]

            font-display
            uppercase

            text-white
          "
        >
          {title}
        </motion.h2>

        {/* DESC */}
        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="
            mt-10
            max-w-3xl

            text-lg
            md:text-2xl

            leading-relaxed

            text-white/70
          "
        >
          {desc}
        </motion.p>
      </div>
    </section>
  );
}
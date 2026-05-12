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
    <section className="relative h-[200vh]">
      <div
        className="
          sticky
          top-0
          flex
          h-screen
          items-center
          px-8
          md:px-16
        "
      >
        <div className="max-w-5xl">
          <motion.h2
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="
              text-[14vw]
              leading-[0.9]
              font-display font-normal
              uppercase
        -

              text-black
              dark:text-white
            "
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="
              mt-10
              max-w-2xl

              text-lg
              md:text-2xl

              leading-relaxed

              text-black/60
              dark:text-white/60
            "
          >
            {desc}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
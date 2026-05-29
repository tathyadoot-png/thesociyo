"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const links = [
  {
    label: "ARRIVAL",
    href: "/",
    number: "01",
  },
  {
    label: "IDENTITY",
    href: "/about",
    number: "02",
  },
  {
    label: "ECOSYSTEMS",
    href: "/services",
    number: "03",
  },
  {
    label: "EXECUTIONS",
    href: "/work",
    number: "04",
  },
  {
    label: "NOTES",
    href: "/blogs",
    number: "05",
  },
  {
    label: "CONNECT",
    href: "/contact",
    number: "06",
  },
];

export default function MenuLinks({
  setOpen,
}: {
  setOpen: (value: boolean) => void;
}) {
  return (
    <div
      className="
        relative

        flex
        flex-1
        flex-col
        justify-between

        overflow-hidden

   py-2 md:py-6
      "
    >
      {/* BG GLOW */}
      <div
        className="
          pointer-events-none

          absolute
          left-1/2
          top-1/2

          h-[28rem]
          w-[28rem]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[var(--bg)] 

          blur-[120px]
        "
      />

      {/* BG WORD */}
      {/* <div
        className="
          pointer-events-none

          absolute
          left-1/2
          top-1/2

          -translate-x-1/2
          -translate-y-1/2

          whitespace-nowrap

          font-display
          uppercase

          text-[22vw]

          leading-none
          tracking-[-0.14em]

          text-[var(--text)]/[0.02]
        "
      >
        SOCIYO
      </div> */}

      {/* LINKS */}
      <div
        className="
          relative
          z-10

          flex
          flex-col
        "
      >
        {links.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.06,
              duration: 0.8,
            }}
            className="
              border-b
              border-[var(--border)]
            "
          >
            <Link
              href={item.href}
              onClick={() => setOpen(false)}
              className="
                group
                relative

                flex
                items-center
                justify-between

                py-3
                md:py-5
              "
            >
              {/* LEFT */}
              <div
                className="
                  flex
                  items-center
                  gap-4

                  px-5
                "
              >
                {/* NUMBER */}
                <span
                  className="
                    text-[10px]

                    uppercase

                    tracking-[0.4em]

                    text-[var(--muted)]
                  "
                >
                  {item.number}
                </span>

                {/* TITLE */}
                <div className="relative overflow-hidden">
                  {/* HOVER GLOW */}
                  <div
                    className="
                      absolute
                      inset-0

                      opacity-0

                      transition-opacity
                      duration-500

                      group-hover:opacity-100

                      bg-[radial-gradient(circle_at_left,rgba(255,45,45,0.18),transparent_60%)]
                    "
                  />

                  <motion.span
                    whileHover={{
                      x: 8,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="
                      relative
                      z-10

                      block

                      font-display
                      uppercase
text-[11vw]
sm:text-[11vw]
md:text-[6vw]
lg:text-[4.5vw]

                      leading-[0.85]
                      tracking-[-0.1em]

                      text-[var(--muted)]

                      transition-all
                      duration-500

                      group-hover:text-[var(--accent)]
                    "
                  >
                    {item.label}
                  </motion.span>
                </div>
              </div>

              {/* RIGHT */}
              <div
                className="
                  hidden
                  md:flex

                  items-center
                  gap-3
                "
              >
                <div
                  className="
                    h-px
                    w-8

                    bg-[var(--accent)]

                    transition-all
                    duration-500

                    group-hover:w-14
                  "
                />

                <span
                  className="
                    text-[10px]
                    uppercase

                    tracking-[0.45em]

                    text-[var(--text)]/30
                  "
                >
                  Open
                </span>
              </div>

              {/* HOVER LINE */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0

                  h-px
                  w-0

                  bg-gradient-to-r
                  from-[var(--accent-light)]
                  to-transparent

                  transition-all
                  duration-700

                  group-hover:w-full
                "
              />
            </Link>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
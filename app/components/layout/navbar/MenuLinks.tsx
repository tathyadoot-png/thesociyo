"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  {
    label: "HOME",
    href: "/",
  },
  {
    label: "PHILOSOPHY",
    href: "/philosophy",
  },
  {
    label: "INFLUENCE",
    href: "/influence",
  },
  {
    label: "CAPABILITIES",
    href: "/capabilities",
  },
  {
    label: "INSIGHTS",
    href: "/insights",
  },
  {
    label: "CONTACT",
    href: "/contact",
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
        flex
        flex-1
        flex-col
        justify-center
        overflow-y-auto
        py-10
      "
    >
      {links.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: index * 0.08,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="overflow-hidden"
        >
          <Link
            href={item.href}
            onClick={() => setOpen(false)}
            className="
              group
              relative
              block
              w-full
              text-left
            "
          >
            {/* MAIN TEXT */}
            <span
              className="
                relative
                block
                text-[18vw]
                sm:text-[14vw]
                md:text-[10vw]
                lg:text-[7vw]
                xl:text-[6vw]
                font-display
                font-normal
                uppercase
                leading-[0.9]

                text-white/20
                transition-all
                duration-700

                group-hover:text-white
              "
            >
              {item.label}
            </span>

            {/* RED HOVER GLOW */}
            <span
              className="
                absolute
                left-0
                top-1/2
                h-[40%]
                w-0
                -translate-y-1/2
                bg-[#fe0000]/10
                blur-3xl
                transition-all
                duration-700
                group-hover:w-full
              "
            />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
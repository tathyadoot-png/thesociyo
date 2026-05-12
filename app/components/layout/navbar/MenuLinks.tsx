"use client";

import { motion } from "framer-motion";

const links = [
  "HOME",
  "PHILOSOPHY",
  "INFLUENCE",
  "CAPABILITIES",
  "INSIGHTS",
  "CONTACT",
];

export default function MenuLinks() {
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
          key={item}
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
          <button
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
                font-display font-normal
                uppercase
                leading-[0.9]
     
                text-white/20
                transition-all
                duration-700
                group-hover:text-white
              "
            >
              {item}
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
          </button>
        </motion.div>
      ))}
    </div>
  );
}
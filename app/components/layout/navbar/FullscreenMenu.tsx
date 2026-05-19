"use client";

import { AnimatePresence, motion } from "framer-motion";

import MenuLinks from "./MenuLinks";
import MenuFooter from "./MenuFooter";

import CinematicBackground from "@/app/components/cinematic/CinematicBackground";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function FullscreenMenu({
  open,
  setOpen,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            clipPath: "circle(0% at 100% 0%)",
          }}
          animate={{
            clipPath: "circle(140% at 100% 0%)",
          }}
          exit={{
            clipPath: "circle(0% at 100% 0%)",
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            fixed
            inset-0
            z-[998]

            overflow-y-auto

            bg-[var(--bg)]
          "
        >
          {/* CINEMATIC BG */}
          <CinematicBackground />

          {/* DARK OVERLAY */}
          <div
            className="
              absolute
              inset-0

              bg-[var(--bg)]
            "
          />

          {/* RED GLOW */}
          <div
            className="
              absolute
              left-1/2
              top-1/2

              h-[40rem]
              w-[40rem]

              -translate-x-1/2
              -translate-y-1/2

              rounded-full

              bg-[var(--bg)] 

              blur-[140px]
            "
          />

          {/* EXTRA SIDE GLOW */}
          <div
            className="
              absolute
              right-0
              top-0

              h-[25rem]
              w-[25rem]

              rounded-full

              bg-[var(--bg)] 

              blur-[120px]
            "
          />

          {/* GRID */}
          <div
            className="
              absolute
              inset-0

              opacity-[0.03]

              bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

              bg-[size:80px_80px]
            "
          />

          {/* CONTENT */}
      <div
  className="
    relative
    z-20

    flex
    min-h-screen
    flex-col
    justify-between

    px-5
    pb-8
    pt-24

    sm:px-8
    md:px-14
  "
>
  <MenuLinks setOpen={setOpen} />

  <MenuFooter />
</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
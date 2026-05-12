"use client";

import { motion } from "framer-motion";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function MenuTrigger({
  open,
  setOpen,
}: Props) {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="
        group
        relative
        flex
        h-14
        w-14
        items-center
        justify-center
      "
    >
      {/* RED GLOW */}
      <div
        className="
          absolute
          inset-0
          rounded-full
          bg-[#fe0000]/20
          blur-2xl
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
        "
      />

      {/* LINES */}
      <div className="relative flex flex-col gap-[6px]">
        <motion.span
          animate={{
            rotate: open ? 45 : 0,
            y: open ? 6 : 0,
          }}
          className="
            block
            h-[2px]
            w-8
            bg-white
          "
        />

        <motion.span
          animate={{
            opacity: open ? 0 : 1,
          }}
          className="
            block
            h-[2px]
            w-8
            bg-white/70
          "
        />

        <motion.span
          animate={{
            rotate: open ? -45 : 0,
            y: open ? -10 : 0,
          }}
          className="
            block
            h-[2px]
            w-8
            bg-white
          "
        />
      </div>
    </button>
  );
}
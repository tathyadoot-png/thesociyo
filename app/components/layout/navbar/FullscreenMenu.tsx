"use client";

import { AnimatePresence, motion } from "framer-motion";

import MenuLinks from "./MenuLinks";
import MenuFooter from "./MenuFooter";

interface Props {
    open: boolean;
    setOpen: (value: boolean) => void;
}

export default function FullscreenMenu({
    open,
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
    bg-[#050505]
  "
                >
                    {/* ATMOSPHERE */}
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
              bg-[#fe0000]/15
              blur-3xl
            "
                    />

                    {/* GRID */}
                    <div
                        className="
    relative
    z-20
    flex
    min-h-screen
    flex-col
    justify-between
    px-8
    md:px-14
    py-20
  "
                    >
                        <MenuLinks />

                        <MenuFooter />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
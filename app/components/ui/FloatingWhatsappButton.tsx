// app/components/ui/FloatingWhatsappButton.tsx

"use client";

import { motion } from "framer-motion";

export default function FloatingWhatsappButton() {
  return (
    <motion.a
      href="https://wa.me/9182690048"
      target="_blank"
      rel="noopener noreferrer"
      initial={{
        opacity: 0,
        scale: 0.9,
        y: 20,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        scale: 1.06,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className="
  group

  fixed
  bottom-[110px]
  right-8

  z-[999]

  flex
  items-center
  justify-center

  h-[62px]
  w-[62px]

  rounded-full

  bg-[#25D366]

  shadow-[0_10px_35px_rgba(37,211,102,0.28)]

  transition-all
  duration-500
"
    >
      {/* pulse ring */}
      <div
        className="
          absolute
          inset-0

          rounded-full

          border
          border-[#25D366]/40

          animate-ping
        "
      />

      {/* icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="
          relative
          z-10

          h-7
          w-7
        "
      >
        <path d="M16.001 3C8.82 3 3 8.82 3 16c0 2.82.92 5.57 2.62 7.84L4 29l5.31-1.57A12.94 12.94 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16.001 3Zm0 23.6c-2.23 0-4.41-.6-6.31-1.75l-.45-.27-3.15.93.95-3.06-.29-.47A10.48 10.48 0 1 1 16 26.6Zm5.76-7.83c-.31-.15-1.82-.9-2.1-1-.28-.1-.49-.15-.69.16-.2.3-.79 1-.97 1.2-.18.2-.36.22-.67.07-.31-.15-1.3-.48-2.48-1.54-.92-.82-1.54-1.84-1.72-2.15-.18-.3-.02-.47.13-.62.14-.14.31-.36.46-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.54-.08-.15-.69-1.67-.95-2.3-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.53.08-.8.38-.28.3-1.05 1.02-1.05 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.1 4.48.71.31 1.27.5 1.7.64.72.23 1.38.2 1.9.12.58-.09 1.82-.74 2.08-1.45.26-.71.26-1.32.18-1.45-.08-.13-.28-.2-.59-.36Z" />
      </svg>
    </motion.a>
  );
}
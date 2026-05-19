"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "@/app/lib/gsap";
import Image from "next/image";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.22,
        ease: "power3.out",
      });
    };

    const handleMouseDown = () => {
      gsap.to(cursorRef.current, {
        scale: 0.82,
        duration: 0.15,
      });
    };

    const handleMouseUp = () => {
      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 0.25,
      });
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      ref={cursorRef}
      className="
        fixed
        top-0
        left-0
        z-[9999]

        pointer-events-none
      "
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* OUTER GLOW */}
      <div
        className="
          absolute
          inset-0

          scale-[2.2]

          rounded-full

          glow-cherry

          opacity-70

          blur-2xl
        "
      />

      {/* OUTER RING */}
      <div
        className="
          absolute
          inset-0

          scale-[1.35]

          rounded-full

          border
          border-[var(--accent)]/20
        "
      />

      {/* MAIN CURSOR */}
      <div
        className="
          relative

          flex
          items-center
          justify-center

          h-14
          w-14

          rounded-full

          glass-card

          border-[var(--accent)]/20

          bg-[rgba(17,17,19,0.72)]

          shadow-[0_0_40px_rgba(254,0,0,0.16)]

          transition-all
          duration-300
        "
      >
        {/* INNER RED LIGHT */}
        <div
          className="
            absolute

            h-8
            w-8

            rounded-full

            bg-[var(--accent)]/12

            blur-xl
          "
        />

        {/* LOGO */}
        <Image
          src="/Sociyo_Favicon.png"
          alt="cursor"
          width={24}
          height={24}
          priority
          className="
            relative
            z-10

            object-contain

            drop-shadow-[0_0_12px_rgba(254,0,0,0.55)]
          "
        />
      </div>
    </div>
  );
}
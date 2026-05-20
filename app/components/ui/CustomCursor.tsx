"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "@/app/lib/gsap";
import Image from "next/image";

export default function CustomCursor() {
  const cursorRef =
    useRef<HTMLDivElement | null>(null);

  const [isMobile, setIsMobile] =
    useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();

    window.addEventListener(
      "resize",
      checkMobile
    );

    return () => {
      window.removeEventListener(
        "resize",
        checkMobile
      );
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (
      e: MouseEvent
    ) => {
      gsap.to(cursorRef.current, {
        x: e.clientX - 34,
        y: e.clientY - 34,
        duration: 0.55,
        ease: "power4.out",
      });
    };

    const handleMouseDown = () => {
      gsap.to(cursorRef.current, {
        scale: 0.88,
        duration: 0.18,
      });
    };

    const handleMouseUp = () => {
      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 0.3,
      });
    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    window.addEventListener(
      "mousedown",
      handleMouseDown
    );

    window.addEventListener(
      "mouseup",
      handleMouseUp
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );

      window.removeEventListener(
        "mousedown",
        handleMouseDown
      );

      window.removeEventListener(
        "mouseup",
        handleMouseUp
      );
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
        transform:
          "translate(-50%, -50%)",
      }}
    >
      {/* BIG AMBIENT GLOW */}
      <div
        className="
          absolute
          inset-0

          scale-[3.8]

          rounded-full

          bg-[radial-gradient(circle,rgba(254,0,0,0.14),transparent_72%)]

          blur-[90px]

          opacity-70
        "
      />

      {/* MID GLOW */}
      <div
        className="
          absolute
          inset-0

          scale-[2.2]

          rounded-full

          bg-[radial-gradient(circle,rgba(255,80,80,0.18),transparent_70%)]

          blur-3xl

          opacity-80
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

          backdrop-blur-2xl

          border
          border-white/50

          bg-[rgba(255,255,255,0.78)]

          shadow-[0_12px_45px_rgba(254,0,0,0.16)]

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

            bg-[var(--accent)]/18

            blur-2xl
          "
        />

        {/* SHINE */}
        <div
          className="
            absolute
            inset-0

            rounded-full

            bg-[linear-gradient(180deg,rgba(255,255,255,0.65),transparent_55%)]

            opacity-80
          "
        />

        {/* LOGO */}
        <Image
          src="/Sociyo_Favicon.png"
          alt="cursor"
          width={22}
          height={22}
          priority
          className="
            relative
            z-10

            object-contain

            opacity-95

            drop-shadow-[0_0_16px_rgba(254,0,0,0.38)]
          "
        />
      </div>
    </div>
  );
}
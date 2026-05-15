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
        duration: 0.25,
        ease: "power3.out",
      });
    };

    const handleMouseDown = () => {
      gsap.to(cursorRef.current, {
        scale: 0.85,
        duration: 0.15,
      });
    };

    const handleMouseUp = () => {
      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 0.2,
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
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Glow Layer */}
      <div className="absolute inset-0 rounded-full bg-white/20 blur-xl scale-150" />

      {/* Cursor Body */}
      <div
        className="
          relative
          flex items-center justify-center
          w-12 h-12
          rounded-full
          border border-white/10
          bg-white/5
          backdrop-blur-md
          shadow-[0_0_25px_rgba(255,255,255,0.15)]
        "
      >
        <Image
          src="/Sociyo_WFavicon.png"
          alt="cursor"
          width={26}
          height={26}
          priority
          className="
            object-contain
            drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]
          "
        />
      </div>
    </div>
  );
}
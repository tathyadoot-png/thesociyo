"use client";

import { useScroll, useTransform, useSpring } from "framer-motion";
import { RefObject } from "react";

export function useCinematicScroll(ref: RefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 20%"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.4,
  });

  const y = useTransform(smooth, [0, 1], [120, -120]);

  const opacity = useTransform(smooth, [0, 0.2, 1], [0, 1, 1]);

  const scale = useTransform(smooth, [0, 1], [0.92, 1]);

  const rotateX = useTransform(smooth, [0, 1], [8, 0]);

  const blur = useTransform(smooth, [0, 0.25], [18, 0]);

  const glow = useTransform(smooth, [0, 1], [0.3, 1]);

  return {
    smooth,
    y,
    opacity,
    scale,
    rotateX,
    blur,
    glow,
  };
}
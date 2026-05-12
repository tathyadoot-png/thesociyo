"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import * as THREE from "three";

export default function SceneMotion() {
  const { camera } = useThree();
  const { scrollYProgress } = useScroll();

  const target = useRef(8);

  useFrame(() => {
    const progress = scrollYProgress.get();

    target.current = 8 - progress * 3;

    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      target.current,
      0.05
    );

    camera.rotation.z = THREE.MathUtils.lerp(
      camera.rotation.z,
      progress * 0.08,
      0.05
    );
  });

  return null;
}
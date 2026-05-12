"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

export default function ParticleField() {
  const particles = useMemo(() => {
    const positions = [];

    for (let i = 0; i < 1500; i++) {
      positions.push(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 12
      );
    }

    return new Float32Array(positions);
  }, []);

  return (
    <Points positions={particles} stride={3}>
      <PointMaterial
        transparent
        size={0.015}
        sizeAttenuation
        depthWrite={false}
        color="#ffffff"
        opacity={0.4}
      />
    </Points>
  );
}
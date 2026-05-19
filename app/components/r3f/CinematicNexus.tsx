"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function CinematicNexus() {
  const pointsRef = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const count = 2400;

    const pos = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 34;
      pos[i + 1] = (Math.random() - 0.5) * 18;
      pos[i + 2] = (Math.random() - 0.5) * 24;
    }

    return pos;
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    pointsRef.current.rotation.y = t * 0.008;

    pointsRef.current.rotation.x =
      Math.sin(t * 0.15) * 0.04;

    const scale =
      1 + Math.sin(t * 0.4) * 0.015;

    pointsRef.current.scale.setScalar(scale);
  });

  return (
    <Points
      ref={pointsRef}
      positions={positions}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#fe0000"
        size={0.06}
        sizeAttenuation
        depthWrite={false}
        opacity={0.9}
        blending={THREE.NormalBlending}
      />
    </Points>
  );
}
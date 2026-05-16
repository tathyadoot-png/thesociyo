"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function CinematicNexus() {
  const pointsRef = useRef<THREE.Points>(null!);

  const { positions, colors } = useMemo(() => {
    const count = 3200;                    // density badhaya
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i += 3) {
      // Wide cinematic spread
      positions[i]     = (Math.random() - 0.5) * 38;
      positions[i + 1] = (Math.random() - 0.5) * 24;
      positions[i + 2] = (Math.random() - 0.5) * 30;

      // Brand colors: Red + Cyan mix
      const isRed = Math.random() > 0.5;
      if (isRed) {
        colors[i]     = 1.0;     // R
        colors[i + 1] = 0.12;
        colors[i + 2] = 0.35;
      } else {
        colors[i]     = 0.05;    // Cyan
        colors[i + 1] = 0.65;
        colors[i + 2] = 1.0;
      }
    }

    return { positions, colors };
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // Slow elegant rotation + gentle floating
    pointsRef.current.rotation.y = t * 0.006;
    pointsRef.current.rotation.x = Math.sin(t * 0.004) * 0.06;

    // Breathing / pulsing effect
    const scale = 1 + Math.sin(t * 0.6) * 0.025;
    pointsRef.current.scale.setScalar(scale);
  });

  return (
    <Points
      ref={pointsRef}
      positions={positions}
      colors={colors}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        size={0.022}
        sizeAttenuation
        depthWrite={false}
        vertexColors
        opacity={0.85}
      />
    </Points>
  );
}
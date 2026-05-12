"use client";

import { Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function SignalField() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.z =
      Math.sin(state.clock.elapsedTime * 0.05) * 0.03;

    groupRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.08) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {/* Main Signal Axis */}
      <Line
        points={[
          [-3, 0, 0],
          [3, 0, 0],
        ]}
        color="#fe0000"
        lineWidth={1}
        transparent
        opacity={0.4}
      />

      {/* Secondary Layers */}
      <Line
        points={[
          [-2.5, 1.2, -1],
          [2.5, 1.2, -1],
        ]}
        color="#ffffff"
        lineWidth={0.4}
        transparent
        opacity={0.08}
      />

      <Line
        points={[
          [-2, -1.4, -2],
          [2, -1.4, -2],
        ]}
        color="#ffffff"
        lineWidth={0.4}
        transparent
        opacity={0.06}
      />

      {/* Vertical Signals */}
      <Line
        points={[
          [0, -2, -1],
          [0, 2, -1],
        ]}
        color="#fe0000"
        lineWidth={0.5}
        transparent
        opacity={0.15}
      />

      <Line
        points={[
          [-1.5, -1.5, -3],
          [-1.5, 1.5, -3],
        ]}
        color="#ffffff"
        lineWidth={0.3}
        transparent
        opacity={0.05}
      />
    </group>
  );
}
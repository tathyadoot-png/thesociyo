"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function SignalField() {
  const groupRef = useRef<THREE.Group>(null);

  // Generate particles once
  const particles = useMemo(() => {
    return Array.from({ length: 120 }, () => ({
      position: [
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
      ],
      scale: Math.random() * 0.08 + 0.02,
    }));
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y =
      state.clock.elapsedTime * 0.03;

    groupRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
  });

  return (
    <group ref={groupRef}>
      {/* Core Sphere */}
      <mesh>
        <sphereGeometry args={[1.2, 64, 64]} />

        <meshStandardMaterial
          color="#fe0000"
          emissive="#fe0000"
          emissiveIntensity={1.5}
          roughness={0.3}
          metalness={0.2}
        />
      </mesh>

      {/* Outer Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.2, 0.015, 16, 200]} />

        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Second Ring */}
      <mesh rotation={[0.3, 0.4, 0]}>
        <torusGeometry args={[2.8, 0.01, 16, 200]} />

        <meshBasicMaterial
          color="#fe0000"
          transparent
          opacity={0.2}
        />
      </mesh>

      {/* Floating Particles */}
      {particles.map((particle, index) => (
        <mesh
          key={index}
          position={
            particle.position as [number, number, number]
          }
          scale={particle.scale}
        >
          <sphereGeometry args={[1, 16, 16]} />

          <meshBasicMaterial
            color={
              index % 4 === 0 ? "#fe0000" : "#ffffff"
            }
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}
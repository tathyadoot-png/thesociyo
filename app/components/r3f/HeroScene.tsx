"use client";

import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";

import SignalField from "./SignalField";
import TransmissionLines from "./TransmissionLines";
import ParticleField from "./ParticleField";

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        {/* Camera */}
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 8]}
          fov={45}
        />

        {/* Atmospheric Fog */}
        <fog attach="fog" args={["#000000", 6, 18]} />

        {/* Cinematic Lighting */}
        <pointLight
          position={[0, 0, 4]}
          intensity={1.5}
          color="#fe0000"
        />

        <pointLight
          position={[-4, 2, -2]}
          intensity={0.4}
          color="#ffffff"
        />

        {/* Systems */}
        <TransmissionLines />

        <ParticleField />

        <SignalField />
      </Canvas>
    </div>
  );
}
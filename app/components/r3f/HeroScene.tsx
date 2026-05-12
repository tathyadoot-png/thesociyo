"use client";

import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Float,
  PerspectiveCamera,
} from "@react-three/drei";

import SignalField from "./SignalField";

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

        {/* Lighting */}
        <ambientLight intensity={0.4} />

        <directionalLight
          position={[3, 3, 3]}
          intensity={2}
          color="#ffffff"
        />

        <pointLight
          position={[0, 0, 2]}
          intensity={4}
          color="#fe0000"
        />

        {/* Environment */}
        <Environment preset="city" />

        {/* Main Signal System */}
        <Float
          speed={1.2}
          rotationIntensity={0.2}
          floatIntensity={0.4}
        >
          <SignalField />
        </Float>
      </Canvas>
    </div>
  );
}
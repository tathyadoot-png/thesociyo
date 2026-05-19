"use client";

import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";

import SignalField from "./SignalField";
import TransmissionLines from "./TransmissionLines";
import CinematicNexus from "./CinematicNexus";

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
 
      {/* RED GLOW */}
<div
  className="
    absolute
    left-1/2
    top-1/2
    z-10

    h-[40rem]
    w-[40rem]

    -translate-x-1/2
    -translate-y-1/2

    rounded-full

    glow-cherry

    opacity-30

    blur-[140px]
  "
/>

      <Canvas
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          preserveDrawingBuffer: false,
        }}
        style={{
          background: "transparent",
        }}
      >
        {/* CAMERA */}
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 9]}
          fov={42}
        />

        {/* FOG */}
        <fog
          attach="fog"
          args={["#111113", 10, 34]}
        />

        {/* PRIMARY RED */}
        <pointLight
          position={[0, 0, 5]}
          intensity={2}
          color="#fe0000"
        />

        {/* SOFT FILL */}
        <pointLight
          position={[-5, 3, 3]}
          intensity={0.5}
          color="#ffffff"
        />

        {/* SIDE RED */}
        <pointLight
          position={[4, -2, 2]}
          intensity={1}
          color="#ff3b3b"
        />

        {/* AMBIENT */}
        <ambientLight
          intensity={0.28}
          color="#2A0A0A"
        />

        {/* TOP LIGHT */}
        <spotLight
          position={[0, 8, 4]}
          intensity={0.8}
          angle={0.45}
          penumbra={1}
          color="#fe0000"
        />

        {/* SCENE */}
        <TransmissionLines />
        <CinematicNexus />
        <SignalField />
      </Canvas>

      {/* NOISE */}
      <div
        className="
          absolute
          inset-0
          z-20

          pointer-events-none

          cinematic-noise
        "
      />

      {/* VIGNETTE */}
      <div
        className="
          absolute
          inset-0
          z-20

          pointer-events-none

          cinematic-vignette
        "
      />
    </div>
  );
}
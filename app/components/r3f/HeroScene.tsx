"use client";

import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";

import SignalField from "./SignalField";
import TransmissionLines from "./TransmissionLines";
import CinematicNexus from "./CinematicNexus";

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
 <Canvas
  dpr={[1, 1.5]}           // ← Reduced from [1,2]
  gl={{
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
    preserveDrawingBuffer: false,
  }}
  style={{ background: 'transparent' }}
>
  <fog attach="fog" args={["#0A0B1A", 8, 20]} />   // ← Match background

  <pointLight position={[0, 0, 4]} intensity={1.2} color="#fe0000" />
  <pointLight position={[-4, 2, -2]} intensity={0.3} color="#ffffff" />

  <TransmissionLines />
  <CinematicNexus />
  <SignalField />
</Canvas>
    </div>
  );
}
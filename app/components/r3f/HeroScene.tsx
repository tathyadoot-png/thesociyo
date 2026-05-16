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
  {/* BLUE FOG */}
  <fog
    attach="fog"
    args={["#07111F", 12, 32]}
  />

  {/* MAIN BLUE LIGHT */}
  <pointLight
    position={[0, 0, 5]}
    intensity={1.6}
    color="#4DA3FF"
  />

  {/* SOFT WHITE FILL */}
  <pointLight
    position={[-4, 3, 2]}
    intensity={0.5}
    color="#ffffff"
  />

  {/* BLUE SIDE LIGHT */}
  <pointLight
    position={[4, -2, 1]}
    intensity={0.8}
    color="#1E63FF"
  />

  {/* AMBIENT */}
  <ambientLight
    intensity={0.45}
    color="#6FAEFF"
  />

  <TransmissionLines />
  <CinematicNexus />
  <SignalField />
</Canvas>
    </div>
  );
}
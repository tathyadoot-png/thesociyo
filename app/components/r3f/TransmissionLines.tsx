"use client";

import { Line } from "@react-three/drei";

export default function TransmissionLines() {
  return (
    <>
      <Line
        points={[
          [-8, 2, -2],
          [8, 1, -4],
        ]}
        color="#fe0000"
        lineWidth={0.3}
        transparent
        opacity={0.2}
      />

      <Line
        points={[
          [-7, -1, -3],
          [7, -2, -5],
        ]}
        color="#ffffff"
        lineWidth={0.2}
        transparent
        opacity={0.08}
      />

      <Line
        points={[
          [-6, 4, -6],
          [6, 3, -8],
        ]}
        color="#fe0000"
        lineWidth={0.15}
        transparent
        opacity={0.1}
      />
    </>
  );
}
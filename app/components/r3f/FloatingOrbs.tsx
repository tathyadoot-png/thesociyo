// New file banao → FloatingOrbs.tsx
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function FloatingOrbs() {
  const group = useRef<THREE.Group>(null!);

  useFrame((state) => {
    group.current.children.forEach((orb, i) => {
      orb.position.y = Math.sin(state.clock.elapsedTime + i) * 1.5;
      orb.rotation.x = state.clock.elapsedTime * 0.3 + i;
    });
  });

  return (
    <group ref={group}>
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={i} position={[
          (i % 4 - 1.5) * 6,
          -2 + Math.random() * 4,
          -5 - Math.random() * 8
        ]}>
          <sphereGeometry args={[0.12, 32, 32]} />
          <meshBasicMaterial 
            color={i % 2 === 0 ? "#ff0033" : "#00b4ff"} 
            transparent 
            opacity={0.6} 
          />
        </mesh>
      ))}
    </group>
  );
}
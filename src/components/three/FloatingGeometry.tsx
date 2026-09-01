"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function FloatingGeometry() {
  const group = useRef<THREE.Group>(null);

  const geometries = useMemo(() => {
    return [
      { position: [-4, 2, -5] as [number, number, number], scale: 0.8, speed: 0.5, color: "#6366f1" },
      { position: [4, -1, -6] as [number, number, number], scale: 1.2, speed: 0.3, color: "#a855f7" },
      { position: [0, 0, -8] as [number, number, number], scale: 1.5, speed: 0.2, color: "#6366f1" },
    ];
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.03;
  });

  return (
    <group ref={group}>
      {geometries.map((geo, i) => (
        <FloatingMesh key={i} {...geo} index={i} />
      ))}
    </group>
  );
}

function FloatingMesh({
  position,
  scale,
  speed,
  color,
  index,
}: {
  position: [number, number, number];
  scale: number;
  speed: number;
  color: string;
  index: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime * speed;
    mesh.current.position.y = position[1] + Math.sin(t + index) * 0.5;
    mesh.current.rotation.x = t * 0.5;
    mesh.current.rotation.z = t * 0.3;
  });

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.5}
        emissive={color}
        emissiveIntensity={0.15}
      />
    </mesh>
  );
}

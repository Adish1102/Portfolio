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
      { position: [-2, -3, -4] as [number, number, number], scale: 0.6, speed: 0.7, color: "#818cf8" },
      { position: [3, 3, -7] as [number, number, number], scale: 1.0, speed: 0.4, color: "#c084fc" },
      { position: [0, 0, -8] as [number, number, number], scale: 1.5, speed: 0.2, color: "#6366f1" },
    ];
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = t * 0.05;
    group.current.rotation.x = Math.sin(t * 0.1) * 0.1;
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

  const geometries = [
    <icosahedronGeometry key="ico" args={[1, 0]} />,
    <octahedronGeometry key="oct" args={[1, 0]} />,
    <torusGeometry key="torus" args={[1, 0.3, 16, 32]} />,
    <dodecahedronGeometry key="dodec" args={[1, 0]} />,
    <tetrahedronGeometry key="tetra" args={[1, 0]} />,
  ];

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      {geometries[index % geometries.length]}
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.6}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

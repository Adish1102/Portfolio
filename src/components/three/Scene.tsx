"use client";

import { Canvas } from "@react-three/fiber";
import FloatingGeometry from "./FloatingGeometry";
import Particles from "./Particles";

export default function Scene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
        <FloatingGeometry />
        <Particles count={300} />
      </Canvas>
    </div>
  );
}

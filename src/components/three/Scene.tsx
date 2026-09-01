"use client";

import { Canvas } from "@react-three/fiber";
import FloatingGeometry from "./FloatingGeometry";
import Particles from "./Particles";

export default function Scene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
        frameloop="demand"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <FloatingGeometry />
        <Particles count={100} />
      </Canvas>
    </div>
  );
}

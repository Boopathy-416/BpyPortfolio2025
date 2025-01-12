// Scene.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

export default function Scene() {
  return (
    <div  style={{ width: "100%", height: "50vh",border:"1px solid white" }}>
      <Canvas
        camera={{ position: [0, 1, 5] }}
        style={{ background: "#000", cursor:"pointer" }}
      >
        <Suspense fallback={null}>
          <Model url="/assets/3d assests/particle_ai_brain.gltf" />

          <OrbitControls enableDamping={true} />
        </Suspense>

        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 50, 20]} intensity={3} />
      </Canvas>
    </div>
  );
}



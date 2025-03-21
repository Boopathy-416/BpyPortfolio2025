import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={[1, 1, 1]} position={[0, -4, 0]} />;
}

export default function Scene() {
  return (
    <div className="w-full md:h-screen h-[50%] ">
      <Canvas
        camera={{ position: [-10, 5, -10], fov: 40, scale:[2, 2, 2,] }}
        
        style={{ background: "transparent", cursor: "pointer" }}
      >
        <ambientLight intensity={50} />
        <directionalLight position={[40, 80, 0]} intensity={50} />

        <Suspense fallback={null}>
          <Model url="/assets/3d assests/robot.glb" />
          <OrbitControls enableDamping={true} />

        </Suspense>
      </Canvas>
    </div>
  );
}

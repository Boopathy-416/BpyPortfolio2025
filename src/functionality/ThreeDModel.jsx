// Scene.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

export default function Scene() {
  return (
    <div  style={{ width: "100%", height: "90vh" }}>
      <Canvas
        camera={{ position: [0, 1, 5] }}
        style={{ background: "#000", cursor:"pointer" }}
      >
        <Suspense fallback={null}>
          <Model url="/assets/3d assests/labpose.glb" />

          <OrbitControls enableDamping={true} />
        </Suspense>

        <ambientLight intensity={0.8} />
        <directionalLight position={[0, 20, 10]} intensity={3} />
      </Canvas>
    </div>
  );
}


// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import Model from "./Model";

// export default function Scene() {
//   return (
//     <div style={{ width: "100%", height: "100vh" }}>
//       <Canvas camera={{ position: [0, 1, 5] }} style={{ background: "#171717" }}>
//         <Suspense fallback={null}>
//           {/* Your updated Model with auto-rotation */}
//           <Model url="/assets/3d assests/labpose.glb" />

//           {/* OrbitControls for interactive rotation/panning/zooming */}
//           <OrbitControls enableDamping={true} />
//         </Suspense>

//         {/* Basic lighting */}
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[0, 10, 5]} intensity={1} />
//       </Canvas>
//     </div>
//   );
// }

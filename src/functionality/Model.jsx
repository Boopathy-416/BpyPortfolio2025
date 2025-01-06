// // Model.jsx
// import React, { useRef } from "react";
// import { useGLTF } from "@react-three/drei";

// /**
//  * 
//  * @param {string} props.url - The URL/path to your GLB file
//  */
// export default function Model({ url, ...props }) {
//   const groupRef = useRef();
//   // This hook automatically uses GLTFLoader to load your model
//   const { scene } = useGLTF(url);

//   return (
//     <group ref={groupRef} {...props}>
//       <primitive object={scene} />
//     </group>
//   );
// }

// Model.jsx
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model({ url }) {
  // Load the .glb model
  const { scene } = useGLTF(url);

  // Reference to the model for rotation
  const modelRef = useRef();

  // Called on every rendered frame (~60 times/sec)
  useFrame(() => {
    if (modelRef.current) {
      // Adjust speed & axis as desired
      modelRef.current.rotation.y += 0.01;
    }
  });

  return <primitive ref={modelRef} object={scene} />;
}

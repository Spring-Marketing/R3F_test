import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Define the geometry creation function
function createBoxWithRoundedEdges(width, height, depth, radius0, smoothness) {
  let shape = new THREE.Shape();
  let eps = 0.00001;
  let radius = radius0 - eps;

  // Create rounded corners
  shape.absarc(eps, eps, eps, -Math.PI / 2, -Math.PI, true);
  shape.absarc(eps, height - radius * 2, eps, Math.PI, Math.PI / 2, true);
  shape.absarc(
    width - radius * 2,
    height - radius * 2,
    eps,
    Math.PI / 2,
    0,
    true
  );
  shape.absarc(width - radius * 2, eps, eps, 0, -Math.PI / 2, true);

  // Create extruded geometry with rounded edges
  let geometry = new THREE.ExtrudeGeometry(shape, {
    amount: depth - radius0 * 2,
    bevelEnabled: true,
    bevelSegments: smoothness * 2,
    steps: 1,
    bevelSize: radius,
    bevelThickness: radius0,
    curveSegments: smoothness,
  });

  geometry.center();
  return geometry;
}

// Component definition
function RoundedPillow({
  width = width,
  height = height,
  depth = depth,
  radius = 0.02,
  smoothness = 8,
  color = "#ffffff",
  roughness = 0.95,
  metalness = 0.05,
}) {
  const meshRef = useRef();

  // Create geometry only once during initialization
  const geometry = useRef(
    createBoxWithRoundedEdges(width, height, depth, radius, smoothness)
  );

  // Optional rotation animation
  // useFrame((state, delta) => {
  //   meshRef.current.rotation.y += delta;
  // });

  return (
    <mesh ref={meshRef}>
      {geometry.current && (
        <>
          <primitive object={geometry.current} />
          <meshStandardMaterial
            color={color}
            roughness={roughness}
            metalness={metalness}
            width={width}
            height={height}
            depth={depth}
          />
        </>
      )}
      <OrbitControls />
    </mesh>
  );
}

export default RoundedPillow;

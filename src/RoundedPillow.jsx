import { useRef, useMemo } from "react";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function createBoxWithRoundedEdges(width, height, depth, radius0, smoothness) {
  let shape = new THREE.Shape();
  let eps = 0.00001;
  let radius = radius0 - eps;

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

  let geometry = new THREE.ExtrudeGeometry(shape, {
    depth: depth - radius0 * 2, // 🔥 Rettet fra "amount" til "depth"
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

function RoundedPillow({
  width = 1,
  height = 1,
  depth = 1,
  radius = 0.02,
  smoothness = 8,
  color = "#ffffff",
  roughness = 0.95,
  metalness = 0.05,
}) {
  const meshRef = useRef();

  // 🔥 Bruk useMemo for å regenerere geometrien når width, height eller depth endres
  const geometry = useMemo(
    () => createBoxWithRoundedEdges(width, height, depth, radius, smoothness),
    [width, height, depth, radius, smoothness]
  );

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial
        color={color}
        roughness={roughness}
        metalness={metalness}
      />
      <OrbitControls />
    </mesh>
  );
}

export default RoundedPillow;
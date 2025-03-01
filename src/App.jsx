import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";

const Pillow = ({ size = [2, 0.5, 2] }) => {
  const ref = useRef();
  // useFrame((state, delta) => {
  //   ref.current.rotation.y += delta;
  // });

  return (
    <mesh position={[0, -1, 0]} ref={ref}>
      <boxGeometry args={[size[0], size[1], size[2], 40, 12, 40]} />
      <meshStandardMaterial
        color="lightgrey"
        roughness={0.95}
        metalness={0.05}
      />
      <OrbitControls />
    </mesh>
  );
};

function App() {
  return (
    <Canvas>
      <directionalLight position={[-3, 3, 2]} intensity={0.5} />
      <ambientLight intensity={0.8} />
      <Pillow size={[1.5, 0.4, 1.5]} />
    </Canvas>
  );
}

export default App;

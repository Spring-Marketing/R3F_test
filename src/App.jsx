import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { useRef } from "react";

const Cube = () => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.y += delta;
  });
  return (
    <mesh position={[0, -1, 0]} ref={ref}>
      <boxGeometry args={[2, 1, 1]} />
      <meshStandardMaterial color={"yellow"} />
    </mesh>
  );
};

function App() {
  return (
    <body>
      <Canvas>
        <directionalLight position={[-2, 2, 2]} intensity={0.5} />
        <ambientLight intensity={0.8} />
        <Cube />
      </Canvas>
    </body>
  );
}

export default App;

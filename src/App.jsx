import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";

const Pillow = ({ size = [2, 0.5, 2] }) => {
  const ref = useRef();
  // useFrame((state, delta) => {
  //   ref.current.rotation.y += delta;
  // });

  return (
    <mesh position={[0, 0, 0]} ref={ref}>
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
  const [depth, setDepth] = useState(2);
  const [width, setWidth] = useState(1.5);
  const [height, setHeight] = useState(0.4);
  // const [material, setMaterial] = useState("1");

  return (
    <div className="flex max-w-7xl m-auto mt-20 h-screen">
      <div className="flex-1 bg-yellow-300 border-0 rounded-2 p-2">
        <form className="flex flex-col" action="">
          <input
            className="bg-white mb-2 p-2"
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
          <input
            className="bg-white mb-2 p-2"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <input
            className="bg-white mb-2 p-2"
            type="number"
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
          />
          <select className="bg-white mb-2 p-2" name="" id="">
            <option value="Velg">Velg tekstil</option>
            <option value="Mønster 1">Mønster 1</option>
            <option value="Mønster 2">Mønster 2</option>
            <option value="Mønster 3">Mønster 3</option>
          </select>
        </form>
      </div>
      <Canvas className="flex-2">
        <directionalLight position={[-3, 3, 2]} intensity={0.5} />
        <ambientLight intensity={0.8} />
        <Pillow size={[width, height, depth]} />
      </Canvas>
    </div>
  );
}

export default App;

import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import RoundedPillow from "./RoundedPillow";

function App() {
  const [depth, setDepth] = useState(2);
  const [width, setWidth] = useState(2);
  const [height, setHeight] = useState(2);
  // const [material, setMaterial] = useState("1");

  return (
    <div className="flex max-w-7xl m-auto mt-20 h-screen">
      <div className="flex-1 bg-yellow-300 border-0 rounded-2 p-2">
        <form className="flex flex-col" action="">
          <input
            className="bg-white mb-2 p-2"
            type="number"
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
          />
          <input
            className="bg-white mb-2 p-2"
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
          />
          <input
            className="bg-white mb-2 p-2"
            type="number"
            value={depth}
            onChange={(e) => setDepth(Number(e.target.value))}
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
        <directionalLight position={[-3, 3, 2]} intensity={0.6} />
        <ambientLight intensity={0.2} />
        <RoundedPillow width={width} height={height} depth={depth} />
        <gridHelper args={[100, 100, "#e3e3e3", "#e3e3e3"]} />
      </Canvas>
    </div>
  );
}

export default App;

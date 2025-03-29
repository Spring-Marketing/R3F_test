import { Canvas } from "@react-three/fiber";
import "./App.css";
import { useState } from "react";
import RoundedPillow from "./RoundedPillow";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";


const schema = yup.object().shape({
  width: yup.number().required(),
  height: yup.number().required(),
  depth: yup.number().required(),
});

function App() {
  const [depth, setDepth] = useState(2);
  const [width, setWidth] = useState(2);
  const [height, setHeight] = useState(2);
  // const [material, setMaterial] = useState("1");

  const { handleSubmit, register, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };


  return (
    <div className="flex max-w-7xl m-auto mt-20 h-screen">
      <div className="flex-1 bg-yellow-300 border-0 rounded-2 px-10 rounded-xl">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-xl m-8">Tilpass</h2>
          <div className="flex gap-4">
            <span className="bg-white mb-2 py-2 px-4 rounded-xl drop-shadow-xl flex">
              <input
              className="w-16"
                {...register("width")}
                type="number"
                onChange={(e) => setWidth(e.target.value)}
                value={width}
              />
              <p>cm</p>
            </span>
            <span className="bg-white mb-2 py-2 px-4 rounded-xl drop-shadow-xl flex">
              <input
              className="w-16"
                {...register("depth")}
                type="number"
                onChange={(e) => setDepth(e.target.value)}
                value={depth}
              />
              <p>cm</p>
            </span>
            <span className="bg-white mb-2 py-2 px-4 rounded-xl drop-shadow-xl flex">
              <input
              className="w-16"
                {...register("height")}
                type="number"
                onChange={(e) => setHeight(e.target.value)}
                value={height}
              />
              <p>cm</p>
            </span>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded drop-shadow-xl">
            Submit
          </button>
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

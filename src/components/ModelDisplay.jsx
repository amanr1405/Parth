import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "../model/Model";

export default function ModelDisplay() {
  return (
    <div style={{ height: "50%", width: "100%" }}>
      <Canvas
        shadows
        camera={{ position: [0, 2, 10], fov: 50 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true }}
      >
        {/* Ambient light */}
        <ambientLight intensity={0.2} />

        {/* Side lights for depth */}
        <directionalLight position={[-10, 5, 0]} intensity={3} color="white" />
        <directionalLight position={[10, 5, 0]} intensity={3} color="white" />

        {/* Front and Back lights */}
        <directionalLight position={[0, 0, 10]} intensity={2} color="white" />
        <directionalLight position={[0, 0, -10]} intensity={4} color="white" />

        {/* GLB Model */}
        <Model scale={2} rotationSpeed={0.01} />

        {/* Controls */}
        <OrbitControls makeDefault enableZoom={false} />
      </Canvas>
    </div>
  );
}

import { Center, useGLTF, useAnimations } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

export default function Model({ scale = 1, position = [0, 0, 0], rotationSpeed = 0.01 }) {
  const group = useRef();
  const gltf = useGLTF("/parth.glb");
  const { actions } = useAnimations(gltf.animations, group);

  // Play all animations
  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => action.play());
    }
  }, [actions]);

  // Make sure all meshes visible
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.visible = true;
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  // Auto rotation on Y axis
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <Center>
      <group ref={group} scale={12} position={position}>
      <primitive object={gltf.scene} />
    </group>  
    </Center>
  );
}

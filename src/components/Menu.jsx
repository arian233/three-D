import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  PerspectiveCamera,
  PresentationControls,
  Html,
  useGLTF,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const menuItems = [
  {
    label: "About",
    value: "About",
    id: 1,
  },
  {
    label: "Portfolio",
    value: "Portfolio",
    id: 2,
  },
  {
    label: "Contact",
    value: "Contact",
    id: 3,
  },
];

const Rocket = () => {
  const fbx = useGLTF("/assets/scene.gltf");
  return <primitive scale={20} object={fbx.scene} rotation={[2.2, -0.3, 0]} />;
};

const CustomMenu = (props) => {
  const ref = useRef();

  const handleMenuItemClick = (label) => {
    console.log(label);
    switch (label) {
      case "About":
        document.getElementById("About").scrollIntoView({ behavior: "smooth" });
        break;
      case "Portfolio":
        document
          .getElementById("Portfolio")
          .scrollIntoView({ behavior: "smooth" });
        break;
      case "Contact":
        document
          .getElementById("Contact")
          .scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8;
    ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20;
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });
  return (
    <group ref={ref} {...props} dispose={null}>
      {menuItems.map((item) => (
          <mesh key={item.id} onClick={() => handleMenuItemClick(item.label)}>
            <Html
              wrapperClass
              scale={4}
              rotation={[Math.PI / 1.5, 0, 0]}
              position={[12, 0, (item.id - 2) * -3]}
              transform
            >
              <div onClick={() => handleMenuItemClick(item.value)}>
                <div
                  className="group relative cursor-pointer flex h-28px justify-between items-center
                             text-black w-[97px] text-center text-sm hover:text-white "
                >
                  <div className="absolute z-20 h-full text-2xl text-center font-extrabold align-middle right-0 block transform ">
                    {item.label}
                  </div>
                </div>
              </div>
            </Html>
          </mesh>
      ))}
      <Rocket />
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={100} />
      </EffectComposer>
    </group>
  );
};

const Menu = () => {
  return (
    <div className="h-[70vh] mt-0 md:pt-0 md:w-full md:h-[70vh]">
      <Canvas shadows dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
        <PerspectiveCamera
          makeDefault
          fov={90}
          position={[0, 0, 30]}
          focusDistance={[0, 0]}
        />
        <ambientLight color="#ff0a65" intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 3, Math.PI / 4]}
          azimuth={[-Math.PI / 2, Math.PI / 8]}
        >
          <CustomMenu rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.25, 0]} />
        </PresentationControls>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};
export default Menu;

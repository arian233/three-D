import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, PerspectiveCamera, PresentationControls, ContactShadows, Html, useFBX } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';


const menuItems = [
    {
        label: 'About Me',
        content: null
    },
    {
        label: 'Portfolio',
        content: null
    },
    {
        label: 'Contact',
        content: null
    }
]

const Rocket = () => {
    const fbx = useFBX('/assets/Rocket.fbx')
    return <primitive object={fbx} scale={0.2} rotation={[2.2, -0.3, 0]} />
}

const CustomMenu = (props) => {
    const ref = useRef()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        ref.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8
        ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20
        ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
    })
    return (
        <group ref={ref} {...props} dispose={null}>
            {menuItems.map((item, key) =>
                <>
                    <mesh>
                        <Html wrapperClass key={key} scale={4} rotation={[Math.PI / 1.5, 0, 0]} position={[12, 0, (key - 2) * -3]} transform>
                            <div className='group relative cursor-pointer flex h-28px justify-between items-center
                             text-black w-[97px] text-center text-sm hover:text-white '>
                                <div className='absolute z-[-1] h-full text-xl text-center align-middle right-0 block transform '>
                                    {item.label}
                                </div>
                            </div>
                        </Html>

                    </mesh>


                </>
            )
            }
            <Rocket />
            <EffectComposer>
                <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={100} />
            </EffectComposer>
        </group>
    )
}

const Menu = () => {
    return (
        <div className='mt-44 h-[70vh] md:mt-0 md:w-full md:h-full'>
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault fov={90} position={[0, 0, 30]} focusDistance={[0, 0]} />
                <ambientLight color="#ff0a65" intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
                <PresentationControls
                    global
                    config={{ mass: 2, tension: 500 }}
                    snap={{ mass: 4, tension: 1500 }}
                    rotation={[0, 0, 0]}
                    polar={[-Math.PI, Math.PI]}
                    azimuth={[-Math.PI, Math.PI]}>

                    <CustomMenu rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.25, 0]} />
                </PresentationControls>
                <Environment preset="city" />
            </Canvas>
        </div>
    )
}
export default Menu;
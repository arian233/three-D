import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, PerspectiveCamera, PresentationControls, Html, useFBX, useGLTF } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';


const menuItems = [

    {
        label: 'About',
        value: 'About',
        id: 1
    },
    {
        label: 'Portfolio',
        value: 'Portfolio',
        id: 2
    },
    {
        label: 'Contact',
        value: 'Contact',
        id: 3
    }
]

const Rocket = () => {
    const fbx = useGLTF('/assets/scene.gltf')
    return (
        <primitive scale={14} object={fbx.scene} rotation={[2.2, -0.3, 0]} />



    )
}

const CustomMenu = (props) => {
    const ref = useRef()

    const handleMenuItemClick = (label) => {
        console.log(label)
        switch (label) {
            case 'About':
                document.getElementById('About').scrollIntoView({ behavior: 'smooth' })
                console.log('About')
                break;
            case 'Portfolio':
                document.getElementById('Portfolio').scrollIntoView({ behavior: 'smooth' })
                console.log('Portfolio')
                break;
            case 'Contact':
                document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' })
                console.log('Contact')
                break;
            default:
                break;
        }
    }
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
                    <mesh key={item.id} onClick={() => handleMenuItemClick(item.label)}>
                        <Html wrapperClass key={item.id} scale={4} rotation={[Math.PI / 1.5, 0, 0]} position={[12, 0, (key - 2) * -3]} transform>
                            <div onClick={() => handleMenuItemClick(item.value)}>
                                <div className='group relative cursor-pointer flex h-28px justify-between items-center
                             text-black w-[97px] text-center text-sm hover:text-white '>
                                    <div className='absolute z-20 h-full text-xl text-center align-middle right-0 block transform '>
                                        {item.label}
                                    </div>
                                </div>
                            </div>

                        </Html>
                    </mesh>
                </>
            )
            }
            {/* <>
                <mesh>
                    <Html wrapperClass scale={4} rotation={[Math.PI / 1.5, 0, 0]} position={[0, 0, -16]} transform>
                        <div className="flex top-[60px] md:top-[60px] text-center justify-center">
                            <p className='text-white'>You can chckout this spaceship by left clicking on it and drag the cursor around</p>
                        </div>
                    </Html>
                </mesh>

            </> */}
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
            <Canvas shadows dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
                <PerspectiveCamera makeDefault fov={90} position={[0, 0, 30]} focusDistance={[0, 0]} />
                <ambientLight color="#ff0a65" intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />

                <PresentationControls
                    global
                    config={{ mass: 2, tension: 500 }}
                    snap={{ mass: 4, tension: 1500 }}
                    rotation={[0, 0, 0]}
                    polar={[-Math.PI / 3, Math.PI / 4]}
                    azimuth={[-Math.PI / 2, Math.PI / 8]}>

                    <CustomMenu rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.25, 0]} />
                </PresentationControls>
                <Environment preset="city" />
            </Canvas>
        </div>
    )
}
export default Menu;
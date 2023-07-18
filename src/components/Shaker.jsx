import { useRef, Suspense } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import CanvasLoader from './Loader';

const RotatingShaker = () => {
    const gltf = useLoader(GLTFLoader, '/cocktail_shaker.glb');
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.1 * delta;
            meshRef.current.rotation.y += 0.1 * delta;
            meshRef.current.rotation.z += 0.1 * delta;
        }
    });

    return (
        <mesh ref={meshRef}>
            <primitive object={gltf.scene} position={[0, -0.2, 0]} rotation={[-0.3, 0, 0]} />
        </mesh>
    );
};

const Shaker = () => {
    return (
        <Canvas>
            <Suspense fallback={<CanvasLoader />}>
                <PerspectiveCamera makeDefault fov={50} position={[0.5, -0.5, 0.5]} />
                <pointLight position={[2, 2, 1]} intensity={5} castShadow />
                <spotLight penumbra={1}
                    intensity={1}
                    castShadow
                    shadow-mapSize={1024} />
                <RotatingShaker />
                <OrbitControls enableZoom={false} />
            </Suspense>
        </Canvas>
    );
};

export default Shaker;
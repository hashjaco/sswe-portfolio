"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function RotatingCube() {
    const ref = useRef<THREE.Mesh>(null);
    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.x += delta;
            ref.current.rotation.y += delta;
        }
    });

    return (
        <mesh ref={ref}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#2cb1bc" />
        </mesh>
    );
}

function Starfield() {
    const starGroup = useRef<THREE.Group>(null);
    const stars = Array.from({ length: 1000 }, () => [
        (Math.random() - 0.5) * 1000,
        (Math.random() - 0.5) * 1000,
        (Math.random() - 0.5) * 1000,
    ]);

    useFrame(() => {
        if (starGroup.current) {
            starGroup.current.rotation.y += 0.0002;
            starGroup.current.rotation.x += 0.00005;
        }
    });

    return (
        <group ref={starGroup}>
            {stars.map((pos, i) => (
                <mesh key={i} position={pos as [number, number, number]}>
                    <sphereGeometry args={[0.4, 6, 6]} />
                    <meshBasicMaterial color="white" />
                </mesh>
            ))}
        </group>
    );
}

export default function ThreeCanvas() {
    return (
        <Canvas camera={{ position: [0, 0, 12], fov: 75 }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Starfield />
            <RotatingCube />
        </Canvas>
    );
}

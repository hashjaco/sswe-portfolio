"use client";

import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";

interface SolarFlareProps {
    radius?: number;
    speed?: number;
    scale?: number;
}

export default function SolarFlare({ radius = 2.4, speed = 0.01, scale = 1 }: SolarFlareProps) {
    const ref = useRef<THREE.Mesh>(null);
    const texture = useLoader(TextureLoader, "/textures/flare.png");

    useFrame((state) => {
        if (!ref.current) return;

        // Orbiting rotation
        ref.current.rotation.z += speed;

        // Pulsing scale
        const pulse = Math.sin(state.clock.getElapsedTime() * 3) * 0.1 + 1;
        ref.current.scale.setScalar(pulse * scale);
    });

    return (
        <mesh ref={ref} position={[radius, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <planeGeometry args={[1, 1]} />
            <meshBasicMaterial
                map={texture}
                transparent={true}
                opacity={0.8}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                side={THREE.DoubleSide}
                toneMapped={false}
            />
        </mesh>
    );
}

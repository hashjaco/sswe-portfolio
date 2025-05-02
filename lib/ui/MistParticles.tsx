"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Mist() {
    const groupRef = useRef<THREE.Group>(null);

    // Generate 500 mist particles
    const particles = Array.from({ length: 500 }, () => ({
        position: [
            (Math.random() - 0.5) * 2000,
            (Math.random() - 0.5) * 2000,
            (Math.random() - 0.5) * 2000,
        ] as [number, number, number],
        size: Math.random() * 5 + 5,
    }));

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.00005;
            groupRef.current.rotation.x += 0.00002;
        }
    });

    return (
        <group ref={groupRef}>
            {particles.map((p, i) => (
                <mesh key={i} position={p.position}>
                    <sphereGeometry args={[p.size, 6, 6]} />
                    <meshBasicMaterial
                        color={"white"}
                        opacity={0.02}
                        transparent
                        depthWrite={false}
                        blending={THREE.AdditiveBlending}
                    />
                </mesh>
            ))}
        </group>
    );
}

export default function MistParticles() {
    return (
        <Canvas
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: -3,
                height: "100vh",
                width: "100vw",
                pointerEvents: "none",
            }}
            camera={{ position: [0, 0, 1] }}
        >
            <Mist />
        </Canvas>
    );
}

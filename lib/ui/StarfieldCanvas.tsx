// app/components/StarfieldCanvas.tsx
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useScroll } from "@react-three/drei";
import NebulaBackground from "@/lib/ui/NebulaBackground"; // helps with smooth scroll

/**
 * @function Stars
 * @description Generates a starfield background with gentle rotation
 * @param {number} count - Number of stars to generate
 * @constructor
 */
function Stars({count = 2000}: {count?: number}) {
    const groupRef = useRef<THREE.Group>(null);
    const scroll = useScroll();
    const stars = Array.from({ length: count }, () => [
        (Math.random() - 0.5) * 3000,
        (Math.random() - 0.5) * 3000,
        (Math.random() - 0.5) * 3000,
    ]);

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.0001; // gentle rotation
            groupRef.current.rotation.x += 0.00005;
        }
    });

    return (
        <group ref={groupRef}>
            {stars.map((pos, i) => (
                <mesh key={i} position={pos as [number, number, number]}>
                    <sphereGeometry args={[0.5, 6, 6]} />
                    <meshBasicMaterial color="white" />
                </mesh>
            ))}
        </group>
    );
}

/**
 * @function Comets
 * @description Generates comets that move across the screen
 */
function Comets() {
    const groupRef = useRef<THREE.Group>(null);
    const comets = Array.from({ length: 20 }, () => ({
        position: [
            (Math.random() - 0.5) * 3000,
            (Math.random() - 0.5) * 3000,
            (Math.random() - 0.5) * 3000,
        ] as [number, number, number],
        speed: Math.random() * 0.5 + 0.2,
    }));

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.children.forEach((comet, i) => {
                comet.position.x += comets[i].speed;
                comet.position.y += comets[i].speed * 0.5;

                // Reset position if comet flies out of view
                if (comet.position.x > 1500) comet.position.x = -1500;
                if (comet.position.y > 1500) comet.position.y = -1500;
            });
        }
    });

    return (
        <group ref={groupRef}>
            {comets.map((pos, idx) => (
                <mesh key={idx} position={pos.position}>
                    <sphereGeometry args={[1.5, 4, 4]} />
                    <meshBasicMaterial color="white" />
                </mesh>
            ))}
        </group>
    );
}

/**
 * @function StarfieldCanvas
 * @description A canvas component that renders a starfield and comets in the background
 */
export default function StarfieldCanvas() {
    return (
        <Canvas
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: -2,
                height: "100%",
                width: "100%",
                pointerEvents: "none",
            }}
            camera={{ position: [0, 0, 1] }}
        >
            <Stars />
            <Comets />
        </Canvas>
    );
}

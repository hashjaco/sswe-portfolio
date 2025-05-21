"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 300;

export default function SolarWindParticles() {
    const ref = useRef<THREE.Points>(null);

    const { positions, speeds } = useMemo(() => {
        const posArray = new Float32Array(PARTICLE_COUNT * 3);
        const speedArray: number[] = [];

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.random() * Math.PI;
            const r = 2.1 + Math.random() * 0.2; // start just outside sun

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            posArray.set([x, y, z], i * 3);
            speedArray.push(0.02 + Math.random() * 0.03);
        }

        return { positions: posArray, speeds: speedArray };
    }, []);

    useFrame(() => {
        if (!ref.current) return;

        const positions = ref.current.geometry.attributes.position.array as Float32Array;

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            let idx = i * 3;
            const len = Math.sqrt(
                positions[idx] ** 2 + positions[idx + 1] ** 2 + positions[idx + 2] ** 2
            );

            const scale = speeds[i] / len;

            positions[idx] += positions[idx] * scale;
            positions[idx + 1] += positions[idx + 1] * scale;
            positions[idx + 2] += positions[idx + 2] * scale;

            if (len > 10) {
                positions[idx] *= 0.2;
                positions[idx + 1] *= 0.2;
                positions[idx + 2] *= 0.2;
            }
        }

        ref.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial color="orange" size={0.05} sizeAttenuation={true} />
        </points>
    );
}
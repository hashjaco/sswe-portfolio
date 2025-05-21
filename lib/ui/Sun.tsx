"use client";

import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, TextureLoader } from "three";
import {FiberCanvasProps} from "@/types/canvas";
import SolarFlare from "@/lib/ui/SolarFlare";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

export default function Sun(props: FiberCanvasProps) {
    const sunRef = useRef<Mesh>(null);
    const texture = useLoader(TextureLoader, "assets/textures/flare.png");
    const { selectedObject, setSelectedObject } = props;

    const handleClick = () => {
        const object = selectedObject === "sun" ? undefined : "sun";

        if (setSelectedObject) {
            setSelectedObject(object);
        }
    };

    useFrame(() => {
        if (sunRef.current) {
            sunRef.current.rotation.y += 0.002; // slow rotation
        }
    });

    return (
        <>
            <mesh ref={sunRef} onClick={handleClick} position={[0, 0, 0]}>
                <sphereGeometry args={[3, 64, 64]}/>
                <meshStandardMaterial
                    map={texture}
                    // emissive="#FDB813"
                    // emissiveIntensity={1.5}
                    // color="#fdd835"
                    // roughness={0.3}
                    // metalness={0.1}
                />
            </mesh>
            {/* Add flares with variation */}
            {/*<SolarFlare radius={2.4} speed={0.01} scale={1.2} />*/}
            {/*<SolarFlare radius={2.5} speed={-0.015} scale={0.9} />*/}
            {/*<SolarFlare radius={2.3} speed={0.012} scale={1.0} />*/}
        </>
    );
}

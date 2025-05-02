"use client";

import { useLoader, extend } from "@react-three/fiber";
import { TextureLoader } from "three";
extend({ TextureLoader });

export default function NebulaBackground() {
    const texture = useLoader(TextureLoader, "/assets/nebula.png"); // <-- put a transparent nebula texture in public/assets

    return (
            <mesh>
                <planeGeometry args={[50, 50]} />
                <meshBasicMaterial map={texture} transparent={true} opacity={0.2} />
            </mesh>
    );
}

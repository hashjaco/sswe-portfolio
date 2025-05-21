"use client";

import { Canvas } from "@react-three/fiber";
import Sun from "./Sun";
import {useState} from "react";
import SolarWindParticles from "@/lib/ui/SolarWindParticles";

export default function StarfieldCanvasWithSun() {
    const [selectedObject, setSelectedObject] = useState<string | undefined>(undefined);

    return (
        <Canvas camera={{ position: [6,0,10], fov: 40 }}>
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={2} />
            <Sun selectedObject={selectedObject} setSelectedObject={setSelectedObject} />
            <SolarWindParticles />
        </Canvas>
    );
}

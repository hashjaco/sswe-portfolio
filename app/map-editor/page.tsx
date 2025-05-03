"use client";

import { Box, Heading } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import {useRef} from "react";
import VectorSource from "ol/source/Vector";
import {MapEditorProvider} from "@/lib/providers/MapEditorProvider";

// Dynamically load to avoid SSR issues
const MapEditor = dynamic(() => import("../../lib/ui/MapEditor"), {
    ssr: false,
});

export default function MapEditorPage() {
    if (typeof window === "undefined") return null;
    const vectorSource = useRef(new VectorSource({wrapX: false})).current;


    return (
        <Box p={6} w={"100%"} h="100%" bg="bg" color="text">
            <Heading size="lg" mb={4} color="text">
                Geospatial Map Editor
            </Heading>
            <Box
                borderWidth={1}
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                bg="bg"
                p={4}
                color="text"
                position="relative"
                zIndex={1}
                backdropFilter="blur(8px)"
                borderColor="whiteAlpha.200"
            >
                <MapEditorProvider vectorSource={vectorSource}>
                    <MapEditor/>
                </MapEditorProvider>
            </Box>

        </Box>
    );
}

"use client";

import {ReactNode, useRef} from "react";
import {Box, Button, Flex, HStack, Text} from "@chakra-ui/react";
import Link from "next/link";
import {MapEditorProvider} from "@/lib/providers/MapEditorProvider";
import VectorSource from "ol/source/Vector";
import ExportButton from "@/lib/ui/Exporter";
import ImportButton from "@/lib/ui/Importer";


export default function MapEditorLayout({children}: { children: ReactNode }) {
    const vectorSource = useRef(new VectorSource({wrapX: false})).current;

    return (
        <MapEditorProvider vectorSource={vectorSource}>
            <Flex direction="column" h="100vh" bg="transparent">
                {/* Top Navigation Bar */}
                <Box
                    as="header"
                    p={4}
                    bg="gray.800"
                    borderBottom="1px solid"
                    borderColor="whiteAlpha.200"
                    zIndex={1000}
                >
                    <HStack gap={4} justify="space-between">
                        <HStack gap={4}>
                            <Link href={"/"}>
                                <Button
                                    variant="ghost"
                                    color="white"
                                    size="sm"
                                    _hover={{bg: "whiteAlpha.200"}}
                                >
                                    ← Home
                                </Button>
                            </Link>
                            <Text fontSize="sm" color="gray.400">
                                Map Editor Dashboard
                            </Text>
                        </HStack>

                        <HStack gap={2}>
                            <ImportButton />
                            <ExportButton />

                        </HStack>
                    </HStack>
                </Box>

                {/* Body */}
                <Flex flex="1" direction="row" width="100%" bg={'transparent'}>
                    {children}
                </Flex>
            </Flex>
        </MapEditorProvider>
    );
}

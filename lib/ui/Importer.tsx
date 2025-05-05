"use client";

import {
    Button,
    VStack,
    Input,
    Text,
    Spinner,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { importFeaturesFromGeoJSON, importFeaturesFromURL } from "@/lib/utils/import";
import { useMapEditor } from "@/lib/hooks/map-editor";
import {useToast} from "@chakra-ui/toast";
import {
    Popover,
    PopoverArrow, PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger
} from "@chakra-ui/popover";



export default function ImportPopover() {
    const { setFeatures, vectorSource } = useMapEditor();
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [url, setUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        importFeaturesFromGeoJSON(file, vectorSource, setFeatures);
        toast({
            title: "Import successful",
            description: `${file.name} was added to the map.`,
            status: "success",
            duration: 3000,
            isClosable: true,
        });

        e.target.value = "";
    };

    const handleImportFromURL = async () => {
        setIsLoading(true);
        try {
            await importFeaturesFromURL(url, vectorSource, setFeatures);
            toast({
                title: "Import successful",
                description: "Features loaded from remote URL.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
            setUrl("");
        } catch (err) {
            toast({
                title: "Import failed",
                description: "Check if the URL points to a valid GeoJSON file.",
                status: "error",
                duration: 4000,
                isClosable: true,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Popover placement="bottom-end" closeOnBlur>
            <PopoverTrigger>
                <Button
                    size="sm"
                    variant="outline"
                    bg="teal"
                    px={2}
                    color="white"
                    borderColor="whiteAlpha.200">
                    Import
                </Button>
            </PopoverTrigger>
            <PopoverContent bg="gray.800" borderColor="whiteAlpha.200" color="white" w="260px">
                <PopoverArrow bg="gray.800" />
                <PopoverCloseButton />
                <PopoverHeader borderBottom="1px solid" borderColor="whiteAlpha.200">
                    Import Data
                </PopoverHeader>
                <PopoverBody>
                    <VStack align="stretch" gap={4} bg={'gray.800'} p={4} borderRadius="md">
                        {/* File Upload */}
                        <VStack align="stretch" gap={2}>
                            <Text fontSize="sm" color="gray.300">
                                Upload a .geojson file:
                            </Text>
                            <Input
                                type="file"
                                accept=".geojson,application/geo+json"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                size="sm"
                                bg="gray.700"
                                color="white"
                                borderColor="whiteAlpha.300"
                                _hover={{ bg: "gray.600" }}
                            />
                        </VStack>

                        {/* URL Input */}
                        <VStack align="stretch" gap={2}>
                            <Text fontSize="sm" color="gray.300">
                                Or load from a URL:
                            </Text>
                            <Input
                                placeholder="https://example.com/yourfile.geojson"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                size="sm"
                                bg="gray.700"
                                color="white"
                                borderColor="whiteAlpha.300"
                                _hover={{ bg: "gray.600" }}
                            />
                            <Button
                                size="sm"
                                variant="solid"
                                colorScheme="teal"
                                onClick={handleImportFromURL}
                                disabled={!url || isLoading}
                            >
                                {isLoading ? <Spinner size="xs" /> : "Load URL"}
                            </Button>
                        </VStack>
                    </VStack>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
}

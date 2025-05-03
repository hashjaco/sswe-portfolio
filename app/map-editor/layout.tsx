// app/map-editor/layout.tsx
"use client";

import {ReactNode} from "react";
import {Box, Button, Flex, HStack, Spacer, Text} from "@chakra-ui/react";
import Link from "next/link";

export default function MapEditorLayout({children}: { children: ReactNode }) {
    return (
        <Flex direction="column" h="100vh" bg="black">
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
                        {/* Optional: Theme Toggle */}
                        {/* <ColorModeToggle /> */}

                        {/* Export button placeholder */}
                        <Button
                            variant="outline"
                            size="sm"
                            colorScheme="teal"
                            onClick={() => {
                                // We'll implement real export in the next step
                                alert("Export coming soon!");
                            }}
                        >
                            Export
                        </Button>
                    </HStack>
                </HStack>
            </Box>

            {/* Body */}
            <Flex flex="1" direction="row" width="100%">
                {children}
            </Flex>
        </Flex>
    );
}

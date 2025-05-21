"use client";

import {Box, Heading, HStack, Text, VStack} from "@chakra-ui/react";
import dynamic from "next/dynamic";

const StarfieldCanvas = dynamic(() => import("./StarfieldCanvasWithSun"), { ssr: false });

export default function AstronomyHero() {
    return (
        <HStack
            as="section"
            h="100vh"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            px={{ base: 6, md: 16 }}
            bg="transparent"
            color="white"
        >
            {/* Left Text Content */}
            <VStack align="start" gap={4} zIndex={10}>
                <Heading fontSize="6xl" lineHeight="1.2" bgGradient="linear(to-r, teal.300, yellow.400)" bgClip="text" zIndex={10}>
                    Hey friends! I'm Hashim
                </Heading>
                <Text fontSize="lg" maxW="lg" color="gray.300">
                    I'm a passionate software engineer with a love for astronomy and space exploration. Join me on my journey to explore the universe through code and creativity.
                </Text>
                <Text fontSize="sm" color="gray.500">
                    Learn more about me ↓
                </Text>
            </VStack>

            {/* Right Visual */}
            <Box w="50%" h="100%" position="relative">
                <StarfieldCanvas />
            </Box>
        </HStack>
    );
}

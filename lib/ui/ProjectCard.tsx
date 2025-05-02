"use client";

import { Box, Heading, Text, Badge, VStack } from "@chakra-ui/react";
import { motion, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

interface Project {
    title: string;
    description: string;
    tags: string[];
}

const MotionBox = motion(Box);

export default function ProjectCard({ project }: { project: Project }) {
    const orbitX = useMotionValue(0);
    const orbitY = useMotionValue(0);
    const ref = useRef<HTMLDivElement>(null);

    // Animate orbit
    useAnimationFrame((t) => {
        orbitX.set(Math.sin(t / 1000) * 5); // 5px side to side
        orbitY.set(Math.cos(t / 1500) * 5); // 5px up and down
    });

    return (
        <MotionBox
            ref={ref}
            style={{
                x: orbitX,
                y: orbitY,
            }}
            borderWidth="1px"
            borderRadius="lg"
            p={6}
            shadow="lg"
            bg="background"
            whileHover={{
                scale: 1.05,
                rotateZ: 0.5, // small warp
                boxShadow: "0px 16px 48px rgba(255, 255, 255, 0.2)",
            }}
            transition={{ type: "spring", stiffness: 150, damping: 18 }}
            position="relative"
            overflow="hidden"
            role="group"
            cursor="pointer"
        >
            {/* Glow Overlay */}
            <Box
                position="absolute"
                top={-10}
                left={-10}
                right={-10}
                bottom={-10}
                bg="linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 100%)"
                pointerEvents="none"
                opacity={0.6}
                filter="blur(12px)"
                zIndex={0}
            />

            <VStack gap={3} align="start" position="relative" zIndex={1}>
                <Heading
                    as="h3"
                    size="md"
                    color="text"
                    _groupHover={{ color: "brand.500" }}
                >
                    {project.title}
                </Heading>
                <Text color="text">{project.description}</Text>
                <Box>
                    {project.tags.map((tag, i) => (
                        <Badge key={i} colorScheme="teal" mr={1}>
                            {tag}
                        </Badge>
                    ))}
                </Box>
            </VStack>
        </MotionBox>
    );
}

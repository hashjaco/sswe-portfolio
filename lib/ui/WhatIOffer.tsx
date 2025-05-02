"use client";

import {
    Box,
    Heading,
    Text,
    SimpleGrid,
    Icon,
    VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
    LuCpu,
    LuServer,
    LuChartBar,
    LuUsers,
    LuLightbulb,
    LuRocket,
} from "react-icons/lu";

const MotionBox = motion(Box);

const offerings = [
    {
        title: "Performance-Oriented Frontend",
        description:
            "React and Next.js specialist focused on speed, UX, and maintainability.",
        icon: LuCpu,
    },
    {
        title: "Scalable Backend Engineering",
        description:
            "Node.js, Python, serverless functions, database design, and auth flows.",
        icon: LuServer,
    },
    {
        title: "Big Data & Systems",
        description:
            "Experience integrating large datasets, building efficient APIs and dashboards.",
        icon: LuChartBar,
    },
    {
        title: "Design-Driven Thinking",
        description:
            "I approach features with empathy, simplicity, and user-centered design.",
        icon: LuLightbulb,
    },
    {
        title: "Stakeholder Communication",
        description:
            "Clear, confident communication with product, design, and leadership teams.",
        icon: LuUsers,
    },
    {
        title: "Deployment & Infrastructure",
        description:
            "CI/CD, AWS, DynamoDB, and dev workflows — shipping production-grade code.",
        icon: LuRocket,
    },
];

export default function WhatIOffer() {
    return (
        <Box maxW="7xl" mx="auto" my={24} px={6}>
            <Heading
                as="h2"
                size="xl"
                textAlign="center"
                mb={12}
                color="text"
            >
                How I Can Help You
            </Heading>

            <SimpleGrid columns={[1, 2, 3]} gap={10}>
                {offerings.map((item, i) => (
                    <MotionBox
                        key={i}
                        bg="rgba(255, 255, 255, 0.02)"
                        p={6}
                        borderRadius="xl"
                        border="1px solid"
                        borderColor="whiteAlpha.200"
                        backdropFilter="blur(8px)"
                        color="text"
                        whileHover={{ y: -6, scale: 1.02 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <VStack align="start" gap={4}>
                            <Icon as={item.icon} boxSize={6} color="brand.400" />
                            <Heading size="md">{item.title}</Heading>
                            <Text color="text" fontSize="sm">
                                {item.description}
                            </Text>
                        </VStack>
                    </MotionBox>
                ))}
            </SimpleGrid>
        </Box>
    );
}

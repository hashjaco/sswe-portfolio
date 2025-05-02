// app/components/AboutMe.tsx
"use client";

import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function AboutMe() {
    return (
        <MotionBox
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            maxW="2xl"
            mx="auto"
            my={24}
            textAlign="center"
        >
            <VStack gap={6}>
                <Heading size="2xl" color="text">
                    About Me
                </Heading>
                <Text fontSize="lg" color="text">
                    I’m Hashim, a Senior Fullstack Engineer building immersive experiences that live between technology and imagination.
                    I craft scalable systems, elegant interfaces, and dream of traveling the cosmic void beyond galaxy clusters.
                </Text>
            </VStack>
        </MotionBox>
    );
}

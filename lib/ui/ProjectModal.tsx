"use client";

import {
    Box,
    Heading,
    Text,
    VStack,
    IconButton,
    Image,
    Link as ChakraLink,
    HStack,
    Badge,
} from "@chakra-ui/react";
import {motion, AnimatePresence} from "framer-motion";
import {LuX, LuExternalLink} from "react-icons/lu";
import {ProjectData} from "@/types/projects";

interface ProjectModalProps {
    project: ProjectData;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectModal(props: ProjectModalProps) {
    const {project, isOpen, onClose} = props;
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        zIndex: 30,
                        width: "100vw",
                        height: "100vh",
                        background: "rgba(0,0,0,0.9)",
                        backdropFilter: "blur(8px)",
                    }}
                >
                    <Box
                        maxW="6xl"
                        mx="auto"
                        py={12}
                        px={6}
                        overflowY="auto"
                        height="100%"
                        position="relative"
                        color="text"
                    >
                        <IconButton
                            aria-label="Close"
                            position="absolute"
                            top={4}
                            right={4}
                            size="lg"
                            onClick={onClose}
                            colorScheme="teal"
                            variant="ghost"
                        >
                            <LuX/>
                        </IconButton>

                        <VStack gap={6} align="start" mt={10}>
                            <Heading size="2xl">{project.title}</Heading>

                            <HStack gap={2} flexWrap="wrap">
                                {project.stack?.map((tech) => (
                                    <Badge key={tech} size="md" variant="subtle" colorScheme="teal">
                                        {tech}
                                    </Badge>
                                ))}
                            </HStack>

                            <Text fontSize="md" maxW="3xl">
                                {project.description}
                            </Text>

                            <HStack gap={4}>
                                {project.github && (
                                    <ChakraLink href={project.github}>
                                        <LuExternalLink/> GitHub
                                    </ChakraLink>
                                )}
                                {project.live && (
                                    <ChakraLink href={project.live}>
                                        <LuExternalLink/> Live Demo
                                    </ChakraLink>
                                )}
                            </HStack>

                            {project.images?.map((src, i) => (
                                <Image
                                    key={i}
                                    src={src}
                                    alt={`${project.title} screenshot ${i + 1}`}
                                    borderRadius="md"
                                    maxH="360px"
                                    objectFit="cover"
                                />
                            ))}
                        </VStack>
                    </Box>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

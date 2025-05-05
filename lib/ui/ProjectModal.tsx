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
import {useEffect} from "react";
import {useProjectModal} from "@/lib/hooks/project-modal";
import {fetchImages, getImageUrl} from "@/lib/utils/projects";
import {useSupabase} from "@/lib/hooks/supabase";


interface ProjectModalProps {

}


export default function ProjectModal(_props: ProjectModalProps) {
    const {selectedProject, setSelectedProject} = useProjectModal()
    const client = useSupabase();
    
    if (!selectedProject) return null;

    const {bucketDir, title, description, stack, github, live, images} = selectedProject;

    return (
        <AnimatePresence>
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
                            onClick={() => setSelectedProject(null)}
                            colorScheme="teal"
                            variant="ghost"
                        >
                            <LuX/>
                        </IconButton>

                        <VStack gap={6} align="start" mt={10}>
                            <Heading size="2xl">{title}</Heading>

                            <HStack gap={2} flexWrap="wrap">
                                {stack?.map((tech) => (
                                    <Badge key={tech} size="md" variant="subtle" colorScheme="teal">
                                        {tech}
                                    </Badge>
                                ))}
                            </HStack>

                            <Text fontSize="md" maxW="3xl">
                                {description}
                            </Text>

                            <HStack gap={4}>
                                {github && (
                                    <ChakraLink href={github}>
                                        <LuExternalLink/> GitHub
                                    </ChakraLink>
                                )}
                                {live && (
                                    <ChakraLink href={live}>
                                        <LuExternalLink/> Live Demo
                                    </ChakraLink>
                                )}
                            </HStack>

                            {bucketDir && images?.map((src, i) => (
                                <Image
                                    key={i}
                                    src={getImageUrl(bucketDir, src)}
                                    alt={src}
                                    borderRadius="md"
                                    maxH="360px"
                                    objectFit="cover"
                                />
                            ))}
                        </VStack>
                    </Box>
                </motion.div>
        </AnimatePresence>
    );
}

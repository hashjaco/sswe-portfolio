"use client";

import {Box, Heading, Text, VStack, Image, Button, Badge} from "@chakra-ui/react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import Link from "next/link";
import { ProjectData } from "@/types/projects";
import { useProjectModal } from "@/lib/hooks/project-modal";
import {useRef} from "react";
import {getImageUrl} from "@/lib/utils/projects";

const MotionBox = motion(Box);

interface ProjectCardProps {
    animate?: boolean;
    idx: number;
    project: ProjectData;
}

export default function ProjectCard(props: ProjectCardProps) {
    const { animate, idx, project} = props;
    const orbitX = useMotionValue(0);
    const orbitY = useMotionValue(0);
    const { setSelectedProject } = useProjectModal();

    const ref = useRef<HTMLDivElement>(null);


    if (animate) {
        useAnimationFrame((t) => {
            orbitX.set(Math.sin(t / 1000) * 5); // 5px side to side
            orbitY.set(Math.cos(t / 1500) * 5); // 5px up and down
        });
    }

    return (
        <MotionBox
            bg="rgba(255, 255, 255, 0.02)"
            _hover={{
                cursor: "pointer",
            }}
            ref={ref}
            p={4}
            borderRadius="xl"
            onClick={setSelectedProject? () => setSelectedProject(project) : undefined}
            border="1px solid"
            borderColor="whiteAlpha.200"
            backdropFilter="blur(8px)"
            color="text"
            whileHover={{y: -6, scale: 1.02}}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.4, delay: idx * 0.1}}
            viewport={{once: true}}
        >
            <VStack align="start" gap={4}>
                <Image
                    src={getImageUrl(project.bucketDir!, project.cardImg!)}
                    alt={project.title}
                    borderRadius="lg"
                    objectFit="cover"
                    width="100%"
                    height="160px"
                />
                <Heading size="md">{project.title}</Heading>
                <Text fontSize="sm" color="text">
                    {project.description}
                </Text>
                {project.tags && <Box>
                    {project.tags.map((tag, i) => (
                        <Badge key={i} bg="teal" mr={1} px={2} py={1} borderRadius="md" color="white">
                            <Text px={2}>{tag}</Text>
                        </Badge>
                    ))}
                </Box>}
                <Link href={project.live || ""}>
                    <Button
                        variant="outline"
                        bg="teal"
                        px={3}
                        _hover={{
                            cursor: "pointer",
                            bg: "teal.500",
                            color: "white",
                        }}
                        size="sm"
                    >
                        View Project
                    </Button>
                </Link>

            </VStack>
        </MotionBox>
    );
}

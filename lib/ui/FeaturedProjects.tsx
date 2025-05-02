"use client";

import {
    Box,
    Heading,
    Text,
    Image,
    VStack,
    Button,
    SimpleGrid,
} from "@chakra-ui/react";
import {motion} from "framer-motion";
import Link from "next/link";
import ProjectModal from "@/lib/ui/ProjectModal";
import {useState} from "react";
import {ProjectData} from "@/types/projects";

const MotionBox = motion(Box);


const projects: ProjectData[] = [
    {
        title: "Geospatial Editor",
        description:
            "Built an OpenLayers-powered editor for creating and modifying spatial features on top of raster images.",
        stack: [
            "React",
            "TypeScript",
            "OpenLayers",
            "PostgreSQL",
            "Node.js",
        ],
        cardImg: "/projects/geospatial-editor.png",
        images: ["/projects/geospatial-editor.png"],
        github: "",
        live: "/map-editor",

    },
    {
        title: "Security MDR Dashboard",
        description:
            "Real-time threat detection dashboard using React, MobX, and IndexedDB. Supports incident triage and team workflows.",
        stack: [
            "React",
            "TypeScript",
            "MobX",
            "IndexedDB",
            "Chakra UI",
        ],
        cardImg: "/assets/projects/mdr-dashboard/insights-top.png",
        images: ["/assets/projects/security-dashboard.png"],
        github: "",
        live: "https://vsoc.armaturesystems.com",
    },
    {
        title: "Pet Adoption Platform",
        description:
            "End-to-end platform for adopting, purchasing, and delivering pets. Built with Supabase, Expo, and Cognito.",
        stack: [
            "React",
            "TypeScript",
            "Expo",
            "Supabase",
            "AWS Cognito",
        ],
        cardImg: "/projects/pet-adoption.png",
        images: ["/projects/pet-adoption.png"],
        github: "",
        live: "https://app.petstore.com",
    },
] as const;


/**
 * @function FeaturedProjects
 * @description A component that displays a grid of featured projects.
 * It uses Chakra UI for styling and Framer Motion for animations.
 * The projects are displayed in a responsive grid layout, with each project card containing an image, title, description, and a button to view the project.
 */
export default function FeaturedProjects() {
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

    return (
        <Box maxW="7xl" mx="auto" px={6} my={24}>
            <Heading
                as="h2"
                size="xl"
                textAlign="center"
                mb={12}
                color="text"
            >
                Projects I’ve Built
            </Heading>

            <SimpleGrid columns={[1, 2, 3]} gap={10}>
                {projects.map((project, i) => (
                    <MotionBox
                        key={i}
                        bg="rgba(255, 255, 255, 0.02)"
                        _hover={{
                            cursor: "pointer",
                        }}
                        p={4}
                        borderRadius="xl"
                        onClick={() => setSelectedProject(project)}
                        border="1px solid"
                        borderColor="whiteAlpha.200"
                        backdropFilter="blur(8px)"
                        color="text"
                        whileHover={{y: -6, scale: 1.02}}
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.4, delay: i * 0.1}}
                        viewport={{once: true}}
                    >
                        <VStack align="start" gap={4}>
                            <Image
                                src={project.cardImg}
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
                            <Link href={project.live || ""}>
                                <Button
                                    variant="outline"
                                    colorScheme="teal"
                                    _hover={{
                                        cursor: "pointer",
                                    }}
                                    size="sm"
                                >
                                    View Project
                                </Button>
                            </Link>

                        </VStack>
                    </MotionBox>
                ))}
            </SimpleGrid>
            <ProjectModal
                project={selectedProject!}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </Box>
    );
}

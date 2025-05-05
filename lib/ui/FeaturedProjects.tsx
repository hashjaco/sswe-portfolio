import {
    Box,
    Heading,
    SimpleGrid,
} from "@chakra-ui/react";
import {projects} from "@/lib/constants/projects";
import ProjectCard from "@/lib/ui/ProjectCard";


/**
 * @function FeaturedProjects
 * @description A component that displays a grid of featured projects.
 * It uses Chakra UI for styling and Framer Motion for animations.
 * The projects are displayed in a responsive grid layout, with each project card containing an image, title, description, and a button to view the project.
 */
export default function FeaturedProjects() {
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
                    <ProjectCard key={i} idx={i} animate={true} project={project} />
                ))}
            </SimpleGrid>
        </Box>
    );
}

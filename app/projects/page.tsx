import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "@/lib/ui/ProjectCard";
import StarfieldCanvas from "@/lib/ui/StarfieldCanvas";
import {projects} from "@/lib/constants/projects";

export default function Projects() {
    return (
        <Box position="relative" overflow="hidden" minHeight="100vh" py={10}>
            <StarfieldCanvas />
            <Heading as="h1" mb={10} textAlign="center" color="text">
                Featured Projects
            </Heading>
            <SimpleGrid columns={[1, 2, 3]} gap={10}>
                {projects.map((project, i) => (
                    <ProjectCard key={JSON.stringify(project)} idx={i} project={project} animate={true} />
                ))}
            </SimpleGrid>
        </Box>
    );
}

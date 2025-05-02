import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "@/lib/ui/ProjectCard";
import StarfieldCanvas from "@/lib/ui/StarfieldCanvas";

const projects = [
    {
        title: "GIS Editor with OpenLayers",
        description: "An interactive editor for geospatial data.",
        tags: ["React", "TypeScript", "OpenLayers"]
    },
    {
        title: "Security MDR Dashboard",
        description: "Real-time monitoring dashboard for security events.",
        tags: ["React", "TypeScript", "Chakra UI"]
    },
    {
        title: "Sneaker Reseller Price Tracker",
        description: "A multi-platform price tracker for sneaker enthusiasts.",
        tags: ["React", "Web Scraping"]
    },
    {
        title: "PetStore Expo App",
        description: "A feature-rich expo app for pet store management.",
        tags: ["React", "Expo", "CI/CD"]
    }
];

export default function Projects() {
    return (
        <Box position="relative" overflow="hidden" minHeight="100vh" py={10}>
            <StarfieldCanvas />
            <Heading as="h1" mb={10} textAlign="center" color="text">
                Featured Projects
            </Heading>
            <SimpleGrid columns={[1, 2, 3]} gap={10}>
                {projects.map((project, i) => (
                    <ProjectCard key={i} project={project} />
                ))}
            </SimpleGrid>
        </Box>
    );
}

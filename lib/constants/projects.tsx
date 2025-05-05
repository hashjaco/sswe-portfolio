import {ProjectData} from "@/types/projects";

export const projects: ProjectData[] = [
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
        cardImg: "insights-top.png",
        images: [
            "insights-top.png",
            "insights-map.png",
            "insights-map-zoomed.png",
            "insights-noise-reduction.png",
        ],
        bucketDir: "mdr-dashboard",
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

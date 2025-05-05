'use client';

import {ReactNode, useState} from "react";
import {ProjectData} from "@/types/projects";
import {ProjectModalContext} from "@/lib/contexts/ProjectModalContext";

export default function ProjectModalProvider({ children }: { children: ReactNode }) {
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

    return (
        <ProjectModalContext.Provider value={{ selectedProject, setSelectedProject }}>
            {children}
        </ProjectModalContext.Provider>
    );
}

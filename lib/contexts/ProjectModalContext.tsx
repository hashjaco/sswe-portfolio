import {ProjectData} from "@/types/projects";
import {createContext, Dispatch, SetStateAction} from "react";


interface ProjectModalContextType {
    selectedProject: ProjectData | null;
    setSelectedProject: Dispatch<SetStateAction<ProjectData | null>>;
}

export const ProjectModalContext = createContext<ProjectModalContextType | undefined>(undefined);

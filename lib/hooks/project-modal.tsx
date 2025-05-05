import {use} from "react";
import {ProjectModalContext} from "@/lib/contexts/ProjectModalContext";


export function useProjectModal() {
    const context = use(ProjectModalContext);
    if (!context) {
        throw new Error("useProjectModal must be used within a ProjectModalProvider");
    }
    return context;
}
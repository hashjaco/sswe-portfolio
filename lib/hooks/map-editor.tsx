import {use} from "react";
import {MapEditorContext} from "@/lib/contexts/MapEditorContext";

export function useMapEditor() {
    const context = use(MapEditorContext);
    if (!context) {
        throw new Error("useEditorSidebar must be used within EditorSidebarProvider");
    }
    return context;
}

import {ReactNode, useState} from "react";
import {Feature} from "ol";
import {MapEditorContext} from "@/lib/contexts/MapEditorContext";
import {DrawType, TileType, ToolMode} from "@/types/map-editor";

/**
 * @function MapEditorProvider
 * @description A provider for the map editor context.
 * @param children
 * @param vectorSource - The vector source to be used in the map editor.
 */
export function MapEditorProvider({children, vectorSource}: {
    children: ReactNode;
    vectorSource: any;
}) {
    const [features, setFeatures] = useState<Feature[]>([]);
    const [drawType, setDrawType] = useState<DrawType>("Point");
    const [fillColor, setFillColor] = useState("#00ffff");
    const [strokeColor, setStrokeColor] = useState("#2cb1bc");
    const [strokeWidth, setStrokeWidth] = useState<number[]>([2]);
    const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
    const [toolMode, setToolMode] = useState<ToolMode>("draw");
    const [tileType, setTileType] = useState<TileType>("osm");
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <MapEditorContext.Provider
            value={{
                features,
                setFeatures,
                vectorSource,
                drawType,
                setDrawType,
                fillColor,
                setFillColor,
                strokeColor,
                setStrokeColor,
                strokeWidth,
                setStrokeWidth,
                selectedFeature,
                setSelectedFeature,
                toolMode,
                setToolMode,
                tileType,
                setTileType,
                menuOpen,
                setMenuOpen,
            }}
        >
            {children}
        </MapEditorContext.Provider>
    );
}

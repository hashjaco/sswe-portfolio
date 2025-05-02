"use client";

import {
    createContext,
    Dispatch,
    SetStateAction,
} from "react";
import { Feature } from "ol";

type DrawType = "Point" | "LineString" | "Polygon";
type ToolMode = "draw" | "select";
type TileType = "osm" | "dark";

interface MapEditorContextProps {
    features: Feature[];
    setFeatures: Dispatch<SetStateAction<Feature[]>>;

    vectorSource: any;

    drawType: DrawType;
    setDrawType: Dispatch<SetStateAction<DrawType>>;

    fillColor: string;
    setFillColor: Dispatch<SetStateAction<string>>;

    strokeColor: string;
    setStrokeColor: Dispatch<SetStateAction<string>>;

    strokeWidth: number[];
    setStrokeWidth: Dispatch<SetStateAction<number[]>>;

    selectedFeature: Feature | null;
    setSelectedFeature: Dispatch<SetStateAction<Feature | null>>;

    toolMode: ToolMode;
    setToolMode: Dispatch<SetStateAction<ToolMode>>;

    tileType: TileType;
    setTileType: Dispatch<SetStateAction<TileType>>;
}

export const MapEditorContext = createContext<MapEditorContextProps | undefined>(undefined);


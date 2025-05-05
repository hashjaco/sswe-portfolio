"use client";

import {Box,} from "@chakra-ui/react";
import {useEffect, useRef} from "react";
import Map from "ol/Map";
import View from "ol/View";
import OSM from "ol/source/OSM";
import XYZ from "ol/source/XYZ";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import {Draw, Select as OlSelect} from "ol/interaction";
import {Circle as CircleStyle, Fill, Stroke, Style} from "ol/style";
import {fromLonLat} from "ol/proj";
import "ol/ol.css";
import {click} from "ol/events/condition";
import EditorSidebar from "@/lib/ui/MapEditorSidebar/MapEditorSidebar";
import {useMapEditor} from "@/lib/hooks/map-editor";
import MapEditorSpeedDialToolbar from "@/lib/ui/MapEditorSpeeddialToolbar/MapEditorSpeedDialToolbar";


/**
 * @function MapEditor
 * @description A React component that renders an OpenLayers map editor with drawing capabilities.
 * It allows users to select different map styles and drawing types (Point, LineString, Polygon).
 */
export default function MapEditor() {

    const mapRef = useRef<HTMLDivElement | null>(null);
    const mapInstance = useRef<Map | null>(null);

    const {
        setFeatures,
        vectorSource,
        drawType,
        fillColor,
        strokeColor,
        strokeWidth,
        setSelectedFeature,
        toolMode,
        tileType,
        menuOpen
    } = useMapEditor();

    const selectRef = useRef<OlSelect | null>(null);

    const baseLayer = {
        osm: new TileLayer({source: new OSM()}),
        dark: new TileLayer({
            source: new XYZ({
                url: "https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
            }),
        }),
    };

    const getDraw = () => {
        return new Draw({
            source: vectorSource,
            type: drawType,
            style: new Style({
                fill: new Fill({color: fillColor}),
                stroke: new Stroke({color: strokeColor, width: strokeWidth[0]}),
                image: new CircleStyle({
                    radius: 6,
                    fill: new Fill({color: fillColor}),
                    stroke: new Stroke({color: strokeColor, width: strokeWidth[0]}),
                }),
            }),
        });
    }

    useEffect(() => {
        if (mapRef.current && !mapInstance.current) {
            const vectorLayer = new VectorLayer({
                source: vectorSource,
                style: new Style({
                    fill: new Fill({color: "rgba(0, 255, 255, 0.1)"}),
                    stroke: new Stroke({color: "#38bec9", width: 2}),
                    image: new CircleStyle({
                        radius: 6,
                        fill: new Fill({color: "#2cb1bc"}),
                    }),
                }),
            });

            mapInstance.current = new Map({
                target: mapRef.current,
                layers: [baseLayer[tileType], vectorLayer],
                view: new View({
                    center: fromLonLat([-122.4194, 37.7749]), // SF
                    zoom: 12,
                    minZoom: 4,
                    maxZoom: 20,
                }),
            });
        }
    }, []);

    useEffect(() => {
        const map = mapInstance.current;
        if (!map) return;

        if (toolMode === "select") {
            const select = new OlSelect({ condition: click });
            map.addInteraction(select);
            selectRef.current = select;

            select.on("select", (e) => {
                setSelectedFeature(e.selected[0] ?? null);
            });

            return () => {
                map.removeInteraction(select);
            };
        }

        if (toolMode === "draw") {
            const draw = getDraw()
            map.addInteraction(draw);
            draw.on("drawend", (e) => {
                setFeatures((prev) => [...prev, e.feature]);
            });

            return () => {
                map.removeInteraction(draw);
            };
        }
    }, [toolMode]);

    useEffect(() => {
        const map = mapInstance.current;
        if (!map) return;

        // Update layers
        map.getLayers().setAt(0, baseLayer[tileType]);
    }, [tileType]);

    useEffect(() => {
        const map = mapInstance.current;
        if (!map) return;

        // Remove previous draw interaction
        map.getInteractions().forEach((interaction) => {
            if (interaction instanceof Draw) map.removeInteraction(interaction);
        });

        if (menuOpen){
            // disable map interactions so that clicks don't trigger map events
            map.getInteractions().forEach((interaction) => {
                if (interaction instanceof OlSelect) interaction.setActive(false);
                if (interaction instanceof Draw) interaction.setActive(false);
            });
            return;
        }

        const draw = getDraw()
        map.addInteraction(draw);

        draw.on("drawend", (e) => {
            e.feature.setStyle(new Style({
                fill: new Fill({color: fillColor}),
                stroke: new Stroke({color: strokeColor, width: strokeWidth[0]}),
                image: new CircleStyle({
                    radius: 6,
                    fill: new Fill({color: fillColor}),
                    stroke: new Stroke({color: strokeColor, width: strokeWidth[0]}),
                }),
            }));

            setFeatures((prev) => [...prev, e.feature]);
        });
    }, [drawType, menuOpen]);

    return (
        <Box position="relative" bg={'transparent'} w="100%" h="500px" borderRadius="xl" overflow="hidden">
            <div ref={mapRef} style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
            }}/>
            {/*<EditorSidebar/>*/}
            <MapEditorSpeedDialToolbar />
        </Box>
    );
}

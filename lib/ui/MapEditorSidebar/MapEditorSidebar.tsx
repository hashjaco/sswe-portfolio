"use client";

import {
    Box,
    VStack,
    Text,
    Input,
    Button,
    Separator,
    Slider
} from "@chakra-ui/react";
import { Feature } from "ol";
import {ChangeEvent, Dispatch, SetStateAction, useEffect, useState} from "react";
import { Style, Fill, Stroke, Circle as CircleStyle } from "ol/style";
import FeatureLayerManager from "@/lib/ui/FeatureLayerManager";
import SelectedFeatureEditor from "@/lib/ui/MapEditorSidebar/SelectedFeatureEditor";
import {selectStyle} from "@/lib/ui/MapEditorSidebar/styles";
import MapSelector from "@/lib/ui/MapEditorSidebar/MapSelector";
import DrawModeSelector from "@/lib/ui/MapEditorSidebar/DrawModeSelector";
import GlobalStyleEditor from "@/lib/ui/MapEditorSidebar/GlobalStyleEditor";
import DrawToolSelector from "@/lib/ui/MapEditorSidebar/DrawToolSelector";
import {useMapEditor} from "@/lib/hooks/map-editor";

type DrawType = "Point" | "LineString" | "Polygon";

interface EditorSidebarProps {
}

/**
 * @function EditorSidebar
 * @description A component to edit the map editor features.
 * @param props
 * @constructor
 */
export default function EditorSidebar(props: EditorSidebarProps) {
    const {
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
    } = useMapEditor();

    // State for selected feature style
    const [featureFill, setFeatureFill] = useState(fillColor);
    const [featureStroke, setFeatureStroke] = useState(strokeColor);
    const [featureWidth, setFeatureWidth] = useState(strokeWidth);

    useEffect(() => {
        if (selectedFeature) {
            const style = selectedFeature.getStyle() as Style;
            if (!style) return;

            const fill = style.getFill()?.getColor();
            const stroke = style.getStroke()?.getColor();
            const width = style.getStroke()?.getWidth();

            if (typeof fill === "string") setFeatureFill(fill);
            if (typeof stroke === "string") setFeatureStroke(stroke);
            if (Array.isArray(width)) setFeatureWidth(width);
        }
    }, [selectedFeature]);

    const applyFeatureStyle = () => {
        if (!selectedFeature) return;

        const fill = new Fill({ color: featureFill });
        const stroke = new Stroke({ color: featureStroke, width: featureWidth[0] });

        selectedFeature.setStyle(
            new Style({
                fill,
                stroke,
                image: new CircleStyle({
                    radius: 6,
                    fill,
                    stroke,
                }),
            })
        );
    };

    return (
        <Box
            position="absolute"
            top={4}
            right={4}
            zIndex={1000}
            height={"90%"}
            overflowY="scroll"
            bg="blackAlpha.700"
            p={4}
            borderRadius="md"
            maxW="260px"
            color="gray.200"
            style={{
                scrollbarWidth: "none",
            }}
        >
            <VStack align="stretch" gap={4}>
                {/* Map Style Selector */}
                <MapSelector value={tileType}
                             onChange={(e: ChangeEvent<HTMLSelectElement>) => setTileType(e.target.value as typeof tileType)}/>
                <Separator borderColor="whiteAlpha.300"/>

                {/*Drawing Mode*/}
                <DrawModeSelector value={toolMode} onChange={(e) => setToolMode(e.target.value as any)}/>
                <Separator borderColor="whiteAlpha.300"/>

                {/* Draw Tool */}
                <DrawToolSelector value={drawType} onChange={(e) => setDrawType(e.target.value as DrawType)}/>
                <Separator borderColor="whiteAlpha.300"/>

                {/* Global Style Editor */}
                <GlobalStyleEditor
                    fill={fillColor}
                    onFillChange={(e) => setFillColor(e.target.value)}
                    stroke={strokeColor}
                    onStrokeChange={(e) => setStrokeColor(e.target.value)}
                    strokeWidth={strokeWidth}
                    onStrokeWidthChange={(value) => setStrokeWidth(value)}
                />
                <Separator borderColor="whiteAlpha.300"/>

                {/* Selected Feature Editor */}
                {selectedFeature && (
                    <SelectedFeatureEditor fill={featureFill} onFillChange={(e) => setFeatureFill(e.target.value)}
                                           stroke={featureStroke} onStrokeChange={(e) => setFeatureStroke(e.target.value)}
                                           onApplyStyle={applyFeatureStyle} onUnselect={() => setSelectedFeature(null)}/>
                )}
                <Separator borderColor="whiteAlpha.300"/>

                {/* Feature Layer Manager */}
                <Box>
                    {features.length === 0 ? (
                        <Text fontSize="xs" color="gray.400">No features yet.</Text>
                    ) : (
                        <FeatureLayerManager features={features} setFeatures={setFeatures} vectorSource={vectorSource}/>
                    )}
                </Box>

            </VStack>
            <Box mt={4} textAlign="center">
                <Button
                    size="sm"
                    variant="outline"
                    bgColor="darkred"
                    px={2}
                    onClick={() => setFeatures([])}
                >
                    Clear All Features
                </Button>
            </Box>
        </Box>
    );
}

import {Box, Button} from "@chakra-ui/react";
import {HStack, Text, VStack} from "@chakra-ui/react";
import * as ol from "ol";
import {StyleFunction} from "ol/style/Style";


interface FeatureLayerManagerProps {
    features: ol.Feature[];
    setFeatures: (features: ol.Feature[]) => void;
    vectorSource: any;
}

export default function FeatureLayerManager({features, setFeatures, vectorSource}: FeatureLayerManagerProps) {
    return (
        <Box
            bg="blackAlpha.700"
            borderRadius="md"
            overflowY="scroll"
            w="100%"
        >
            <Text fontSize="sm" fontWeight="bold">
                Layers
            </Text>

            {features.length === 0 ? (
                <Text fontSize="xs" color="gray.400">
                    No features yet.
                </Text>
            ) : (
                <VStack align="stretch" gap={3}>
                    {features.map((feature, idx) => {
                        const type = feature.getGeometry()?.getType();
                        const visible = feature.get("visible") !== false;

                        return (
                            <Box key={idx} bg="whiteAlpha.100" p={2} borderRadius="md">
                                <Text fontSize="xs" color="gray.200">
                                    {type}
                                </Text>

                                <HStack justify="space-between" mt={1}>
                                    <Button
                                        size="xs"
                                        variant="ghost"
                                        onClick={() => {
                                            const isVisible = feature.get("visible") !== false;
                                            const styleFn = () => null

                                            if (isVisible) {
                                                // @ts-ignore
                                                feature.setStyle(styleFn);
                                            } else {
                                                feature.setStyle(undefined);
                                            }

                                            feature.set("visible", !isVisible);
                                            setFeatures([...features]);
                                        }}
                                    >
                                        {feature.get("visible") !== false ? "Hide" : "Show"}
                                    </Button>

                                    <Button
                                        size="xs"
                                        variant="ghost"
                                        onClick={() => {
                                            vectorSource.removeFeature(feature);
                                            setFeatures(features.filter((f) => f !== feature));
                                        }}
                                    >
                                        Delete
                                    </Button>
                                </HStack>
                            </Box>
                        );
                    })}
                </VStack>
            )}
        </Box>

    );
}
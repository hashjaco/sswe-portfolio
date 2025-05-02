import {Box, Input, Text, Slider} from "@chakra-ui/react";
import {ChangeEvent} from "react";
import {useMapEditor} from "@/lib/hooks/map-editor";

interface GlobalStyleEditorProps {
    fill: string;
    onFillChange: (e: ChangeEvent<HTMLInputElement>) => void;
    stroke: string;
    onStrokeChange: (e: ChangeEvent<HTMLInputElement>) => void;
    strokeWidth: number[];
    onStrokeWidthChange: (value: number[]) => void;
}

/**
 * @function GlobalStyleEditor
 * @description A component to edit the global draw style.
 * @param props
 * @constructor
 */
export default function GlobalStyleEditor(props: GlobalStyleEditorProps) {
    const { fillColor, setFillColor, strokeColor, setStrokeColor, strokeWidth, setStrokeWidth } = useMapEditor();

    return <Box>
        <Text fontSize="sm" fontWeight="bold" mb={2}>
            Global Style
        </Text>

        <Text fontSize="xs" mb={1}>Fill</Text>
        <Input
            type="color"
            value={fillColor}
            onChange={(e) => setFillColor(e.target.value)}
            size="sm"
            p={0}
        />

        <Text fontSize="xs" mt={3} mb={1}>Stroke</Text>
        <Input
            type="color"
            value={strokeColor}
            onChange={(e) => setStrokeColor(e.target.value)}
            size="sm"
            p={0}
        />

        <Text fontSize="xs" mt={3} mb={1}>Stroke Width</Text>
        <Box maxW="240px">
            <Slider.Root
                value={strokeWidth}
                onValueChangeEnd={(e) => setStrokeWidth(e.value)}
            >
                <Slider.Control>
                    <Slider.Track>
                        <Slider.Range />
                    </Slider.Track>
                    <Slider.Thumbs />
                </Slider.Control>
            </Slider.Root>
        </Box>

    </Box>;
}

import {ChangeEvent} from "react";
import {Box, Button, Input, Text} from "@chakra-ui/react";
import {useMapEditor} from "@/lib/hooks/map-editor";

interface SelectedFeatureEditorProps {
    fill: string;
    onFillChange: (e: ChangeEvent<HTMLInputElement>) => void;
    stroke: string;
    onStrokeChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onApplyStyle: () => void;
    onUnselect: () => void;
}
export default function SelectedFeatureEditor(props: SelectedFeatureEditorProps) {
    const { fill, onFillChange, stroke, onStrokeChange, onApplyStyle, onUnselect } = props;
    const { selectedFeature, setSelectedFeature } = useMapEditor();

    return <>
        <Box>
            <Text fontSize="sm" fontWeight="bold" mb={2}>
                Selected Feature
            </Text>

            <Text fontSize="xs" mb={1}>Fill</Text>
            <Input
                type="color"
                value={fill}
                onChange={onFillChange}
                size="sm"
                p={0}
            />

            <Text fontSize="xs" mt={3} mb={1}>Stroke</Text>
            <Input
                type="color"
                value={stroke}
                onChange={onStrokeChange}
                size="sm"
                p={0}
            />

            <Text fontSize="xs" mt={3} mb={1}>Stroke Width</Text>


            <Button mt={3} size="sm" onClick={onApplyStyle}>
                Apply Style
            </Button>

            <Button
                mt={2}
                size="sm"
                variant="outline"
                bgColor="darkred"
                onClick={onUnselect}
            >
                Deselect
            </Button>
        </Box>
    </>;
}

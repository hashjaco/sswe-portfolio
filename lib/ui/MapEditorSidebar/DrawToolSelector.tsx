import {ChangeEvent} from "react";
import {Box, Text} from "@chakra-ui/react";
import {selectStyle} from "@/lib/ui/MapEditorSidebar/styles";
import {useMapEditor} from "@/lib/hooks/map-editor";
import {DrawType} from "@/types/map-editor";

/**
 * @function DrawToolSelector
 * @description A component to select the draw tool.
 * @param props
 */
export default function DrawToolSelector(props: { value: string, onChange: (e: ChangeEvent<HTMLSelectElement>) => void }) {
    const { drawType, setDrawType} = useMapEditor()
    return <Box>
        <Text fontSize="sm" fontWeight="bold" mb={2}>
            Draw Tool
        </Text>
        <select
            value={drawType}
            style={selectStyle}
            onChange={(e) => setDrawType(e.target.value as DrawType)}
        >
            <option value="Point">Point</option>
            <option value="LineString">Line</option>
            <option value="Polygon">Polygon</option>
        </select>
    </Box>;
}
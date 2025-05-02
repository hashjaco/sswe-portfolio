import {ChangeEvent} from "react";
import {Text} from "@chakra-ui/react";
import {selectStyle} from "@/lib/ui/MapEditorSidebar/styles";

interface DrawModeSelectorProps {
    value: "draw" | "select";
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}


/**
 * @function DrawModeSelector
 * @description A component to select the draw mode.
 * @param props
 */
export default function DrawModeSelector(props: DrawModeSelectorProps) {
    return <>
        <Text fontSize="sm" fontWeight="bold">
            Drawing Mode
        </Text>
        <select style={selectStyle} value={props.value} onChange={props.onChange}>
            <option value="draw">Draw</option>
            <option value="select">Select</option>
        </select>
    </>;
}


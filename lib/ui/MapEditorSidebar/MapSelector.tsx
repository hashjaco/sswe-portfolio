import {Text} from "@chakra-ui/react";
import {selectStyle} from "@/lib/ui/MapEditorSidebar/styles";

/**
 * @function MapSelector
 * @description A component to select the map style.
 * @param props
 * @constructor
 */
export default function MapSelector(props: { value: "osm" | "dark", onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void }) {
    return <>
        <Text fontSize="sm" color="gray.200" fontWeight="bold">
            Map Style
        </Text>
        <select
            style={selectStyle}
            value={props.value}
            onChange={props.onChange}
        >
            <option value="osm">Light (OSM)</option>
            <option value="dark">Dark</option>
        </select>
    </>;
}

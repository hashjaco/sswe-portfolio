import {SpeedDial} from "primereact/speeddial";
import {useMapEditor} from "@/lib/hooks/map-editor";
import {styles} from "./styles";
import {LuX, LuSun, LuMoon} from "react-icons/lu";

export default function MapStyleMenu() {
    const { tileType, setTileType} = useMapEditor();

    const items = [
        {
            label: "Open Street Map",
            style: styles.subMenuButton,
            icon: LuSun,
            command: () => {
                setTileType('osm')
            }
        },
        {
            label: "Dark Matter",
            icon: LuMoon,
            style: styles.subMenuButton,
            command: () => {
                setTileType('dark')
            }
        }
    ];

    const mapIcons = {
        'osm': <LuSun/>,
        'dark': <LuMoon/>
    }

    return (
        <SpeedDial
            model={items}
            radius={0}
            type={'linear'}
            direction="left"
            showIcon={mapIcons[tileType]}
            hideIcon={<LuX />}
            buttonStyle={styles.menuRootButton}
            style={styles.menuRoot}
        />
    );
}
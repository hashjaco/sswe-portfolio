import {SpeedDial} from "primereact/speeddial";
import {useMapEditor} from "@/lib/hooks/map-editor";
import {styles} from "./styles";
import {LuX} from "react-icons/lu";
import { PiPolygonBold } from "react-icons/pi";
import { TbLine, TbPoint, TbPolygon } from "react-icons/tb";

export default function DrawStyleMenu() {
    const {drawType, setDrawType} = useMapEditor();

    const items = [
        {
            label: "Point",
            icon: TbPoint,
            style: styles.subMenuButton,
            command: () => {
                setDrawType("Point");
            }
        },
        {
            label: "Line",
            icon: TbLine,
            style: styles.subMenuButton,
            command: () => {
                setDrawType("LineString");
            }
        },
        {
            label: "Polygon",
            icon: TbPolygon,
            style: styles.subMenuButton,
            command: () => {
                setDrawType("Polygon");
            }
        }
    ];

    const drawIcons = {
        Point: "pi pi-fw pi-map-marker",
        LineString: "pi pi-fw pi-pencil",
        Polygon: <PiPolygonBold />
    }

    return (
        <SpeedDial
            model={items}
            radius={0}
            type={'linear'}
            direction="left"
            showIcon={drawIcons[drawType]}
            hideIcon={<LuX />}
            buttonStyle={styles.menuRootButton}
            style={styles.menuRoot}
        />
    );
}
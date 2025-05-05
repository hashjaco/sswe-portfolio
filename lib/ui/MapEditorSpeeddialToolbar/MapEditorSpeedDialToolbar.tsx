import {SpeedDial} from "primereact/speeddial";
import {MenuItem, MenuItemCommandEvent} from "primereact/menuitem";
import {styles} from './styles'
import MapStyleMenu from "@/lib/ui/MapEditorSpeeddialToolbar/MapStyleMenu";
import {useMapEditor} from "@/lib/hooks/map-editor";
import {Flex, VStack} from "@chakra-ui/react";
import DrawStyleMenu from "@/lib/ui/MapEditorSpeeddialToolbar/DrawStyleMenu";

export default function MapEditorSpeedDialToolbar() {
    const {setTileType, setMenuOpen} = useMapEditor();

    const handleMenuClick = () => {
        setMenuOpen((prev) => !prev);
    }

    const mapStyleItems: MenuItem[] = [{
        label: "Map Style",
        icon: "pi pi-fw pi-map",
        style: styles.subMenuButton,
        command(event: MenuItemCommandEvent) {
            // Handle Map Style selection
            console.log("Map Style selected");
            event.originalEvent.preventDefault();
            event.originalEvent.stopPropagation();
        },
        items: [
            {
                label: "Open Street Map",
                icon: "pi pi-fw pi-map",
                style: styles.subMenuButton,
                command: () => {
                    console.log("Open Street Map");
                }
            },
            {
                label: "ArcGIS Dark Gray",
                icon: "pi pi-fw pi-map",
                style: styles.subMenuButton,
                command: () => {
                    console.log("arc-gis map");
                }
            },
            {
                label: "Dark Matter",
                icon: "pi pi-fw pi-map",
                style: styles.subMenuButton,
                command: () => {
                    console.log("dark matter map");
                }
            }
        ]
    }]

    const drawTypeItems: MenuItem[] = [{
        label: "Drawing Type",
        icon: "pi pi-fw pi-pencil",
        style: styles.subMenuButton,
        items: [
            {
                label: "Point",
                icon: "pi pi-fw pi-map-marker",
                style: styles.subMenuButton,
                command: () => {
                    // Handle Point selection
                }
            },
            {
                label: "LineString",
                icon: "pi pi-fw pi-pencil",
                style: styles.subMenuButton,
                command: () => {
                    // Handle LineString selection
                }
            },
            {
                label: "Polygon",
                icon: "pi pi-fw pi-pencil",
                style: styles.subMenuButton,
                command: () => {
                    // Handle Polygon selection
                }
            }
        ]
    }]

    const fileOptions: MenuItem[] = [{
        label: "Save",
        icon: "pi pi-fw pi-save",
        style: styles.subMenuButton,
        command: () => {
            // Handle Save action
        }
    },
        {
            label: "Clear",
            icon: "pi pi-fw pi-trash",
            style: styles.subMenuButton,
            command: () => {
                // Handle Clear action
            }
        },
        {
            label: "Undo",
            icon: "pi pi-fw pi-undo",
            style: styles.subMenuButton,
            command: () => {
                // Handle Undo action
            }
        },
        {
            label: "Redo",
            icon: "pi pi-fw pi-redo",
            style: styles.subMenuButton,
            command: () => {
                // Handle Redo action
            }
        }
    ]

    return (
        <VStack alignItems={'flex-end'} zIndex={9999} position={'absolute'} top="10px" right="10px">
            <MapStyleMenu />
            <DrawStyleMenu />
        </VStack>
    );
}
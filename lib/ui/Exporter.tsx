import {motion} from "framer-motion";
import {Button} from "@chakra-ui/react";
import {useMapEditor} from "@/lib/hooks/map-editor";
import {useToast} from "@chakra-ui/toast";
import {exportFeaturesToGeoJSON} from "@/lib/utils/export";

const MotionButton = motion(Button);

export default function ExportButton() {
    const {features} = useMapEditor();
    const toast = useToast();

    const handleExport = () => {
        if (!features.length) {
            toast({
                title: "Nothing to export",
                description: "You need to draw something first!",
                status: "info",
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        exportFeaturesToGeoJSON(features);
        toast({
            title: "Export successful",
            description: "Your map was downloaded as GeoJSON.",
            status: "success",
            duration: 3000,
            isClosable: true,
        });
    };

    return <MotionButton
        variant="outline"
        whileHover={{scale: 1.05}}
        whileTap={{scale: 0.95}}
        size="sm"
        color="white"
        borderColor="whiteAlpha.200"
        _hover={{bg: "whiteAlpha.200"}}
        bgColor="teal"
        px={2}
        onClick={handleExport}
    >
        Export
    </MotionButton>;
}
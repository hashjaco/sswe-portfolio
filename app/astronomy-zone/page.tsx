import {Box, VStack, Text} from "@chakra-ui/react";
import NASAData from "@/lib/ui/NASAData";
import MotionWrapper from "@/lib/ui/Motion";
import StarfieldCanvasWithSun from "@/lib/ui/StarfieldCanvasWithSun";
import AstronomyHero from "@/lib/ui/AstronomyHero";

export default function AstronomyZonePage() {
    return (
        <VStack>
            <MotionWrapper>
                <AstronomyHero/>
                <NASAData/>
            </MotionWrapper>
        </VStack>
    );
}
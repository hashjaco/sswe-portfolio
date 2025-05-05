import {Box, VStack, Text} from "@chakra-ui/react";
import NASAData from "@/lib/ui/NASAData";

export default function AstronomyZonePage() {
    return (
        <VStack>
            <Text fontSize={'xx-large'}>Another Black Hole</Text>
            <Text fontSize={'lg'}>Are we inside of one?</Text>
            <Box>
                <NASAData />
            </Box>
        </VStack>
    );
}
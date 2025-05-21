'use client';

import {VStack, Image, Text, HStack, Flex} from "@chakra-ui/react";
import {useNasaData} from "@/lib/hooks/nasa";
import MotionWrapper from "@/lib/ui/Motion";


/**
 * NASAData component fetches and displays the NASA image of the day.
 * It uses the useNasaData hook to fetch data and displays it in a responsive layout.
 * If data is not available, it shows a loading message or a no data message.
 */
export default function NASAData() {
    const {data, loading} = useNasaData();

    return (
        <VStack gap={4} bg="transparent" p={4} justifyContent="start" alignItems="start">
            <MotionWrapper>
                <Text fontSize={'x-large'}>NASA Image of the Day</Text>
                {data ? (
                    <HStack
                        gap={4}
                        p={4}
                        bg="transparent"
                    >
                        <Flex flex={1} alignItems="center" justifyContent="center">
                            <Image
                                src={data.hdurl || data.url}
                                alt={data.title}
                                style={{maxWidth: "100%", maxHeight: 400, height: "auto"}}
                            />
                        </Flex>
                        <Flex flex={1} direction="column" alignItems="center" justifyContent="center" gap={4}>
                            <Text fontSize={'x-large'}>{data.title}</Text>
                            <Text fontSize={'md'}>{data.explanation}</Text>
                        </Flex>
                    </HStack>
                ) : loading ? (
                    <p>Loading...</p>
                ) : (
                    <VStack
                        gap={4}
                        p={4}
                        borderWidth={1}
                        borderRadius="lg"
                        boxShadow="md"
                        bg="transparent"
                        backdropFilter="blur(10px)"
                        borderColor="whiteAlpha.200"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Text fontSize={'x-large'}>No data available</Text>
                    </VStack>
                )}
            </MotionWrapper>
        </VStack>
    );

}
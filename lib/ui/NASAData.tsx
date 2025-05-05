'use client';

import {VStack, Image, Text} from "@chakra-ui/react";
// import {fetchNASADataSSR} from "@/lib/utils/nasa.server";
import {useNasaData} from "@/lib/hooks/nasa";

export default function NASAData() {
    // const data = await fetchNASADataSSR();
    const {data, loading} = useNasaData();

    return (
        <VStack gap={4} bg="transparent" p={4}>
            <Text fontSize={'x-large'}>NASA Image of the Day</Text>
            {data ? (
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
                    textAlign="center"
                >
                    <Text fontSize={'x-large'}>{data.title}</Text>
                    <p>{data.explanation}</p>
                    <Image src={data.hdurl || data.url} alt={data.title}
                           style={{maxWidth: "100%", maxHeight: 400, height: "auto"}}/>
                </VStack>
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
        </VStack>
    );

}
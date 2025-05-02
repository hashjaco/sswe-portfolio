// src/pages/About.tsx
import {Box, Heading, Text} from "@chakra-ui/react";
import MotionWrapper from "@/lib/ui/Motion";

const About = () => {
    return (
        <MotionWrapper>
            <Box>
                <Heading as="h1" mb={4}>About Me</Heading>
                <Text mb={2}>
                    I’m Hashim, a fullstack engineer with over 5 years of experience building scalable interfaces and
                    crafting engaging user experiences.
                </Text>
                <Text>
                    My journey has taken me through various projects – from interactive GIS applications using
                    OpenLayers,
                    to immersive 3D experiences with react-three-fiber. I’m passionate about innovative design and
                    efficient
                    code.
                </Text>
            </Box>
        </MotionWrapper>
    );
};

export default About;

"use client";

import {Heading, Text, Button, VStack, HStack, Icon} from "@chakra-ui/react";
import {motion, useScroll, useTransform} from "framer-motion";
import {LuArrowDown} from "react-icons/lu";
import Link from "next/link";
import {useRef} from "react";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionIcon = motion(Icon);
const MotionVStack = motion(VStack);

export default function Hero() {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({target: ref, offset: ["start start", "end start"]});

    const y = useTransform(scrollYProgress, [0, 1], [0, 100]); // slight downward shift as you scroll

    return (
        <MotionVStack
            ref={ref}
            gap={8}
            textAlign="center"
            py={{base: 24, md: 36}}
            position="relative"
            zIndex={1}
            style={{y}}
        >
            {/* Main Heading */}
            <MotionHeading
                as="h1"
                size="4xl"
                fontWeight="extrabold"
                color="text"
                initial={{opacity: 0, y: 40}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1}}
            >
                Hashim — Fullstack Engineer
            </MotionHeading>

            {/* Subheadline */}
            <MotionText
                fontSize="xl"
                color="text"
                maxW="2xl"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1, delay: 0.5}}
            >
                Creating worlds between the voids of stars.
            </MotionText>

            {/* Call To Actions */}
            <HStack gap={6} mt={8}>
                <Link href={'/projects'}>
                    <MotionButton
                        size="lg"
                        bg="brand.600"
                        variant="solid"
                        px={2}
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.6, delay: 1}}
                        _hover={{
                            bg: "brand.400",
                            color: "white",
                        }}
                    >
                        View Projects
                    </MotionButton>
                </Link>

                <Link href={'/contact'}>
                    <MotionButton
                        size="lg"
                        variant="outline"
                        colorScheme="teal"
                        px={2}
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.6, delay: 1.2}}
                        color={'white'}
                        _hover={{
                            color: "black"
                            }}
                    >
                        Contact Me
                    </MotionButton>
                </Link>
            </HStack>

            {/* Down Arrow */}
            <MotionIcon
                as={LuArrowDown}
                w={8}
                h={8}
                mt={16}
                color="text"
                initial={{opacity: 0}}
                animate={{opacity: 0.8}}
                transition={{
                    delay: 2,
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            />
        </MotionVStack>
    );
}

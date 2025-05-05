"use client";

import {
    Box,
    Flex,
    IconButton,
    Link,
    VStack,
    Collapsible,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { LuMenu, LuX } from "react-icons/lu";
import { useState } from "react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Astronomy", href: "/astronomy-zone" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                w="100%"
                px={8}
                py={4}
                position="sticky"
                top={0}
                zIndex={20}
                bg="rgba(0, 0, 0, 0.6)"
                backdropFilter="blur(10px)"
                borderBottom="1px solid"
                borderColor="whiteAlpha.200"
            >
                {/* Logo */}
                <Box fontWeight="bold" fontSize="xl" color="text">
                    Hashim's Portfolio
                </Box>

                {/* Desktop Links */}
                <Flex display={{ base: "none", md: "flex" }} gap={6}>
                    {navLinks.map((link) => (
                        <Link
                            as={NextLink}
                            key={link.href}
                            href={link.href}
                            color="text"
                            _hover={{
                                color: "brand.400",
                                textDecoration: "none",
                                textShadow: "0 0 8px rgba(56, 190, 201, 0.7)",
                            }}
                            fontWeight="medium"
                        >
                            {link.label}
                        </Link>
                    ))}
                </Flex>

                {/* Mobile Menu Button */}
                <IconButton
                    aria-label="Toggle Navigation"
                    display={{ base: "flex", md: "none" }}
                    onClick={() => setIsOpen(!isOpen)}
                    variant="ghost"
                    color="text"
                    _hover={{ bg: "whiteAlpha.100" }}
                    size="md"
                >
                    {isOpen ? <LuX /> : <LuMenu />}
                </IconButton>
            </Flex>

            {/* Mobile Collapsible Menu */}
            <Collapsible.Root open={isOpen} onOpenChange={({ open }) => setIsOpen(open)}>
                <Collapsible.Content>
                    <Box
                        bg="rgba(0, 0, 0, 0.8)"
                        backdropFilter="blur(12px)"
                        p={8}
                        display={{ md: "none" }}
                    >
                        <VStack gap={6} align="start">
                            {navLinks.map((link) => (
                                <Link
                                    as={NextLink}
                                    key={link.href}
                                    href={link.href}
                                    w="full"
                                    color="text"
                                    fontWeight="bold"
                                    onClick={() => setIsOpen(false)} // close after clicking
                                    _hover={{
                                        color: "brand.400",
                                        textShadow: "0 0 8px rgba(56, 190, 201, 0.7)",
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </VStack>
                    </Box>
                </Collapsible.Content>
            </Collapsible.Root>
        </motion.div>
    );
}

"use client";

import { Button, Icon } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";
import {useColorMode} from "@chakra-ui/system";

export default function DarkModeToggle() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Button
            onClick={toggleColorMode}
            variant="ghost"
            position="fixed"
            bottom={4}
            right={4}
            zIndex={10}
            size="sm"
            aria-label="Toggle Dark Mode"
        >
            <Icon as={colorMode === "light" ? LuMoon : LuSun} />
        </Button>
    );
}

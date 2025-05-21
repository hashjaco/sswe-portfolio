"use client"

import {ChakraProvider} from "@chakra-ui/react"
import ProjectModalProvider from "@/lib/providers/ProjectModalProvider";
import SupabaseProvider from "@/lib/providers/SupabaseProvider";
import {
    ColorModeProvider,
    type ColorModeProviderProps,
} from "./ColorMode"
import system from "@/lib/theme/theme";

export function Provider(props: ColorModeProviderProps) {
    const {children, ...rest} = props

    return (
        <SupabaseProvider>
            <ChakraProvider value={system}>
                    <ProjectModalProvider>
                        {children}
                    </ProjectModalProvider>
            </ChakraProvider>
        </SupabaseProvider>
    )
}

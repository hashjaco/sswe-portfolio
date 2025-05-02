"use client"

import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import {
    ColorModeProvider,
    type ColorModeProviderProps,
} from "./ColorMode"
import system from "@/lib/theme/theme";

export function Provider(props: ColorModeProviderProps) {
    const { children, ...rest } = props
  return (
    <ChakraProvider value={system}>
        <ColorModeProvider>{children}</ColorModeProvider>
    </ChakraProvider>
  )
}

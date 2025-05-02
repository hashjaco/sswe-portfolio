import {useTheme} from "next-themes";
import {ColorMode} from "@/types/color-mode";


/**
 * @function UseColorModeReturn
 * @description A hook that provides the current color mode and a function to toggle it.
 */
export interface UseColorModeReturn {
    colorMode: ColorMode
    setColorMode: (colorMode: ColorMode) => void
    toggleColorMode: () => void
}


/**
 * @function useColorMode
 * @description A hook that provides the current color mode and a function to toggle it.
 * @returns {UseColorModeReturn} The current color mode and a function to toggle it.
 */
export function useColorMode(): UseColorModeReturn {
    const { resolvedTheme, setTheme } = useTheme()
    const toggleColorMode = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }

    return {
        colorMode: resolvedTheme as ColorMode,
        setColorMode: setTheme,
        toggleColorMode,
    }
}



/**
 * @function useColorModeValue
 * @description A hook that returns a value based on the current color mode.
 * @param light
 * @param dark
 */
export function useColorModeValue<T>(light: T, dark: T) {
    const { colorMode } = useColorMode()
    return colorMode === "dark" ? dark : light
}

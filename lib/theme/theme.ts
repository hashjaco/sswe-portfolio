// theme.ts
import {
    createSystem,
    defaultConfig,
    defineConfig,
} from "@chakra-ui/react";

const config = defineConfig({
    cssVarsRoot: ":where(:root, :host)",

    theme: {
        breakpoints: {
            xxs: "10em", // 160px
            xs: "20em", // 320px
            sm: "30em", // 480px
            md: "48em", // 768px
            lg: "62em", // 992px
            xl: "80em", // 1280px
            "2xl": "96em", // 1536px
            "3xl": "120em", // 1920px
            "4xl": "144em", // 2304px
        },
        tokens: {
            colors: {
                brand: {
                    50: { value: "#e0fcff" },
                    100: { value: "#bef8fd" },
                    200: { value: "#87eaf2" },
                    300: { value: "#54d1db" },
                    400: { value: "#38bec9" },
                    500: { value: "#2cb1bc" }, // main accent (teal)
                    600: { value: "#14919b" },
                    700: { value: "#0e7c86" },
                    800: { value: "#0a6c74" },
                    900: { value: "#044e54" },
                },
                background: {
                    DEFAULT: { value: "#000000" }, // pure black background
                },
            },

            fonts: {
                heading: { value: "'Poppins', sans-serif" },
                body: { value: "'Inter', sans-serif" },
            },
        },

        semanticTokens: {
            colors: {
                text: {
                    DEFAULT: { value: "{colors.gray.100}" }, // light gray text
                    _dark: { value: "{colors.gray.100}" },
                },
                background: {
                    DEFAULT: { value: "{colors.background}" },
                    _dark: { value: "{colors.background}" },
                },
            },
        },

        keyframes: {
            spin: {
                from: { transform: "rotate(0deg)" },
                to: { transform: "rotate(360deg)" },
            },
        },

        textStyles: {
            heading: {
                description: "Section Heading",
                value: {
                    fontFamily: "heading",
                    fontWeight: "bold",
                    lineHeight: "short",
                    color: "text", // now uses semantic light text
                },
            },
            body: {
                description: "Body text",
                value: {
                    fontFamily: "body",
                    fontWeight: "normal",
                    lineHeight: "base",
                    color: "text",
                },
            },
        },
    },

    globalCss: {
        "html, body": {
            backgroundColor: "background",
            color: "text",
            margin: 0,
            padding: 0,
        },
    },

    cssVarsPrefix: "ck",
});

const system = createSystem(defaultConfig, config);

export default system;

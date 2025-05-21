import type {Metadata} from "next";
import {ReactNode} from "react";
import {Box} from "@chakra-ui/react";
import {Geist, Geist_Mono} from "next/font/google";

import {Provider} from "@/lib/ui/Provider";
import NavBar from "@/lib/ui/NavBar";
import DarkModeToggle from "@/lib/ui/DarkModeToggle";
import MistParticles from "@/lib/ui/MistParticles";
import StarfieldCanvas from "@/lib/ui/StarfieldCanvas";
import ProjectModal from "@/lib/ui/ProjectModal";

import 'primereact/resources/themes/lara-dark-teal/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import "../styles/globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Hashim's Portfolio",
    description: "A portfolio showcasing my work and skills.",
};

export default function RootLayout({children}: Readonly<{ children: ReactNode; }>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable}`}
              style={{position: "relative", overflowX: "hidden"}}>
            <Provider>
                <StarfieldCanvas/>
                <MistParticles/>
                <DarkModeToggle/>
                <NavBar/>
                <Box as="main" p={8} position="relative" zIndex={1}>
                    {children}
                </Box>
                <ProjectModal/>
            </Provider>
        </body>
        </html>
    );
}

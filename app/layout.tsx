import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import {ReactNode} from "react";
import "../styles/globals.css";

import {Provider} from "@/lib/ui/Provider";
import NavBar from "@/lib/ui/NavBar";
import {Box} from "@chakra-ui/react";
import DarkModeToggle from "@/lib/ui/DarkModeToggle";
import MistParticles from "@/lib/ui/MistParticles";
import StarfieldCanvas from "@/lib/ui/StarfieldCanvas";

import 'primereact/resources/themes/lara-dark-teal/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

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
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`} style={{ position: "relative", overflowX: "hidden" }}>
        <Provider>
            <MistParticles />
            <StarfieldCanvas />
            <DarkModeToggle />
            <NavBar/>
            <Box as="main" p={8} position="relative" zIndex={1}>
                {children}
            </Box>
        </Provider>
        </body>
        </html>
    );
}

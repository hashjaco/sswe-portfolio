import Hero from "@/lib/ui/Hero";
import MotionWrapper from "@/lib/ui/Motion";
import AboutMe from "@/lib/ui/AboutMe";
import WhatIOffer from "@/lib/ui/WhatIOffer";
import FeaturedProjects from "@/lib/ui/FeaturedProjects";

export default function Home() {
    return (
        <MotionWrapper>
                <Hero />
                <AboutMe />
                <WhatIOffer />
            <FeaturedProjects />
        </MotionWrapper>
    );
}

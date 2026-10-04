import Background from "./components/Background";
import TopBar from "./components/TopBar";
import Hero from "@/app/sections/Hero";
import About from "@/app/sections/About";
import TechStack from "@/app/sections/TechStack";
import Projects from "@/app/sections/Projects";
import Achievements from "@/app/sections/Achievements";
import Timeline from "@/app/sections/Timeline";
import Contact from "@/app/sections/Contact";

export default function Home() {
    return (
        <div className="dark relative min-h-screen text-txtclr-d0">
            <Background />
            <TopBar />
            <main>
                <Hero />
                <About />
                <TechStack />
                <Projects />
                <Achievements />
                <Timeline />
                <Contact />
            </main>
            {/*<Footer /> */}
            <footer className="py-4 text-center text-sm text-white/50">
                © {new Date().getFullYear()} Ryan Lim. All rights reserved.
            </footer>
        </div>
    );
}

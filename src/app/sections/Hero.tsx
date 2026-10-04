"use client";

import { useReducedMotion, motion } from "motion/react";
import { useState, useEffect } from "react";
import { PROFILE } from "@/app/data/data";
import WinBar from "@/app/components/WinBar";
import { ArrowDownRight, MapPin, Terminal } from "lucide-react";
import { gelasio } from "@/app/ui/fonts";

export default function Hero() {
    
    const reduce = useReducedMotion();
    const letters = ['a', 'b', 'c'];
    const name = "RYAN LIM".split("");

//       <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-12">
    return (
        <section id="hero" className="relative">
            <div className="mx-auto px-4 py-50 md:p-55 flex flex-row gap-24">
                {/* Left: headline */}
                {/* Headline 2/ staggered reveal */}
                <h1 className="flex flex-col col-span-6">
                    <span className="opacity-60 text-xl md:text-3xl"><span className="text-accent-d2">$ </span>who_am_i</span>
                    
                    <div className={`${gelasio.className} pt-5 md:pt-10 pb-5 md:pb-8`}>
                        {name.map((c, i) => (
                            <motion.span
                                key={i}
                                initial={reduce ? false : { opacity: 0, y: 14 }}
                                animate={reduce ? {} : {opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.35 + i * 0.05,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="text-7xl md:text-8xl text-accent-d0 font-bold"
                            >
                            {c}
                            </motion.span>
                        ))}
                    </div>
                    <motion.p 
                        initial={reduce ? false : { opacity: 0, y: 14 }}
                        animate={reduce ? {} : { opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 1.2,
                        }}
                        className="text-left md:text-justify m-3 mb-10 text-accent-d1"
                    >
                        {PROFILE.tagline}{" "}
                        <span className="text-white">{PROFILE.focus}</span>
                    </motion.p>

                    <motion.div
                        initial={reduce ? false : { opacity: 0, y: 10 }}
                        animate={reduce ? {} : { opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1.8 }}
                        className="flex flex-row gap-4 md:gap-5"
                    >
                        <a
                            href="#contact"
                            className="flex gap-3 text-[13px] font-semibold md:font-normal md:text-[15px] group items-center bg-accent-d1 text-bgclr-d0 hover:bg-accent-d2 rounded-sm p-2 md:p-3"
                        >
                            find_me()
                            <ArrowDownRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                        </a>
                        <a
                            href="#projects"
                            className="flex gap-2 text-[13px] md:text-[15px] items-center border rounded-sm p-2 md:p-3 hover:border-accent-d1 hover:text-accent-d1"
                        >
                            <Terminal className="h-4 w-4" />
                            view_projects
                        </a>
                    </motion.div>
                    <motion.div
                        initial={reduce ? false : { opacity: 0, y: 10 }}
                        animate={reduce ? {} : { opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 2.5 }}
                        className=""
                    >
                    <div className="md:ml-1 p-5 flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        {PROFILE.location}
                    </div>
                    </motion.div>
                    
                </h1>

                {/* Right: boot terminal */}
                <div className="hidden md:block col-span-4">
                    <WinBar />
                </div>
            </div>
        </section>
    );
}


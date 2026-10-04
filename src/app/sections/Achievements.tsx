"use client";

import { Award, CheckCircle2 } from "lucide-react";
import { ACHIEVEMENTS } from "@/app/data/data";
import { motion } from "motion/react";
import Section from "@/app/components/Section";

export default function Achievements() {
    const title = "tail -f ./credentials.log";
    const pid = "2048";

    return (
        <Section id="credentials" index="04" subtitle="credentials.log" title="The Achievements">

            {/* WinBar */}
            <div className="flex items-center justify-between border border-txtclr-d0/30 bg-black/70 px-4 py-1.5">
                {/* Left: action keys — Linux-style text, not circles */}
                <div className="flex items-center gap-0 font-mono text-[11px] text-txtclr-d0/30">
                    <span className="border border-border/60 bg-obsidian px-1.5 py-0.5 hover:border-destructive/60 hover:text-destructive cursor-default select-none">×</span>
                    <span className="ml-1 border border-border/60 bg-obsidian px-1.5 py-0.5 hover:border-matrix/60 hover:text-matrix cursor-default select-none">−</span>
                    <span className="ml-1 border border-border/60 bg-obsidian px-1.5 py-0.5 hover:border-matrix/60 hover:text-matrix cursor-default select-none">□</span>
                </div>

                {/* Centre: title */}
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-txtclr-d0/60">
                    {title}
                </span>

                {/* Right: pid / process tag */}
                <span className="font-mono text-[10px] text-muted-foreground/60">
                    {pid ? `[${pid}]` : ""}
                </span>
            </div>

            {/* Content */}
            <div className="border border-txtclr-d0/30 p-2">
            <ul className="max-h-116 overflow-y-auto scroll-smooth scrollbar-thumb-transparent scrollbar-track-sky-100 ">
                {ACHIEVEMENTS.map((a, i) => (
                    <li
                        key={i}
                        className="flex flex-col md:flex-row p-3 bg-bgclr-d0 hover:bg-txtclr-d0/5"
                    >
                        <div className="flex-1 flex items-top font-light">
                            <CheckCircle2 className="h-4 w-4 text-accent-d3" />
                            <span className="px-5 text-accent-d1">
                                [0{i}] {a.year}
                            </span>
                        </div>

                        <div className="flex-5">
                            <div className="flex items-center gap-3">
                                <Award className="h-3.5 w-3.5" />
                                <h4 className="p-1 text-accent-d0">
                                    {a.title}
                                </h4>
                            </div>
                            <p className="font-light">
                                {a.detail}
                            </p>
                        </div>
                    </li>
                ))}
                <li>[to be continued...]</li>
                <li className="">
                    <span className="font-light text-accent-d1">guest@portfolio</span> :~$ what{"'"}s next
                            <motion.span 
                                animate={{ opacity: [1, 1, 0, 0] }}
                                transition={{
                                    duration: 1.2,
                                    times: [0, 0.5, 0.5, 1],
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="w-0.5 h-5 bg-white">
                            .
                            </motion.span>

                </li>
            </ul>
            </div>
            
        </Section>
    );
}

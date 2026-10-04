"use client";

import { motion } from "motion/react";
import { ArrowRight, Dna, Cpu } from "lucide-react";
import { PROFILE } from "@/app/data/data";
import Section from "@/app/components/Section";

const Panel = ({ id, label, title, lines }: { id: number, label: string, title: string, lines: string[] }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 * id, ease: [0.16, 1, 0.3, 1] }}
            className="relative p-2"
        >
            <div className="absolute w-full text-center text-md md:text-xl cursor-default">
                <span className="bg-bgclr-d0 px-3 text-txtclr-d0">
                        {label}
                </span>
            </div>
            <div className="border-2 pb-5 px-10 rounded-sm mt-4 border-txtclr-d0/60" >
                <div className="pt-5 text-[21px] md:text-[25px] text-accent-d0 font-semibold">
                    {title}
                </div>
                <ul className="mt-3 space-y-1.5 text-[15px] text-muted-foreground">
                    {lines.map((l: string) => (
                        <li key={l} className="flex gap-2 font-light">
                            <span className="text-matrix">›</span>
                            <span>{l}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}

export default function About() {
    return(
        <Section id="about" index="01" subtitle="background" title="From DSA to Computer Science">
            <div className="flex gap-3">
                <div className="flex-6 border border-txtclr-d0/30 bg-txtclr-d0/5 rounded-sm py-8 px-6 md:m-3 font-thin">
                    {PROFILE.bio.map(t => (
                        <p key={t} className="p-2 text-justify text-[15px] md:text-[18px] font-medium">{t}</p>
                    ))}
                </div>

            </div>
            <div className="flex flex-col md:flex-row gap-3 items-center m-3">
                <div className="flex-4">
                    <Panel
                        id={1}
                        label="Input"
                        title={PROFILE.transition.input.title}
                        lines={PROFILE.transition.input.lines}
                    />
                </div>
                {
                // <div className="text-sm border border-dashed rounded-xl text-accent-d1 flex px-3 py-1.5 justify-center items-center">
                //         compile
                //         <ArrowRight className="h-4.5 w-4.5" />
                // </div>
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-sm border border-dashed rounded-xl text-accent-d1 flex px-3 py-1.5 justify-center items-center"
                >
                        compile
                        <ArrowRight className="h-4.5 w-4.5" />
                </motion.div>
                }

                <div className="flex-4">
                    <Panel
                        id={2}
                        label="Output"
                        title={PROFILE.transition.output.title}
                        lines={PROFILE.transition.output.lines}
                    />
                </div>
            </div>


        </Section>
    );
}


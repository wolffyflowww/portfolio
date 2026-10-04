"use client";

import { GraduationCap, Code2 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { TIMELINE } from "@/app/data/data";
import Section from "@/app/components/Section";

export default function Timeline() {

    const reduce = useReducedMotion();
    
    return (
        <Section id="timeline" index="05" subtitle="experience & education" title="The Journey">
            <ol className="relative ml-3 border-l border-accent-d2/80">
                {TIMELINE.map((t, i) => {
                    const Icon = t.isAcademic ? GraduationCap : Code2;
                    
                    return (
                        <motion.li 
                            key={i} 
                            initial={reduce ? false : { opacity: 0, x: 24 }}
                            whileInView={reduce ? {} : { opacity: 1, x: 0 }}
                            viewport={{ once: false, margin: "-40px" }}
                            transition={{duration: 0.5, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="relative pb-10 pl-8 last:pb-0"
                        >
                            <span className="absolute -left-1.75 top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-bgclr-d0 ring-1 ring-accent-d2">
                                <span className="h-1.5 w-1.5 rounded-full bg-accent-d2" />
                            </span>

                            <div className="rounded-sm border border-txtclr-d0/20 bg-txtclr-d0/2 p-5 transition hover:border-accent-d1/50">
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="inline-flex items-center gap-1.5 rounded-sm border border-txtclr-d0/20 bg-bgclr-d0 px-2 py-0.5 text-[10px] uppercase tracking-[0.22em] text-txtclr-d0">
                                        <Icon className="h-3 w-3 text-accent-d1" />
                                        {t.isAcademic ? "academic" : "industry"}
                                    </span>
                                    <span className="text-[11px] text-txtclr-d0/50">
                                        {t.period}
                                    </span>
                                </div>
                                <h4 className="mt-3 font-sans text-lg font-semibold text-accent-d0">
                                    {t.role}
                                </h4>
                                <div className="text-[13px] text-accent-d1">{t.institution}</div>
                                <p className="mt-2 text-[11px] md:text-[13px] leading-relaxed text-muted-foreground text-justify mr-1">
                                    {t.description}
                                </p>
                            </div>
                        </motion.li>
                    );

                })}
            </ol>
        </Section>
  );
}


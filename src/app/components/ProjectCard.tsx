"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Project } from "@/lib/types";
import clsx from "clsx";

export default function ProjectCard({ project }:{ project: Project }) {
    const reduce = useReducedMotion();

    return (
        <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            whileHover={reduce ? {} : { y: -4 }}
            className={clsx(
                "group relative min-h-100 md:min-h-120 flex flex-col flex-1 bg-txtclr-d0/5 rounded-sm p-5 border border-txtclr-d0/30",
                // {
                //     "bg-txtclr-d0/5": project.metric === "Done",
                //     "bg-txtclr-d0/5": project.metric !== "Done",
                // },
            )}
        >
            {/* Scanning laser on hover */}
            <div 
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-accent-d1 via-accent-d4 to-accent-d1 opacity-0 group-hover:opacity-100"
            />
            <div 
                className="pointer-events-none absolute inset-x-0 w-px h-full top-0 bg-accent-d1 opacity-0 group-hover:opacity-100"
            />
            <div 
                className="pointer-events-none absolute inset-y-0 right-0 w-px h-full top-0 bg-accent-d1 opacity-0 group-hover:opacity-100"
            />
            <div 
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px w-full bg-accent-d1 opacity-0 group-hover:opacity-100"
            />

            {/* Top row */}
            <div className="relative flex text-[13px] font-light">
                <div className="">
                    <span className="pr-8">
                        /{project.id}
                    </span>
                    <span className="">
                        <span className="">
                            {project.category}
                        </span>
                    </span>
                </div>
                {
                    // <ArrowUpRight className="absolute right-3 opacity-60 group-hover:text-accent-d4 group-hover:opacity-100" />
                }
            </div>

            {/* Title */}
            <h3 className="font-semibold text-[22px] text-accent-d0 mt-3 mb-2">
                {project.title}
            </h3>

            {/* Description */}
            <h3 className="text-[15px]">
                {project.description}
            </h3>

            {/* Metric */}
            <div className=
                {clsx(
                    "text-[13px] mt-3 pl-2 pr-4 py-1 rounded-lg flex border border-txtclr-d0/30 w-fit",
                    {
                        "text-accent-d1 font-bold": project.metric === "Done",
                    },
                )}
            >
                <span className=
                    {clsx(
                        "ml-1 mr-3",
                        {
                            "text-accent-d1 font-bold": project.metric === "Done",
                        },
                    )}
                >◆</span>
                {project.metric}
            </div>

            {/* Tags */}
            <div className="mt-auto flex flex-wrap border-b border-txtclr-d0/30 pb-3">
                {project.tags.map((tag: string) => (
                    <span
                        key={tag}
                        className="border border-accent-d0/20 rounded-sm px-2 py-1 mx-1 my-1 text-[13px] text-accent-d0/50"
                    >
                    {tag}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-2">
                {project.links?.github && (
                    <a
                        href={project.links.github}
                        className="flex gap-1.5 uppercase text-[13px] p-2 items-center hover:text-accent-d1"
                    >
                        <FaGithub className="h-3.5 w-3.5" />
                        source
                    </a>
                )}
                {project.links?.live && (
                    <a
                        href={project.links.live}
                        className="flex gap-1.5 uppercase text-[13px] p-2 items-center hover:text-accent-d1"
                    >
                        <ExternalLink className="h-3.5 w-3.5" />
                        live
                    </a>
                )}
            </div>



            
        </motion.div>
    );
}


"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";


export default function Section({ 
    id, 
    index, 
    title, 
    subtitle, 
    children 
}:{
    id: string,
    index: string,
    title: string,
    subtitle: string,
    children: ReactNode
}) {
    const reduce = useReducedMotion();

    return (
        <section id={id} className="mx-10 md:mx-88 pt-20 md:pt-30 pb-20 md:pb-30">
            <motion.header
                initial={reduce ? false : { opacity: 0, y: 18 }}
                whileInView={reduce ? {} : {opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mb-15"
            >
                <div className="flex items-center font-thin">
                    {index}<div className="w-20 h-[0.5px] opacity-50 bg-white mx-3"/>{subtitle}
                </div>
                <h2 className="text-[30px] md:text-[40px] text-accent-d0 font-bold">
                    {title}
                </h2>
            </motion.header>
            <motion.div
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={reduce ? {} : {opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
                {children}
            </motion.div>

        </section>
    );
}


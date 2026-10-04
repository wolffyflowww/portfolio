"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TECH_STACK } from "@/app/data/data";
import Section from "@/app/components/Section";

const StackColumn = ({ title, items }: { title: string, items: { name: string, level: number }[] }) => {
  const reduce = useReducedMotion();

  return (
    <div className="p-4 md:p-6 pb-8 md:pb-10 rounded-sm self-start border border-txtcolor-d0/20 shadow-md shadow-white bg-txtclr-d0/3">
      <div className="flex items-baseline justify-between">
        <div>
          <h3 className="mt-2 font-sans text-xl font-semibold text-accent-d0">
            {title}
          </h3>
        </div>
        {
        // <div className="text-[11px] text-txtclr-d0">
        //   {items.length} modules
        // </div>
        }
      </div>

      <ul className="mt-6 space-y-4">
        {items.map((t, i: number) => (
          <li key={t.name}>
            <div className="flex items-baseline justify-between text-[13px]">
              <span className="text-txtclr-d0">{t.name}</span>
            </div>
            <div className="mt-1.5 h-0.75 w-full overflow-hidden bg-border/60">
              <motion.div
                initial={reduce ? false : { width: 0 }}
                whileInView={reduce ? {} : { width: `${t.level}%` }}
                viewport={{ once: false }}
                transition={{ duration: 0.9, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-accent-d1 shadow-[0_0_12px_rgba(0,255,136,0.55)]"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TechStack() {
  const language = TECH_STACK.filter((t) => t.category === "Language");
  const framework = TECH_STACK.filter((t) => t.category === "Framework");
  const tool_platform = TECH_STACK.filter((t) => t.category == "Tool & Platform");

  return (
    <Section id="stack" index="02" subtitle="tech stack" title="The Toolkit">
      <div className="grid gap-10 md:gap-6 md:grid-cols-3">
        <StackColumn
          title="Programming languages"
          items={language}
        />
        <StackColumn
          title="Website development frameworks"
          items={framework}
        />
        <StackColumn
          title="Tool & Platform"
          items={tool_platform}
        />
      </div>
    </Section>
  );
}


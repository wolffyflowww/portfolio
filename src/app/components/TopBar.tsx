"use client";

import { useState, useRef } from "react";
import { jetbrains_mono } from "@/app/ui/fonts";

const WORKSPACES = [
  { n: 0, href: "#hero",         label: "~" },
  { n: 1, href: "#about",       label: "about" },
  { n: 2, href: "#stack",       label: "stack" },
  { n: 3, href: "#projects",    label: "projects" },
  { n: 4, href: "#credentials", label: "creds" },
  { n: 5, href: "#timeline",    label: "timeline" },
  { n: 6, href: "#contact",     label: "contact" },
];


export default function TopBar() {
    
    const [active, setActive] = useState<number>(0);

    return (
        <header className="sticky top-0 z-40 border-b border-matrix/30 bg-bgclr-d0 py-1">
            <div className={`${jetbrains_mono.className} flex items-row`}>
        
                <div className="flex items-center gap-0 px-4 text-[18px]">
                    <span className="text-accent-d1">[ryan<span className="hidden md:inline">:portfolio</span>]</span>
                </div>
                
                <nav className="flex items-stretch">
                    {WORKSPACES.map((ws) => (
                        <a
                            key={ws.n}
                            href={ws.href}
                            onClick={() => {setActive(ws.n)}}
                            className="flex flex-row items-center gap-1.5 px-1 md:px-3 py-0 text-[11px]"
                        >
                            {active === ws.n && (
                                <span className="text-[18px]">{ws.n}:{ws.label}*</span>
                            )}
                            {active !== ws.n && (
                                <span className="text-[18px] opacity-60">{ws.n}: <span className="hidden md:inline">{ws.label}</span></span>
                            )}
                        </a>

                    ))}
                </nav>

            </div>
        </header>
    );
}

                                // <span className="text-[18px] opacity-60">{ws.n}:{ws.label}</span>

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Section from "@/app/components/Section";

export default function Contact() {
    return (
        <Section id="contact" index="06" subtitle="command line" title="Let's Connect!">
            <div className="min-h-160">
      
                {/*<ContactForm />*/}
                <div className="flex flex-col md:flex-row gap-5">
                    <div className="rounded-sm border border-txtclr-d0/30 bg-bgclr-d0 p-6 max-w-180">
                        <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                            {"//"} availability
                        </div>
                        <div className="mt-3 font-sans text-xl md:text-2xl font-semibold leading-snug text-accent-d0">
                            Looking forward to hearing from you!
                        </div>
                        <div className="mt-4 text-[12px] md:text-[15px] text-txtclr-d0 font-normal text-justify">
                            I&apos;m interested in a wide range of technical fields, including software engineering, AI, systems programming, and cybersecurity. I&apos;m also excited about interdisciplinary work that brings computer science together with biology or chemistry. If you think I&apos;d be a good fit for your team or project, I&apos;d love to connect and have a chat!
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                        {[
                            { icon: Mail, label: "email", value: "ryanlimzh61@gmail.com", url: "mailto:ryanlimzh61@gmail.com" },
                            { icon: FaGithub, label: "github", value: "wolffyflowww", url: "https://github.com/wolffyflowww" },
                            { icon: FaLinkedin, label: "linkedin", value: "Zi Heng Lim", url: "https://www.linkedin.com/in/zi-heng-lim-91978135a/" },
                        ].map(({ icon: Icon, label, value, url }) => (
                            <a
                                key={label}
                                href={url === "" ? undefined : url}
                                target="_blank"
                                className="group flex items-center justify-between rounded-sm border border-txtclr-d0/30 bg-bgclr-d0/40 px-4 py-3 transition hover:border-accent-d1/60"
                            >
                                <div className="flex items-center gap-3">
                                    <Icon className="h-4 w-4 md:h-6 md:w-6 text-accent-d1" />
                                    <span className="text-[12px] md:text-[15px] mr-10 uppercase tracking-[0.22em] text-txtclr-d0">
                                        {label}
                                    </span>
                                </div>
                                <span className="font-mono text-[12px] md:text-[18px] text-foreground/80 transition group-hover:text-matrix">
                                    {value} →
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}



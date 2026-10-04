export const PROFILE = {
    handle: "@cs_student",
    name: "CS @ USyd",
    location: "Sydney, AU",
    status: "Seeking Software Internship",
    tagline: "Curious and analytical, with a strong passion for science and technology.",
    //tagline: "Aspiring software engineer aiming to become a full-stack developer, focused on modern web development while exploring interests in AI/ML and cybersecurity.",
    //
    //focus:
      //  "Rigorous CS student at USyd — mastering the Next.js & Supabase ecosystem while applying a logic-first, algorithmic foundation to every system I build.",
    focus: "I enjoy solving challenging problems and continuously exploring new areas of knowledge. With a background in competitive programming and mathematics, I have developed strong analytical and problem-solving skills, which I continue to strengthen through projects spanning computer science, life science, and other interdisciplinary fields.",
    bio: [

        // "My foundation is in competitive programming, where I was a two-time APIO national representative and selected for IOI and IMO training camps. This experience built a strong algorithmic and problem-solving mindset, which led me to explore broader areas of programming. I am currently focused on web development, scaling into the Next.js ecosystem to build modern applications and transition toward production-level systems.",
        // "My foundation is in competitive programming, where I first exposed to coding. I was first introduced to competitive programming in 2018, and after finding myself interested in Data Structures and Algorithms, I started to learn more, bringing me to my peak in competitive programming in 2023 and 2024, where I won various competitions. After graduating from high school, I started self-learning web development, and got an internship in web development. Currently trying to expose myself to new fields in computer science, such as system programming and cybersecurity.",
        // "My coding journey began in 2022, when I was first introduced to competitive programming. After I was exposed to Data Structures and Algorithms, I fell deep in love with it, and spent years sharpening my problem-solving skills, which brings me to my peak during 2023 and 2024, when I won several national competitions. After graduating high school, I pivoted toward building practical software, teaching myself web development and securing an internship in the field. Currently, I am trying to expose myself to new fields in Computer Science, such as System Programming and Cybersecurity.",
        "My coding journey began in 2022, when I was first introduced to competitive programming. After being exposed to Data Structures and Algorithms, I fell in love with the field and spent years sharpening my problem-solving skills, culminating in a peak during 2023 and 2024 when I won several national competitions. ",
        "After graduating high school, I pivoted toward building practical software, teaching myself web development and securing an internship in the field. Currently, I am expanding my horizons by exploring new domains in computer science, such as systems programming and cybersecurity.",
    ],
    transition: {
        input: {
            label: "FOUNDATION",
            title: "Competitive Programming",
            lines: [
                "Codeforces | 1456 (Specialist)",
                "Uyd DSA Course | 95% WAM",
                "Core language | C++",
            ],
        },
        output: {
            label: "APPLICATION",
            title: "Industrial Engineering",
            lines: [
                "Software Developer Intern | AutoCount Sdn Bhd",
                "Automation Engineer | Acceler Technology",
                "First prize | Hack Node Australia 2025",
            ],
        },
    },
};

export const TERMINAL_BOOT = [
    "$ ./portfolio --init",
    "[ok] loading identity :: USyd/CS",
    "[ok] mounting /projects",
    "[ok] linking /credentials",
    "[ok] session → ready",
];

export const TECH_STACK = [
    // Tools & Platforms
    { name: "Git", level: 87, category: "Tool & Platform" },
    { name: "GitHub", level: 88, category: "Tool & Platform" },
    { name: "Linux", level: 90, category: "Tool & Platform" },
    { name: "NeoVim", level: 93, category: "Tool & Platform" },
    { name: "Visual Studio Code", level: 92, category: "Tool & Platform" },
    { name: "Visual Studio", level: 80, category: "Tool & Platform" },

    // Framework
    { name: "Next.js", level: 70, category: "Framework" },
    { name: "React", level: 78, category: "Framework" },
    { name: "Node.js", level: 60, category: "Framework" },
    { name: "Tailwind CSS", level: 84, category: "Framework" },
    
    // Language
    { name: "C/C++", level: 95, category: "Language" },
    { name: "Python", level: 83, category: "Language" },
    { name: "Java", level: 76, category: "Language" },
    { name: "TypeScript/JavaScript", level: 65, category: "Language" },
    { name: "HTML/XML", level: 79, category: "Language" },
];

export const PROJECTS = [
    {
        id: "01",
        title: "MealDeals",
        description:
            "1st prize winner at Hack Node Australia. A full-stack solution architected, built, and shipped in under a months",
        tags: ["Next.js", "React", "Vite", "Node.js", "Llama 3.2", "PostgreSQL"],
        category: "Full-Stack / AI",
        metric: "Done",
        // links: { github: "https://github.com/ZH-170/MealDeals", live: "#" },
        links: { github: "https://github.com/ZH-170/MealDeals" },
    },
    {
        id: "02",
        title: "Bookoo",
        description:
            "Book trading website for specific users.",
        tags: ["Next.js", "React", "Prisma", "PostgreSQL"],
        category: "Full-Stack",
        metric: "Under development",
        links: {},
    },
    {
        id: "03",
        title: "Personal Library",
        description:
            "A personal library to keep the books and movies that you like the most.",
        tags: ["Next.js", "React", "Prisma", "PostgreSQL"],
        category: "Full-Stack",
        metric: "Under development",
        links: {},
    },
];

export const ACHIEVEMENTS = [
    {
        year: "2025",
        title: "1st Prize — Hack Node Australia",
        detail:
            "Won 1st place in my first ever hackathon during my very first semester of CS — proof of rapid learning velocity applied under pressure.",
    },
    {
        year: "2024–2025",
        title: "Two-Time APIO National Representative",
        detail:
            "Represented Malaysia twice at the Asian-Pacific Informatics Olympiad — among the nation's top 30 competitive programmers.",
    },
    {
        year: "2023-2025",
        title: "IOI Training Camp — National Selection",
        detail:
            "Nationally selected for the International Olympiad in Informatics training camp, focusing on advanced algorithmic problem-solving.",
    },
    {
        year: "2023/24",
        title: "IMO Training Camp — National Selection",
        detail:
            "Nationally selected for the International Mathematical Olympiad training camp — elite mathematical reasoning under competition conditions.",
    },
];

export const TIMELINE = [
    {
        period: "July 2025 — Present",
        role: "B.Sc. | Computer Science | Biochemistry and Molecular Biology",
        institution: "The University of Sydney",
        description:
            "Curious and analytical with a strong passion for science and technology, I enjoy exploring diverse areas of computer science, including web development, systems programming, cybersecurity, and artificial intelligence, while also pursuing interests in quantitative trading and the life sciences, particularly biology and chemistry. My background in competitive programming and mathematics has strengthened my analytical thinking, problem-solving abilities, and aptitude for tackling complex technical challenges.",
        isAcademic: true,
    },
    {
        period: "February 2025 — December 2025",
        role: "Automation & Backend Engineer",
        institution: "Acceler Technology",
        description:
            "Acceler Technology is a Malaysian student-founded startup focused on building innovative technology solutions. I contributed to the ongoing development and enhancement of its flagship product, Estate Boost Copilot. I developed automatino pipelines and backend systems to support AI-driven workflows and business operations. I also designed and implemented backend logic to improve system reliability, scalability, and performance.",
        isAcademic: false,
    },
    {
        period: "January 2025 — June 2025",
        role: "Software Developer Intern",
        institution: "AutoCount Sdn Bhd",
        description:
            "AutoCount is a leading accounting software developer in Malaysia that delivers high-quality business application software that meets the unique needs of SMEs across different industry. My main job is to fix software bugs and implement new features for AutoCount's web-based business applications, improving functionality and user experience. I also assisted in developing an AI-powered speech-to-text pipeline by integrating and evaluating state-of-the-art speech recognition models.",
        isAcademic: false,
    },
    {
        period: "2019 — 2024",
        role: "Science Stream Student",
        institution: "Hin Hua High School, Malaysia",
        description:
            "I completed the science stream in high school, graduating with straight A's in the Unified Examination Certificate (UEC) and ranking among the top five students in the science stream. Beyond academics, I actively participated in national mathematics and informatics competitions, including the Malaysian selection programmes for the International Mathematical Olympiad (IMO) and the International Olympiad in Informatics (IOI), where I received multiple awards and distinctions.",
        isAcademic: true,
    },
];


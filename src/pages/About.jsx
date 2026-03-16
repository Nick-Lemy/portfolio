import InfoSquare from "../components/InfoSquare"
import { experiences } from "../data/experience"
import { education } from "../data/education"

const stack = [
    {
        icon: "/code.svg",
        title: "Frontend",
        desc: "Building modern, responsive UIs:",
        list: ["TypeScript", "React.js", "Next.js", "TailwindCSS", "JavaScript", "HTML & CSS"],
    },
    {
        icon: "/tools.svg",
        title: "Backend",
        desc: "Scalable APIs and server-side logic:",
        list: ["Nest.js", "Express.js", "Go (Gin)", "REST APIs"],
    },
    {
        icon: "/square.svg",
        title: "Database",
        desc: "Databases and ORMs I work with:",
        list: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Prisma", "TypeORM"],
    },
    {
        icon: "/computer.svg",
        title: "Mobile",
        desc: "Cross-platform mobile development:",
        list: ["Flutter", "Dart", "Firebase"],
    },
    {
        icon: "/tools.svg",
        title: "DevOps & Tools",
        desc: "Shipping and collaborating:",
        list: ["Git", "GitHub", "Lazygit", "Bash", "Figma", "Trello"],
    },
]

export const About = () => {
    return (
        <>
            {/* ── Header ───────────────────────────────────────────── */}
            <section className="pt-20 pb-16 border-b border-white/5">
                <p className="text-gray-600 text-xs uppercase tracking-widest mb-3">About me</p>
                <h1 className="text-white font-semibold text-3xl md:text-4xl leading-tight mb-6">
                    Building things<br />that matter.
                </h1>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                    Full-stack Software Engineer specializing in TypeScript, React, Next.js, and Nest.js.
                    Background in machine learning fundamentals. Strong in API design, scalable backend systems,
                    and modern frontend architecture.
                </p>
            </section>

            {/* ── Stack ────────────────────────────────────────────── */}
            <section className="py-16 border-b border-white/5">
                <h2 className="text-white text-xl font-semibold mb-8">Tools & Technologies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {stack.map((s, i) => (
                        <InfoSquare key={i} icon={s.icon} title={s.title} desc={s.desc} list={s.list} />
                    ))}
                </div>
            </section>

            {/* ── Experience ───────────────────────────────────────── */}
            <section className="py-16 border-b border-white/5">
                <h2 className="text-white text-xl font-semibold mb-10">Work Experience</h2>
                <div className="flex flex-col">
                    {experiences.map((exp, i) => (
                        <div key={i} className="relative pl-6 pb-10 border-l border-gray-800 last:pb-0">
                            <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-secondary border-2 border-black" />
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 mb-3">
                                <div>
                                    <h3 className="text-white font-semibold text-sm">{exp.company}</h3>
                                    <p className="text-secondary text-xs">{exp.role}</p>
                                </div>
                                <div className="md:text-right shrink-0">
                                    <p className="text-gray-500 text-xs">{exp.period}</p>
                                    <p className="text-gray-600 text-xs">{exp.location}</p>
                                </div>
                            </div>
                            <ul className="flex flex-col gap-1.5">
                                {exp.bullets.map((b, j) => (
                                    <li key={j} className="text-gray-400 text-xs flex gap-2 leading-relaxed">
                                        <span className="text-secondary shrink-0 mt-0.5">▸</span>
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Education ────────────────────────────────────────── */}
            <section className="py-16">
                <h2 className="text-white text-xl font-semibold mb-8">Education</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {education.map((edu, i) => (
                        <div key={i} className="border border-gray-800 rounded-md p-5 flex flex-col gap-3">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                                <div>
                                    <h3 className="text-white font-semibold text-sm">{edu.institution}</h3>
                                    <p className="text-secondary text-xs">{edu.degree}</p>
                                </div>
                                <div className="md:text-right shrink-0">
                                    <p className="text-gray-500 text-xs">{edu.period}</p>
                                    <p className="text-gray-600 text-xs">{edu.location}</p>
                                </div>
                            </div>
                            <ul className="flex flex-col gap-1.5 mt-1">
                                {edu.points.map((pt, j) => (
                                    <li key={j} className="text-gray-400 text-xs flex gap-2 leading-relaxed">
                                        <span className="text-secondary shrink-0 mt-0.5">▸</span>
                                        <span>{pt}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

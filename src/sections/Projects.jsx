const projects = [
    {
        title: "Car Sharing App",
        description:
            "Backend for vehicle booking and availability management. Applied layered architecture (controllers, services, persistence) with unit and integration tests.",
        tech: ["Nest.js", "TypeScript", "PostgreSQL", "Jest"],
        github: "https://github.com/Nick-Lemy",
        deployed: true,
    },
    {
        title: "Smart School-blog Backend",
        description:
            "REST API with AI-powered summaries and blog data management for a school platform.",
        tech: ["Nest.js", "Prisma", "PostgreSQL"],
        github: "https://github.com/Nick-Lemy",
        deployed: false,
    },
    {
        title: "EcoX",
        description:
            "Smart recycling bin system with AI item detection using computer vision. Delivered a working prototype and demo.",
        tech: ["JavaScript", "HTML", "CSS", "Teachable Machine (CV)"],
        github: "https://github.com/Nick-Lemy",
        deployed: true,
    },
    {
        title: "Whatsapp Spammer CLI",
        description:
            "Published npm CLI tool for automated WhatsApp messaging using browser automation.",
        tech: ["TypeScript", "Puppeteer", "Chrome Remote Debugging"],
        github: "https://github.com/Nick-Lemy",
        deployed: true,
    },
]

export const Projects = () => {
    return (
        <div id="projects" className="border-t border-gray-700 py-16 px-8 lg:px-30">
            <h1 className="text-white text-4xl font-bold mb-2">Projects</h1>
            <p className="text-gray-400 mb-10">Things I've built</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="border border-gray-700 rounded-md p-6 flex flex-col gap-4 hover:border-secondary transition duration-300"
                    >
                        <div className="flex justify-between items-start gap-3">
                            <h2 className="text-white text-xl font-bold">{project.title}</h2>
                            <div className="flex gap-3 shrink-0">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-secondary transition duration-300 text-sm"
                                >
                                    GitHub
                                </a>
                                {project.deployed && (
                                    <span className="text-xs text-green-400 border border-green-400/30 bg-green-400/5 px-2 py-0.5 rounded-sm">
                                        Live
                                    </span>
                                )}
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm flex-1">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tag, i) => (
                                <span
                                    key={i}
                                    className="text-xs text-secondary border border-secondary/30 bg-secondary/5 px-2 py-0.5 rounded-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

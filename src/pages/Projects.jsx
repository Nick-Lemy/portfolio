import { projects } from "../data/projects"

export const Projects = () => {
    return (
        <>
            {/* ── Header ───────────────────────────────────────────── */}
            <section className="pt-20 pb-12 border-b border-white/5">
                <p className="text-gray-600 text-xs uppercase tracking-widest mb-3">Work</p>
                <h1 className="text-white font-semibold text-3xl md:text-4xl leading-tight mb-4">
                    Projects
                </h1>
                <p className="text-gray-400 text-sm max-w-md leading-relaxed">
                    From APIs to smart hardware — things I've built, shipped, and learned from.
                </p>
            </section>

            {/* ── Grid ─────────────────────────────────────────────── */}
            <section className="py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projects.map((p, i) => (
                        <div
                            key={i}
                            className="border border-gray-800 rounded-md overflow-hidden hover:border-gray-600 transition duration-300"
                        >
                            <div className={`h-24 bg-gradient-to-br ${p.gradient} opacity-60`} />
                            <div className="p-5 flex flex-col gap-3">
                                <div className="flex justify-between items-start gap-2">
                                    <h2 className="text-white font-semibold text-sm">{p.title}</h2>
                                    <div className="flex gap-2 shrink-0 items-center">
                                        {p.featured && (
                                            <span className="text-xs text-secondary border border-secondary/30 px-2 py-0.5 rounded-sm">
                                                Featured
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <p className="text-gray-500 text-xs leading-relaxed flex-1">{p.description}</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {p.tech.map((t, j) => (
                                        <span key={j} className="text-xs text-gray-600 border border-white/5 px-2 py-0.5 rounded-sm">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4 mt-1">
                                    {p.github && (
                                        <a
                                            href={p.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs text-secondary hover:underline"
                                        >
                                            GitHub →
                                        </a>
                                    )}
                                    {p.demo && p.demo !== "#" && (
                                        <a
                                            href={p.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs text-gray-400 hover:text-white transition duration-200"
                                        >
                                            Live demo →
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

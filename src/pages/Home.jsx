import { Link } from "react-router-dom"
import { projects } from "../data/projects"

const featured = projects.filter((p) => p.featured)

export const Home = () => {
    return (
        <>
            {/* ── Hero ─────────────────────────────────────────────── */}
            <section className="min-h-[90vh] flex flex-col justify-center py-24">
                <div className="flex items-center gap-2 mb-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                    <span className="text-gray-500 text-xs">Available for work</span>
                </div>

                <h1 className="text-white font-semibold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6">
                    Hey, I'm<br />
                    <span className="text-secondary">Nick-Lemy</span><br />
                    Kayiranga.
                </h1>

                <p className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed mb-10">
                    Full-stack Software Engineer building production web apps for startups and agencies.
                    Specializing in <span className="text-white">TypeScript, React, Next.js & Nest.js</span>.
                    Based in Kigali, Rwanda.
                </p>

                <div className="flex flex-wrap gap-3 mb-12">
                    <Link
                        to="/projects"
                        className="bg-secondary text-white text-sm px-5 py-2.5 rounded-sm hover:bg-secondary/80 transition duration-200"
                    >
                        View my work
                    </Link>
                    <Link
                        to="/contact"
                        className="border border-gray-700 text-white text-sm px-5 py-2.5 rounded-sm hover:border-secondary hover:text-secondary transition duration-200"
                    >
                        Get in touch
                    </Link>
                </div>

                <div className="flex gap-5 items-center">
                    <a href="https://github.com/Nick-Lemy" target="_blank" rel="noopener noreferrer"
                        className="text-gray-500 text-xs hover:text-white transition duration-200">
                        GitHub
                    </a>
                    <span className="text-gray-700">·</span>
                    <a href="https://www.linkedin.com/in/nick-lemy/" target="_blank" rel="noopener noreferrer"
                        className="text-gray-500 text-xs hover:text-white transition duration-200">
                        LinkedIn
                    </a>
                    <span className="text-gray-700">·</span>
                    <a href="https://www.codewars.com/users/zkaynl7" target="_blank" rel="noopener noreferrer"
                        className="text-gray-500 text-xs hover:text-white transition duration-200">
                        Codewars
                    </a>
                </div>
            </section>

            {/* ── Featured Work ─────────────────────────────────────── */}
            <section className="py-20 border-t border-white/5">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <p className="text-gray-600 text-xs uppercase tracking-widest mb-1.5">Selected work</p>
                        <h2 className="text-white text-2xl font-semibold">Things I've built</h2>
                    </div>
                    <Link to="/projects" className="text-secondary text-xs hover:underline">
                        All projects →
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {featured.map((p, i) => (
                        <div
                            key={i}
                            className="border border-gray-800 rounded-md overflow-hidden group hover:border-gray-600 transition duration-300"
                        >
                            <div className={`h-28 bg-gradient-to-br ${p.gradient} opacity-70`} />
                            <div className="p-5 flex flex-col gap-3">
                                <h3 className="text-white font-semibold text-sm">{p.title}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">{p.description}</p>
                                <div className="flex flex-wrap gap-1.5 mt-1">
                                    {p.tech.map((t, j) => (
                                        <span key={j} className="text-xs text-gray-600 border border-white/5 px-2 py-0.5 rounded-sm">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={p.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-secondary hover:underline mt-1 w-fit"
                                >
                                    View on GitHub →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── About strip ───────────────────────────────────────── */}
            <section className="py-20 border-t border-white/5">
                <div className="flex flex-col md:flex-row gap-12 md:gap-20">
                    <div className="shrink-0">
                        <p className="text-gray-600 text-xs uppercase tracking-widest mb-1.5">About</p>
                        <h2 className="text-white text-2xl font-semibold">Who I am</h2>
                    </div>
                    <div className="flex flex-col gap-4 max-w-lg">
                        <p className="text-gray-400 text-sm leading-relaxed">
                            I'm a full-stack engineer currently studying BSc Software Engineering (ML Track) at
                            African Leadership University in Kigali. I also train at The Gym Rwanda, where I've
                            shipped production software for NGOs.
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            I've worked with startups and agencies — from social platforms to marketing tools —
                            building features people actually use, end to end.
                        </p>
                        <Link to="/about" className="text-secondary text-xs hover:underline mt-1 w-fit">
                            More about me →
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

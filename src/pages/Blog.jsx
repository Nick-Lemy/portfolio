import { Link } from "react-router-dom"
import { posts } from "../data/posts"

export const Blog = () => {
    return (
        <>
            {/* ── Header ───────────────────────────────────────────── */}
            <section className="pt-20 pb-12 border-b border-white/5">
                <p className="text-gray-600 text-xs uppercase tracking-widest mb-3">Writing</p>
                <h1 className="text-white font-semibold text-3xl md:text-4xl leading-tight mb-4">
                    Blog
                </h1>
                <p className="text-gray-400 text-sm max-w-md leading-relaxed">
                    Thoughts, tutorials, and notes from my journey as a developer.
                </p>
            </section>

            {/* ── Posts ────────────────────────────────────────────── */}
            <section className="py-12">
                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {posts.map((post, i) => (
                            <Link
                                key={i}
                                to={`/blog/${post.slug}`}
                                className="border border-gray-800 rounded-md p-5 flex flex-col gap-3 hover:border-gray-600 transition duration-300"
                            >
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-secondary border border-secondary/20 px-2 py-0.5 rounded-sm">
                                        {post.category}
                                    </span>
                                    <span className="text-gray-600 text-xs">{post.date}</span>
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-white font-semibold text-sm mb-2">{post.title}</h2>
                                    <p className="text-gray-500 text-xs leading-relaxed">{post.excerpt}</p>
                                </div>
                                <span className="text-secondary text-xs">Read more →</span>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center">
                        <p className="text-gray-600 text-sm">Posts coming soon.</p>
                        <p className="text-gray-700 text-xs mt-2">
                            Follow along on{" "}
                            <a
                                href="https://github.com/Nick-Lemy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary hover:underline"
                            >
                                GitHub
                            </a>{" "}
                            for updates.
                        </p>
                    </div>
                )}
            </section>
        </>
    )
}

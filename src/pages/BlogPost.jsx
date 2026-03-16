import { useParams, Link } from "react-router-dom"
import { posts } from "../data/posts"

export const BlogPost = () => {
    const { slug } = useParams()
    const post = posts.find((p) => p.slug === slug)

    if (!post) {
        return (
            <div className="py-32 text-center">
                <p className="text-gray-500 text-sm mb-4">Post not found.</p>
                <Link to="/blog" className="text-secondary text-xs hover:underline">
                    ← Back to blog
                </Link>
            </div>
        )
    }

    return (
        <article className="py-20 max-w-2xl">
            <Link to="/blog" className="text-gray-600 text-xs hover:text-white transition duration-200 mb-8 inline-block">
                ← Blog
            </Link>
            <div className="flex items-center gap-3 mb-6">
                <span className="text-xs text-secondary border border-secondary/20 px-2 py-0.5 rounded-sm">
                    {post.category}
                </span>
                <span className="text-gray-600 text-xs">{post.date}</span>
            </div>
            <h1 className="text-white font-semibold text-3xl leading-tight mb-8">{post.title}</h1>
            <div className="text-gray-400 text-sm leading-relaxed whitespace-pre-wrap">
                {post.content}
            </div>
            <div className="mt-16 pt-8 border-t border-white/5">
                <Link to="/blog" className="text-secondary text-xs hover:underline">
                    ← Back to blog
                </Link>
            </div>
        </article>
    )
}

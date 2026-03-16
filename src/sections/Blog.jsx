// ─────────────────────────────────────────────────────────────
// Blog section — complete the implementation by adding posts below.
//
// Each post object shape:
// {
//   title: string,
//   excerpt: string,
//   date: string,       e.g. "March 2026"
//   category: string,   e.g. "Tutorial" | "Opinion" | "Project"
//   slug: string,       used for the link: /blog/<slug>
// }
// ─────────────────────────────────────────────────────────────
const posts = [
    // Add your posts here, for example:
    // {
    //   title: "Building a REST API with Nest.js and Prisma",
    //   excerpt: "A step-by-step guide to setting up a production-ready backend with Nest.js, Prisma ORM, and PostgreSQL.",
    //   date: "March 2026",
    //   category: "Tutorial",
    //   slug: "nestjs-prisma-rest-api",
    // },
]

const PlaceholderCard = () => (
    <div className="border border-gray-700 rounded-md p-6 flex flex-col gap-4 animate-pulse">
        <div className="flex justify-between items-center">
            <span className="text-xs text-secondary border border-secondary/30 bg-secondary/5 px-2 py-0.5 rounded-sm">
                Category
            </span>
            <span className="text-gray-700 text-xs">— / — / —</span>
        </div>
        <div className="flex flex-col gap-2 flex-1">
            <div className="h-4 w-3/4 bg-gray-800 rounded"></div>
            <div className="h-3 w-full bg-gray-800/60 rounded"></div>
            <div className="h-3 w-5/6 bg-gray-800/60 rounded"></div>
            <div className="h-3 w-4/6 bg-gray-800/60 rounded"></div>
        </div>
        <span className="text-gray-700 text-sm">Read more →</span>
    </div>
)

export const Blog = () => {
    return (
        <div id="blog" className="border-t border-gray-700 py-16 px-8 lg:px-30">
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h1 className="text-white text-4xl font-bold mb-2">Blog</h1>
                    <p className="text-gray-400">Thoughts, tutorials, and notes from my journey</p>
                </div>
                <a
                    href="#"
                    className="text-secondary text-sm hover:underline transition duration-300"
                >
                    View all →
                </a>
            </div>

            {posts.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {posts.map((post, index) => (
                        <a
                            key={index}
                            href={`/blog/${post.slug}`}
                            className="border border-gray-700 rounded-md p-6 flex flex-col gap-4 hover:border-secondary transition duration-300"
                        >
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-secondary border border-secondary/30 bg-secondary/5 px-2 py-0.5 rounded-sm">
                                    {post.category}
                                </span>
                                <span className="text-gray-500 text-xs">{post.date}</span>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-white font-bold text-lg mb-2">{post.title}</h2>
                                <p className="text-gray-400 text-sm">{post.excerpt}</p>
                            </div>
                            <span className="text-secondary text-sm">Read more →</span>
                        </a>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <PlaceholderCard />
                    <PlaceholderCard />
                    <PlaceholderCard />
                </div>
            )}
        </div>
    )
}

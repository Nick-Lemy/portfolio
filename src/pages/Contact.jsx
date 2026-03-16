export const Contact = () => {
    return (
        <>
            {/* ── Header ───────────────────────────────────────────── */}
            <section className="pt-20 pb-12 border-b border-white/5">
                <p className="text-gray-600 text-xs uppercase tracking-widest mb-3">Let's talk</p>
                <h1 className="text-white font-semibold text-3xl md:text-4xl leading-tight mb-4">
                    Say hello.
                </h1>
                <p className="text-gray-400 text-sm max-w-md leading-relaxed">
                    Whether it's a project, an opportunity, or just a conversation — I'm open to it.
                </p>
            </section>

            {/* ── Content ──────────────────────────────────────────── */}
            <section className="py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                    {/* Reach me */}
                    <div className="border border-gray-800 rounded-md p-5 flex flex-col gap-5">
                        <h2 className="text-white font-semibold text-sm">Reach me</h2>
                        <div className="flex flex-col gap-3">
                            <a
                                href="mailto:nicklemykayiranga@gmail.com"
                                className="text-gray-400 text-xs hover:text-secondary transition duration-200"
                            >
                                nicklemykayiranga@gmail.com
                            </a>
                            <a
                                href="https://github.com/Nick-Lemy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 text-xs hover:text-secondary transition duration-200"
                            >
                                github.com/Nick-Lemy
                            </a>
                            <a
                                href="https://www.linkedin.com/in/nick-lemy/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 text-xs hover:text-secondary transition duration-200"
                            >
                                linkedin.com/in/nick-lemy
                            </a>
                        </div>
                        <p className="text-gray-700 text-xs mt-auto">Kigali, Rwanda</p>
                    </div>

                    {/* Availability */}
                    <div className="border border-gray-800 rounded-md p-5 flex flex-col gap-4">
                        <h2 className="text-white font-semibold text-sm">Availability</h2>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0"></span>
                            <span className="text-gray-400 text-xs">Open to full-time & freelance work</span>
                        </div>
                        <p className="text-gray-500 text-xs leading-relaxed">
                            Currently studying at African Leadership University and training at The Gym Rwanda.
                        </p>
                        <p className="text-gray-500 text-xs leading-relaxed">
                            French (C1) · English (B2)
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

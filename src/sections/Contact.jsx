export const Contact = () => {
    return (
        <div id="contact" className="border-t border-gray-700 py-16 px-8 lg:px-30">
            <h1 className="text-white text-4xl font-bold mb-2">Contact</h1>
            <p className="text-gray-400 mb-10">Let's work together or just say hi</p>
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="border border-gray-700 rounded-md p-6 flex-1 flex flex-col gap-5">
                    <h2 className="text-white text-xl font-bold">Get in touch</h2>
                    <div className="flex flex-col gap-4">
                        <a
                            href="mailto:nicklemykayiranga@gmail.com"
                            className="flex items-center gap-3 text-gray-300 hover:text-secondary transition duration-300"
                        >
                            <img className="w-5" src="/at.svg" alt="" />
                            <span>nicklemykayiranga@gmail.com</span>
                        </a>
                        <a
                            href="https://github.com/Nick-Lemy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-300 hover:text-secondary transition duration-300"
                        >
                            <img className="w-5" src="/github.svg" alt="" />
                            <span>github.com/Nick-Lemy</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nick-lemy/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-300 hover:text-secondary transition duration-300"
                        >
                            <img className="w-5" src="/linkedin.svg" alt="" />
                            <span>linkedin.com/in/nick-lemy</span>
                        </a>
                    </div>
                    <div className="mt-2 flex flex-col gap-1">
                        <p className="text-gray-500 text-sm">Kigali, Rwanda · +250 793 246 060</p>
                        <p className="text-gray-500 text-sm">French (C1) · English (B2)</p>
                    </div>
                </div>

                <div className="border border-gray-700 rounded-md p-6 flex-1 flex flex-col gap-4">
                    <h2 className="text-white text-xl font-bold">Currently</h2>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-green-400 shrink-0"></span>
                            <span className="text-gray-300">Available for opportunities</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Studying BSc Software Engineering (ML Track) at African Leadership University, Kigali.
                        </p>
                        <p className="text-gray-400 text-sm">
                            Training at The Gym Rwanda — building production software for NGOs in Rwanda.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

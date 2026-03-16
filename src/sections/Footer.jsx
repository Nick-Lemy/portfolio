import { Logo } from "../components/Logo"
import { SocialMedia } from "../components/SocialMedia"

const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "Stack", href: "#stack" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
]

export const Footer = () => {
    return (
        <footer className="border-t border-gray-700 mt-10 px-8 lg:px-30 py-12">
            <div className="flex flex-col lg:flex-row justify-between gap-10">
                <div className="flex flex-col gap-4">
                    <Logo />
                    <p className="text-gray-400 text-sm max-w-xs">
                        Full-stack Software Engineer based in Kigali, Rwanda. Building for the web and beyond.
                    </p>
                    <div className="flex gap-4 items-center">
                        <SocialMedia className="w-7" src="/github.svg" href="https://github.com/Nick-Lemy" />
                        <SocialMedia className="w-5 flex items-center" src="/linkedin.svg" href="https://www.linkedin.com/in/nick-lemy/" />
                        <SocialMedia className="w-6 flex items-center" src="/discord.svg" href="https://discord.com/users/1008263124635373628" />
                        <SocialMedia className="w-7 flex items-center" src="/codewars.svg" href="https://www.codewars.com/users/zkaynl7" />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-white font-semibold">Navigation</h3>
                    <ul className="flex flex-col gap-2">
                        {footerLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="text-gray-400 text-sm hover:text-secondary transition duration-300"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-white font-semibold">Contact</h3>
                    <div className="flex flex-col gap-2">
                        <a
                            href="mailto:nicklemykayiranga@gmail.com"
                            className="text-gray-400 text-sm hover:text-secondary transition duration-300"
                        >
                            nicklemykayiranga@gmail.com
                        </a>
                        <p className="text-gray-500 text-sm">+250 793 246 060</p>
                        <p className="text-gray-500 text-sm">Kigali, Rwanda</p>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col lg:flex-row justify-between items-center gap-3">
                <p className="text-gray-600 text-sm">
                    © {new Date().getFullYear()} Nick-Lemy Kayiranga. All rights reserved.
                </p>
                <p className="text-gray-700 text-sm">
                    Built with React & TailwindCSS
                </p>
            </div>
        </footer>
    )
}

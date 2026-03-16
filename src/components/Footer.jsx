import { Link } from "react-router-dom"
import { Logo } from "./Logo"

const nav = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
]

const socials = [
    { label: "GitHub", href: "https://github.com/Nick-Lemy" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nick-lemy/" },
    { label: "Codewars", href: "https://www.codewars.com/users/zkaynl7" },
]

export const Footer = () => {
    return (
        <footer className="border-t border-white/5 mt-20 px-5 md:px-10 lg:px-24 py-12">
            <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
                <div className="flex flex-col gap-3">
                    <Logo />
                    <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                        Full-stack Software Engineer. Building for the web and beyond.
                    </p>
                </div>

                <div className="flex gap-16">
                    <div className="flex flex-col gap-3">
                        <p className="text-white text-xs font-semibold uppercase tracking-widest">Pages</p>
                        <ul className="flex flex-col gap-2">
                            {nav.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="text-gray-500 text-sm hover:text-white transition duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-3">
                        <p className="text-white text-xs font-semibold uppercase tracking-widest">Social</p>
                        <ul className="flex flex-col gap-2">
                            {socials.map((s) => (
                                <li key={s.href}>
                                    <a
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 text-sm hover:text-white transition duration-200"
                                    >
                                        {s.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
                <p className="text-gray-700 text-xs">© {new Date().getFullYear()} Nick-Lemy Kayiranga</p>
                <p className="text-gray-700 text-xs">Built with React & TailwindCSS</p>
            </div>
        </footer>
    )
}

import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { Logo } from "./Logo"

const links = [
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
]

export const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/5">
            <div className="px-5 md:px-10 lg:px-24 py-4 flex justify-between items-center">
                <Link to="/" onClick={() => setOpen(false)}>
                    <Logo />
                </Link>

                <ul className="hidden md:flex gap-8 items-center">
                    {links.map((link) => (
                        <li key={link.to}>
                            <NavLink
                                to={link.to}
                                className={({ isActive }) =>
                                    `text-sm transition duration-200 ${isActive ? "text-secondary" : "text-gray-400 hover:text-white"}`
                                }
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <button
                    className="md:hidden text-white p-1"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? (
                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22" fill="currentColor">
                            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22" fill="currentColor">
                            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                        </svg>
                    )}
                </button>
            </div>

            {open && (
                <div className="md:hidden border-t border-white/5 px-5 py-5">
                    <ul className="flex flex-col gap-4">
                        {links.map((link) => (
                            <li key={link.to}>
                                <NavLink
                                    to={link.to}
                                    className={({ isActive }) =>
                                        `text-sm transition duration-200 ${isActive ? "text-secondary" : "text-gray-400 hover:text-white"}`
                                    }
                                    onClick={() => setOpen(false)}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    )
}

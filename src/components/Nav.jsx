import { useState, useEffect } from "react"

const links = [
    { num: "I", label: "who I am", to: "#who" },
    { num: "II", label: "what I do", to: "#do" },
    { num: "III", label: "what I've made", to: "#made" },
    { num: "IV", label: "say hello", to: "#hello" },
]

const getTheme = () => document.documentElement.dataset.theme || "light"

export const Nav = () => {
    const [theme, setTheme] = useState(getTheme)

    useEffect(() => {
        document.documentElement.dataset.theme = theme
        localStorage.setItem("theme", theme)
    }, [theme])

    return (
        <nav className="sticky top-0 z-50 border-b border-line backdrop-blur-[8px]" style={{ background: "var(--nav-bg)" }}>
            <div className="wrap flex items-center justify-between py-3">
                <a href="#top" className="hand text-2xl leading-none" aria-label="Back to top">
                    Nick-Lemy.
                </a>

                <div className="flex items-center gap-5 sm:gap-6">
                    <ul className="flex items-center gap-4 sm:gap-6">
                        {links.map((l) => (
                            <li key={l.num}>
                                <a href={l.to} className="group text-sm text-dim hover:text-ink transition-colors">
                                    <span className="sec-num mr-1.5">{l.num}</span>
                                    <span className="hidden md:inline">{l.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
                        className="text-dim hover:text-ink transition-colors cursor-pointer"
                    >
                        {theme === "dark" ? (
                            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <circle cx="12" cy="12" r="4" />
                                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
                            </svg>
                        ) : (
                            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    )
}

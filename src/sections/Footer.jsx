import { profile } from "../data/profile"

export const Footer = () => (
    <footer className="border-t border-line">
        <div className="wrap py-10 flex flex-col items-center gap-3 text-center">
            <p className="hand text-2xl">murakoze — thanks for scrolling</p>
            <div className="flex items-center gap-4">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-faint text-xs hover:text-ink transition-colors">GitHub</a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-faint text-xs hover:text-ink transition-colors">LinkedIn</a>
                <a href={profile.codewars} target="_blank" rel="noopener noreferrer" className="text-faint text-xs hover:text-ink transition-colors">Codewars</a>
            </div>
            <p className="text-faint text-xs">
                © {new Date().getFullYear()} {profile.fullName} · made in Kigali, with care
            </p>
        </div>
    </footer>
)

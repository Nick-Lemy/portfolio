import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { Mail, Moon, Sun } from 'lucide-react'

const links = [
  { label: 'Profile', to: '#profile' },
  { label: 'Work', to: '#work' },
  { label: 'Content', to: '#content' },
  { label: 'Skills', to: '#skills' },
  { label: 'Contact', to: '#contact' },
]

export const Nav = () => {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
    } catch {
      return 'dark'
    }
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // The selected theme still applies for this session if storage is unavailable.
    }
  }, [theme])

  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <div className="nav-inner">
        <a href="#top" className="brand">{profile.name} {profile.lastName}</a>
        <div className="nav-controls">
          <ul className="nav-links">
            {links.map((link) => <li key={link.to}><a href={link.to}>{link.label}{link.label === 'Contact' && <Mail size={14} aria-hidden="true" />}</a></li>)}
          </ul>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme(nextTheme)}
            aria-label={`Switch to ${nextTheme} mode`}
            aria-pressed={theme === 'light'}
            title={`Switch to ${nextTheme} mode`}
          >
            {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </nav>
  )
}

import { profile } from '../data/profile'
import { Mail } from 'lucide-react'

const links = [
  { label: 'Profile', to: '#profile' },
  { label: 'Work', to: '#work' },
  { label: 'Content', to: '#content' },
  { label: 'Skills', to: '#skills' },
  { label: 'Contact', to: '#contact' },
]

export const Nav = () => (
  <nav className="site-nav" aria-label="Main navigation">
    <div className="nav-inner">
      <a href="#top" className="brand">{profile.name} {profile.lastName}</a>
      <ul className="nav-links">
        {links.map((link) => <li key={link.to}><a href={link.to}>{link.label}{link.label === 'Contact' && <Mail size={14} aria-hidden="true" />}</a></li>)}
      </ul>
    </div>
  </nav>
)

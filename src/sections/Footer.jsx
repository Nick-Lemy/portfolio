import { profile } from '../data/profile'

export const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <span>© {new Date().getFullYear()} {profile.fullName}</span>
      <span>{profile.location}</span>
    </div>
  </footer>
)

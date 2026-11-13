import { profile } from '../data/profile'
import { ArrowRight, Mail } from 'lucide-react'
import { ResourceLink } from '../components/ResourceLink'

export const Hero = () => (
  <>
    <header id="top" className="content hero">
      <div className="hero-main">
        <p className="eyebrow">Software engineer · Kigali, Rwanda</p>
        <h1>Hi, I’m <span className="hero-name">{profile.name} {profile.lastName}.</span></h1>
        <p className="hero-copy">
          Building full-stack products for startups and agencies, contributing to open source, and
          helping more developers get involved in tech communities.
        </p>
        <div className="hero-links">
          <a href="#content">View my work <ArrowRight size={16} aria-hidden="true" /></a>
          <a href={`mailto:${profile.email}`}>Get in touch <Mail size={16} aria-hidden="true" /></a>
        </div>
      </div>
      <img className="hero-photo" src="/profile-photo.jpg" alt={`Portrait of ${profile.fullName}`} />
    </header>
    <div className="content worked-with" aria-label="Organizations and teams">
      <strong>Worked with</strong>
      <ResourceLink href="https://www.oskigali.org/" label="Open Source Kigali" />
      <ResourceLink href="https://wiyocom.rw/" label="WiyoCom" />
      <ResourceLink href="https://ottri-frontend-3a6e09c2024b.herokuapp.com/" label="Safi Core · Ottri" />
    </div>
  </>
)

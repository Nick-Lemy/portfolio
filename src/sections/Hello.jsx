import { profile } from '../data/profile'
import { ArrowUpRight, Mail } from 'lucide-react'
import { SiCodewars, SiGithub } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa6'

export const Hello = () => (
  <section id="contact" className="content section contact">
    <p className="section-kicker">Contact</p>
    <h2 className="section-title">Let’s work together.</h2>
    <p className="contact-copy">
      Open to software engineering roles and collaborations.
    </p>
    <a className="contact-email" href={`mailto:${profile.email}`}><Mail size={19} aria-hidden="true" />{profile.email}<ArrowUpRight size={17} aria-hidden="true" /></a>
    <div className="text-links">
      <a href={profile.github} target="_blank" rel="noopener noreferrer"><SiGithub size={16} aria-hidden="true" />GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={16} aria-hidden="true" />LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
      <a href={profile.codewars} target="_blank" rel="noopener noreferrer"><SiCodewars size={16} aria-hidden="true" />Codewars <ArrowUpRight size={14} aria-hidden="true" /></a>
    </div>
  </section>
)

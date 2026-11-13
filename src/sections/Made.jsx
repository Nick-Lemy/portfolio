import { projects, openSource } from '../data/projects'
import { ResourceLink } from '../components/ResourceLink'
import { Building2, Code2, Package, QrCode, Terminal } from 'lucide-react'
import { SiWhatsapp } from 'react-icons/si'

const projectIcons = {
  Gratos: QrCode,
  'Baumeister Website': Building2,
  'Product Catalogue API': Package,
  'Hollow Chat TUI': Terminal,
  'WhatsApp Spammer CLI': SiWhatsapp,
}

export const Made = () => (
  <section id="content" className="content section">
    <p className="section-kicker">Content · Projects</p>
    <h2 className="section-title">Things I’ve built</h2>
    <div className="projects">
      {projects.map((project) => (
        <article className="project" key={project.title}>
          <h3 className="project-heading">
            {(() => {
              const Icon = projectIcons[project.title] || Code2
              return <Icon size={19} aria-hidden="true" />
            })()}
            {project.title}
          </h3>
          <p>{project.description}</p>
          <p className="project-tech">{project.tech.join(' · ')}</p>
          <div className="text-links">
            {project.links.map((link) => <ResourceLink key={link.href} href={link.href} label={link.label} />)}
          </div>
        </article>
      ))}
    </div>
      <div className="opensource">
      <p className="section-kicker">Open source</p>
      <div className="text-links">
        {openSource.map((item) => <ResourceLink key={item.project} href={item.href} label={`${item.project} — ${item.what}`} />)}
      </div>
    </div>
  </section>
)

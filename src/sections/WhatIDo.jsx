import { experiences } from '../data/experience'
import { skillGroups } from '../data/skills'
import { ResourceLink } from '../components/ResourceLink'
import { Cloud, Code2, Database, GitBranch, Server, Smartphone } from 'lucide-react'

const skillIcons = {
  Frontend: Code2,
  Backend: Server,
  'Data & Streaming': Database,
  'Database & Cloud': Cloud,
  Mobile: Smartphone,
  Workflow: GitBranch,
}

export const WhatIDo = () => (
    <section id="work" className="content section">
      <p className="section-kicker">Work</p>
      <h2 className="section-title">Projects I’ve worked with</h2>
      <div className="work-list">
        {experiences.map((exp) => (
          <article key={exp.company} className="work-item">
            <div className="work-meta">{exp.period}<br />{exp.location}</div>
            <div>
              <h3>{exp.company} <span>· {exp.role}</span></h3>
              {exp.bullets.map((bullet) => <p key={bullet}>{bullet}</p>)}
              <div className="text-links">
                {exp.links?.map((link) => <ResourceLink key={link.href} href={link.href} label={link.label} />)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
)

export const Skills = () => {
  return (
    <section id="skills" className="content section">
      <p className="section-kicker">Skills</p>
      <h2 className="section-title">What I work with</h2>
      <div className="skills">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.name}>
            <h3>{(() => {
              const Icon = skillIcons[group.name] || Code2
              return <Icon size={17} aria-hidden="true" />
            })()}{group.name}</h3>
            <p>{group.items.join(' · ')}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

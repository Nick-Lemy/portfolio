import { ArrowUpRight, Code2, FileText, Globe2, PackageOpen, Server } from 'lucide-react'
import { SiGithub } from 'react-icons/si'

const getIcon = (href = '', label = '') => {
  const text = label.toLowerCase()
  if (href.includes('github.com')) return SiGithub
  if (text.includes('release')) return PackageOpen
  if (text.includes('doc')) return FileText
  if (text.includes('backend') || text.includes('api')) return Server
  if (text.includes('frontend') || text.includes('source')) return Code2
  return Globe2
}

export const ResourceLink = ({ href, label }) => {
  const Icon = getIcon(href, label)
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon size={15} aria-hidden="true" />
      <span>{label}</span>
      <ArrowUpRight size={13} aria-hidden="true" />
    </a>
  )
}

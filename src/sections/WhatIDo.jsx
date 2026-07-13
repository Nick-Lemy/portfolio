import { SectionHead } from "../components/SectionHead"
import { experiences } from "../data/experience"
import { skillGroups } from "../data/skills"

export const WhatIDo = () => (
    <section id="do" className="wrap py-16 md:py-20 border-t border-line">
        <SectionHead num="II" title="What I do" note="& where I've done it" />

        <div className="flex flex-col gap-12 mb-16">
            {experiences.map((exp) => (
                <article key={exp.company} className="rv grid md:grid-cols-[180px_1fr] gap-2 md:gap-10">
                    <div className="pt-1">
                        <p className="hand text-lg leading-tight">{exp.period}</p>
                        <p className="text-faint text-xs mt-1">{exp.location}</p>
                    </div>
                    <div>
                        <h3 className="font-serif font-medium text-ink text-xl leading-snug">
                            {exp.role} <span className="italic font-normal text-dim">· {exp.company}</span>
                        </h3>
                        <ul className="flex flex-col gap-1.5 mt-3">
                            {exp.bullets.map((b) => (
                                <li key={b} className="text-dim text-sm leading-relaxed flex gap-2">
                                    <span className="shrink-0" style={{ color: "var(--rust)" }}>—</span>
                                    <span>{b}</span>
                                </li>
                            ))}
                        </ul>
                        {exp.links?.length > 0 && (
                            <div className="flex flex-wrap gap-4 mt-3">
                                {exp.links.map((l) => (
                                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="plink text-sm">
                                        {l.label} ↗
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </article>
            ))}
        </div>

        <div className="rv">
            <h3 className="font-serif font-medium text-ink text-xl mb-6">
                The toolbox <span className="hand text-lg text-dim ml-1">— what I reach for</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                {skillGroups.map((g) => (
                    <div key={g.name}>
                        <p className="flex items-center gap-2 text-sm font-semibold text-ink mb-2">
                            <span className="w-2 h-2 rounded-full shrink-0" style={{ background: g.color }}></span>
                            {g.name}
                        </p>
                        <p className="text-dim text-sm leading-relaxed">{g.items.join(", ")}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

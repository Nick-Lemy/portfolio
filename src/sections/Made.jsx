import { SectionHead } from "../components/SectionHead"
import { projects, openSource } from "../data/projects"

export const Made = () => (
    <section id="made" className="wrap py-16 md:py-20 border-t border-line">
        <SectionHead num="III" title="What I've made" note="built, shipped, learned from" />

        <div className="grid md:grid-cols-2 gap-4 mb-14">
            {projects.map((p) => (
                <article
                    key={p.title}
                    className="rv border border-line rounded-lg p-6 flex flex-col gap-3 transition-transform duration-300 hover:-translate-y-1"
                    style={{ background: "var(--card)", borderTop: `3px solid ${p.accent}` }}
                >
                    <h3 className="font-serif font-medium text-ink text-lg">{p.title}</h3>
                    <p className="text-dim text-sm leading-relaxed flex-1">{p.description}</p>
                    <p className="text-faint text-xs">{p.tech.join(" · ")}</p>
                    <div className="flex gap-4 mt-1">
                        {p.links.map((l) => (
                            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="plink text-sm">
                                {l.label} ↗
                            </a>
                        ))}
                    </div>
                </article>
            ))}
        </div>

        <div className="rv">
            <h3 className="font-serif font-medium text-ink text-xl mb-1">
                Open-source contributions
            </h3>
            <p className="hand text-lg text-dim mb-5">— small PRs, real projects</p>
            <ul className="flex flex-col gap-2 max-w-md">
                {openSource.map((c) => (
                    <li key={c.project} className="flex items-baseline justify-between gap-4 border-b border-line pb-2">
                        <span className="text-ink text-sm font-medium">{c.project}</span>
                        <a href={c.href} target="_blank" rel="noopener noreferrer" className="plink text-sm shrink-0">
                            {c.what} ↗
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </section>
)

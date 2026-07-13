import { SectionHead } from "../components/SectionHead"
import { education } from "../data/education"

export const Who = () => (
    <section id="who" className="wrap py-16 md:py-20 border-t border-line">
        <SectionHead num="I" title="Who I am" note="the short version" />

        <div className="rv max-w-2xl flex flex-col gap-4 mb-12">
            <p className="text-dim leading-relaxed">
                I'm a full-stack software engineer and open-source contributor, currently a{" "}
                <span className="text-ink">maintainer at Open Source Kigali</span>. I specialize in
                TypeScript, React, Next.js, and Nest.js, with backend experience in C# / .NET and
                event-driven systems.
            </p>
            <p className="text-dim leading-relaxed">
                I've shipped production web applications in collaborative Agile teams for startups and
                agencies, and I run community events that onboard new developers to Git and open source.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
            {education.map((edu) => (
                <div key={edu.institution} className="rv border border-line rounded-lg p-6" style={{ background: "var(--card)" }}>
                    <div className="flex justify-between items-baseline gap-3 mb-1">
                        <h3 className="font-serif font-medium text-ink text-lg">{edu.institution}</h3>
                        <span className="hand text-lg text-dim shrink-0">{edu.location.split(",")[0]}</span>
                    </div>
                    <p className="text-sm mb-1" style={{ color: "var(--rust)" }}>{edu.degree}</p>
                    <p className="text-faint text-xs mb-4">{edu.period}</p>
                    <ul className="flex flex-col gap-1.5">
                        {edu.points.map((pt) => (
                            <li key={pt} className="text-dim text-sm leading-relaxed flex gap-2">
                                <span className="shrink-0" style={{ color: "var(--rust)" }}>—</span>
                                <span>{pt}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </section>
)

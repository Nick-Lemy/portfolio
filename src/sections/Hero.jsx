import { profile } from "../data/profile"
import { Squiggle } from "../components/Squiggle"

const GitHubIcon = () => (
    <svg className="inline-block mr-1.5 -mt-0.5" width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
)

export const Hero = () => {
    return (
        <header id="top" className="wrap pt-16 pb-20 md:pt-24 md:pb-28">
            <div className="grid md:grid-cols-[1fr_240px] gap-12 md:gap-16 items-center">
                <div>
                    <p className="rv in hand text-2xl mb-2" style={{ transitionDelay: ".05s" }}>
                        muraho — I'm
                    </p>
                    <h1
                        className="rv in font-serif font-medium text-ink text-[clamp(42px,8vw,72px)] leading-[1.02] tracking-[-.02em] mb-6"
                        style={{ transitionDelay: ".1s" }}
                    >
                        {profile.name}
                        <br />
                        <span className="italic font-normal text-dim">{profile.lastName}.</span>
                    </h1>

                    <p className="rv in text-lg md:text-xl text-ink leading-relaxed mb-3" style={{ transitionDelay: ".18s" }}>
                        Full-stack engineer, <em className="font-serif">open-source maintainer</em>, &amp; a{" "}
                        <Squiggle>community builder</Squiggle>.
                    </p>

                    <p className="rv in text-dim text-base leading-relaxed max-w-md mb-8" style={{ transitionDelay: ".24s" }}>
                        Kigali-based. Shipping production apps for startups and agencies — TypeScript,
                        React, Nest.js, and lately C# / .NET — while onboarding new developers to open source.
                    </p>

                    <div className="rv in flex flex-wrap items-center gap-3" style={{ transitionDelay: ".3s" }}>
                        <a
                            href={profile.cv}
                            download="Nick-Lemy Kayiranga - CV.pdf"
                            className="text-sm font-medium px-4 py-2 rounded-md text-paper transition-colors"
                            style={{ background: "var(--rust)" }}
                        >
                            Résumé&nbsp;↓
                        </a>
                        <a href={profile.github} target="_blank" rel="noopener noreferrer"
                            className="text-sm text-dim hover:text-ink border border-line px-4 py-2 rounded-md transition-colors">
                            <GitHubIcon />GitHub
                        </a>
                        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
                            className="text-sm text-dim hover:text-ink border border-line px-4 py-2 rounded-md transition-colors">
                            LinkedIn
                        </a>
                        <a href={profile.codewars} target="_blank" rel="noopener noreferrer"
                            className="text-sm text-dim hover:text-ink border border-line px-4 py-2 rounded-md transition-colors">
                            Codewars
                        </a>
                        <a href="#hello" className="plink text-sm ml-1">Say hi ↓</a>
                    </div>

                    <div className="rv in flex items-start gap-2 mt-8 ml-2" style={{ transitionDelay: ".38s" }}>
                        <svg className="shrink-0 mt-1" width="30" height="30" viewBox="0 0 40 40" fill="none" aria-hidden="true" style={{ color: "var(--rust)" }}>
                            <path d="M33,33 C26,28 16,24 14,7 M14,7 L9,15 M14,7 L19,15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="hand text-xl leading-snug">
                            p.s. — open to full-time<br />&amp; freelance work
                        </p>
                    </div>
                </div>

                <div className="rv in mx-auto w-56 md:w-full" style={{ transitionDelay: ".2s" }}>
                    <div className="pframe">
                        <span className="tape a"></span>
                        <span className="tape b"></span>
                        <img src="/me.jpeg" alt="Portrait of Nick-Lemy Kayiranga" />
                        <div className="pcap">that's me —</div>
                    </div>
                </div>
            </div>
        </header>
    )
}

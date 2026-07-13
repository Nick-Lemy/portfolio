import { profile } from "../data/profile"

export const Hello = () => (
    <section id="hello" className="wrap py-20 md:py-28 border-t border-line text-center">
        <p className="rv sec-num text-lg mb-2">IV.</p>
        <h2 className="rv font-serif font-medium text-ink text-[clamp(34px,6vw,56px)] leading-tight tracking-[-.015em] mb-4">
            Say hello.
        </h2>
        <p className="rv text-dim max-w-md mx-auto leading-relaxed mb-8">
            Whether it's a project, an opportunity, or just a conversation — I'm open to it.
            Usually I reply within a day.
        </p>

        <div className="rv flex flex-wrap justify-center items-center gap-3 mb-10">
            <a
                href={`mailto:${profile.email}`}
                className="text-sm font-medium px-5 py-2.5 rounded-md text-paper"
                style={{ background: "var(--rust)" }}
            >
                {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="text-sm text-dim hover:text-ink border border-line px-5 py-2.5 rounded-md transition-colors">
                {profile.phone}
            </a>
        </div>

        <div className="rv flex justify-center items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full" style={{ background: "var(--olive)" }}></span>
            <span className="text-dim text-sm">Open to full-time &amp; freelance work</span>
        </div>
        <p className="rv text-faint text-sm">{profile.location} · {profile.languages}</p>
    </section>
)

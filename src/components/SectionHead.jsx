export const SectionHead = ({ num, title, note }) => (
    <div className="rv mb-10">
        <p className="sec-num text-lg mb-1">{num}.</p>
        <div className="flex items-baseline gap-4 flex-wrap">
            <h2 className="font-serif font-medium text-ink text-[clamp(30px,4.5vw,44px)] leading-tight tracking-[-.015em]">
                {title}
            </h2>
            {note && <span className="hand text-xl text-dim">{note}</span>}
        </div>
    </div>
)

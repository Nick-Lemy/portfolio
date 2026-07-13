export const Squiggle = ({ children }) => (
    <span className="squig">
        {children}
        <svg viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
            <path
                d="M2,7 Q25,1 50,6 T100,6 T150,5 T198,7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
            />
        </svg>
    </span>
)

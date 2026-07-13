import { useEffect } from "react"

// Adds .in to every .rv element as it enters the viewport.
export const useReveal = () => {
    useEffect(() => {
        const els = document.querySelectorAll(".rv")
        const io = new IntersectionObserver(
            (entries) => {
                for (const e of entries) {
                    if (e.isIntersecting) {
                        e.target.classList.add("in")
                        io.unobserve(e.target)
                    }
                }
            },
            { threshold: 0.12 }
        )
        els.forEach((el) => io.observe(el))
        return () => io.disconnect()
    }, [])
}

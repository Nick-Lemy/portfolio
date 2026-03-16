const experiences = [
    {
        company: "Safi Core - Software Agency",
        location: "Gilroy, California",
        role: "Frontend Engineer",
        period: "July 2025 - October 2025",
        bullets: [
            "Developed key features for Ottri, a cleaning services platform",
            "Built user dashboard and core pages (Home, Services, Process) using Next.js, TypeScript, and TanStack Query",
            "Integrated Stripe payments and optimized data fetching and UX performance",
        ],
    },
    {
        company: "ALU Globe - Social Media Startup",
        location: "Kigali, Rwanda",
        role: "Volunteer Frontend Developer",
        period: "May 2025 - October 2025",
        bullets: [
            "Contributed to a university social platform — the 'Facebook' of our university",
            "Built Event, Student Business, and Chat features with Next.js, TypeScript, and Zustand",
            "Worked in Agile/Scrum teams using Trello for sprint management",
        ],
    },
    {
        company: "WiyoCom Ltd - Marketing Agency",
        location: "Kigali, Rwanda",
        role: "Software Developer",
        period: "April 2024 - January 2025",
        bullets: [
            "Built the company website and blog using React.js, TailwindCSS, and Firebase",
            "Developed client websites including Merap Ltd using TypeScript, Next.js and TailwindCSS",
        ],
    },
]

export const WorkExperience = () => {
    return (
        <div id="experience" className="border-t border-gray-700 py-16 px-8 lg:px-30">
            <h1 className="text-white text-4xl font-bold mb-2">Experience</h1>
            <p className="text-gray-400 mb-12">My professional journey</p>
            <div className="flex flex-col">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-8 pb-12 border-l border-gray-700 last:pb-0">
                        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-secondary border-2 border-black"></div>
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-1 mb-4">
                            <div>
                                <h2 className="text-white text-xl font-bold">{exp.company}</h2>
                                <p className="text-secondary font-medium">{exp.role}</p>
                            </div>
                            <div className="lg:text-right shrink-0">
                                <p className="text-gray-400 text-sm">{exp.period}</p>
                                <p className="text-gray-500 text-sm">{exp.location}</p>
                            </div>
                        </div>
                        <ul className="flex flex-col gap-2">
                            {exp.bullets.map((bullet, i) => (
                                <li key={i} className="text-gray-300 flex gap-2">
                                    <span className="text-secondary mt-1 shrink-0">▸</span>
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

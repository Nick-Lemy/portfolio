const education = [
    {
        institution: "African Leadership University",
        location: "Kigali, Rwanda",
        degree: "BSc Software Engineering (ML Track)",
        period: "January 2024 - Present",
        points: [
            "Software engineering foundations, algorithms, and system design",
            "Project-based full-stack development",
            "AI fundamentals and applied Machine Learning",
        ],
    },
    {
        institution: "The Gym Rwanda",
        location: "Kigali, Rwanda",
        degree: "Software Development Trainee",
        period: "November 2024 - Present",
        points: [
            "Intensive training in modern web engineering",
            "Peer programming with Git, TypeScript, React, TailwindCSS, and Nest.js",
            "Delivered software projects for NGOs in Rwanda",
            "Strengthened communication, public speaking, and technical collaboration skills",
        ],
    },
]

export const Education = () => {
    return (
        <div id="education" className="border-t border-gray-700 py-16 px-8 lg:px-30">
            <h1 className="text-white text-4xl font-bold mb-2">Education</h1>
            <p className="text-gray-400 mb-10">My academic background</p>
            <div className="flex flex-col lg:flex-row gap-6">
                {education.map((edu, index) => (
                    <div
                        key={index}
                        className="border border-gray-700 rounded-md p-6 flex-1 flex flex-col gap-3"
                    >
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-1">
                            <div>
                                <h2 className="text-white text-xl font-bold">{edu.institution}</h2>
                                <p className="text-secondary font-medium">{edu.degree}</p>
                            </div>
                            <div className="lg:text-right shrink-0">
                                <p className="text-gray-400 text-sm">{edu.period}</p>
                                <p className="text-gray-500 text-sm">{edu.location}</p>
                            </div>
                        </div>
                        <ul className="flex flex-col gap-2 mt-2">
                            {edu.points.map((point, i) => (
                                <li key={i} className="text-gray-300 flex gap-2 text-sm">
                                    <span className="text-secondary mt-0.5 shrink-0">▸</span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

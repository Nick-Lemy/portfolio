import InfoSquare from "../components/InfoSquare";
import { PrimaryButton } from "../components/PrimaryButton";

export const Experience = () => {
    return (
        <div id="stack" className="border-t border-gray-700 py-10 rounded-lg">
            <div className="flex justify-center flex-col gap-5 py-2 px-8 lg:px-30">
                <h1 className="text-white items-center flex text-4xl font-bold">
                    Stack & Technology
                </h1>
                <p className="text-white">
                    I specialize in building production-grade web applications and scalable APIs
                </p>
                <div className="flex flex-wrap gap-7">
                    <InfoSquare
                        icon="/computer.svg"
                        title="What can I do"
                        desc="I can help develop solutions that will help grow your business:"
                        list={["UI/UX Design", "Frontend Development", "Backend Development", "Mobile App Development"]}
                    />
                    <InfoSquare
                        icon="/code.svg"
                        title="Frontend"
                        desc="Technologies I use to build modern, responsive UIs:"
                        list={["TypeScript", "React.js", "Next.js", "TailwindCSS", "JavaScript", "HTML & CSS"]}
                    />
                    <InfoSquare
                        icon="/tools.svg"
                        title="Backend"
                        desc="What I use to build scalable APIs and server-side logic:"
                        list={["Nest.js", "Express.js", "Go (Gin)", "REST APIs"]}
                    />
                    <InfoSquare
                        icon="/square.svg"
                        title="Database"
                        desc="Databases and ORMs I work with:"
                        list={["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Prisma", "TypeORM", "Mongoose"]}
                    />
                    <InfoSquare
                        icon="/computer.svg"
                        title="Mobile"
                        desc="Stack I use for cross-platform mobile development:"
                        list={["Flutter", "Dart", "Firebase"]}
                    />
                    <InfoSquare
                        icon="/tools.svg"
                        title="DevOps & Tools"
                        desc="Tools I use day to day to ship and collaborate:"
                        list={["Git", "GitHub", "Lazygit", "Bash", "Figma", "Trello"]}
                    />
                </div>
                <div className="self-end py-5">
                    <a href="#projects"><PrimaryButton src="/square.svg" title="View My Projects" /></a>
                </div>
            </div>
        </div>
    )
}

import InfoSquare from "../components/InfoSquare";
import { PrimaryButton } from "../components/PrimaryButton";

export const Experience = () => {
    return (
        <div className="border-t border-gray-700 py-10 rounded-lg">
            <div className="flex justify-center flex-col gap-5 py-2 px-8 lg:px-30">
                <h1 className="text-white items-center flex text-4xl font-bold">
                    Stack & Technology
                </h1>
                <p className="text-white">
                    I specialize in creating stunning mobile and web applications and developing optimize and scalable APIs
                </p>
                <div className="flex flex-col lg:flex-row gap-7">
                    <InfoSquare icon="/computer.svg" title={`What can I do`} desc={`I can help develop solutions that will help grow your business:`} list={[`UI/UX Design`, `Frontend Development`, `Backend Development`, `Mobile App Development`]} />
                    <InfoSquare icon="/tools.svg" title={`Tools I use`} desc={`These are the different tools I use to build valuable products:`} list={[`Figma`, `Javascript, React, TailwindCss`, `Express.js, MySQL, Postgresql, MongoDB`, `Dart, Flutter, Firebase`]} />
                </div>
                <div className="self-end py-5">
                    <PrimaryButton src={`/square.svg`} title={`View My Projects`} />
                </div>
            </div>
        </div>
    )
}

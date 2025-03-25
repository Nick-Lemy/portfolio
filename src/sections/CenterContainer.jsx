import { PrimaryButton } from "../components/PrimaryButton"
import { SocialMedia } from "../components/SocialMedia"

export const CenterContainer = () => {
    return (
        <div className="px-8 lg:px-30 h-screen justify-center flex flex-col items-center">
            <div className="flex flex-col gap-3">
                <div className="flex self-start items-center  gap-5">
                    <img className="w-15" src="/me.png" alt="" />
                    <h1 className=" text-white text-2xl font-semibold">Hey, I'm <span className="text-secondary">Nick-Lemy</span> <br /> A <span className="text-secondary">Junior Software Engineer</span>  </h1>
                </div>
                <p className="max-w-xl text-white text-md ">
                    A Junior Fullstack Developer with solid foundations in Express JS.
                    passionate about crafting seamless user experiences, I thrive at the intersection of creativity and functionality.
                </p>
                <div className="flex gap-5 items-center">
                    <PrimaryButton src="/at.svg" title="Contact me" />
                    <PrimaryButton src="/code.svg" title="Projects" />
                    <p className="text-white text-2xl font-bold">|</p>
                    <div className="flex gap-5">
                        <SocialMedia className='w-9' src="/github.svg" href="https://github.com/Nick-Lemy" />
                        <SocialMedia className="w-6 items-center flex" src="/linkedin.svg" href="https://github.com/Nick-Lemy" />
                        <SocialMedia className='w-8 items-center flex'  src="/discord.svg" href="https://github.com/Nick-Lemy" />
                        <SocialMedia className="w-9 items-center flex" src="/codewars.svg" href="https://github.com/Nick-Lemy" />
                    </div>
                </div>
            </div>
        </div>
    )
}

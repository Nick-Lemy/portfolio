import { PrimaryButton } from "../components/PrimaryButton"
import { SocialMedia } from "../components/SocialMedia"

export const CenterContainer = () => {
    return (
        <div className="px-8 lg:px-30 justify-center flex flex-col py-30 lg:py-50 items-center">
            <div className="flex flex-col gap-3">
                <div className="flex self-start items-center  gap-5">
                    <img className="w-15 lg:w-22" src="/me.png" alt="" />
                    <h1 className=" text-white text-2xl lg:text-4xl font-semibold">Hey, I'm <span className="text-secondary">Nick-Lemy</span> <br /> A <span className="text-secondary">Junior Software Engineer</span>  </h1>
                </div>
                <p className="max-w-xl lg:text-xl text-white text-md ">
                    A Junior Fullstack Developer with solid foundations in Express JS.
                    passionate about crafting seamless user experiences, I thrive at the intersection of creativity and functionality.
                </p>
                <div className="flex flex-col-reverse gap-5  lg:flex-row">
                    <div className="flex gap-5 ">
                        <PrimaryButton src="/at.svg" title="Contact me" />
                        <PrimaryButton src="/code.svg" title="Projects" />
                        <p className="hidden px-5 lg:flex text-white text-2xl font-bold">|</p>
                    </div>
                    <div className="flex gap-5 ">
                        <SocialMedia className='w-9' src="/github.svg" href="https://github.com/Nick-Lemy" />
                        <SocialMedia className="w-6 items-center flex" src="/linkedin.svg" href="https://www.linkedin.com/in/nick-lemy/" />
                        <SocialMedia className='w-8 items-center flex' src="/discord.svg" href="https://https://discord.com/users/1008263124635373628" />
                        <SocialMedia className="w-9 items-center flex" src="/codewars.svg" href="https://www.codewars.com/users/zkaynl7" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export const CenterContainer = () => {
    return (
        <div className="px-8 lg:px-30 h-screen justify-center flex flex-col items-center">
            <div>
                <div className="flex self-start items-center  gap-5">
                    <img className="w-15" src="/me.png" alt="" />
                    <h1 className=" text-white text-2xl font-semibold">Hey, I'm <span className="text-secondary">Nick-Lemy</span> <br /> A <span className="text-secondary">Junior Software Engineer</span>  </h1>
                </div>
                <p className="max-w-xl text-white text-md ">
                    A Junior Fullstack Developer with solid foundations in Express JS.
                    passionate about crafting seamless user experiences, I thrive at the intersection of creativity and functionality.
                </p>
                <div>
                </div>
            </div>
        </div>
    )
}

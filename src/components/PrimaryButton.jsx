export const PrimaryButton = ({ src, title }) => {
    return (
        <>
            <div className="border-1 bg-black border-gray-600 rounded-sm items-center flex gap-2 w-fit px-2 py-0.5">
                <img className="w-3.5" src={ src } alt="" />
                <h1 className="text-white">{title}</h1>
            </div>
        </>
    )
}
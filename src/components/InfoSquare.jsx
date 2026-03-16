const InfoSquare = ({ icon, title, desc, list }) => {
    return (
        <div className="border border-gray-800 p-5 rounded-md flex flex-col gap-3">
            <div className="flex gap-3 items-center">
                <img className="w-7" src={icon} alt="" />
                <h3 className="text-white font-semibold text-base">{title}</h3>
            </div>
            <p className="text-gray-500 text-sm">{desc}</p>
            <ul className="list-disc px-5 flex flex-col gap-1">
                {list.map((elem, i) => (
                    <li key={i} className="text-gray-300 text-sm">{elem}</li>
                ))}
            </ul>
        </div>
    )
}

export default InfoSquare

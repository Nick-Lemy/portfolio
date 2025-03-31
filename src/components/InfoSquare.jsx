import React from "react"
const InfoSquare = ({ icon, title, desc, list }) => {
     let liList = []
list.map(elem => {
        liList.push(<li>{elem}</li>)
    })
    return (
        <div className="border p-6 border-gray-500 rounded-md max-w-sm flex flex-col justify-center gap-3">
            <div className="flex gap-5 items-center">
                <img className="w-10" src={icon} alt="" />
                <h1 className="text-white font-bold text-3xl">{title}</h1>
            </div>
            <p className="text-gray-400">{desc}</p>
            <ul className="*:text-white text-lg list-disc font-medium px-10 gap-1 flex flex-col">
                {liList}
            </ul>
        </div>
    )
}

/*
<li>UI/UX Design</li>
<li>Frontend Development</li>
<li>Banckend Development</li>
<li>Mobile App Development</li>

*/
// I can help develop solutions that will help grow your business:

export default InfoSquare
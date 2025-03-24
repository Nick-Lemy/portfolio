import { useState } from "react"
import { Logo } from "../components/Logo"
export const Navbar = () => {
    const [menu, setMenu] = useState('hidden')
    const [menuButton, setMenuButton] = useState('flex')
    const menuToggle = () => {
        if (menu === 'hidden') {
            setMenu('flex')
            setMenuButton('hidden')
        } else {
            setMenu('hidden')
            setMenuButton('flex')
        }
    }
    return (
        <nav className="bg-black relative">
            <div className="px-8 lg:px-30 justify-between py-3 lg:py-4.75 flex gap-40 items-center">
                <a href="/">
                    <Logo />
                </a>
                <ul className="hidden lg:flex text-lg *:hover:text-secondary *:transition *:duration-300 *:ease-in-out text-white font-medium gap-25">
                    <li className=""><a href="/">Home</a></li>
                    <li className=""><a href="#project">Project</a></li>
                    <li className=""><a href="#contact">Contact</a></li>
                </ul>
                <a className="hidden lg:flex border-1 hover:*:fill-secondary hover:border-secondary border-white rounded-md px-1 transition duration-300 ease-in-out py-0.5" href="">
                    <svg className="transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
                        <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
                    </svg>
                </a>
                <a id="menu-btn" onClick={(e) => {
                    e.preventDefault();
                    menuToggle();
                }} className={menuButton + ` lg:hidden *:fill-secondary transition duration-300 ease-in-out`} href="">
                    <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="24px" fill="#ffff">
                        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                    </svg>
                </a>
                <a className={menu + ` flex lg:hidden *:fill-secondary transition duration-300 ease-in-out`} href="">
                    <svg className="" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                </a>
            </div>
            <div id="menu-mobile" className={menu + ` bg-black absolute w-full pt-3 pb-7`}>
                <ul className="flex flex-col justify-center w-full items-end px-8 text-lg *:hover:text-secondary *:transition *:duration-300 *:ease-in-out text-white font-medium gap-5">
                    <li className=""><a href="/">Home</a></li>
                    <li className=""><a href="#project">Project</a></li>
                    <li className=""><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
export const Navbar = () => {
    return (
        <nav>
            <div className="px-8 py-5">
                <h1 className="text-3xl font-bold">
                    Nick
                    <span className="text-blue-700"> Lemy</span>
                </h1>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#contact"></a></li>
                </ul>
            </div>
        </nav>
    )
}
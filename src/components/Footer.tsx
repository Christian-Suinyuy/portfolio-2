function Footer(){
    return (
        <footer className="flex flex-col justify-around bg-slate-800  w-full h-40 text-white
        items-center-safe relatve bottom-5">
            <div className="flex gap-5">
            <div id="me"className="flex gap-1">
                <span className="rounded-4xl w-8 text-center text-white h-8 bg-purple-500"> B</span>
                Banboye
            </div>

            <nav className="flex list-none gap-3 sm:gap-5">
                <a href="#home"><li>Home</li></a>
                <a href="#about"><li>About</li></a>
                <a href="#process"><li>Process</li></a>
                <a href="#projects"><li>Portfolio</li></a>
                
                {/* <li>Blog</li>
                <li>Services</li> */}
            </nav>

            </div>

            <span className="text-white"> &copy; copyright 2025, portfolio</span>
        </footer>
    )
}

export default Footer
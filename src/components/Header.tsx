function Header(){
    return(
        <section className="flex sticky z-10 top-0 bg-white pt-2 justify-between px-5 sm:px-10 md:px-30 lg:px-60">
            <div id="me"className="flex gap-1">
                <span className="rounded-4xl w-8 text-center text-white h-8 bg-purple-500"> B</span>
                Banboye
            </div>

            <nav className="flex list-none gap-5">
                <a href="#home"><li>Home</li></a>
                <a href="#about"><li>About</li></a>
                <a href="#process"><li>Process</li></a>
                <a href="#projects"><li>Portfolio</li></a>
                <a href="#blog"><li>Blog</li></a>
                <a href="#services"><li>Services</li></a>
                
                <a href="#contact"><button className="p-1 rounded text-white px-5 bg-purple-500">Contact</button></a>
            </nav>
        </section>
    )
}

export default Header
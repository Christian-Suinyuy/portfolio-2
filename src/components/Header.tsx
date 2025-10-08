import { useState } from 'react';

function Header(){
    return(
        <section className="flex sticky z-10 top-0 bg-white pt-2 justify-between px-5 sm:px-10 md:px-30 lg:px-60">
            <div id="me"className="flex gap-1">
                <span className="rounded-4xl w-8 text-center text-white h-8 bg-purple-500"> B</span>
                Banboye
            </div>

            <div className='sm:hidden flex'>
                <DropdownMenu />
            </div>

            <nav className="hidden sm:flex list-none gap-5">
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


// mpbile drop down
function DropdownMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative border-2 border-purple-500 inline-block rounded text-left">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold  text-black ring-1 ring-white/5 hover:bg-white/20"
      >
        Sections
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="-mr-1 size-5 text-gray-400"
        >
          <path
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
            fillRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-purple-500  outline-1 outline-offset-[-1px] outline-white/10 transition duration-100 ease-out">
          <div className="py-1">
            <a onClick={()=>setOpen(!open)}
              href="#home"
              className="block px-4 py-2 text-white hover:bg-white/5 hover:text-white focus:outline-none"
            >
                Home 
            </a>
            <a
            onClick={()=>setOpen(!open)}
              href="#about"
              className="block px-4 py-2 text-white hover:bg-white/5 hover:text-white focus:outline-none"
            >
                About
            </a>
            <a
              href="#process"
              onClick={()=>setOpen(!open)}
              className="block px-4 py-2 text-white hover:bg-white/5 hover:text-white focus:outline-none"
            >
                Process
            </a>
            <a
              href="#projects"
              onClick={()=>setOpen(!open)}
              className="block px-4 py-2 text-white hover:bg-white/5 hover:text-white focus:outline-none"
            >
               Portfolio 
            </a>
            <a
              href="#blog"
              onClick={()=>setOpen(!open)}
              className="block px-4 py-2 text-white hover:bg-white/5 hover:text-white focus:outline-none"
            >
                Blog 
            </a>
            <a
              href="services"
              onClick={()=>setOpen(!open)}
              className="block px-4 py-2 text-white hover:bg-white/5 hover:text-white focus:outline-none"
            >
                Services 
            </a>
            
            
          </div>
        </div>
      )}
    </div>
  );
}
export default Header
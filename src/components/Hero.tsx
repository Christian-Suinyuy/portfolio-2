import { useSelector } from "react-redux"
import type { RootState } from "../state/store"
function Hero(){
    let projects = useSelector((state:RootState)=> state.projects)
    console.log(projects.length)
    return (
        <section id="home" className="sm:grid grid-cols-2 relative lg:gap-5 justify-center">
            <div id="left" className="flex flex-col gap-15">
                <div id="intro" className="gap-5 flex flex-col text">
                    <h1 className="font-semibold text-6xl py-8"> Hello, i`m <br /> Banboye Christian</h1>
                    <div className="image sm:hidden static w-full max-w-full lg:w-4/5 rounded">
                        <img src="/sample2.png"  className="" alt="" />
                    </div>
                    <p className="text-gray-900">I`m software developer based in Bamenda, Cameroon and i
                        strive to build immersive and beautifull web applications
                        through carefully crafted code and user-centric design.
                        With strong focus on detail and design, i combine creativity and clean code to craft digital products
                        that connect with users. Whether it`s a personal project or a client collaboration. i`m driven by the goal of creating smooth
                        engaging, and purposeful interfaces that bring ideas to life
                    </p>
                <a href="#contact" className="text-white rounded bg-purple-500 w-fit p-3"><button>Say hello!</button></a>
                </div>

                <div className="flex gap-3">
                    <div className="flex flex-1 flex-col justify-center items-center
                    rounded p-2 -safe bg-purple-100">
                        <span className="font-semibold text-3xl"> 2 M</span>
                        <span className="">Experience </span>
                    </div>
                    <div className="flex flex-1 rounded flex-col justify-center items-center p-2 -safe bg-purple-100">
                        <span className="font-semibold text-3xl">
                            {projects.length}
                        </span>
                        <span className="">Projects </span>
                    </div>
                    <div className="flex flex-1 rounded flex-col justify-center items-center p-2 -safe bg-purple-100">
                        <span className="font-semibold text-3xl"> 0</span>
                        <span className="">Happy clients </span>
                    </div>
                </div>
            </div>

            <div className="image hidden sm:block max-w-full w-450 lg:w-4/5 rounded">
                <img src="/sample2.png"  className="" alt="" />
            </div>

        </section>
    )
}

export default Hero
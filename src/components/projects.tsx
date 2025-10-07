function Portfolio(){
    return (
        <section id="projects" className="flex flex-col justify-center text-center shadow-2xl p-3 items-center-safe gap-5">
            <div>
                <h2 className="text-3xl font-semibold pb-3">Projects</h2>
                <p>Explore some of my pieces</p>
            </div >

            <div className="flex flex-wrap gap-10 items-center-safe justify-center">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <a href="#" className="bg-purple-500 p-2 rounded"><button> More projects </button></a>
        </section>
    )
}

function Card(){
    return (
        <div className="max-w-75 h-90 flex flex-col gap-3 border-1 border-gray-300">
            <img src="/public/vite.svg" alt="" className="h-55 "/>
            <div>
                <p className="px-2">I design and develop services for customers specializing creating stylish, 
                    modern websites, web services.</p>
            </div>
            <div className="px-2">
                <a href="#" className="border-1 p-2 border-purple-500 ">GitHub &rarr;</a>
            </div>
        </div>
    )
}

export default Portfolio
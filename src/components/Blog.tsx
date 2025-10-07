function Blog(){

    return(
        <section id="blog" className=" flex flex-col gap-8 shadow-2xl py-10 items-center justify-center">
            <div className="text-center">
                <h2 className="text-2xl font-semibold">
                    Blog
                </h2>
                <p> View my recent activities </p>
            </div>

            <div className="flex gap-4 flex-wrap">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

            <div>
                <div className="w-3 h-3 rounded-full bg-gray-600">.</div>
            </div>
        </section>
    )
}

function Card(){
    return (
        <div className="max-w-60 h-84 flex flex-col gap-1 border-1 border-gray-300">
            <img src="/public/blogimg.svg" alt="" className="w-full "/>
            <p>Mon Oct 06 2025</p>
            <h5  className=" mx-3">
                I design and develop services for customers specializing creating stylish, 
                modern websites, web services.
            </h5>
                <a href="#" className="border-1 p-2 w-fit mx-auto border-purple-500 ">Blog &rarr;</a>
        </div>
    )
}

export default Blog
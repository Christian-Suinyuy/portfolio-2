import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProjects } from "../state/firebaseSlice"
import type { RootState, AppDispatch } from "../state/store"
import type { projects as ProjectType } from "../state/firebaseSlice"

function Portfolio(){
    const dispatch = useDispatch<AppDispatch>()
    const projects = useSelector((state:RootState)=> state.projects)

    useEffect(() => {
        dispatch(fetchProjects())
    }, [dispatch])

    console.log(projects)
    return (
        <section id="projects" className="flex flex-col justify-center text-center shadow-2xl p-3 items-center-safe gap-5">
            <p></p>
            <div>
                <h2 className="text-3xl font-semibold pb-3">Projects</h2>
                <p>Explore some of my pieces</p>
            </div >

            <div className="flex flex-wrap gap-10 items-center-safe">
                {
                    projects?.map((project: ProjectType)=> <Card key={project.id} {...project}/>)
                }
            </div>
            <a href="#" className="bg-purple-500 p-2 rounded"><button> More projects </button></a>
        </section>
    )
}

function Card(details: ProjectType){
    return (
        <div className="max-w-75 h-95 flex flex-col gap-3 border-1 border-gray-300">
            {/* <img src="/public/computer.svg" alt="" className="h-35 "/> */}
            <div className="bg-[url('/computer2.svg')] bg-cover bg-center h-40">

            </div>
            <div>
                <h3>
                    {details.title}
                </h3>
                <p className="px-2">
                    {details.description}
                </p>
            </div>
            <div className=" flex justify-around px-2">
                <a href={details.github} target="blank" className="border-1 p-2 border-purple-500 ">GitHub &rarr;</a>
                <a href={details.deployed} target="blank" className="border-1 p-2 border-purple-500 ">deployed &rarr;</a>
            </div>
        </div>
    )
}

export default Portfolio
import research from "/public/Education/vector.svg";
import analitics from "/public/Business/Vector.svg";
import pensile from "/public/User Interface/Pencil.svg";
import device from "/public/Device/computer.svg";
function WorkProcess (){
    return (
        <section id="process" className="grid sm:grid-cols-2 gap-9 sm:gap-4 py-10">
            <div className="left flex flex-col justify-center">
                <h2 className="pm-2 text-black  text-2xl pb-5 font-semibold"> Work Process</h2>
                <p className="mb-3">
                    My workflow is built around clarity, collaboration , and creativity. Each project begins with a deep understanding of clients
                    goals and user needs, ensuring that every decision aligns with both functionality and visual impact
                </p>
                <p className="">
                    From brainstorming to final deployment, i follow a structured yet flexible process 
                    taht allows room for innovation. this approach helps me deliver polished, user-centerd 
                    solutions that not only look great but perform seamlessly across all devices
                </p>
            </div>

            <div className="right grid gap-3 grid-cols-2">
                <div className=" bg-white flex flex-col gap-3 p-3 shadow-2xl">
                    <img src={research} alt="" className="p-1 px-2 h-8 w-8 rounded bg-purple-500" />
                    <h4 className="font-semibold text-black text-xl">1. Research</h4>
                    <p>
                        Through competitor audits and user insights, i gather valuable data that shapes design direction and ensures the
                        solution stands out in the market.
                    </p>
                </div>

                <div className=" bg-white flex flex-col gap-3 p-3 shadow-2xl">
                    <img src={analitics} alt="" className="p-1 px-2 h-8 w-8 rounded bg-purple-200" />
                    <h4 className="font-semibold text-black text-xl">2. Analyze</h4>
                    <p>
                        I begin identifying the project`s objective, audience, and key challenges. This helps define the scope and sets a
                        strong foundation for the next stage.
                    </p>
                </div>

                <div className=" bg-white flex flex-col gap-3 p-3 shadow-2xl">
                    <img src={pensile} alt="" className="p-1 px-2 h-8 w-8 rounded bg-purple-200" />
                    <h4 className="font-semibold text-black text-xl">3. Design</h4>
                    <p>
                        With focus on usability and aesthetics, i Translate ideas
                        into interactive, responsive interfaces that communicate clearly
                        and engage users.
                    </p>
                </div>

                <div className=" bg-white flex flex-col gap-3 p-3 shadow-2xl">
                    <img src={device} alt="" className="p-1 px-2 h-8 w-8 rounded bg-purple-200" />
                    <h4 className="font-semibold text-black text-xl">4. Launch</h4>
                    <p>
                        After rigorous testing and refinement, i deliver and deploy the
                        final product-optimized for performance and ready to make an impact.
                    </p>
                </div>
                
            </div>
        </section>
    )
}

export default WorkProcess
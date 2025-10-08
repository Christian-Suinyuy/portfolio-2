function Skills(){
    return (
        <section id="services" className="grid sm:grid-cols-2 gap-6 items-center-safe justify-center">
            <div id="left">
                <h2 className="font-semibold text-2xl mb-3">What do i do ?</h2>
                <p>I design top web UI (user interface) striving to offer the best UX (user experiences)
                    possible. I aim to create world class stunning UIs
                </p>
                <p className="pt-5">
                    Every project i work on combines creativity, strategy, and technical skill. 
                    Wheather it`s Designingsleek user interfaces or refining user experiences, i focus on building products that not only look beautiful 
                    but also work flawlessly across all devices
                </p>
            </div>

            <div className="flex flex-wrap gap-8">

                <div className="p-3 border-l-4 rounded border-l-purple-500 shadow-2xl" id="skillcard">
                    <h3 className="text-bold text-xl mb-3">
                        Web Development
                    </h3>
                    <p>
                        Building stuning designs with these tools : HTML, CSS, Js, React, Tailwindcss
                    </p>
                </div>
                <div className="p-3 shadow-2xl rounded" id="skillcard">
                    <h3 className="text-bold text-xl mb-3">
                        User Interface (UI)
                    </h3>
                    <p>
                        Designing Intuitive easy to navigate web applicatins that with a clean UI
                    </p>
                </div>
                <div className="p-3 shadow-2xl rounded" id="skillcard">
                    <h3 className="text-bold text-xl mb-3">
                        User Experience (UX)
                    </h3>
                    <p>
                        Creating immersive User wxperiences That keep users glood to their
                        screens
                    </p>
                </div>
            </div>

        </section>
    )
}

export default Skills
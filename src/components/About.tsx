function About (){
    return(
        <section id="about" className="flex gap-15 justify-center p-20 bg-white shadow-2xl">
            <div className="image h-fit bg-purple-300 w-250 lg:w-4/5 rounded">
                <img src="/public/saple.png" alt="" />
                <div className="flex gap-4 shadow-2xl p-3 justify-center bg-white ">
                        <img src="/public/fb.svg" className="bg-purple-500 h-10 rounded p-2 w-10" alt="" />
                        <img src="/public/Social-2.svg" className="h-10" alt="" />
                        <img src="/public/Social-3.svg" className="h-10" alt="" />
                        <img src="/public/ig.svg" className="h-10" alt="" />
                        <img src="/public/linkedin.svg" className="h-10" alt="" />
                    </div>
            </div>

             <div id="intro" className="gap-5 flex flex-col justify-center">
                    <h3 className="font-semibold text-4xl mb-5">I am an experienced junior software developer </h3>
                    <p >
                        I`m a passionate Front-End Developer who loves crafting clean, responsive, and user-friendly web experiences. with a strong eye for design
                        and detail, i enjoy turning creative ideas into functional digital products that feel intuitive and visually apealing. Every project i take on is 
                        an opportunitive to blend logic with creative and bring concepts to life through code.
                    </p>
                    <p>
                        Beyond coding, i`m constantly learning new technologies and exploring better ways to improve user interaction and peerformance.
                        I believe great design is not just about how things look but how they work, and that mindset drives me to build solutions that are both elegant and impactful
                    </p>
                    <div className="flex gap-3">
                        <a href=""><button className="text-white rounded bg-purple-500 p-3">My Projects</button></a>
                        <a href=""><button className="text-black rounded border-1 border-purple-500 p-3">download CV</button></a>
                    </div>
                </div>
        </section>
    )
}

export default About
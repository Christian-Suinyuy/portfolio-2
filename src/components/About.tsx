import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useEffect, useState } from 'react';
function About (){
    const [animationUrl, seturl] = useState('')
    useEffect(()=>{
        seturl("https://lottie.host/37384153-f001-4f38-96af-53654cca55c7/lWTSXzt0EL.lottie")
    })
    return(
        <section id="about" className="grid md:grid-cols-[.7fr_1fr] lg:grid-cols-[.5fr_1fr] gap-15 relative justify-center pb-24 sm:p-5shadow-2xl">
            <div className="image h-fit max-w-full rounded shadow-2xl">
                {/* <img src="/saple.png" className="hidden sm:flex" alt="" /> */}
                <div id="animation1" className='hidden md:flex shadow-2xl mb-1'>
                            <DotLottieReact
                            src= {animationUrl}
                            loop
                            autoplay
                            />
                        </div>
                <div className="flex gap-4 max-w-dvw absolute bottom-0 md:static shadow-2xl p-3 justify-center items-center bg-white ">
                       <a href="https://www.facebook.com/christian.bcs.521749/" target="blank"> 
                        <img src="/fb.svg" className="bg-purple-500 h-10 rounded p-2 w-10" alt="" />
                       </a>
                       <a href="https://wa.me/651098669" target="blank"> 
                            <img src="/whatsapp.svg" className="h-10" alt="" />
                       </a>
                       <a href="https://github.com/Christian-Suinyuy/" target="blank">
                            <img src="/github.svg" className="h-10" alt="" />
                        </a>
                       <a href="https://www.linkedin.com/in/christian-suinyuy-6679b2327" target="blank">
                            <img src="/linkedin.svg" className="h-9" alt="" />
                        </a>
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
                        <a href="#projects"><button className="text-white rounded bg-purple-500 p-3">My Projects</button></a>
                        <a href="#"><button className="text-black rounded border-1 border-purple-500 p-3">download CV</button></a>
                    </div>
                </div>
        </section>
    )
}

export default About
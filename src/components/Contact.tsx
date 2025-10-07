function Contact(){

    
    return(

        <section id="contact" className="pb-20 ">
            <h2 className="text-center font-semibold text-2xl mb-3">Let`s Discause your Project</h2>
            <p className="text-center p-x-20">hi! i would really appriciate your feedback, you can contact me throght the following services</p>
            <div className="grid grid-cols-2 gap-15 shadow-2xl px-10 py-18">
                <div className="flex flex-col gap-5">
                    <div className="flex gap-5 bg-gray-200 p-4">
                        <img src="/public/Social-1.svg" alt="" />
                        <div>
                            <p>Address:</p>
                            <address>T-junction, Bamenda</address>
                        </div>
                        
                    </div>
                    <div className="flex gap-5 bg-gray-200 p-4">
                        <img src="/public/Social-1.svg" alt="" />
                        <div>
                            <p>Email:</p>
                            <address>Christiansuinyuy@gmail.com</address>
                        </div>
                        
                    </div>
                    <div className="flex gap-5 bg-gray-200 p-4">
                        <img src="/public/Social-1.svg" alt="" />
                        <div>
                            <p>Call me now:</p>
                            <address>+237 651078669</address>
                        </div>
                        
                    </div>

                    <div className="flex gap-4 shadow-2xl p-6 ">
                        {/* <img src="/public/fb.svg" className="" alt="" /> */}
                        <img src="/public/Social-1.svg" className="h-10" alt="" />
                        <img src="/public/Social-2.svg" className="h-10" alt="" />
                        <img src="/public/Social-3.svg" className="h-10" alt="" />
                        <img src="/public/ig.svg" className="h-10" alt="" />
                        <img src="/public/linkedin.svg" className="h-10" alt="" />
                    </div>
                </div>
                <form action="#" className="">
                    <p className="pb-3">Email me here, about projects or ides you think i could improve on</p>
                    <label htmlFor="name">
                        <p>Name*</p>
                        <input type="text" required className="border-b-1 border-gray-300 focus:outline-none focus:border-purple-500 focus:border-b-3 w-full" />
                    </label>
                    <label htmlFor="name">
                        <p>Email*</p>
                        <input type="email" required className="border-b-1 border-gray-300 focus:outline-none focus:border-purple-500 focus:border-b-3 w-full" />
                    </label>
                    <label htmlFor="name">
                        <p>Location (optional)</p>
                        <input type="text" className="border-b-1 border-gray-300 focus:outline-none focus:border-purple-500 focus:border-b-3 w-full" />
                    </label>
                    <label htmlFor="name">
                        <p>Subject</p>
                        <input type="text" required className="border-b-1 border-gray-300 focus:outline-none focus:border-purple-500 focus:border-b-3 w-full" />
                    </label>
                    <label htmlFor="name">
                        <p>Messsage*</p>
                        <input type="text" required className="border-b-1 border-gray-300 focus:outline-none focus:border-purple-500 focus:border-b-3 w-full" />
                    </label>

                    <button type="submit" className="bg-purple-500 rounded p-3 mt-10 flex gap-4">Submit <img src="/public/send.svg" alt="" /></button>
                </form>
            </div>
        </section>
    )
}

export default Contact
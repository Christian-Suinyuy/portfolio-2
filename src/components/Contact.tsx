import emailjs from '@emailjs/browser';
import { useRef } from 'react';
function Contact(){
      const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_Email_Service,
        import.meta.env.VITE_Email_Template,
        form.current,
        import.meta.env.VITE_Emailjs_key
      )
      .then(
        result => {
          alert('Email sent: '+ result.text);
          form.current?.reset()
        },
        error => {
          alert('Email error: '+ error.text);
        }
      );
  };

    return(

        <section id="contact" className="pb-20 ">
            <h2 className="text-center font-semibold text-2xl mb-3">Let`s Discause your Project</h2>
            <p className="text-center p-x-20">hi! i would really appriciate your feedback, you can contact me throght the following services</p>
            <div className="grid sm:grid-cols-2 gap-15 shadow-2xl px-10 py-18">
                <div className="flex flex-col gap-5">
                    <div className="flex gap-5 bg-gray-200 p-4">
                        <img src="/location.svg" className='w-8' alt="" />
                        <div>
                            <p>Address:</p>
                            <address>Bamili / Bamenda</address>
                        </div>
                        
                    </div>
                    <div className="flex gap-5 bg-gray-200 p-4">
                        <img src="/maile.svg" className='w-8' alt="" />
                        <div>
                            <p>Email:</p>
                            <address>Christiansuinyuy@gmail.com</address>
                        </div>
                        
                    </div>
                    <div className="flex gap-5 bg-gray-200 p-4">
                        <img src="/whatsapp.svg" className='w-8' alt="" />
                        <div>
                            <p>Call me now:</p>
                            <address>+237 651078669</address>
                        </div>
                        
                    </div>

                    <div className="flex gap-4 max-w-dvw absolute bottom-0 sm:static shadow-2xl p-3 justify-center items-center bg-white ">
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
                <form action="#" ref={form} onSubmit={sendEmail} className="">
                    <p className="pb-3">Email me here, about projects or ides you think i could improve on</p>
                    <label htmlFor="name">
                        <p>Name*</p>
                        <input type="text" name='user_name' required className="border-b-1 border-gray-300 focus:outline-none focus:border-purple-500 focus:border-b-3 w-full" />
                    </label>
                    <label htmlFor="name">
                        <p>Email*</p>
                        <input type="email" name='from_email' required className="border-b-1 border-gray-300 focus:outline-none focus:border-purple-500 focus:border-b-3 w-full" />
                    </label>
                    <label htmlFor="name">
                        <p>Location (optional)</p>
                        <input type="text" name='location' className="border-b-1 border-gray-300 focus:outline-none focus:border-purple-500 focus:border-b-3 w-full" />
                    </label>
                    <label htmlFor="name">
                        <p>Subject</p>
                        <input type="text" name='subject' required className="border-b-1 border-gray-300 focus:outline-none focus:border-purple-500 focus:border-b-3 w-full" />
                    </label>
                    <label htmlFor="name">
                        <p>Messsage*</p>
                        <input type="text" name='message' required className="border-b-1 border-gray-300 focus:outline-none focus:border-purple-500 focus:border-b-3 w-full" />
                    </label>

                    <button type="submit" className="bg-purple-500 hover:cursor-pointer active:scale-85 transition-all duration-100 ease-in-out rounded p-3 mt-10 flex gap-4">Submit <img src="/public/send.svg" alt="" /></button>
                </form>
            </div>
        </section>
    )
}

export default Contact
import React from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';


function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l6taozk', 'template_et8bcur', form.current, '2Rwmd2dJ7s0Q-97AH')
            .then((result) => {
                console.log(result.text);
                alert("Your message has been sent!");
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset();
    };

    return (
        <div className="flex flex-col text-2xl font-bold justify-center text-center bg-black" id="Contact">
            <h1 className="text-2xl font-bold bg-slate-800 text-slate-50 py-2">Lets Connect</h1>
            <div className="grid grid-cols-6 justify-center">
                <form className="md:col-start-3 md:col-end-5 col-start-1 col-span-6 m-3
         justify-center items-center" ref={form} onSubmit={sendEmail}>
                    <div className="justify-between items-center w-full h-1/2">
                        <div className="my-6 flex flex-col ">
                            <label className="text-l pb-2 text-[#ebff0a]">Name</label>
                            <input className="rounded-md bg-slate-300 h-16 " type="text" name="user_name" placeholder=" Type your name here" required />
                        </div>
                        <div className="my-6 flex flex-col w-full">
                            <label className="text-l pb-2 text-[#ebff0a]">Email</label>
                            <input className="rounded-md bg-slate-300 pl-2 h-16" type="email" name="user_email" placeholder=" Type your email here" required />
                        </div>
                        <div className="my-6 flex flex-col w-full">
                            <label className="text-l pb-2 text-[#ebff0a]">How can I help you?</label>
                            <textarea className="rounded-md bg-slate-300 pl-2 flex justify-center h-36" name="message" placeholder=" Type your message here" required />
                        </div>
                        <div className="flex items-center justify-center my-8">
                            <button className="justify-self-center rounded-lg bg-green-500 pl-10 pr-10 pt-3 pb-3 text-xl font-bold" type="submit" value="Send">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
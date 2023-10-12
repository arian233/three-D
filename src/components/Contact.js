import React from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';


function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bt216j8', 'template_vl56h1l', form.current, '2Rwmd2dJ7s0Q-97AH')
            .then((result) => {
                console.log(result.text);
                alert("Your message has been sent!");
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset();
    };

    return (
        <div className="flex flex-col items-center bg-black py-12" id="Contact">
            <div className="bg-slate-800 w-full text-white flex flex-col text-center py-2">
                <h1 className="font-bold text-xl">Lets Connect</h1>
            </div>
            <div className="md:w-1/2 w-3/4 justify-center flex flex-grow">
                <form className="w-full flex-col justify-center items-center" ref={form} onSubmit={sendEmail}>
                    <div className="flex flex-col justify-between items-center w-full h-1/2 mx-4">
                        <div className="my-6 flex flex-col w-full">
                            <label className="text-slate-50 text-l pb-2">Name</label>
                            <input className="rounded-md bg-slate-300 pl-2 h-16 flex flex-col" type="text" name="user_name" placeholder="Type your name here" required />
                        </div>
                        <div className="my-6 flex flex-col w-full">
                            <label className="text-slate-50 text-l pb-2">Email</label>
                            <input className="rounded-md bg-slate-300 pl-2 h-16" type="email" name="user_email" placeholder="Type your email here" required />
                        </div>
                        <div className="my-6 flex flex-col w-full">
                            <label className="text-slate-50 text-l pb-2">How can I help you?</label>
                            <textarea className="rounded-md bg-slate-300 pl-2 flex justify-center h-36" name="message" placeholder="Type your message here" required />
                        </div>
                        <div className="items-center justify-center m-4">
                            <button className="rounded-lg bg-green-400 pl-10 pr-10 pt-3 pb-3 text-xl font-bold" type="submit" value="Send">Send</button>
                        </div>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default Contact;
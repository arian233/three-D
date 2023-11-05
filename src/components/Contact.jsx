import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_l6taozk",
      "template_et8bcur",
      form.current,
      "2Rwmd2dJ7s0Q-97AH"
    );
    setName("");
    setEmail("");
    setMessage("");
    form.current.reset();
  };

  const notify = () =>
    toast.success(
      "Your message has been sent! I will get back to you as soon as possible.",
      {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }
    );
  return (
    <div
      className="flex flex-col text-2xl font-bold justify-center text-center bg-black"
      id="Contact"
    >
      <h1 className="text-2xl font-bold bg-slate-800 text-slate-50 py-2">
        Lets Connect
      </h1>
      <div className="grid grid-cols-6 justify-center">
        <form
          className="md:col-start-3 md:col-end-5 col-start-1 col-span-6 m-3
         justify-center items-center"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="justify-between items-center w-full h-1/2">
            <div className="my-6 flex flex-col ">
              <label className="text-l pb-2 text-[#ebff0a]">Name</label>
              <input
                className="rounded-md bg-slate-300 h-16 "
                type="text"
                name="user_name"
                onChange={(e) => setName(e.target.value)}
                placeholder=" Type your name here"
                required
              />
            </div>
            <div className="my-6 flex flex-col w-full">
              <label className="text-l pb-2 text-[#ebff0a]">Email</label>
              <input
                className="rounded-md bg-slate-300 pl-2 h-16"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                name="user_email"
                placeholder=" Type your email here"
                required
              />
            </div>
            <div className="my-6 flex flex-col w-full">
              <label className="text-l pb-2 text-[#ebff0a]">
                How can I help you?
              </label>
              <textarea
                className="rounded-md bg-slate-300 pl-2 flex justify-center h-36"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                placeholder=" Type your message here"
                required
              />
            </div>
            <div className="flex items-center justify-center my-8">
              <button
                className="justify-self-center rounded-lg bg-green-300 pl-10 pr-10 pt-3 pb-3 text-xl font-bold"
                type="submit"
                value="Send"
                disabled={!name || !email || !message}
                onClick={notify}
              >
                Send
              </button>
              <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;

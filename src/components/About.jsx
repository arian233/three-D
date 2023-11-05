import React from "react";

const About = () => {
  return (
    <div className="flex flex-col justify-center" id="About">
      <h1 className="text-2xl font-bold text-center bg-slate-700 text-slate-50 py-2">
        About Me
      </h1>
      <div
        className="flex align-middle justify-center items-center pt-16 pb-12 bg-gradient-to-r from-purple-600 to-cyan-600"
        id="About"
      >
        <div className=" flex md:flex-col flex-col mx-4 mt-4" id="About">
          <img
            src="/assets/me.jpg"
            alt="Me"
            className="rounded-full mx-auto w-72 h-80"
          />
          <div className="py-16">
            <p className="text-center text-3xl pt-4 text-slate-50">
              I am A <b> Full Stack Developer </b> with BSc in{" "}
              <b> Computing Science </b>
              and Minor in Bussiness Administration from{" "}
              <b> Simon Fraser University </b> (SFU)
            </p>
            <p className="text-center text-2xl pt-4 text-slate-50">
              I have <b>over two years</b> of experience working as Front-end
              and fullStack developer
            </p>
            <p className="text-center text-xl font-bold pt-4 text-slate-50">
              Specialized in JavaScript, TypeScript, React, C#, .NET and MySQL
            </p>
          </div>
          <div className="flex justify-center items-center border-solid">
            <h3 className="text-slate-50 mr-2 text-xl text-center font-semibold">
              Lets connect on LinkedIn:{" "}
            </h3>
            <a
              href="https://www.linkedin.com/in/4arians/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-12 h-12 animate-pulse"
                src="https://img.icons8.com/color/48/000000/linkedin.png"
                alt="linkedIn"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

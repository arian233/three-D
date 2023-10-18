import React from 'react';


const About = () => {
    return (
        <div className="flex align-middle justify-center items-center pt-16 pb-12 bg-black" id="About">
            <div className=" flex md:flex-col flex-col mx-4" id="About">
                <img src='/assets/me.jpg' alt="Me" className="rounded-full mx-auto w-72 h-80" />
                <div className="py-16">
                    <p className="text-center text-3xl font-bold pt-4 text-slate-50">I am A <mark> Full Stack Developer </mark> with BSc in <mark> Computing Science </mark>
                        and Minor in Bussiness Administration from <mark> Simon Fraser University </mark>  (SFU)</p>
                    <p className="text-center text-2xl font-bold pt-4 text-slate-50">I have <mark>over two years of experience</mark>  working as Front-end and fullStack developer</p>
                    <p className="text-center text-xl font-bold pt-4 text-slate-50">Specialized in React, C#, .NET and MySQL</p>

                </div>
                <div className="flex justify-center items-center">
                    <h3 className="text-slate-50 mr-2 text-xl text-center font-semibold">Lets connect on LinkedIn: </h3>
                    <a href="https://www.linkedin.com/in/4arians/" target="_blank" rel="noopener noreferrer">
                        <img className="w-12 h-12 animate-pulse" src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedIn" />
                    </a>
                </div>
            </div>

        </div>
    )
};

export default About;
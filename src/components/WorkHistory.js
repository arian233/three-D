import React, { useState } from "react";

const WorkHistory = ({ company, year, position, achievements, resignation }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    if (isModalOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
    return (
        <div className="md:col-start-3 md:col-end-5 col-start-1 col-span-6 m-3
         justify-center items-center md:hover:col-start-2 md:hover:col-end-6 ">
            <div
                className="fade-in opacity-0 transition-opacity duration-1000
           bg-slate-300 w-full py-4 px-4 rounded-xl cursor-pointer md:hover:bg-[#EBFF0A]"
                onClick={() => setIsModalOpen(true)}
            >
                <div className="flex items-center">
                    <h4 className="w-1/2">{company}</h4>
                    <h4 className="w-1/2">{year}</h4>
                </div>
                <h4>{position}</h4>
            </div>
            {isModalOpen && (
                < div className="fixed md:w-screen inset-0 z-50 items-center justify-center
                 overflow-y-auto bg-black md:text-lg">
                    <div className=" p-3 rounded-xl shadow-2xl flex flex-col text-slate-50 align-middle">
                        <div className="flex flex-col justify-center pt-2 bg-slate-800 py-4 rounded-lg">
                            <div className="flex flex-row justify-between pt-2">
                                <h3 className="text-xl font-bold">{company}</h3>
                                <h3>{year}</h3>
                            </div>
                            <h3>{position}</h3>
                        </div>
                        <h3 className="pt-4">Achievements:</h3>
                        <ul className="list-disc px-8 text-left ">
                            {achievements && achievements.map((achievement) => (
                                <li key={achievement}>{achievement}</li>
                            ))}
                        </ul>
                        <button
                            className=" align-middle items-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 my-4 rounded"
                            onClick={() => setIsModalOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )
            }
        </div >
    );
};

export default WorkHistory;
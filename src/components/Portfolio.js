import { useEffect } from "react";
import career from "../data/career.json";
import WorkHistory from "./WorkHistory";


function CareerTimeLine() {
    useEffect(() => {
        const fadeElements = document.querySelectorAll('.fade-in');

        const options = {
            threshold: 0.2,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100');
                } else {
                    entry.target.classList.remove('opacity-100');
                }
            });
        }, options);

        fadeElements.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="flex flex-col justify-center bg-gray-950" id="Experiences">
            <h1 className="text-2xl font-bold text-center bg-slate-800 text-slate-50 py-2">Professional Career History Timeline:</h1>
            <h3 className="text-xl font-bold text-center text-slate-50">Click on a job to see more details</h3>
            <div className="items-center flex flex-col">
                {career.map((job) => (
                    <WorkHistory key={job.company} {...job} className="w-full" />
                ))}
            </div>
        </div>
    )
}

export default CareerTimeLine;
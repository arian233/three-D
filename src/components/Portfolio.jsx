import { useEffect } from "react";
import career from "../data/career.json";
import WorkHistory from "./WorkHistory";

function CareerTimeLine() {
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-in");

    const options = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
        } else {
          entry.target.classList.remove("opacity-100");
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
    <div
      className="flex flex-col justify-center bg-gradient-to-r from-purple-700 to-cyan-700"
      id="Portfolio"
    >
      <h1 className="text-2xl font-bold text-center bg-slate-700 text-slate-50 py-2 mb-4">
        Professional Career History Timeline
      </h1>
      <h3 className="text-xl font-bold text-center text-slate-50">
        To see more details, click on each experience below
      </h3>
      <div className="items-center grid grid-cols-6 gap-4">
        {career.map((job) => (
          <WorkHistory key={job.company} {...job} className="w-full" />
        ))}
      </div>
      <div
        className="flex flex-col justify-center mt-8 bg-gradient-to-r from-purple-900 to-cyan-900"
        id="Certificates"
      >
        <h1 className="text-2xl font-bold text-center bg-slate-700 text-slate-50 py-2 mb-4">
          Certificates
        </h1>
        <h3 className="text-xl font-bold text-center text-slate-50">
          To verify my certificates, click on them below
        </h3>
        <div className="certificates__container w-full flex  justify-around pt-4 flex-col md:flex-row text-slate-50">
          <div className="certificates__container_item flex flex-col items-center">
            <h2 className="font-bold text-l">React Basic</h2>
            <a
              href="https://coursera.org/share/ebc0a4baf344c2927cb50457c7192194"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/assets/Basic.svg" alt="SVG" className="h-72 w-72" />
            </a>
          </div>
          <div className="certificates__container_item flex flex-col items-center">
            <h2 className="font-bold text-l">Advanced React</h2>
            <a
              href="https://coursera.org/share/efb11b3c1d205fa0debc58e9b481fa86"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/assets/Advanced.svg" alt="SVG" className="h-72 w-72" />
            </a>
          </div>
          <div className="certificates__container_item flex flex-col items-center">
            <h2 className="font-bold text-l">C#</h2>
            <a
              href="https://www.educative.io/verify-certificate/1j8yMXCOL5wKJG5wkFOjNl2okV7BHp"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/assets/CSharp.svg" alt="SVG" className="h-72 w-72" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerTimeLine;

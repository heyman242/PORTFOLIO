import React from "react";
import arrayDestruct from "../assets/portfolio/code-judge.png";
import installNode from "../assets/portfolio/Homelyheaven.png";
import navbar from "../assets/portfolio/jobify.png";
import reactParallax from "../assets/portfolio/recordhub.png";
import reactSmooth from "../assets/portfolio/transaction.png";
import reactWeather from "../assets/portfolio/videovault.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      demoLink: "https://github.com/heyman242/CODE-JUDGE-V2",
      codeLink: "https://github.com/heyman242/CODE-JUDGE-V2",
    },
    {
      id: 2,
      src: reactParallax,
      demoLink: "https://neon-adoo.onrender.com/",
      codeLink: "https://github.com/heyman242/Neonflake-Assignment",
    },
    {
      id: 3,
      src: navbar,
      demoLink: "https://mern-course-yci8.onrender.com/",
      codeLink: "https://github.com/heyman242/Job-Tracker",
    },
    {
      id: 4,
      src: reactSmooth,
      demoLink: "https://rolixer-k8w3.onrender.com/",
      codeLink: "https://github.com/heyman242/Roxiler-Assignment",
    },
    {
      id: 5,
      src: installNode,
      demoLink: "https://incandescent-cat-fb2ef0.netlify.app/",
      codeLink: "https://github.com/heyman242/Reunion-Frontend-assignment",
    },
    {
      id: 6,
      src: reactWeather,
      demoLink: "https://talkvalley-assignment.onrender.com/",
      codeLink: "https://github.com/heyman242/TalkValley-Assignment",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

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
      className="bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="container mx-auto py-12 px-4">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-full h-auto"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-4 py-2 m-2 rounded-md duration-200 hover:scale-105 bg-blue-500 text-white text-center block"
                >
                  Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-4 py-2 m-2 rounded-md duration-200 hover:scale-105 bg-gray-500 text-white text-center block"
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

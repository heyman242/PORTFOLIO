import HeroImage from "../assets/heroImage.jpeg";
import { RiArrowRightSLine } from "react-icons/ri";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 mx-w-md">
            I love to work on the web application using technologies like:
            Node.js React.js Express.js Mongo DB Tailwind CSS Django
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <RiArrowRightSLine size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto"
            style={{ width: "70%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

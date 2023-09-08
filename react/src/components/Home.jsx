import HeroImage from "../assets/heroImage.jpeg";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="container mx-auto py-12 px-4">
        <div className="md:flex md:items-center">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              I'm a Full Stack Developer
            </h2>
            <p className="text-gray-500">
              I have a deep passion for developing web applications, and I
              thrive when working with technologies such as Node.js, React.js,
              Express.js, MongoDB, Tailwind CSS, and Django. These tools allow
              me to craft dynamic and innovative solutions that cater to today's
              ever-evolving digital landscape.
            </p>
            <div className="mt-6">
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="text-white inline-block bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-6 rounded-md transition duration-300 hover:rotate-90"
              >
                Portfolio{" "}
                <RiArrowRightSLine size={25} className="inline ml-1" />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={HeroImage}
              alt="profile"
              className="rounded-2xl mx-auto w-full md:w-3/4 h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      name: "LinkedIn",
      icon: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/himanshu-bobade-8650531a2/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      name: "GitHub",
      icon: <FaGithub size={30} />,
      href: "https://github.com/heyman242",
    },
    {
      id: 3,
      name: "Mail",
      icon: <HiOutlineMail size={30} />,
      href: "mailto:himanshu.nitraipur21@gmail.com",
    },
    {
      id: 4,
      name: "Resume",
      icon: <BsFillPersonLinesFill size={30} />,
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="lg:flex flex-col top-[35%] left-0 fixed">
      {/* Desktop mode */}
      <ul className="hidden lg:block">
        {links.map(({ id, name, icon, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {name}
              {icon}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile mode */}
      <div className="lg:hidden flex justify-center items-center fixed bottom-0 left-0 w-full">
        {links.map(({ id, icon, href, style, download }) => (
          <a
            key={id}
            href={href}
            className={
              "flex justify-center items-center w-20 h-10 mx-1 rounded-md duration-300 text-white hover:bg-gray-400" +
              " " +
              style
            }
            download={download}
            target="_blank"
            rel="noreferrer"
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;

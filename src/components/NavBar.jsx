import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import livity from "../Assests/livityICT.jpg";

const NavBar = ({darkMode, setDarkMode}) => {

  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "about",
    },
    {
      id: 2,
      link: "services",
    },
    {
      id: 3,
      link: "ICT Support",
    },
    {
      id: 4,
      link: "Tel-Communication",
    },
    {
      id: 5,
      link: "printers",
    },
    {
      id: 6,
      link: "clients",
    },
    
    {
      id: 7,
      link: "partners",
    },
    
    {
      id: 8,
      link: "contacts",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center w-full h-20 px-4 font-bold'bg-white dark:bg-black text-teal-900 dark:text-gray-300 fixed">
       
          <div className="  flex md:flex mx-auto  rounded-full w-20 h-20 mt-35 overflow-hidden md:w-46 mt-10 ml-10 cursor-pointer">
            <img
              src={livity}
              layout="fill"
              obejectFit="cover"
              alt="my profile"
            />
          </div>
        

        <ul className="hidden md:flex ">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 capitalize cursor-pointer py-6 text-4xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <div className="items-end" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <MdWbSunny className="text-2xl cursor-pointer" />
          ) : (
            <MdNightsStay className="text-2xl cursor-pointer" />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

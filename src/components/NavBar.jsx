import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import smous from "../logopng/smous.jpeg";

const NavBar = () => {
  /*const [darkMode, setDarkMode] = useState("")*/

  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <header className="z-20 rounded-full">
      <nav className="flex-wrap w-full h-40 fixed">
        <div className="flex justify-between items-center font-bold text-teal-600 bg-gradient-to-b  from-black-black  via-gray-900 to-black  dark:bg-white">
          <div className=" flex md:flex mx-auto bg-gradient-to-br from stroke-stone-900 rounded-full w-10 h-10 mt-30 ml-4 mt-4 overflow-hidden md:h-26 md:w-26">
            <img src={smous} layout="fill" obejectFit="cover" alt="logo" />
          </div>

          <ul className="hidden md:flex rounded-full border-collapse shadow-black">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize font-semibold text-tear-600 hover:scale-105 duration-200 z-10 "
              >
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer pr-4 z-10 text-teal-600 md:hidden"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize py-6 text-3xl font-semibold"
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
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

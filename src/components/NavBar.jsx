import React, { useState } from "react";
import { FaBars, FaTimes} from "react-icons/fa";
import { Link } from "react-scroll";
import smous from "../logopng/smous.jpeg";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "experience" },
    { id: 4, link: "projects" },
    { id: 5, link: "contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300bg-gray-900 text-white shadow-md rounded-lg bg-black `}
    >
      <div className="max-w-screen-lg mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src={smous} alt="logo" className="object-cover" />
          </div>
          <h1 className="ml-3 text-xl font-bold">Tlotlang Smous</h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="capitalize font-medium hover:text-teal-500 transition duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="hidden md:block p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-200"
        >
        
        </button>

        {/* Mobile Menu Icon */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer md:hidden text-teal-500"
        >
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul
          className={`flex flex-col items-center absolute top-0 left-0 w-full h-screen ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
          }`}
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="capitalize py-6 text-2xl font-medium hover:text-teal-500 transition duration-200"
            >
              <Link
                to={link}
                smooth
                duration={500}
                onClick={() => setNav(false)}
              >
                {link}
              </Link>
            </li>
          ))}
         
        </ul>
      )}
    </header>
  );
};

export default NavBar;

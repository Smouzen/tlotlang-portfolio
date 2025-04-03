import React, { useState } from "react";
import { FaBars, FaTimes, FaHome, FaUser, FaLaptopCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";
import smous from "../logopng/smous.jpeg";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const links = [
    { id: 1, link: "home", icon: <FaHome /> },
    { id: 2, link: "about", icon: <FaUser /> },
    { id: 3, link: "experience", icon: <FaLaptopCode /> },
    { id: 4, link: "projects", icon: <FaProjectDiagram /> },
    { id: 5, link: "contact", icon: <FaEnvelope /> },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 bg-black text-white shadow-md`}
    >
      <div className="max-w-screen-lg mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src={smous} alt="logo" className="object-cover" />
          </div>
          <h1 className="ml-3 text-xl font-bold hover:text-teal-500">Tlotlang Smous</h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          {links.map(({ id, link, icon }) => (
            <li
              key={id}
              className="capitalize font-medium flex items-center space-x-2 hover:text-teal-500 transition duration-200"
            >
              {icon}
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
          className="flex flex-col items-center absolute top-0 left-0 w-full h-screen bg-gray-900 text-white"
        >
          {links.map(({ id, link, icon }) => (
            <li
              key={id}
              className="capitalize py-6 text-2xl font-medium flex items-center space-x-2 hover:text-teal-500 transition duration-200"
            >
              {icon}
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

import React from "react";
import java from "../logopng/java.png";
import python from "../logopng/python.png";
import vb from "../logopng/VB.jpg";
import andriod from "../logopng/andrpid.png";
import arduino from "../logopng/arduino.png";
import htmlcss from "../logopng/htmlcss.png";
import javascir from "../logopng/js.png";

import reactpic from "../logopng/react.png";
import tailwind from "../logopng/tailwind.png";
import nextjs from "../logopng/nextjs.png";
import Section from "./common/Section";

const Experience = () => {
  const langs = [
    {
      id: 1,
      src: java,
      title: "JAVA",
      style: "shadow-blue-300",
    },
    {
      id: 2,
      src: python,
      title: "PYTHON",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: vb,
      title: "VISUAL BASIC .NET",
      style: "shadow-white",
    },
    {
      id: 4,
      src: htmlcss,
      title: "HTML & CSS",
      style: "shadow-orange-500",
    },
    {
      id: 5,
      src: javascir,
      title: "JAVASCRIPT",
      style: "shadow-yellow-300",
    },

    {
      id: 6,
      src: reactpic,
      title: "REACT",
      style: "shadow-teal-300",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-white",
    },

    {
      id: 8,
      src: andriod,
      title: "ANDRIOD STUDIO",
      style: "shadow-blue-700",
    },
    {
      id: 9,
      src: arduino,
      title: "ARDUINO",
      style: "shadow-teal-600",
    },

    {
      id: 10,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
  ];
  return (
    <div
      name="experience"
      className="w-full h-full bg-black z-20 text-teal-600"
    >
  <Section title=" Experience" subtitle={<p className="mt-6">I have acquired skills using various programming languages and
            libraries.</p>} className="text-4xl font-bold border-b-4 border-teal-600 p-2 inline mx-auto">
  <div className="max-w-screen-md mx-auto p-4 flex flex-col justify-center w-full text-teal-200">
  

        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-3 text-center py-2 sm:px-0">
          {langs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-6 sm:w-20 mx-auto" />
              <p className="text-xs mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
  </Section>

    </div>
  );
};

export default Experience;

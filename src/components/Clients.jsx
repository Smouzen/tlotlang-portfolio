import React from "react";
import Section from "./common/Section";
import c1 from "../Assests/clients03.jpg"
import c2 from "../Assests/clients04.jpg"
import c3 from "../Assests/clients05.jpg"
import c4 from "../Assests/clients06.jpg"
const Clients = () => {
  const langs = [
    {
      id: 1,
      src: c1,
      title: "JAVA",
      style: "shadow-blue-300",
    },
    {
      id: 2,
      src: c2,
      title: "PYTHON",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: c3,
      title: "VISUAL BASIC .NET",
      style: "shadow-blue-800",
    },
    {
      id: 4,
      src: c4,
      title: "HTML & CSS",
      style: "shadow-black",
    },
   
  ];
  return (
    <Section title="Clients" subtitle="Our Clients"
    name="clients">


 
        <div className="w-70% grid grid-cols-2 sm:grid-cols-2 gap-5 text-center py-2 px-2 sm:px-0 items-center justify-between">
          {langs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                `shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`
              }
            >
              <img src={src} alt="" className="w-60 h-60 sm:w-30 sm:h-30 mx-auto" />
              <p className="text-xs mt-4">{title}</p>
            </div>
          ))}
        </div>
      
    
    </Section>
    
  );
};

export default Clients;

import React from "react";
import Section from "./common/Section";
import ms from "../Assests/ms.png"
import hp from "../Assests/hpp.png"
import accer from "../Assests/accer.jpg"
import ubuntu from "../Assests/ubuntu.png"
const Partners = () => {
  const langs = [
    {
      id: 1,
      src: ms,
      title: "JMICROSOFT",
      style: "shadow-white",
    },
    {
      id: 2,
      src: hp,
      title: "HP",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: accer,
      title: "ACCER",
      style: "shadow-blue-800",
    },
    {
      id: 4,
      src: ubuntu,
      title: "UBUNTU",
      style: "shadow-yellow-400",
    },
   
  ];
  return (
    <Section title="Partners" subtitle="Livity has partnered with" name="partners">


 
        <div className="w-100% grid grid-cols-2 sm:grid-cols-2 gap-5 text-center py-2 px-2 sm:px-0 items-center justify-between">
          {langs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                `shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`
              }
            >
              <img src={src} alt="" className="w-100 h-60 sm:w-30 sm:h-30 mx-auto" />
              <p className="text-xs mt-4">{title}</p>
            </div>
          ))}
        </div>
      
    
    </Section>
    
  );
};

export default Partners;

import React from "react";
import Section from "./common/Section";

import vision from "../Assests/vision.jpg";
import mission from "../Assests/mission.png";
import object from "../Assests/object.png";
const About = () => {
  const objectives = [
    {
      id: 1,
      image: vision,
      title: "To become a reliable technology professional partner. ",
    },
    {
      id: 2,
      image: mission,
      title:
        "To partner with our customers and clients to ensure they realise full value of ICT and achieve growth through technology Objectives.",
    },
  ];

  const obje = [
    {
      id: 1,
      image: object,
      name: "OBJECTIVES",
      product:
        "Services for telephony capability includes provisioning and maintenance of analogue and digital telephones, faxes, teleconference and video conference capability as a professional service, managed service or full 'as a service'",
    },]
  return (
    <Section 
      title="ABOUT LIVITY ICT"
      subtitle=" LIVITY ICT COMPANY IS A, BLACK OWNED COMPANY FOCUSED ON OFFERING
   INFORMATION AND COMMUNICATION TECHNOLOGY SERVICES TO THE MARKET.
   LIVITY ICT WAS FOUNDED IN 2013, WITH A VISION OF GROWING INTO A
   RECOGNISED COMPETITIVE I.C.T PROVIDER, IN PARTICULAR WITH THE AIM OF
   UP SKILLING AND EMPOWERING THE YOUTH SO THAT THEY MAY CONTRIBUTE
   MEANINGFULLY TO THE DEVELOPMENT OF THE ECONOMY OF THE COUNTRY."
   name="about" >
      <div className="grid gap-5 lg:grid-cols-2 w-1/2">
        {objectives.map(({ id, image, title }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center p-5 shadow-lg rounded-xl duration-300 ease-in-out hover:scale-110"
          >
            <img
              src={image}
              alt={title}
              className="w-35% h-40 md:w-35% md:h-44 object-contain"
            />
            <h3 className="mt-5 text-xs md:text-lg">{title}</h3>
          </div>
        ))}
      </div>

      <div className="max-w-4xl flex flex-col">
        {obje.map(({ id, image, name, product }) => (
          <div className="flex p-4 justify-center items-center shadow-lg shadow-gray-100 rounded-2xl ">
            <div className="w-1/3">
              <img
                src={image}
                alt={product}
                className="w-30 h-30 object-cover object-top pt-2"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-center items-center gap-3 p-2 ">
              <h3 className="text-xl font-semibold">{name}</h3>
              <ul className="text-xs md:text-lg font-extralight">
                <li>To provide the best service available to our customers at an affordable price.</li>
                <li> To generate substantial market share so that Livity ICT is a common house hold and enterprise technology partner.</li>
                <li>To generate constant growth in profits from start up throughout the years of operations.</li>
                <li>To generate customer satisfaction so that at least 80% of our customer base is repeat business.</li>
                <li>To produce a knowledgeable and caring work force to advance and adapt to technological trends worldwide.</li>
               </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default About;

// {/* <div
// name="about"
// className="w-full h-screen"
// >
// <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//   <div className="pb-10 mt-30">
//     <p className="text-4xl font-bold inline border-b-4 mt-30 items-center ">
//       About US{" "}
//     </p>
//   </div>

//   <p className="text-sm md:text-xl mt-10 leading-8">
//     LIVITY ICT COMPANY IS A, BLACK OWNED COMPANY FOCUSED ON OFFERING
//     INFORMATION AND COMMUNICATION TECHNOLOGY SERVICES TO THE MARKET.
//     LIVITY ICT WAS FOUNDED IN 2013, WITH A VISION OF GROWING INTO A
//     RECOGNISED COMPETITIVE I.C.T PROVIDER, IN PARTICULAR WITH THE AIM OF
//     UP SKILLING AND EMPOWERING THE YOUTH SO THAT THEY MAY CONTRIBUTE
//     MEANINGFULLY TO THE DEVELOPMENT OF THE ECONOMY OF THE COUNTRY.
//   </p>
//   <p className="text--xl md:text-xl mt-10">
//     {/* I always try to keep up with the latest technology,
//         This is always challenging and the good part of it is that i like adapting to new changes exploring new things, now this motivates me not to relax and be on a comfort zone.
//        I am one person who belives in team work. I belive that i will bring another value to the SovTech culture as while expanding my set of skills.
//      */}
//   </p>
// </div>
// </div> */}

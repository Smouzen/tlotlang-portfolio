import React from "react";
import Section from "./common/Section";

import tel from "../Assests/telcom.png";
import software from "../Assests/Software.jpg";
import consult from "../Assests/consult.png"
import network from "../Assests/network.png"

const Telcomm = () => {
  const telcom = [
    {
      id: 1,
      image: tel,
      name: "Connectivity and TeleCommunication",
      product:
        "Services for telephony capability includes provisioning and maintenance of analogue and digital telephones, faxes, teleconference and video conference capability as a professional service, managed service or full 'as a service'",
    },
    {
      id: 2,
      image: software,
      name: "Hardware and Software Sales, Maintenance and Disposal",
      product:
        "Livity ICT provides sales of computer hardware and software to government institutions and to the general public .Livity ICT has partnered with different computer software distributors within South Africa, as a reseller .This service also involves technical expertise to solve specialised problems for the client in using a computer system.",
    },
    {
      id: 3,
      image: consult,
      name: "ICT Services Consulting",
      product:
        "This service consists of assessing an organisation's information processing requirements, advising on hardware and software acquisitions, developing system specifications and either putting the new system in place or providing the client with the necessary specifications to put the new system in place.",
    },
    {
      id: 4,
      image: network,
      name: "Network infrastructure design and Hosting",
      product:
        "This service consists of designing, developing and implementing a customer's networks such as Intranets, Extranets and Virtual Private Networks. It includes the design and development of network security systems, which consists of designing, developing and implementing software, hardware and procedures to control access to data and programs and to allow for the safe exchange of information over a network",
    },
  ];
  return (
    <Section
      title="ABOUT OUR SERVICES"
      subtitle="Livity ICT‘s existing operation whose primary business has been the sale and service of business systems, appliances (copiers, facsimiles, printers, etc.) and has operated as a part of the office equipment industry. We built from this base to transform the business into a value-added provider of the emerging services and technologies of the new Information Industry. Following the lead of other hardware, software manufacturers and distributors which we represent, we will approach the marketplace from a total systems solutions viewpoint. <br> Services Overview"
      name="ICT Support"
    >
      <div className="max-w-xl flex flex-col gap-5">
        {telcom.map(({ id, image, name, product }) => (
          <div className="flex p-4 justify-center items-center shadow-lg shadow-gray-100 rounded-2xl ">
            <div className="w-1/3">
              <img
                src={image}
                alt={product}
                className="w-30 h-30 object-cover object-top pt-2"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-center items-center gap-3 p-2">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-sm font-extralight">{product}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Telcomm;

import React from "react";
import Section from "./common/Section";

import sms from "../Assests/sms.png";
import voice from "../Assests/voice.png";
import fax from "../Assests/fax.png";
const Services = () => {
  const services = [
    { id: 1, image: sms, title: "Bulk SMS" },
    { id: 2, image: voice, title: "Voice Convergence" },
    { id: 3, image: fax, title: "Fax to Email" },
    // { id: 4, image: liv, title: "PrinServr" },
  ];
  return (
    <Section
      title="TELE-COMMUNICATION"
      subtitle="Livity ICT is an integrator of communications solutions which channel voice, data and media.
      We serve large enterprises which require ubiquitous access to information across geographies and through diverse platforms. We partner with leading vendors of IP telephony suites and products to design, build, and maintain IP-centric PABXs and contact centers. Our offerings include: IP-based switching Voice over IP (VoIP) Unified messaging Interactive Voice Response (IVR) Mobility Computer telephony integration Call management Multi-channel integration: E-mail, IM, Fax, SMS Integration with business support systems Development of specific applications"
    name="services">
      <div className="grid gap-10 lg:grid-cols-3">
        {services.map(({ id, image, title }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center p-5 shadow-lg rounded-xl duration-300 ease-in-out hover:scale-110"
          >
            <img
              src={image}
              alt={title}
              className="w-36 h-36 md:w-44 md:h-44 object-contain"
            />
            <h3 className="mt-5 text-base">{title}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;

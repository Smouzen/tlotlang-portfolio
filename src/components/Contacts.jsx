import React from "react";
import Section from "./common/Section";

const Contacts = () => {
  return (
    <div
      name="contact"
    className="bg-gradient-to-b from-black to-gray-950 text-teal-300"
    >
   <Section title="Contact Me" subtitle={ <p className="mt-6">Submit the form below to get in touch with me</p>} >
   <div className="flex flex-col p-4 justify-center w-full h-full ">

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/bc3cae22-11f7-469f-854f-a420602777c9"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-teal-300 focus:outline-none"
            />

         
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-teal-300 focus:outline-none"
            />

        
            <textarea
              name="message"
              placeholder="Enter your Message here"
              row="20"
              className="p-10 bg-transparent border-2 rounded-md text-gray-400 focus:outline-none"
            />

            <button className="text-white w-fit bg-gradient-to-r from-black to-blue-500 px-6 py-3 p-2 my-2 mx-auto flex items-center rounded-md hover:scale-110 duration-300 cursor-pointer">
              Talk to me
            </button>
          </form>
        </div>
      </div>
   </Section>
    </div>
  );
};

export default Contacts;

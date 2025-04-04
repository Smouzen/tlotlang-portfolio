import React from "react";
import Section from "./common/Section";

const Contacts = () => {
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-black to-gray-950 text-teal-300 py-10"
    >
      <Section
        title="Contact Me"
        subtitle={
          <p className="mt-6 text-center text-teal-400">
            Submit the form below to get in touch with me
          </p>
        }
      >
        <div className="flex flex-col p-4 justify-center w-full h-full">
          <div className="flex justify-center items-center">
            <form
              action="https://getform.io/f/bc3cae22-11f7-469f-854f-a420602777c9"
              method="POST"
              className="flex flex-col w-full md:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-3 bg-transparent border-2 rounded-md text-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4"
              />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="p-3 bg-transparent border-2 rounded-md text-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4"
              />

              <textarea
                name="message"
                placeholder="Enter your message here"
                rows="6"
                className="p-3 bg-transparent border-2 rounded-md text-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4"
              />

              <button
                type="submit"
                className="text-white w-fit bg-gradient-to-r from-teal-500 to-blue-500 px-6 py-3 my-2 mx-auto flex items-center rounded-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
              >
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

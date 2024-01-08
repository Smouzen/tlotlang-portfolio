import React from "react";

const Contacts = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-950 text-teal-300"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pt-8 py-10 md:py-0">
          <p className="text-2xl md:text-3xl font-bold inline border-b-4 border-teal-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>

       
        </div>
        <div className="flex justify-center items-center">
            <form action="https://getform.io/f/bc3cae22-11f7-469f-854f-a420602777c9" method="POST" className="flex flex-col w-full md:w-1/2">
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
                className="p-10 bg-transparent border-2 rounded-md text-teal-300 focus:outline-none"
              />
      
              <button className="text-white w-fit bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 p-2 my-2 mx-auto flex items-center rounded-md hover:scale-110 duration-300 cursor-pointer">
                Talk to me
              </button>
            </form>
          </div>
      </div>
    </div>
  );
};

export default Contacts;

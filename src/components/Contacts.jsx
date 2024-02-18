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
          <form
            action="https://getform.io/f/bc3cae22-11f7-469f-854f-a420602777c9"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            {/* <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-teal-300 focus:outline-none"
            /> */}

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                id="name"
                className="block py-2.5 px-0 w-full text-xl text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-teal-700 peer"
                placeholder=""
                required
              />
              <label className="peer-focus:font-medium absolute text-xl text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-700 peer-focus:dark:text-teal-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Your Name
              </label>
            </div>
            {/* <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-teal-300 focus:outline-none"
            /> */}

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                id="email"
                className="block py-2.5 px-0 w-full text-xl text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-teal-700 peer"
                placeholder=""
                required
              />
              <label className="peer-focus:font-medium absolute text-xl text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-700 peer-focus:dark:text-teal-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Your Email Address
              </label>
            </div>
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
    </div>
  );
};

export default Contacts;

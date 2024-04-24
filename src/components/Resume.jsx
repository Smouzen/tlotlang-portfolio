import React from "react";
import Section from "../components/common/Section";
//dont wait until you have the skill to start the project, your project will tech the skill.
//dont wait until you have the confidence, to start pursing what you want, the confidence comes when you are doing i and its going well.

const Resume = () => {
  return (
    <div name="resume" className="bg-black text-teal-600">
      <Section title="Projects">
        <div className="max-w-screen-md mx-auto p-4 flex flex-col justify-center w-full h-full">
          <ol className="relative border-s dark:border-gray-700">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                March 2024 - Present (📍)
              </time>
              <h3 className="text-lg font-semibold text-white">Estate Agent</h3>
              <p className="mb-4 text-base font-normal text-gray-400">
                The main objective is to learn how deploy the MERN stack
                application to Amazon EC2 using Github actions. I want to create a
                docker image and deploy it to EC2 instance. This makes my learning jouney fun, because I will learn more about
                CL/CD workflow and yml file, and how to create Image using docker.
              </p>
              <a
                href="##"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-black focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700  disabled:opacity-80"
              >
                Learn more{" "}
                <svg
                  className="w-3 h-3 ms-2 rtl:rotate-180 disabled:opacity-80"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                December 2023 - present(📍)
              </time>
              <h3 className="text-lg font-semibold text-white">
                Estate Agent⛪
              </h3>
              <p className="mb-4 text-base font-normal text-gray-400">
                I am building a web application using MERN, for the students to
                find accommodation easily in the neighborhood. Web application
                uses MongoDB for a flexible and scalable data management.
                Express js to build back-end components, React js and Tailwind
                css to build the front-end components and Node js for back-end
                and front-end components to communicate.
              </p>
              <a
                href="https://smousestate.onrender.com/"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Learn more{" "}
                <svg
                  className="w-3 h-3 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                August 2023 - October 2023
              </time>
              <h3 className="text-lg font-semibold text-white">
                Livity ICT Website🌎
              </h3>
              <p className="mb-4 text-base font-normal text-gray-400">
                The main objective was to enhance my React skill. This is my
                side project, just for practices purposes. I want to learn react
                props and useState
              </p>
              <a
                href="https://livityict.netlify.app/"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Learn more{" "}
                <svg
                  className="w-3 h-3 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </li>
          </ol>
        </div>
      </Section>
    </div>
  );
};

export default Resume;

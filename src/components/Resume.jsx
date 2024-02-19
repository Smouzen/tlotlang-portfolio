import React from "react";
//dont wait until you have the skill to start the project, your project will tech the skill.
//dont wait until you have the confidence, to start pursing what you want, the confidence comes when you are doing i and its going well.
const Resume = () => {
  return (
    <div
      name="resume"
      className="w-full h-screen bg-gradient-to-b  from-black via-gray-800 to-black"
    >
      <div className="max-w-screen-md mx-auto p-4 flex flex-col justify-center w-full h-screen text-teal-200">
        <ol class="relative border-s dark:border-gray-700">
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Febraury 2024 - Present (📍)
            </time>
            <h3 class="text-lg font-semibold text-white">
              Employee Management System
            </h3>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              The system will enable the HR department to track down and
              digitize employees' leaves, pay slips and grievance. The goal is
              to eliminate paper-based method. I will be using React js for
              front-end, Java Spring Boot as my back-end, then MySQL for the
              database.
            </p>
            <a
              href="##"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 disabled:"
            >
              Learn more{" "}
              <svg
                class="w-3 h-3 ms-2 rtl:rotate-180"
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
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              December 2023 - January 2024
            </time>
            <h3 class="text-lg font-semibold text-white">Estate Agent⛪</h3>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              I am building a web application using MERN, for the students to
              find accommodation easily in the neighborhood. Web application
              uses MongoDB for a flexible and scalable data management. Express
              js to build back-end components, React js and Tailwind css to
              build the front-end components and Node js for back-end and
              front-end components to communicate
            </p>
            <a
              href="https://smousestate.onrender.com/"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Learn more{" "}
              <svg
                class="w-3 h-3 ms-2 rtl:rotate-180"
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
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              August 2023 - October 2023
            </time>
            <h3 class="text-lg font-semibold text-white">
              Livity ICT Website🌎
            </h3>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              The main objective was to enhance my React skill. This is my slide
              project, just for practices purposes. 
            </p>
            <a
              href="https://livityict.netlify.app/"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Learn more{" "}
              <svg
                class="w-3 h-3 ms-2 rtl:rotate-180"
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
    </div>
  );
};

export default Resume;

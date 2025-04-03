import React from "react";
import Section from "../components/common/Section";

const Resume = () => {
  const projects = [
    {
      id: 1,
      time: "March 2024 - Present (📍)",
      title: "Estate Agent",
      description:
        "The main objective is to learn how to deploy the MERN stack application to Amazon EC2 using GitHub Actions. I want to create a Docker image and deploy it to an EC2 instance. This makes my learning journey fun because I will learn more about CI/CD workflows, YAML files, and Docker.",
      link: "##",
    },
    {
      id: 2,
      time: "December 2023 - Present (📍)",
      title: "Estate Agent⛪",
      description:
        "I am building a web application using MERN for students to find accommodation easily in the neighborhood. The web application uses MongoDB for flexible and scalable data management, Express.js for back-end components, React.js and Tailwind CSS for front-end components, and Node.js for communication between back-end and front-end.",
      link: "https://smousestate.onrender.com/",
    },
    {
      id: 3,
      time: "August 2023 - October 2023",
      title: "Livity ICT Website🌎",
      description:
        "The main objective was to enhance my React skills. This is a side project for practice purposes. I focused on learning React props and useState.",
      link: "https://livityict.netlify.app/",
    },
  ];

  return (
    <div name="projects" className="bg-gradient-to-b from-gray-900 to-black text-teal-300 py-10">
      <Section title="Projects">
        <div className="max-w-screen-md mx-auto p-4 flex flex-col justify-center w-full h-full">
          <ol className="relative border-l border-gray-700">
            {projects.map(({ id, time, title, description, link }) => (
              <li key={id} className="mb-10 ml-6">
                <div className="absolute w-3 h-3 bg-teal-500 rounded-full -left-1.5 border border-gray-900"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">{time}</time>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mb-4 text-base font-normal text-gray-400">{description}</p>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 transition duration-200"
                >
                  Learn more{" "}
                  <svg
                    className="w-3 h-3 ml-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </Section>
    </div>
  );
};

export default Resume;

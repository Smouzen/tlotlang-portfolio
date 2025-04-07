import React from "react";
import Section from "./common/Section";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-900 to-black text-teal-300 py-10"
    >
      <Section
        title="About Me"
        subtitle={
          <p className="text-sm md:text-lg mt-6 leading-8 text-center text-teal-400">
            I am a passionate and driven aspiring Software Engineer/Developer
            with a vision to create innovative solutions that positively impact
            the world 🌍. My journey into the world of coding began with
            curiosity, and since then, I've been on an exciting quest to turn
            ideas into functional and user-friendly software.
          </p>
        }
      >
        <div className="max-w-screen-lg mx-auto p-6 flex flex-col justify-center w-full h-full">
          <p className="text-sm md:text-lg leading-8 text-gray-300">
            During my academic studies at Sol Plaatje University, I gained
            fundamental knowledge and discipline in software design,
            development, and testing. I learned the importance of working to
            strict timescales, collaborating with others to achieve objectives,
            and demonstrating excellent attention to detail in my projects.
          </p>
          <p className="text-sm md:text-lg leading-8 text-gray-300 mt-4">
            I am a quick learner who thrives in fast-paced, dynamic
            environments. My analytical mindset and determination drive me to
            find elegant solutions to complex problems, turning roadblocks into
            stepping stones 💡. I am committed to continuous learning and
            believe that embracing knowledge empowers me to innovate and evolve.
          </p>
          <p className="text-sm md:text-lg leading-8 text-gray-300 mt-4">
            I am excited to contribute to projects that challenge me to grow
            while making a meaningful impact. Let's build something amazing
            together!
          </p>
        </div>
      </Section>
    </div>
  );
};

export default About;

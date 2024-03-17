import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex-wrap"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-6 mt-20">
          <p className="text-xl md:text-4xl font-bold inline border-b-4 border-text-teal-400 ">
            About{" "}
          </p>
        </div>

        <p className="text-xs md:text-xl mt-10 leading-8">
          During my academic studies at Sol Plaatje University,I learned the
          fundamental knowledge and discipline in Software design, development
          and testing. I also learned the importance of working to strict
          timescales, collaborating with other people to achieve an objective,
          and ensure that I demonstrate excellence attention to details in my
          projects. I am a quick learner who thives in fast-paced, dynamic
          environment and <br />I am a passionate and driven aspiring Software
          Engineer/Developer with a vision to create innovative solutions that
          positively impact the world🌍. My journey into the world of coding
          began with curiosity, and since then, I've been on an exciting quest
          to turn ideas into functional and user-friendly software. My
          analytical mindset and determination drive me to find elegant
          solutions to complex problems, turning roadblocks into stepping
          stones💡. I'm committed to continuous learning. I believe that
          embracing knowledge empowers me to innovate and evolve.
        </p>
        <p className="text--xl md:text-xl mt-10">
          {/* I always try to keep up with the latest technology, 
              This is always challenging and the good part of it is that i like adapting to new changes exploring new things, now this motivates me not to relax and be on a comfort zone. 
             I am one person who belives in team work. I belive that i will bring another value to the SovTech culture as while expanding my set of skills.
           */}
        </p>
      </div>
    </div>
  );
};

export default About;

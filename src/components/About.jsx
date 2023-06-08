import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white'>
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-10'>
                <p className='text-4xl font-bold inline border-b-4 border-text-teal-400 mt-30'>About </p>
            </div>


            <p className='text--xl md:text-xl mt-10 leading-8'>
                I am a Sol Plaatje university ICT graduate, with Adv. Dip. ICT (Applications Development). 
                During my academic studies,I learned the fundamental knowledge and discipline in Software design, development and testing.
          I also learned the importance of working to strict timescales, collaborating with other people to achieve an objective, and
           ensure that I demonstrate excellence attention to details in my projects.
          I am a diligent and ambiticous developer with 3 years experience in software Engineering. 
I am a quick learner who thives in fast-paced, dynamic environment and outside of I like reading novels and play a musical instruments, which I believe it helps to expand my thinking capacity.   
            
          </p>
            <p className='text--xl md:text-xl mt-10'>
            {/* I always try to keep up with the latest technology, 
              This is always challenging and the good part of it is that i like adapting to new changes exploring new things, now this motivates me not to relax and be on a comfort zone. 
             I am one person who belives in team work. I belive that i will bring another value to the SovTech culture as while expanding my set of skills.
           */ }
            </p>
          
        </div>
    </div>
  )
}

export default About
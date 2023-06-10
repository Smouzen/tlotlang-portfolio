import React from 'react';
import smous from '../logopng/smous.png';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name= "home" className=' h-screen w-full bg-gradient-to-b from-gray-700 to-black'>
        

        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

        <div className=' flex flex-col justify-center h-full '>

        <h2 className ="text-2xl sm:text-4xl font-bold text-teal-300 p-10">

My name is Tlotlang Smous,
<p className ="text-xl sm:text-3xl font-bold text-teal-300 p-2"> Software Developer.</p>
</h2>
<p className='text-teal-300 py-4 leading-6'> I am a Sol Plaatje university ICT graduate, with Advanced Diploma ICT (Applications Development)
I am currently doing my Postgraduate Diploma in ICT (NQF8), </p>
           <div>

            <Link to="contact" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer
            "> Contact
                <span className='group-hover:rotate-90 duration-300'>  <MdOutlineKeyboardArrowRight/> </span>
            </Link>
            </div>
           
        </div>
      <div className='px-10 mb-10'>
      <div className=' flex md:flex mx-auto bg-gradient-to-br from stroke-stone-900 rounded-full w-40 h-40 mt-30 overflow-hidden md:h-86 md:w-86' >

   
<img src={smous} layout="fill" obejectFit="cover" alt="my profile" />

</div>
      </div>
        </div>
        
    </div>
  );
};

export default Home;
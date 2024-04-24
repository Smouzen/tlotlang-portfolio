import React from 'react'

const Section = ({title, subtitle, children}) => {
  return (
    <section className='min-h-fit flex flex-col justify-start items-center py-16 px-5 text-center '>

        <h3 className='py-3 lg:text-5xl text-xl md:text-4xl font-bold inline border-b-4 border-text-teal-400 pb-6 mt-20'>{title}  
        </h3>
        <p className='max-w-xl font-light mb-10 text-xs md:text-lg'>{subtitle}</p>
        {children}
    </section>
  )
}


export default Section
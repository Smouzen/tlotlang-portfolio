import React from 'react'
import Section from './common/Section'

import email from "../Assests/email.jpg"
import virus from "../Assests/virus.jpg"
import office from "../Assests/office.jpg"
import print from "../Assests/print.jpg"
import program from "../Assests/program.png"
import backup from "../Assests/backup.jpg"
const ITsupport = () => {
    const  Support = [

        {
            id:1,
            image:email,
            title:"Email Management",

        },   {
            id:2,
            image:virus,
            title:"Virus & Malware removal",

        },   {
            id:3,
            image:office,
            title:"Office Internet Connectivity",

        },   {
            id:4,
            image:print,
            title:"Printers and Multifunctional",

        },   {
            id:5,
            image:program,
            title:"Program Error & Crashes",

        },   {
            id:6,
            image:backup,
            title:"Business Data Backup",

        },
    ];
  return (  
  <Section title="IT SUPPORT " subtitle="SOLUTIONS OVERVIEW "
  name="Tel-communication">
<div className='grid gap-8 lg:gap-14 lg:grid-cols-2 cursor-pointer '>
    {
        Support.map(({id, image, title}) => (
            <div key={id} className='max-w-lg flex shadow-lg shadow-gray-100 rounded-2xl overflow-hidden duration-300 ease-in-out hover:scale-110'>
                <img src={image} alt={title} className='w-2/3'/>

              <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
              <h2>{title}</h2>
              </div>
            </div>
        ))
    }
</div>

  </Section>
  )
}

export default ITsupport
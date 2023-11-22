import React from 'react'
import Section from './common/Section'
import tel from "../Assests/telcom.png";
import software from "../Assests/Software.jpg";
import consult from "../Assests/consult.png"
import network from "../Assests/network.png"
const Carousel = () => {
    const slide = [

      {
        id:1,
        img:tel,
        
       
      },
      {
        id:2,
        img:software,
        
       
      },
      {
        id:3,
        img:consult,
        
       
      },
      {
        id:4,
        img:network,
        
       
      }
    ]
  return (
    <Section>

        <div >
            {
                slide.map(({id,img}) => (

                    <div className='max-w-lg overflow-hidden relative'>
                        <div className='flex '>
                        <img src={img} alt={id} />
                    </div>
                    </div>
                ))
            }
        </div>
    </Section>

  )
}

export default Carousel
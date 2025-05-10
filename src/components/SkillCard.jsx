import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function SkillCard( { image, title, imageStyle} ) {
  const {ref, inView} = useInView ({
    triggerOnce : false,
    threshold:0,
  })

  return (
    <div ref={ref} className='flex flex-col items-center'>
       <motion.div
       initial={{opacity:0, scale:0.8}} 
       animate={ inView ? {opacity:1, scale:1} : {}}
       transition={{duration:1, delay:0.4,type:"spring", stiffness:200}}
       className='group hover:scale-140  transition-transform flex flex-col items-center '>
       {
            imageStyle? <img src={image} alt="" className={`p-2 hover:drop-shadow-[0px_0px_12px_rgba(59,130,246,0.5)] ${imageStyle} transition-all`}/>
            : <img src={image} alt="" className='p-2 hover:drop-shadow-[0px_0px_12px_rgba(59,130,246,0.5)] w-20 transition-all '/>
        }

      
        <p className= {`text-[12px] group-hover:text-white text-[#C9D1D9] font-semibold `}> {title} </p>
       </motion.div>
    </div>
  )
}

export default SkillCard

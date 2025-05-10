import React from 'react';
import {useInView} from 'react-intersection-observer'
import {motion} from 'framer-motion'

function ProjectCard({ name, image, description, link, tag, skillTag}) {
  const {ref, inView} = useInView({
      triggerOnce:false,
      threshold:0
    });
  return (
    <motion.div
    
    initial={{opacity:0, scale:0.9,}}
          animate={inView ? {opacity:1, scale:1, x:0, y:0} : {}}
          transition={{duration:0.5,ease:'easeIn'}}
          
    
    ref={ref} className="bg-[#161b22] border-1 hover:border-2 border-slate-700 font-[Poppins] rounded-xl m-1 px-5 shadow-md p-4 hover:shadow-lg hover:-translate-y-1 hover:scale-106 transition-all duration-300">
      {console.log(skillTag)}
      {image && (
        <img
          src={image}
          alt={`${name}-preview`}
          className="w-full text-center h-40 object-cover rounded-md mb-4"
        />
      )}
      <h4 className="text-white text-center text-lg hover:underline hover:scale-110 transition-all cursor-pointer group font-semibold mb-2"> <a href={`https://github.com/Mohitgoswami18/Basic-Frontend-Project/tree/main/${name}`}>{name}</a><i class="group-hover:scale-110 cursor-pointer transition-all text-blue-400 fa-solid fa-link"></i></h4>
      <div className='flex flex-col h-35 justify-between'>
      <p className="text-gray-400 text-sm mb-4 max-w-[350px] break-words overflow-hidden">
  {description}
</p>
  <div className='relative gap-2 flex text-[10px]'>
  {
    skillTag.map((elem)=>(
      <p className='rounded-2xl font-semibold ring-slate-700 ring-1 hover:scale-115 transition-all bg-white/10 backdrop-blur-2lg px-3 py-2'>{elem}</p>
    ))
  }
  </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;

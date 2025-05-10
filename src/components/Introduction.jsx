import React from 'react';
import { useState } from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import myImage from '../assets/nature.jpg';
import image from '../assets/s.jpeg';

function Introduction() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const [img, setImg] = useState(true);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, scale: 0.8,x:50 }}
      animate={inView ? { opacity: 1, scale: 1, x:0 } : {}}
      transition={{ duration: 1 }}
      className="flex p-2 md:p-6 h-screen gap-10 md:flex-row flex-col items-center font-[Poppins]"
    >
      {/* Profile Image */}
      <motion.div className="md:w-[300px] md:h-[300px] w-[200px] h-[200px]  shrink-0">
        <motion.img 
          whileHover={{scale:1.12}}
          transition={{duration:0.2, ease:'easeIn'}}
          src={myImage}
          alt="Personal-image" 
          className="w-full h-full object-cover rounded-full p-2"
        />
      </motion.div>

      <motion.div className="max-w-[750px] overflow-auto px-2 md:px-16">
        <motion.p 
          className="text-lg text-white tracking-normal text-center"
          initial={{ opacity: 0}} 
          animate={inView ? { opacity: 1 } : {}} 
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <span className="font-bold text-2xl">Hi</span>, I’m 
          <motion.span 
            className="text-blue-300 text-xl ml-2 font-bold"
            animate={{ scale:[1,0.5,1] }} 
            transition={{ repeat: Infinity, duration: 5 }}
          >
            Mohit Goswami
          </motion.span>,
          I’m a developer who enjoys building websites and solving real problems using code.
          <br/><br/>
          <motion.span 
            animate={{ color: ["#C9D1D9", "#3B82F6", "#C9D1D9"] }} 
            transition={{ repeat: Infinity, duration: 5 }} 
          >
            Most of the projects you’ll see here are built to improve my skills and understand real-world applications.
          </motion.span>
          <br/><br/>
          In the future, I plan to learn **machine learning** and build intelligent systems that can solve even more complex problems.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default Introduction;

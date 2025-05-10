// import React from 'react'


// function HeroSection() {
//   return (
//     <div className='max-w-[1080px] mt-32 h-screen ml-100 font-[Poppins]'>
//         <div className='max-w-full flex items-center gap-4 justify-center'>
           
//             <div className='p-8'>
//                 <h1 className='text-[#EAF0F7] text-4xl font-bold tracking-wider '>Hi I'am 
//                     <span className='text-blue-300 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]'> Mohit Goswami 👋</span>
//                 </h1>
//                 <p className='text-[#8B949E] text-center text-lg font-semibold'> DSA Lover | Front-end | Future ML-Engineer </p>
//                 <p className='text-md mt-8 text-[#C9D1D9] p-2 font-semibold '>"From JavaScript to Neural Networks — " <span className='text-blue-300'>
//                     I'm learning it all! "</span>
//                 </p>
//                 <div className='flex items-center mt-4 p-2 w-[350px]  justify-around mx-auto'>
//                     <span className='text-white w-20 text-4xl cursor-pointer'><a href="https://github.com/Mohitgoswami18?tab=repositories" target='blank'><i className="fa-brands fa-github hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)]"></i></a></span>
//                     <span className='text-white w-20 text-4xl cursor-pointer'><a href="https://github.com/Mohitgoswami18?tab=repositories" target='blank'><i className="hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] fa-brands fa-instagram"></i></a></span>
//                     <span className='text-white w-20 text-4xl cursor-pointer'><a href="https://github.com/Mohitgoswami18?tab=repositories" target='blank'><i className="hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] fa-brands fa-linkedin"></i></a></span>
//                     <span className='text-white w-20 text-4xl'><a href="https://github.com/Mohitgoswami18?tab=repositories" target='blank'><svg className='w-10 cursor-pointer hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)]' fill="#ffffff" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>LeetCode icon</title><path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"></path></g></svg></a></span>
//                     <span className='text-white w-20 text-4xl'><a href="https://github.com/Mohitgoswami18?tab=repositories" target='blank'><svg className='w-13 cursor-pointer hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)]' fill="#fff" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.13-.353h7.418a4.26 4.26 0 0 1-.368 1.008zm-11.99-.654a3.793 3.793 0 0 1-2.134 2.078 4.51 4.51 0 0 1-3.117.016 3.7 3.7 0 0 1-1.104-.695 2.652 2.652 0 0 1-.564-.745 4.221 4.221 0 0 1-.368-1.006H9.59c-.038.12-.08.238-.13.352zm14.501-1.758a3.849 3.849 0 0 0-.082-.475l-9.634-.008a3.932 3.932 0 0 1 1.143-2.348c.363-.35.79-.625 1.26-.809a3.97 3.97 0 0 1 4.484.957l1.521-1.49a5.7 5.7 0 0 0-1.922-1.357 6.283 6.283 0 0 0-2.544-.49 6.35 6.35 0 0 0-2.405.457 6.007 6.007 0 0 0-1.963 1.276 6.142 6.142 0 0 0-1.325 1.94 5.862 5.862 0 0 0-.466 1.864h-.063a5.857 5.857 0 0 0-.467-1.865 6.13 6.13 0 0 0-1.325-1.939A6 6 0 0 0 8.21 6.34a6.698 6.698 0 0 0-4.949.031A5.708 5.708 0 0 0 1.34 7.73l1.52 1.49a4.166 4.166 0 0 1 4.484-.958c.47.184.898.46 1.26.81.368.36.66.792.859 1.268.146.344.242.708.285 1.08l-9.635.008A4.714 4.714 0 0 0 0 12.457a6.493 6.493 0 0 0 .345 2.127 4.927 4.927 0 0 0 1.08 1.783c.528.56 1.17 1 1.88 1.293a6.454 6.454 0 0 0 2.504.457c.824.005 1.64-.15 2.404-.457a5.986 5.986 0 0 0 1.964-1.277 6.116 6.116 0 0 0 1.686-3.076h.273a6.13 6.13 0 0 0 1.686 3.077 5.99 5.99 0 0 0 1.964 1.276 6.345 6.345 0 0 0 2.405.457 6.45 6.45 0 0 0 2.502-.457 5.42 5.42 0 0 0 1.882-1.293 4.928 4.928 0 0 0 1.08-1.783A6.52 6.52 0 0 0 24 12.457a4.757 4.757 0 0 0-.039-.554z"></path></g></svg></a></span>
//                 </div>


//                 <div className='flex items-center justify-center'>
//                 <button className='text-md font-bold px-3 py-2 text-white hover:bg-[#2563EB] bg-blue-500 m-1 rounded-4xl mt-4 cursor-pointer hover:shadow-[0_0_6px_#3B82F6]'>View Resume</button>
//                 <button className='text-md font-bold px-3 py-2 m-1 rounded-4xl mt-4 cursor-pointer hover:bg-[#1E293B]  text-[#3B82F6] hover:text-white border border-[#3B82F6] bg-[#0D1117] '>Let's Connect</button>
//             </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default HeroSection

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function HeroSection( { contact }) {

  const { ref, inView } = useInView ( {
    triggerOnce:false,
    threshold:0,
  })

  const VerticalScroll = (ref) =>{
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y:40 }} 
      animate={inView ? { opacity: 1, scale: 1 } : {}} 
      transition={{ duration: 1.2 }}
      className="max-w-[1080px] mt-32 h-screen ml-90 font-[Poppins]"
    >
      <div className="max-w-full flex items-center gap-4 justify-center">
        <div 
          className="p-8 " 
        >
          <motion.h1 
            className="text-[#EAF0F7] text-4xl font-bold tracking-wider"
            whileHover={{ color: "#fff", scale: 1.1 }}
          >
            Hi I'am 
            <span className="text-blue-300 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              Mohit Goswami 👋
            </span>
          </motion.h1>

          <p className="text-[#8B949E] text-center text-lg font-semibold">
            DSA Lover | Front-end | Future ML-Engineer
          </p>

          <motion.p 
            className="text-md mt-8 text-[#C9D1D9] p-2 font-semibold"
            whileHover={{ scale: 1.1, color: "#3B82F6" }}
          >
            "From JavaScript to Neural Networks — "
            <span className="text-blue-300">I'm learning it all!"</span>
          </motion.p>

          <div 
            className="flex items-center mt-4 p-2 w-[350px] justify-around mx-auto"
          >
    
            <motion.span whileHover={{ scale: 1.2 }} transition={{type: "spring", stiffness: 200 }}  className='text-white w-20 hover:text-black text-4xl cursor-pointer'><a href="https://github.com/Mohitgoswami18?tab=repositories" target='blank'><i className="fa-brands hover:text-[rgb()] fa-github hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)]"></i></a></motion.span>
            <motion.span whileHover={{ scale: 1.2 }} transition={{type: "spring", stiffness: 200 }} className='text-white hover:text-[rgb(225,48,108)] w-20 text-4xl cursor-pointer'><a href="https://www.instagram.com/_mohit_goswami_/" target='blank'><i className=" hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] fa-brands fa-instagram"></i></a></motion.span>
            <motion.span whileHover={{ scale: 1.2, }} transition={{type: "spring", stiffness: 200 }} className='text-white w-20 text-4xl cursor-pointer'><a href="https://www.linkedin.com/in/mohitgoswami18/" target='blank'><i className="hover:text-[rgb(10,102,222)] hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] fa-brands fa-linkedin"></i></a></motion.span>
            <motion.span whileHover={{ scale: 1.2,fill:'rgb(255,153,0)' }} transition={{type: "spring", stiffness: 200 }} className='text-white w-20 fill-white  text-4xl'><a href="https://leetcode.com/u/Mohit18326/" target='blank'><svg className='w-10 cursor-pointer hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)]' viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>LeetCode icon</title><path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"></path></g></svg></a></motion.span>
            <motion.span whileHover={{ scale: 1.2, }} transition={{type: "spring", stiffness: 200 }} className='text-green-800 fill-white hover:fill-green-500 w-20 text-4xl'><a href="https://www.geeksforgeeks.org/user/mohitgoswgcs3/" target='blank'><svg className='w-13 cursor-pointer hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)]' viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.13-.353h7.418a4.26 4.26 0 0 1-.368 1.008zm-11.99-.654a3.793 3.793 0 0 1-2.134 2.078 4.51 4.51 0 0 1-3.117.016 3.7 3.7 0 0 1-1.104-.695 2.652 2.652 0 0 1-.564-.745 4.221 4.221 0 0 1-.368-1.006H9.59c-.038.12-.08.238-.13.352zm14.501-1.758a3.849 3.849 0 0 0-.082-.475l-9.634-.008a3.932 3.932 0 0 1 1.143-2.348c.363-.35.79-.625 1.26-.809a3.97 3.97 0 0 1 4.484.957l1.521-1.49a5.7 5.7 0 0 0-1.922-1.357 6.283 6.283 0 0 0-2.544-.49 6.35 6.35 0 0 0-2.405.457 6.007 6.007 0 0 0-1.963 1.276 6.142 6.142 0 0 0-1.325 1.94 5.862 5.862 0 0 0-.466 1.864h-.063a5.857 5.857 0 0 0-.467-1.865 6.13 6.13 0 0 0-1.325-1.939A6 6 0 0 0 8.21 6.34a6.698 6.698 0 0 0-4.949.031A5.708 5.708 0 0 0 1.34 7.73l1.52 1.49a4.166 4.166 0 0 1 4.484-.958c.47.184.898.46 1.26.81.368.36.66.792.859 1.268.146.344.242.708.285 1.08l-9.635.008A4.714 4.714 0 0 0 0 12.457a6.493 6.493 0 0 0 .345 2.127 4.927 4.927 0 0 0 1.08 1.783c.528.56 1.17 1 1.88 1.293a6.454 6.454 0 0 0 2.504.457c.824.005 1.64-.15 2.404-.457a5.986 5.986 0 0 0 1.964-1.277 6.116 6.116 0 0 0 1.686-3.076h.273a6.13 6.13 0 0 0 1.686 3.077 5.99 5.99 0 0 0 1.964 1.276 6.345 6.345 0 0 0 2.405.457 6.45 6.45 0 0 0 2.502-.457 5.42 5.42 0 0 0 1.882-1.293 4.928 4.928 0 0 0 1.08-1.783A6.52 6.52 0 0 0 24 12.457a4.757 4.757 0 0 0-.039-.554z"></path></g></svg></a></motion.span>
          </div>

          <div className="flex items-center justify-center">
            <motion.button 
              className="text-md font-bold px-3 py-2 text-white bg-blue-500 m-1 rounded-4xl mt-4 cursor-pointer"
              whileHover={{ backgroundColor: "#2563EB", boxShadow: "0px 0px 4px #3B82F6" }}
              whileTap={{ scale: 0.9 }}
            >
              View Resume
            </motion.button>

            <motion.button 
              className="text-md font-bold px-3 py-2 m-1 rounded-4xl mt-4 text-[#3B82F6] border border-[#3B82F6] cursor-pointer bg-[#0D1117]"
              whileHover={{ backgroundColor: "#1E293B",boxShadow: "0px 0px 4px #3B82F6",  color: "white" }}
              whileTap={{ scale: 0.9 }}

              onClick={ () => VerticalScroll(contact) }
            >
              Let's Connect
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default HeroSection;

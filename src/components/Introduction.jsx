// // import React from 'react'
// // import myImage from '../assets/nature.jpg'

// // function Introduction() {
// //   return (
// //     <div className='flex p-6 h-screen gap-6 items-center font-[Poppins]'>
// //       <div className='w-[300px] h-[300px] shrink-0'>
// //           <img 
// //           src={myImage} 
// //           alt="Personal-image" 
// //           className='w-full h-full object-cover rounded-full p-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]'
// //           />
// //       </div>
// //     <div className='max-w-[750px] overflow-auto px-16'>
// //       <p className='text-lg text-white tracking-normal text-center'><span className='font-bold text-2xl'>Hi</span>, I’m <span className='text-blue-300 text-xl font-bold '>Mohit Goswami</span>. I’m a developer who enjoys building websites and solving real problems using code. I’ve worked with C++, Python, and front-end tools like HTML, CSS, JavaScript, and React. I also have a good understanding of Data Structures and Algorithms, which helps me write efficient code.

// //     Most of the projects you’ll see here are built to improve my skills and understand how real-world applications work. I like keeping my code clean and my designs simple.

// //     In the future, I plan to learn machine learning and build intelligent systems that can solve even more complex problems.

// //     This portfolio shows what I’ve done so far and how I’m growing as a developer. Thanks for checking it out!</p>
// //     </div> 
// //   </div>

// //   )
// // }

// // export default Introduction
// import React from 'react';
// import { motion } from 'framer-motion';
// import myImage from '../assets/nature.jpg';

// function Introduction() {
//   return (
//     <motion.div 
//       initial={{ opacity: 0, scale: 0.8 }} 
//       animate={{ opacity: 1, scale: 1 }} 
//       transition={{ duration: 1.5 }}
//       className="flex p-6 h-screen gap-6 items-center font-[Poppins]"
//     >
//       {/* Profile Image */}
//       <motion.div 
//         className="w-[300px] h-[300px] shrink-0"
//         drag
//         dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
//       >
//         <motion.img 
//           src={myImage} 
//           alt="Personal-image" 
//           className="w-full h-full object-cover rounded-full p-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
//           whileHover={{ scale: 1.05 }}
//         />
//       </motion.div>

//       {/* Introduction Text */}
//       <motion.div className="max-w-[750px] overflow-auto px-16">
//         <motion.p 
//           className="text-lg text-white tracking-normal text-center"
//           initial={{ opacity: 0 }} 
//           animate={{ opacity: 1 }} 
//           transition={{ duration: 1.5, delay: 0.5 }}
//         >
//           <span className="font-bold text-2xl">Hi</span>, I’m 
//           <motion.span 
//             animate={{ y: [0, -10, 0] }} 
//             transition={{ repeat: Infinity, duration: 2 }} 
//             className="text-blue-300 text-xl font-bold"
//           >
//             Mohit Goswami
//           </motion.span>. 
//           I’m a developer who enjoys building websites and solving real problems using code.
//           <br/><br/>
//           <motion.span 
//             animate={{ color: ["#C9D1D9", "#3B82F6", "#C9D1D9"] }} 
//             transition={{ repeat: Infinity, duration: 3 }} 
//           >
//             Most of the projects you’ll see here are built to improve my skills and understand real-world applications.
//           </motion.span>
//           <br/><br/>
//           In the future, I plan to learn **machine learning** and build intelligent systems that can solve even more complex problems.
//         </motion.p>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default Introduction;

import React from 'react';
import { useState } from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import myImage from '../assets/nature.jpg';
import image from '../assets/s.jpeg';

function Introduction() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation runs only once when visible
    threshold: 0, // When 20% of the section is visible
  });

  const [img, setImg] = useState(true);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, scale: 0.8,x:50 }}
      animate={inView ? { opacity: 1, scale: 1, x:0 } : {}}
      transition={{ duration: 1 }}
      className="flex p-6 h-screen gap-6 items-center font-[Poppins]"
    >
      {/* Profile Image */}
      <motion.div className="w-[300px] h-[300px]  shrink-0">
        <motion.img 
          whileHover={{scale:1.12}}
          transition={{duration:0.2, ease:'easeIn'}}
          src={myImage}
          alt="Personal-image" 
          className="w-full h-full object-cover rounded-full p-2"
        />
      </motion.div>

      <motion.div className="max-w-[750px] overflow-auto px-16">
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

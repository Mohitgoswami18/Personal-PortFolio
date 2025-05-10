import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import netflixUI from '../assets/icons/netflixUI.png'
import blinkitUI from '../assets/icons/blinkitUI.png'
import weather from '../assets/icons/weather.png'
import auth from '../assets/icons/auth.png'
import graph from '../assets/graph.png'
import cgg from '../assets/icons/cgg.png'
import rbc from '../assets/icons/rbc.png'
import {useInView} from 'react-intersection-observer'
import {motion} from 'framer-motion'

const projects = {
  
  
  practise: [
    {
      name: 'Authentication-System',
      description: 'A basic authentication system that allows users to register and log in using browser local storage.',
      image: auth,
      tag: 'practise',
      skillTag : ['HTML', "TailwindCss", "Java Script"],
    },
    {
      name: 'ColorGuessingGame',
      description: 'A fun browser-based game that tests your color recognition skills. with simple DOM manipulation and internal scoring logic.',
      image: cgg,
      tag: 'practise',
      skillTag : ['HTML', "CSS", "Java Script"],
    },
    {
      name: 'backgroundChangerProject',
      description: ' small React project demonstrating the use of hooks to dynamically change background colors with user interactions.',
      image: rbc,
      tag: 'practise',
      skillTag : ['React', "TailwindCss"],
    },
  ],
  basic: [
    {
      name: 'blinkit-Clone',
      description: 'A responsive UI clone of the Blinkit website showcasing frontend layout and design skills using HTML and CSS.',
      image: blinkitUI,
      tag: 'Basic',
      skillTag : ['HTML', "CSS"],
    },
    {
      name: 'Netflix_UIClone',
      description: 'A responsive UI clone of the Netflix website showcasing frontend layout and design skills using HTML and TAILWIND CSS.',
      image: netflixUI,
      tag: 'Basic',
      skillTag : ['HTML', "TailwindCss"],
    },
    {
      name: 'WeatherForcast',
      description: 'A simple weather web application that displays current weather data like temperature, humidity... using the OpenWeather API.',
      image: weather,
      tag: 'Basic',
      skillTag : ['HTML', "CSS", "Java Script"],
    },
    
  ],
  advanced: [
    {
      name: 'Graph-Library',
      description: 'A C++ based graph library implementing various algorithms like BFS, DFS, Dijkstra, and Kruskal, built as part of a DSA learning project.',
      image: graph,
      tag: 'Advanced',
      skillTag : ['C++','DSA','Graph'],
    },
    // Add more advanced projects
  ],
};

const ProjectSection = () => {
  const {ref, inView} = useInView({
    triggerOnce:true,
    threshold:0
  });
  const [activeTab, setActiveTab] = useState('basic');

  return (
    <div ref={ref} div className='font-[Poppins] ml-10 px-4'>
      <div className='p-6 mt-60  font-[Poppins] w-full'>
        <motion.h1
        initial={{opacity:0, scale:0.99,y:-10}}
        animate={inView ? {opacity:1, scale:1, x:0, y:0} : {}}
        transition={{duration:1}} 
        className='ml-55 font-bold text-5xl text-blue-500'>Projects</motion.h1>
        <div className='flex mt-3 items-center ml-40 justify-evenly max-w-[500px] mx-auto gap-5'>
          <motion.h1
          initial={{opacity:0, scale:0.9,}}
          animate={inView ? {opacity:1, scale:1, x:0, y:0} : {}}
          transition={{duration:1}}  className='cursor-pointer basis-25%] hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] text-[#C9D1D9] text-lg font-bold top-30 left-35 mt-2'
          >DSA</motion.h1>
          <div className='w-1 h-8 bg-[#C9D1D9]'></div>
          <motion.h1
          initial={{opacity:0, scale:0.9}}
          animate={inView ? {opacity:1, scale:1,} : {}}
          transition={{duration:1}}  className='cursor-pointer basis-[25%] hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] text-[#C9D1D9] text-lg font-bold top-30 left-35 mt-2'
          >Develpment</motion.h1>
          <div className='w-1 h-8 bg-[#C9D1D9]'></div>
          <motion.h1 
          initial={{opacity:0, scale:0.9,}}
          animate={inView ? {opacity:1, scale:1, x:0, y:0} : {}}
          transition={{duration:1}} className='cursor-pointer basis-[39%] hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] text-[#C9D1D9] text-lg font-bold top-30 left-35 mt-2'
          >Machince Learning</motion.h1>
        </div>
      </div>
      <div className="text-white p-6 mt-2 mx-auto ml-40">
        <div className="flex gap-4 mb-6">
        <motion.button

initial={{opacity:0, scale:0.9,}}
          animate={inView ? {opacity:1, scale:1, x:0, y:0} : {}}
          transition={{duration:1}}

            onClick={() => setActiveTab('practise')}
            className={`px-2 py-2 text-sm rounded ${activeTab === 'practise'
                ? 'bg-blue-600 shadow-lg'
                : 'bg-gray-800 hover:bg-blue-500 transition'
              }`}
          >
            Practise Projects
          </motion.button>
          <motion.button

initial={{opacity:0, scale:0.9,}}
animate={inView ? {opacity:1, scale:1, x:0, y:0} : {}}
transition={{duration:1}}
            onClick={() => setActiveTab('basic')}
            className={`px-2 py-2 text-sm rounded ${activeTab === 'basic'
                ? 'bg-blue-600 shadow-lg'
                : 'bg-gray-800 hover:bg-blue-500 transition'
              }`}
          >
            Basic Projects
          </motion.button>
          <motion.button
          initial={{opacity:0, scale:0.9,}}
          animate={inView ? {opacity:1, scale:1, x:0, y:0} : {}}
          transition={{duration:1}}
            onClick={() => setActiveTab('advanced')}
            className={`px-2 py-2 rounded text-sm ${activeTab === 'advanced'
                ? 'bg-blue-600 shadow-lg'
                : 'bg-gray-800 hover:bg-blue-500 transition'
              }`}
          >
            Advanced Projects
          </motion.button>
        </div>

        <div className="grid grid-cols-3 ml-[-300px] mt-5 gap-2">
          {projects[activeTab].map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
      </div>
  );
}
export default ProjectSection;

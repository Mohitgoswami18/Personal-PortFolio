import React from 'react'
import SkillCard from './SkillCard'
import c from '../assets/icons/c.png'
import cpp from '../assets/icons/c++.png'
import java from '../assets/icons/java.png'
import python from '../assets/icons/python.png'
import html from '../assets/icons/html.png'
import css from '../assets/icons/css.png'
import js from '../assets/icons/js.png'
import tcss from '../assets/icons/tailwindcss.png'
import react from '../assets/icons/react.png'
import firebase from '../assets/icons/firebase.png'
import { useInView} from 'react-intersection-observer'
import { inView, motion } from 'framer-motion'

function Skills() {
    const { ref, inView} = useInView ({
        triggerOnce : true,
        threshold:0,
    })

    return (
        <motion.div ref={ref} className='font-[Poppins] mt-10 lg:mt-50 p-2 pt-10'
        initial={{scale:0.9, opacity:0}}
        animate={ inView ? {opacity:1, scale:1} : {}}
        transition={{ duration: 1}}
        >
            <motion.h1
            initial={{scale:0.8,x:-50, opacity:0}}
            animate={ inView ? {opacity:1, scale:1,x:0} : {}}
            transition={{ duration: 1 }}
             className='font-bold text-4xl lg:ml-[-90px] text-center lg:text-5xl text-blue-500'>Skills</motion.h1>
            <motion.div
            initial={{scale:0.8}}
            animate={ inView ? {opacity:1, scale:1} : {}}
            transition={{ duration: 1 }}
             className='grid grid-cols-1 lg:grid-cols-3 lg:space-x-12 border-2 border-blue-500 p-2 lg:p-8 max-w-[750px] mt-12 lg:ml-16 cursor-pointer  text-[#C9D1D9] text-lg font-bold'>
                <div className=''>
                    <h1 className='text-center '>Coding</h1>
                    <div className='grid grid-cols-3 mt-12'>
                        <SkillCard image={c} title="C" />
                        <SkillCard image={cpp} title="C++" />
                        <SkillCard image={java} title="java" />
                        <SkillCard image={python} title="python" />
                    </div>
                </div>
                
                <div className=''>
                    <h1 className='text-center lg:mt-0 mt-20'>Development</h1>
                    <div className='grid grid-cols-3 mt-12'>
                        <SkillCard image={html} title="HTML" imageStyle = "w-21 p-4"/>
                        <SkillCard image={css} title="CSS" imageStyle= "w-20 lg:w-18 mt-1"/>
                        <SkillCard image={js} title="JS" />
                        <SkillCard image={tcss} title="tailwind css" imageStyle= "w-20 lg:mt-4 mt-5"/>
                        <SkillCard image={react} title="React" />
                        <SkillCard image={firebase} title="Firebase" />
                    </div>
                </div>

                <div className=''>
                    <h1 className='text-center mt-30 lg:mt-0'>Machine Learning</h1>
                    <div className='grid grid-cols-3 mt-12'>
                    <SkillCard image={python} title="python" />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Skills

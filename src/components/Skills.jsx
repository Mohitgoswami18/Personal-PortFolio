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
        <motion.div ref={ref} className='font-[Poppins] mt-50 pt-10'
        initial={{scale:0.9, opacity:0}}
        animate={ inView ? {opacity:1, scale:1} : {}}
        transition={{ duration: 1}}
        >
            <motion.h1
            initial={{scale:0.8,x:-50, opacity:0}}
            animate={ inView ? {opacity:1, scale:1,x:0} : {}}
            transition={{ duration: 1 }}
             className='font-bold text-5xl text-blue-500 ml-90'>Skills</motion.h1>
            <motion.div
            initial={{scale:0.8}}
            animate={ inView ? {opacity:1, scale:1} : {}}
            transition={{ duration: 1 }}
             className='grid grid-cols-3 space-x-12 border-2 border-blue-500 p-8 max-w-[750px] mt-12 ml-16 cursor-pointer basis-25%]  text-[#C9D1D9] text-lg font-bold'>
                <div className=''>
                    <h1 className='text-center'>Coding</h1>
                    <div className='grid grid-cols-3 mt-12'>
                        <SkillCard image={c} title="C" />
                        <SkillCard image={cpp} title="C++" />
                        <SkillCard image={java} title="java" />
                        <SkillCard image={python} title="python" />
                    </div>
                </div>
                
                <div className=''>
                    <h1 className='text-center'>Development</h1>
                    <div className='grid grid-cols-3 mt-12'>
                        <SkillCard image={html} title="HTML" imageStyle = "p-4"/>
                        <SkillCard image={css} title="CSS" imageStyle= "w-18 mt-1"/>
                        <SkillCard image={js} title="JS" />
                        <SkillCard image={tcss} title="tailwind css" imageStyle= "mt-4"/>
                        <SkillCard image={react} title="React" />
                        <SkillCard image={firebase} title="Firebase" />
                    </div>
                </div>

                <div className=''>
                    <h1 className='text-center'>Machine Learning</h1>
                    <div className='grid grid-cols-3 mt-12'>
                    <SkillCard image={python} title="python" />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Skills

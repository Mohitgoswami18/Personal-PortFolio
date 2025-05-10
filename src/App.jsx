import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Projects'
import { useRef } from 'react'

function App() {

  const aboutMe = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  const home = useRef(null);

  return (
    <div className='bg-[#0A0F1C] w-full'>
      <div className='flex'>
        <Navbar aboutMe = {aboutMe} skills = {skills} projects = {projects} home = {home} contact = {contact}/>
        <div ref={home}><HeroSection contact = {contact} /></div>
      </div>
      <div className='ml-60'>
        <div ref={aboutMe}><Introduction/></div>
        <div className='' ref={skills}><Skills /></div>
        <div ref={projects}><Projects /></div>
        <div ref={contact}><Contact /></div>
      </div>
    </div>
  )
}

export default App

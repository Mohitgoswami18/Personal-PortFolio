import React from 'react'
import { useRef } from 'react'

function Navbar( { aboutMe, skills, projects, home, contact} ) {
  const VerticalScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className='md:inline hidden fixed font-[Poppins] mt-8 ml-3 md:mt-48 text-[#C9D1D9] '>
      <ul className='flex md:flex-col md:space-y-6 items-start md:justify-start md:gap-0 gap-5 md:p-4 p-2 md:ml-4 '>
        <li className='group hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] flex items-center gap-2 cursor-pointer hover:text-white transition-colors'
        onClick={ () => VerticalScroll (home)}>
          <div className='md:inline hidden w-7 h-[0.7px]  group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] group-hover:w-18 transition-all bg-[#C9D1D9] hover-bg-white'></div> Home</li>
        <li className='group hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] flex items-center md:gap-2 cursor-pointer hover:text-white transition-colors'
        onClick={ () => VerticalScroll (aboutMe)}>
          <div className='md:inline hidden w-7 h-[0.7px] group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] group-hover:w-18 transition-all bg-[#C9D1D9] hover-bg-white'></div> About me</li>
        <li className='group hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] flex items-center gap-2 cursor-pointer hover:text-white transition-colors'
        onClick={ () => VerticalScroll (skills)}><div className='md:inline hidden w-7 h-[0.7px] group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] group-hover:w-18 transition-all bg-[#C9D1D9] hover-bg-white'></div> skills </li>
        <li className='group hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] flex items-center gap-2 cursor-pointer hover:text-white transition-colors'
        onClick={ () => VerticalScroll (projects)}><div className='md:inline hidden w-7 h-[0.7px] group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] group-hover:w-18 transition-all bg-[#C9D1D9] hover-bg-white'></div> projects </li>
        <li className='group hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] flex items-center gap-2 cursor-pointer hover:text-white transition-colors'
        onClick={ () => VerticalScroll (contact)}><div className='md:inline hidden w-7 h-[0.7px] group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] group-hover:w-18 transition-all bg-[#C9D1D9] hover-bg-white'></div> contact  </li>
      </ul>
    </div>
  )
}

export default Navbar

import React from 'react'
import { motion } from 'motion/react'

function TestComponent() {
  return (
    <body className='bg-black h-full w-full'>
        <motion.div className='border-2 rounded-full w-32 h-32 bg-red-600'
        initial= {{
            x:0
        }}
        
        animate = {{
            x:500,
        }}
        
        transition={{
          duration : 1,
          ease:'anticipate'
        }}
        
        whileHover={{
            color:'white'
        }}
        
        whileTap={ {
            scale:5
        }}
        
        drag>
      
      </motion.div>
    </body>
  )
}

export default TestComponent

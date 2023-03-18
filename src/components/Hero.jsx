import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../style'
import {ComputersCanvas} from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen m-auto'>
      <div  className={`${styles.paddingX} absolute inset-0 top-[120px] mx-aut flex flex-row item-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#eb4688]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'>

          </div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#ec1e9d]">Kaif</span> </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Hello welcome to my Portfolio yaa <br className='sm:block hidden'></br>i know its interactive just go through it....😎
          </p>
        </div>
        
      </div>
      <ComputersCanvas/>
      {/* contioune here */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href = '#about'>
          <div className = "w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
          <motion.dev
            animate={{
              y:[0,24,0]
            }}
            transition={{
              duration:1.5,
              repeat:Infinity,
              repeatType:'loop'
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
          />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
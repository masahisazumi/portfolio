import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  directionLeft?: boolean
}

export default function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png" 
        alt="" 
        className='h-24 w-24 rounded-full border border-gray-500 object-cover transition duration-300 ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32'
      />
      <div className='absolute z-0 h-24 w-24 rounded-full opacity-0 transition duration-300 ease-in-out group-hover:bg-white group-hover:opacity-80 md:h-28 md:w-28 xl:h-32 xl:w-32'>
        <div className='flex h-full items-center justify-center'>
          <p className='text-3xl font-bold text-black opacity-100'>100%</p>
        </div>
      </div>
    </div>
  )
}

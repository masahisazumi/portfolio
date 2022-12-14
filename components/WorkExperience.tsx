import { motion } from 'framer-motion';
import React from 'react'
import ExperienceCard from './ExperienceCard';

type Props = {}

export default function WorkExperience({}: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 text-left md:flex-row'>

      <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>
        Experience
      </h3>
      <div className='flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10'>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  )
}

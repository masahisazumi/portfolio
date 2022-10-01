import { motion } from 'framer-motion';
import React from 'react'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='mt-10 flex w-[500px] shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10 opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]'>
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>CEO of PARAFAM</h4>
        <p className='mt-1 text-2xl font-bold'>PARAFAM</p>
        <div className='my-2 flex space-x-2'>
          <img
            className='h-10 w-10 rounded-full' 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt=""
          />
          <img
            className='h-10 w-10 rounded-full' 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt=""
          />
          <img
            className='h-10 w-10 rounded-full' 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt=""
          />
        </div>
        <p className='py-5 uppercase text-gray-300'>
          Started work... - Ended...
        </p>

        <ul className='ml-5 list-disc space-y-4 text-lg'>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  )
}

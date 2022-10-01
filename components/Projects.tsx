import { motion } from 'framer-motion';
import React from 'react'

type Props = {}


export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5]


  return (
    <div className='relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row'>
      <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>
        Projects
      </h3>
      <div className='relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll'>
        {/* {projects.map((project, i) => ( */}
          <div className='flex h-screen w-screen shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44'>
            <motion.img
              initial={{
                y: -300,
                opacity: 0 
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://pc.jpita.jp/swfu/d/pcsumaho.jpg" alt="" 
            />
            <div className='max-w-6xl space-y-10 px-10 md:px-10'>
              <h4 className='text-center text-4xl font-semibold'>
                Case Study 
                {/* {project + 1} of {projects.length} */}
              </h4>
              <p>
              Lorem ipsum dolor sit amet. Qui quas numquam eum quam voluptas qui dolorem nihil. Et dolor aperiam ea voluptas modi ut reprehenderit corrupti est quia odit.
              </p>
            </div>
          </div>
          <div className='flex h-screen w-screen shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44'>
            <motion.img
              initial={{
                y: -300,
                opacity: 0 
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://pc.jpita.jp/swfu/d/pcsumaho.jpg" alt="" 
            />
            <div className='max-w-6xl space-y-10 px-10 md:px-10'>
              <h4 className='text-center text-4xl font-semibold'>
                Case Study 
                {/* {project + 1} of {projects.length} */}
              </h4>
              <p>
              Lorem ipsum dolor sit amet. Qui quas numquam eum quam voluptas qui dolorem nihil. Et dolor aperiam ea voluptas modi ut reprehenderit corrupti est quia odit.
              </p>
            </div>
          </div>
          <div className='flex h-screen w-screen shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44'>
            <motion.img
              initial={{
                y: -300,
                opacity: 0 
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://pc.jpita.jp/swfu/d/pcsumaho.jpg" alt="" 
            />
            <div className='max-w-6xl space-y-10 px-10 md:px-10'>
              <h4 className='text-center text-4xl font-semibold'>
                Case Study 
                {/* {project + 1} of {projects.length} */}
              </h4>
              <p>
              Lorem ipsum dolor sit amet. Qui quas numquam eum quam voluptas qui dolorem nihil. Et dolor aperiam ea voluptas modi ut reprehenderit corrupti est quia odit.
              </p>
            </div>
          </div>
        {/* ))} */}

      </div>
      <div className='absolute top-[30%] left-0 h-[500px] w-full -skew-y-12 bg-[#F7AB0A]/10' />
    </div>
  )
}

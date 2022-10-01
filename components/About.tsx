import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left'
    >
      <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        viewport={{ once: true }}
      >
        <Image
          src="/profile.jpg" 
          alt="" 
          className='-mb-20 hidden h-56 w-56 shrink-0 rounded-full object-cover md:mb-0 md:block md:w-64 md:rounded-lg'
          width='576'
          height='576'
          layout='responsive'
        />
      </motion.div>

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>Here is a little background</h4>
        <p className='text-base'>
        Lorem ipsum dolor sit amet. Hic dolorem aliquam id autem voluptas qui cupiditate accusantium magni cumque et illo sint rem fugiat numquam sit fuga deleniti. Ut neque sit esse pariatur est perferendis consequatur vel velit ullam. Qui dolorum sint ad alias doloremque cum deleniti consequatur non delectus voluptatem ut neque iusto qui tempore libero.
        </p>
      </div>
    </motion.div>
  )
}

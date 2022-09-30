import { motion } from "framer-motion"
import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 z-20 mx-auto flex max-w-7xl items-start justify-between xl:items-center'>
      {/* Social Icons */}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className='flex flex-row items-center'>
        <SocialIcon 
          url="https://www.instagram.com/mast1111/"
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon 
          url="https://twitter.com/masmas863"
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon 
          url="https://www.youtube.com/user/mhisazumi/featured"
          fgColor='gray'
          bgColor='transparent'
        />
      </motion.div>

      {/* Nav */}
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className='flex cursor-pointer flex-row items-center text-gray-300'>
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />
        <p 
          className='hidden text-sm uppercase md:inline-flex'
        >
          Contact In Touch
        </p>
      </motion.div>


    </header>
  )
}

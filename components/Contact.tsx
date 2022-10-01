import React from 'react'

type Props = {}

export default function Contact({}: Props) {
  return (
    <div className='relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row'>
      <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>
        Contact
      </h3>
    </div> 
  )
}

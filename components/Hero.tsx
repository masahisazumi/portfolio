import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      'My Name is Masa',
      'Developer', 
      'UI Designer', 
      'UX Designer',
      '<Developed with React TypeScript Next.js />'
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className='flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center'>
      <BackgroundCircles />
      <img 
        className='relative mx-auto h-32 w-32 rounded-full object-cover'
        src="https://firebasestorage.googleapis.com/v0/b/ibc-for-beauty.appspot.com/o/users%2FlFp0O5drFOU0l0uUekg9tpH0jUv1%2Favatar?alt=media&amp;token=f860b92a-ec28-420f-93d8-ddae376e712f" alt="" />
      <div className='z-20'>
        <h2 className='test-sm pb-2 uppercase tracking-[15px] text-gray-500'>
          Software Engineer
        </h2>
        <h1 className='scroll-px-10 text-5xl font-semibold lg:text-6xl'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7A0BA' />
        </h1>
        <div className='pt-5'>
          <Link href='#about' className='cousor-pointer'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#works'>
            <button className='heroButton'>Works</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

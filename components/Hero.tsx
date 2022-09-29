import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      'My Name is Masa',
      'Developer', 
      'UI Designer', 
      'UX Designer',
      '<Develop for React TypeScript Next.js />'
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div>
      <p>{text}</p>
    </div>
  )
}

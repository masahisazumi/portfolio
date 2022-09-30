import { motion } from 'framer-motion';
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
      <motion.img
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
        src="https://lh3.googleusercontent.com/a-/ACNPEu9YmzxfCNeRZU9nTVV9KtSwY-zWUYMnKFGXKlMsKg=s576-p-rw-no" 
        alt="" 
        className='md:h-95 -mb-20 h-56 w-56 shrink-0 rounded-full object-cover md:mb-0 md:w-64 md:rounded-lg xl:h-[600px] xl:w-[500px]'
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>Here is a little background</h4>
        <p className='text-base'>
        Lorem ipsum dolor sit amet. Hic dolorem aliquam id autem voluptas qui cupiditate accusantium magni cumque et illo sint rem fugiat numquam sit fuga deleniti. Ut neque sit esse pariatur est perferendis consequatur vel velit ullam. Qui dolorum sint ad alias doloremque cum deleniti consequatur non delectus voluptatem ut neque iusto qui tempore libero.

        Qui quisquam laboriosam et distinctio perferendis aut eligendi dolor vel dolor soluta qui officiis vitae. Et internos atque in dolores nihil sed dolore possimus. Sit omnis delectus sed minus cupiditate et consequatur soluta ut necessitatibus adipisci et perferendis voluptatum. Et optio molestiae quo debitis doloremque et possimus officia qui dolorem porro ut sint dolor qui inventore sunt ad reiciendis eveniet?

        Et molestias animi qui sapiente consectetur aut laboriosam veniam ab quia maiores aut deserunt ducimus! Quo rerum explicabo ea quod repellendus et atque doloremque aut quae rerum nam eveniet doloribus.
        </p>
      </div>
    </motion.div>
  )
}

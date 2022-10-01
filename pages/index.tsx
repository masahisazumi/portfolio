import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience';

const Home: NextPage = () => {
  return (
    <div className='z-0 h-screen snap-y snap-mandatory overflow-scroll bg-[rgb(36,36,36)] text-white'> 
      <Head>
        <title>My Portfolio</title>
      </Head>

      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='works' className='snap-center'>
        <WorkExperience />
      </section>

      <section id='skills' className='snap-center'>
        <Skills />
      </section>

      <section id='projects' className='snap-center'>
        <Projects />
      </section>

      <section id='contact' className='snap-center'>
        <Contact />
      </section>

    </div>
  )
}

export default Home

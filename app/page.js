'use client'
import Cursor from '../components/Cursor'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import AIProjects from '../components/AIProjects'
import Contact from '../components/Contact'
import Fun from '../components/Fun'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <AIProjects />
        <Contact />
        <Fun />
      </main>
      <Footer />
    </>
  )
}

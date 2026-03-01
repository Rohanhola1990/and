'use client'
import { useEffect, useState } from 'react'

const LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
  { label: 'Fun',        href: '#fun' },
]
const SECTION_IDS = ['about','experience','skills','projects','contact','fun']

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [active,   setActive]     = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 55)
      let cur = ''
      SECTION_IDS.forEach(id => {
        const el = document.getElementById(id)
        if (!el) return
        const r = el.getBoundingClientRect()
        if (r.top <= 130 && r.bottom > 130) cur = id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`site-nav${scrolled ? ' scrolled' : ''}`}>
      <a className="nav-logo" href="#hero">AND<span>.</span></a>
      <ul className="nav-links">
        {LINKS.map(l => (
          <li key={l.label}>
            <a
              href={l.href}
              className={active === l.href.slice(1) ? 'active' : ''}
            >{l.label}</a>
          </li>
        ))}
      </ul>
      <div className="nav-right">
        <a className="nav-cv" href="/cv.pdf" download>
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M5.5 1v6.5M3 5l2.5 2.5L8 5M1 10h9" stroke="#69C39C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Download CV
        </a>
        <a className="nav-cta" href="#contact">Let's Talk ↗</a>
      </div>
    </nav>
  )
}

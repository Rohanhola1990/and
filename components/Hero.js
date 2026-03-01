'use client'
import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    const line = document.getElementById('heroLine')
    if (line) setTimeout(() => { line.style.width = '100%' }, 650)
  }, [])

  return (
    <section id="hero">
      <div className="hero-g1" />
      <div className="hero-g2" />

      {/* Grid deco */}
      <svg className="deco" style={{top:0,left:0,width:'100%',height:'100%',opacity:.05}} xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse"><path d="M80 0L0 0 0 80" fill="none" stroke="#69C39C" strokeWidth=".5"/></pattern></defs>
        <rect width="100%" height="100%" fill="url(#grid)"/>
      </svg>

      {/* Rotating circles */}
      <svg className="deco" style={{top:-90,right:-90,width:520,height:520,opacity:.08,animation:'rotateSlow 70s linear infinite'}} viewBox="0 0 520 520">
        <circle cx="260" cy="260" r="240" fill="none" stroke="#69C39C" strokeWidth="1" strokeDasharray="10 18"/>
        <circle cx="260" cy="260" r="190" fill="none" stroke="#69C39C" strokeWidth=".5"/>
        <circle cx="260" cy="260" r="138" fill="none" stroke="#593A3A" strokeWidth="1" strokeDasharray="4 14"/>
      </svg>

      {/* Corner bracket */}
      <svg className="deco" style={{bottom:50,left:'3rem',width:100,height:100,opacity:.2}} viewBox="0 0 100 100">
        <path d="M0 33L0 0 33 0" fill="none" stroke="#69C39C" strokeWidth="1.5"/>
        <path d="M67 100L100 100 100 67" fill="none" stroke="#69C39C" strokeWidth="1.5"/>
      </svg>

      <p className="hero-tag">Frontend Lead &amp; UX Enthusiast — Hyderabad, India</p>
      <h1 className="hero-name">Amar Nath<br/><em>Das</em></h1>
      <div className="hero-line" id="heroLine" />
      <div className="hero-bottom">
        <p className="hero-desc">
          <em>A trying-to-be-human more than a trying-to-be-developer, no matter the outcome.</em>
          10+ years crafting high-performance UIs. Currently modernising legacy banking systems at{' '}
          <strong>Cognizant</strong>. Aspiring towards{' '}
          <strong>UX Consulting</strong> &amp; <strong>Product Design Leadership</strong>.
        </p>
        <div className="hero-btns">
          <a className="btn-p" href="#projects">View Work</a>
          <a className="btn-g" href="#contact">Get in Touch ↓</a>
        </div>
      </div>
      <div className="scroll-h">
        <p>Scroll</p>
        <div className="scroll-line" />
      </div>
    </section>
  )
}

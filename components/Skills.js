'use client'
import { useEffect, useRef } from 'react'

const GROUPS = [
  { cat: 'Core Frontend', color: '#69C39C', skills: [
    {n:'HTML5',p:98},{n:'CSS3 / SCSS',p:96},{n:'JavaScript (ES6+)',p:94},
    {n:'React.js',p:96},{n:'Next.js',p:82},{n:'Redux Toolkit',p:88},{n:'TypeScript',p:72},
  ]},
  { cat: 'UI Libraries & Design', color: '#A07060', skills: [
    {n:'Material UI',p:90},{n:'Chakra UI',p:85},{n:'Bootstrap',p:90},
    {n:'AG-Grid',p:82},{n:'Figma',p:80},{n:'Photoshop',p:70},
  ]},
  { cat: 'Engineering & Tools', color: '#7A9070', skills: [
    {n:'Git / GitHub',p:90},{n:'GitHub Copilot',p:82},{n:'CI/CD',p:78},
    {n:'API Integration',p:87},{n:'Agile / Scrum',p:88},{n:'AWS (Frontend)',p:25},
  ]},
  { cat: 'Learning & Exploring', color: '#8A9C94', skills: [
    {n:'UX Research',p:62},{n:'Information Architecture',p:67},{n:'UX Strategy',p:58},
    {n:'VueJs',p:20},{n:'Design Tokens',p:20},
  ]},
]

export default function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    let triggered = false
    const check = () => {
      if (triggered || !ref.current) return
      const r = ref.current.getBoundingClientRect()
      if (r.top < window.innerHeight * 0.85) {
        triggered = true
        ref.current.querySelectorAll('.sb-fill').forEach(f => {
          f.style.width = f.dataset.w + '%'
        })
      }
    }
    window.addEventListener('scroll', check, { passive: true })
    check()
    return () => window.removeEventListener('scroll', check)
  }, [])

  return (
    <section id="skills" ref={ref}>
      <svg className="deco" style={{bottom:0,right:0,width:380,height:240,opacity:.065}} viewBox="0 0 380 240">
        <path d="M0 180 Q95 148 190 180 T380 180" fill="none" stroke="#69C39C" strokeWidth="1"/>
        <path d="M0 200 Q95 168 190 200 T380 200" fill="none" stroke="#69C39C" strokeWidth=".7"/>
        <path d="M0 220 Q95 188 190 220 T380 220" fill="none" stroke="#69C39C" strokeWidth=".5"/>
      </svg>
      <svg className="deco" style={{top:55,left:'2rem',width:90,height:90,opacity:.18,animation:'floatY 7s ease-in-out infinite'}} viewBox="0 0 90 90">
        <circle cx="18" cy="18" r="2" fill="#69C39C"/>
        <circle cx="45" cy="12" r="1.5" fill="#69C39C"/>
        <circle cx="72" cy="24" r="2.2" fill="#69C39C"/>
        <circle cx="30" cy="48" r="1.5" fill="#593A3A"/>
        <circle cx="60" cy="52" r="2" fill="#69C39C"/>
        <circle cx="15" cy="70" r="1.5" fill="#69C39C"/>
        <circle cx="78" cy="65" r="2" fill="#593A3A"/>
      </svg>

      <div className="skills-inner">
        <p className="stag">03 — Skills</p>
        <h2 className="stitle">The tools &amp; thinking<br/><em>behind the work.</em></h2>
        <div className="skills-g">
          {GROUPS.map(g => (
            <div key={g.cat}>
              <div className="sg-head">
                <div className="sg-dot" style={{background:g.color}}/>
                <div className="sg-cat" style={{color:g.color}}>{g.cat}</div>
              </div>
              {g.skills.map(s => (
                <div key={s.n} className="sb-row">
                  <div className="sb-top">
                    <span className="sb-name">{s.n}</span>
                    <span className="sb-pct">{s.p}%</span>
                  </div>
                  <div className="sb-track">
                    <div className="sb-fill" style={{background:g.color}} data-w={s.p}/>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

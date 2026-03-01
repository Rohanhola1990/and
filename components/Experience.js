'use client'
import { useState } from 'react'

const JOBS = [
  {
    tab: { co: 'Cognizant', period: '2025 — Present' },
    role: 'Senior Associate', sub: 'Cognizant · Banking Sector', subColor: '#69C39C',
    badge: '2025 — Present', badgeColor: '#69C39C',
    bullets: [
      'Modernising legacy banking systems — analysing C++ codebases with GitHub Copilot to extract and document business logic',
      'Leading React feature releases aligned to business-critical banking workflows and compliance requirements',
      'Bridging engineering and design: translating system constraints into clean, user-friendly interfaces',
      'Collaborating with cross-functional teams (BA, QA, Design) to align technical delivery with UX goals',
    ],
    stack: ['React.js','TypeScript','GitHub Copilot','C++ Analysis','Git'],
    stackColor: '#69C39C',
  },
  {
    tab: { co: 'Tier5 Technologies', period: '2019 — 2025' },
    role: 'Frontend Group Lead', sub: 'Tier5 Technologies · Product Company', subColor: '#A07060',
    badge: '2019 — 2025', badgeColor: '#A07060',
    bullets: [
      'Led a UI team — drove code quality standards, performance benchmarks, and developer experience improvements',
      'Reduced initial app load time by ~30% using React code-splitting, lazy loading, and HTML/CSS optimisation',
      'Built a reusable SCSS + React component library (inputs, modals, forms) adopted across 5+ products',
      'Guided UX team on design feasibility — directly reducing errors of omission and saving dev cycles',
      'Delivered complete payment module (Bank, Cards, Instalments, mixed flows) from zero to production in 2 weeks',
      'Mentored 2 batches of interns and ran HTML & CSS instructional sessions',
    ],
    projects: ['Friender','Kyubi','Redbelt Gym','Sticky Reviews','Chirply / TextInBulk','Chrome Extensions'],
    stack: ['React.js','Redux Toolkit','Material UI','SCSS','CI/CD','Figma','Jira / Agile'],
    stackColor: '#A07060',
    awards: ['UI Developer of Quarter', 'Employee of the Month'],
  },
  {
    tab: { co: 'Esolz Technologies', period: '2015 — 2019' },
    role: 'UI Developer', sub: 'Esolz Technologies · Service Company', subColor: '#7A9070',
    badge: '2015 — 2019', badgeColor: '#7A9070',
    bullets: [
      'Converted PSD, PDF & Sketch designs into pixel-perfect HTML/CSS — often within a single working day',
      'Delivered a complete multi-page dashboard with complex grid structures independently in under one month',
      'Provided concurrent UI support across both frontend and backend developers on multiple projects',
      'Exposed to React via a Nestlé-based app — the seed of a decade-long specialisation',
    ],
    projects: ['Adseyes','Pinpoint','Holydelights','Tinoh.info'],
    stack: ['HTML5','CSS3','jQuery','Bootstrap','Photoshop'],
    stackColor: '#7A9070',
    awards: ['New Joinee Appreciation Award'],
  },
]

export default function Experience() {
  const [active, setActive] = useState(0)
  const j = JOBS[active]

  return (
    <section id="experience">
      <svg className="deco" style={{left:0,top:0,width:160,height:'100%',opacity:.045}} viewBox="0 0 160 500" preserveAspectRatio="xMidYMid slice">
        <defs><pattern id="hex" x="0" y="0" width="56" height="97" patternUnits="userSpaceOnUse">
          <polygon points="28,2 54,16 54,48 28,62 2,48 2,16" fill="none" stroke="#69C39C" strokeWidth=".7"/>
          <polygon points="0,49 26,63 26,95 0,109 -26,95 -26,63" fill="none" stroke="#69C39C" strokeWidth=".7"/>
          <polygon points="56,49 82,63 82,95 56,109 30,95 30,63" fill="none" stroke="#69C39C" strokeWidth=".7"/>
        </pattern></defs>
        <rect width="160" height="500" fill="url(#hex)"/>
      </svg>

      <div className="exp-wrap">
        <p className="stag">02 — Experience</p>
        <h2 className="stitle">A decade of shipping.<br/><em>Still curious.</em></h2>
        <div className="exp-grid">
          <div className="exp-tabs">
            {JOBS.map((jb, i) => (
              <button key={i} className={`etab${active === i ? ' active' : ''}`} onClick={() => setActive(i)}>
                <div className="etab-co">{jb.tab.co}</div>
                <div className="etab-per">{jb.tab.period}</div>
              </button>
            ))}
          </div>
          <div className="exp-panel active">
            <div className="exp-head">
              <div>
                <div className="exp-role">{j.role}</div>
                <div className="exp-sub" style={{color: j.subColor}}>{j.sub}</div>
              </div>
              <span className="exp-badge" style={{border:`1px solid ${j.badgeColor}40`,color:j.badgeColor}}>{j.badge}</span>
            </div>
            <ul className="exp-ul">
              {j.bullets.map((b, i) => (
                <li key={i}><span className="arr" style={{color:j.subColor}}>→</span>{b}</li>
              ))}
            </ul>
            {j.projects && <>
              <div className="slabel">Projects</div>
              <div className="chip-row">{j.projects.map(p => <span key={p} className="chip-proj">{p}</span>)}</div>
            </>}
            <div className="slabel">Stack</div>
            <div className="chip-row">
              {j.stack.map(s => (
                <span key={s} className="chip-stack" style={{border:`1px solid ${j.stackColor}30`,color:j.stackColor}}>{s}</span>
              ))}
            </div>
            {j.awards && (
              <div className="awards-row">{j.awards.map(a => <span key={a} className="award">★ {a}</span>)}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

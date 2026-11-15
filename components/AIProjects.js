import Link from 'next/link'

// TODO: replace these placeholder entries with your real AI-built projects.
// `href` is optional — leave it out and the card renders without a link.
// const AI_PROJECTS = [
//   { year:'2025', title:'Project Name One', type:'AI · Web App', color:'#69C39C',
//     desc:'One or two lines on what you built, the problem it solves, and how AI helped you build it.',
//     tools:['Claude','Next.js','React.js'], href:'' },
//   { year:'2025', title:'Project Name Two', type:'AI · Automation', color:'#A07060',
//     desc:'One or two lines on what you built, the problem it solves, and how AI helped you build it.',
//     tools:['Claude','JavaScript'], href:'' },
//   { year:'2025', title:'Project Name Three', type:'AI · Tool', color:'#7A9070',
//     desc:'One or two lines on what you built, the problem it solves, and how AI helped you build it.',
//     tools:['Claude','Node.js'], href:'' },
// ]
const ARCADE_URL = 'http://gamesmedo.com/'

export default function AIProjects() {
  return (
    <section id="ai">
      <svg className="deco" style={{top:60,left:'2.5rem',width:120,height:120,opacity:.1}} viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="50" fill="none" stroke="#69C39C" strokeWidth=".8" strokeDasharray="4 8"/>
        <circle cx="60" cy="60" r="28" fill="none" stroke="#69C39C" strokeWidth=".6"/>
        <circle cx="60" cy="60" r="4" fill="#69C39C"/>
      </svg>

      <div className="ai-inner">
        <p className="stag">05 — Built with AI</p>
        <h2 className="stitle">Ideas I shipped<br/><em>with an AI co-pilot.</em></h2>

        {/* <div className="ai-grid">
          {AI_PROJECTS.map((p, i) => {
            const body = (
              <>
                <div className="ai-top">
                  <span className="ai-year">{p.year}</span>
                  <span className="ptype" style={{border:`1px solid ${p.color}45`,color:p.color}}>{p.type}</span>
                </div>
                <h3 className="ai-title">{p.title}</h3>
                <p className="ai-desc">{p.desc}</p>
                <div className="pstack">{p.tools.map(t => <span key={t} className="pchip">{t}</span>)}</div>
                {p.href ? <span className="ai-arrow">↗</span> : null}
              </>
            )
            return p.href
              ? <a key={i} className="ai-card" href={p.href} target="_blank" rel="noopener noreferrer">{body}</a>
              : <div key={i} className="ai-card">{body}</div>
          })}
        </div> */}

        <div className="games-banner">
          <div>
            <p className="gb-tag">🎮 The Arcade</p>
            <p className="gb-title">Games I built with AI — <em>playable.</em></p>
            <p className="gb-sub">A growing collection of small games, all made by prompting, tinkering and shipping.</p>
          </div>
          <a className="btn-p" href={ARCADE_URL} target="_blank" rel="noopener noreferrer">Enter the arcade ↗</a>
        </div>
      </div>
    </section>
  )
}

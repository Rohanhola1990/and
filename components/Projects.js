const PROJECTS = [
  { year:'2025', co:'Cognizant', title:'Banking Modernisation', type:'Enterprise · FinTech', role:'Senior Associate', color:'#69C39C',
    desc:'Analysing decade-old C++ banking applications with GitHub Copilot to reverse-engineer business logic, then translating into modern React feature releases. Engineering archaeology meets product thinking.',
    impact:'Legacy C++ → React migration · AI-assisted analysis · Compliance-grade delivery',
    stack:['React.js','TypeScript','GitHub Copilot','C++ Analysis'] },
  { year:'2023', co:'Tier5', title:'Redbelt Gym', type:'Fitness SaaS', role:'Frontend Lead', color:'#A07060',
    desc:'Delivered the entire payment module from scratch — Bank transfers, Card payments, Instalments, and hybrid flows — within a 2-week sprint while learning API integration in production.',
    impact:'2-week delivery · 4 payment methods · Live in production',
    stack:['React.js','Redux','API Integration','JSX'] },
  { year:'2021', co:'Tier5', title:'Friender', type:'Social Platform', role:'Frontend Lead', color:'#593A3A',
    desc:'Led frontend architecture for a social app. Created the SCSS design system, guided UX feasibility reviews, built all reusable components, cut load time by 30% via code-splitting.',
    impact:'30% load time reduction · Full design system · UX collaboration',
    stack:['React.js','SCSS','Redux','JavaScript'] },
  { year:'2021', co:'Tier5', title:'Kyubi', type:'React Application', role:'Frontend Developer', color:'#7A9070',
    desc:'First React project at the company — learnt and adapted fast while supporting other projects in parallel. Built components in both functional and class-based patterns.',
    impact:'First React product · Dual-pattern components · Dual-project support',
    stack:['React.js','JSX','CSS Modules','JavaScript'] },
  { year:'2020', co:'Tier5', title:'Chrome Extensions Suite', type:'Browser Extensions', role:'Frontend Developer', color:'#8A9C94',
    desc:"Built the organisation's first browser extensions including Friend Connector and Post Profits. Explored service workers, background script architecture, and content script message passing from scratch.",
    impact:'First-ever org extensions · Service workers · Background JS',
    stack:['JavaScript','HTML/CSS','Chrome APIs','Service Workers'] },
  { year:'2019', co:'Tier5', title:'Sticky Reviews / Chirply', type:'SaaS Tools', role:'Frontend Developer', color:'#69C39C',
    desc:'Built UI for a suite of conversion and outreach tools. Shipped features fast in a startup environment, focusing on clean component structure and consistent UX patterns.',
    impact:'Multi-product consistency · Fast iteration cycle · Component reuse',
    stack:['React.js','CSS Modules','JavaScript'] },
  { year:'2018', co:'Esolz', title:'Dashboard UI', type:'Enterprise Dashboard', role:'UI Developer', color:'#7A9070',
    desc:'Proudest early-career moment: independently delivered a comprehensive dashboard UI with multiple pages, data-heavy grid layouts, and filtering interfaces within a single month.',
    impact:'Solo delivery · Multi-page · Complex grids · One month',
    stack:['HTML5','CSS3','jQuery','Bootstrap'] },
  { year:'2016', co:'Esolz', title:'Adseyes / Pinpoint / Holydelights', type:'Service Delivery', role:'UI Developer', color:'#6E6860',
    desc:'Converted PSD, Sketch and PDF designs into pixel-perfect, cross-browser HTML/CSS — often within a single working day. Concurrent UI support to frontend and backend developers.',
    impact:'Day-turnaround delivery · Pixel-perfect · Multi-project support',
    stack:['HTML5','CSS3','jQuery','Photoshop'] },
]

export default function Projects() {
  return (
    <section id="projects">
      <svg className="deco" style={{top:80,right:'2.5rem',width:150,height:400,opacity:.1}} viewBox="0 0 150 400">
        <line x1="75" y1="0" x2="75" y2="400" stroke="#69C39C" strokeWidth=".8" strokeDasharray="4 8"/>
        {[50,107,164,221,278,335].map((y,i) => (
          <g key={y}>
            <circle cx="75" cy={y} r="4.5" fill="none" stroke="#69C39C" strokeWidth="1.2"/>
            <line x1="75" y1={y} x2={i%2===0?130:20} y2={y} stroke="#69C39C" strokeWidth=".6"/>
          </g>
        ))}
      </svg>

      <div className="proj-inner">
        <p className="stag">04 — Selected Work</p>
        <h2 className="stitle">Things I built that<br/><em>actually shipped.</em></h2>

        {PROJECTS.map((p, i) => (
          <div key={i} className="proj-row">
            <div className="pmeta">
              <span className="pyear">{p.year}</span>
              <span className="pco">{p.co}</span>
            </div>
            <div>
              <div className="ptitle-row">
                <span className="ptitle">{p.title}</span>
                <span className="ptype" style={{border:`1px solid ${p.color}45`,color:p.color}}>{p.type}</span>
                <span className="prole">{p.role}</span>
              </div>
              <p className="pdesc">{p.desc}</p>
              <p className="pimpact" style={{color:p.color}}>{p.impact}</p>
              <div className="pstack">{p.stack.map(s => <span key={s} className="pchip">{s}</span>)}</div>
            </div>
            <div className="parrow">→</div>
          </div>
        ))}
      </div>
    </section>
  )
}

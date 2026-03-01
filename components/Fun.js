export default function Fun() {
  return (
    <section id="fun">
      <svg className="deco" style={{top:0,left:0,width:'100%',height:'100%',opacity:.055,pointerEvents:'none'}} viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
        <circle cx="80"  cy="80"  r="3"   fill="#69C39C"/><circle cx="200" cy="160" r="2"   fill="#593A3A"/>
        <circle cx="340" cy="60"  r="3.5" fill="#69C39C"/><circle cx="520" cy="120" r="2"   fill="#404536"/>
        <circle cx="700" cy="50"  r="3"   fill="#69C39C"/><circle cx="900" cy="100" r="2"   fill="#593A3A"/>
        <circle cx="1050" cy="70" r="3"   fill="#69C39C"/><circle cx="150" cy="500" r="2"   fill="#69C39C"/>
        <circle cx="400" cy="480" r="3"   fill="#404536"/><circle cx="650" cy="520" r="2"   fill="#69C39C"/>
        <circle cx="850" cy="450" r="3.5" fill="#593A3A"/>
        <line x1="300" y1="200" x2="320" y2="220" stroke="#69C39C" strokeWidth="1"/>
        <line x1="600" y1="400" x2="625" y2="380" stroke="#69C39C" strokeWidth=".8"/>
      </svg>

      <div className="fun-inner">
        <p className="stag">06 — Beyond the Code</p>
        <h2 className="stitle">A human who<br/><em>also happens</em> to code.</h2>
        <div className="fun-g">
          {/* LEFT */}
          <div>
            <div className="hobby-list">
              {[
                ['📸','Street & Travel Photography','Documenting everyday moments — candid, raw, Bengali weekends'],
                ['🎬','Media Building & Storytelling','Creating Bengali digital content, stories, and cultural narratives'],
                ['🎨','Design Exploration','Obsessing over typography, layout, and visual systems outside of work'],
                ['🎵','Music & Culture','Bengali folk, indie, and everything with soul'],
                ['🍜','Food & City Wandering','Weekend explorer — finding the best bowls in Hyderabad (and Kolkata)'],
              ].map(([icon, name, desc]) => (
                <div key={name} className="hobby">
                  <span className="h-icon">{icon}</span>
                  <div><div className="h-name">{name}</div><div className="h-desc">{desc}</div></div>
                </div>
              ))}
            </div>
            <p className="cc-label">My Creative Corners</p>
            <div className="cc-grid">
              {[
                { href:'https://www.instagram.com/weekend_e_bangali/',  em:'📷', name:'Weekend e Bangali',  handle:'@weekend_e_bangali',  desc:'Street photography & the Bengali gaze' },
                { href:'https://www.instagram.com/golpokhunjepai/',     em:'🎞️', name:'Golpo Khunje Pai',  handle:'@golpokhunjepai',     desc:'Bengali storytelling & media building' },
                { href:'https://linkedin.com',                          em:'💼', name:'LinkedIn',           handle:'Connect professionally', desc:'Career updates & thoughts on UX' },
                { href:'https://github.com',                            em:'💻', name:'GitHub',             handle:'Open source & experiments', desc:'Code, side projects & contributions' },
              ].map(c => (
                <a key={c.name} className="cc-card" href={c.href} target="_blank" rel="noopener noreferrer">
                  <span className="cc-arrow">↗</span>
                  <span className="cc-em">{c.em}</span>
                  <span className="cc-name">{c.name}</span>
                  <span className="cc-handle">{c.handle}</span>
                  <span className="cc-desc">{c.desc}</span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: BEER */}
          <div className="beer-side">
            <p className="beer-pre">If this portfolio made you smile ☺</p>
            <h3 className="beer-hed">Good work deserves<br/>a <em>cold one.</em></h3>
            <p className="beer-sub">I run on curiosity, caffeine, and the occasional cold beer. If my work, photography, or stories added something to your day — you know what to do.</p>
            <div className="beer-wrap">
              <div className="beer-mug">🍺</div>
              <a className="beer-btn" href="https://www.buymeacoffee.com/" target="_blank" rel="noopener noreferrer">
                <span style={{fontSize:'1.1rem'}}>🍺</span> Buy me a Beer
              </a>
            </div>
            <p className="beer-note">Hover for a surprise ↑</p>
            <div className="foam-row">
              <span className="foam"/><span className="foam"/><span className="foam"/>
            </div>
            <div className="fun-stats">
              <p className="fs-label">A few honest numbers</p>
              {[
                ['Cups of chai consumed (est.)', '∞', 'var(--cream)'],
                ['Photos taken on weekends', '1000+', 'var(--teal)'],
                ['Bengali stories waiting to be told', 'Many', 'var(--teal)'],
                ['Beers accepted from kind strangers', '0 so far 🥲', 'var(--cream)'],
              ].map(([k,v,c]) => (
                <div key={k} className="fs-row">
                  <span className="fs-k">{k}</span>
                  <span className="fs-v" style={{color:c}}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

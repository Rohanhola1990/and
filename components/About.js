export default function About() {
  return (
    <section id="about">
      <svg className="deco" style={{top:0,right:0,width:300,height:300,opacity:.07}} viewBox="0 0 300 300">
        <line x1="300" y1="0" x2="0" y2="300" stroke="#69C39C" strokeWidth=".8"/>
        <line x1="340" y1="0" x2="40" y2="300" stroke="#69C39C" strokeWidth=".5"/>
        <line x1="260" y1="0" x2="-40" y2="300" stroke="#69C39C" strokeWidth=".4"/>
        <circle cx="300" cy="0" r="52" fill="none" stroke="#593A3A" strokeWidth=".6" strokeDasharray="4 10"/>
      </svg>
      <svg className="deco" style={{bottom:70,left:'2rem',width:76,height:76,opacity:.16,animation:'floatY 6s ease-in-out infinite'}} viewBox="0 0 76 76">
        <line x1="19" y1="9" x2="19" y2="29" stroke="#69C39C" strokeWidth="1.5"/>
        <line x1="9" y1="19" x2="29" y2="19" stroke="#69C39C" strokeWidth="1.5"/>
        <line x1="57" y1="47" x2="57" y2="67" stroke="#69C39C" strokeWidth="1.5"/>
        <line x1="47" y1="57" x2="67" y2="57" stroke="#69C39C" strokeWidth="1.5"/>
      </svg>

      <div className="about-grid">
        <div>
          <p className="stag">01 — About</p>
          <h2 className="stitle" style={{marginBottom:0}}>Code that<br/><em>feels</em> as<br/>good as it works.</h2>
          <div className="stats-g">
            <div className="stat"><div className="stat-n">10+</div><div className="stat-l">Years Experience</div></div>
            <div className="stat"><div className="stat-n">2</div><div className="stat-l">Teams Led</div></div>
            <div className="stat"><div className="stat-n">30%</div><div className="stat-l">Load Time Reduced</div></div>
            <div className="stat"><div className="stat-n">4+</div><div className="stat-l">Products Shipped</div></div>
          </div>
        </div>
        <div className="bio">
          <p>I&apos;m a frontend engineer with over a decade of building UIs that users actually enjoy. From pixel-perfect CSS to architecture decisions that scale — I&apos;ve been the person making sure the interface doesn&apos;t let the product down.</p>
          <p>Currently at <strong>Cognizant</strong> as a Senior Associate in Hyderabad, I&apos;m helping the banking sector modernise — using GitHub Copilot to analyse legacy C++ systems and drive React-based feature releases. Engineering meets detective work.</p>
          <p>But I&apos;m not just a builder. I think deeply about <em style={{color:'var(--cream)'}}>why</em> things are built the way they are. My next chapter is in <strong>UX Consulting</strong>, <strong>Design Product Management</strong>, or <strong>UX Architecture</strong> — bridging the gap between engineering reality and design vision.</p>
          <p style={{fontSize:'.81rem',color:'var(--muted)',fontStyle:'italic'}}>Originally from Kolkata · Now based in Hyderabad</p>
          <div className="asp-wrap">
            <span className="asp">UX Consultant</span>
            <span className="asp">Design PM</span>
            <span className="asp">UX Architect</span>
            <span className="asp">Frontend Architect</span>
          </div>
        </div>
      </div>
    </section>
  )
}

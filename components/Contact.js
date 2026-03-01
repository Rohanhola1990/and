export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-glow"/>
      <svg className="deco" style={{left:'50%',bottom:-45,transform:'translateX(-50%)',width:640,height:320,opacity:.07}} viewBox="0 0 640 320">
        <ellipse cx="320" cy="320" rx="295" ry="74" fill="none" stroke="#69C39C" strokeWidth="1"/>
        <ellipse cx="320" cy="320" rx="218" ry="52" fill="none" stroke="#69C39C" strokeWidth=".6" strokeDasharray="5 12"/>
        <ellipse cx="320" cy="320" rx="140" ry="31" fill="none" stroke="#593A3A" strokeWidth=".8"/>
      </svg>
      <svg className="deco" style={{top:38,right:'3rem',width:84,height:84,opacity:.14}} viewBox="0 0 84 84">
        <rect x="7"  y="7"  width="30" height="30" fill="none" stroke="#69C39C" strokeWidth="1"/>
        <rect x="14" y="14" width="30" height="30" fill="none" stroke="#69C39C" strokeWidth=".5" transform="rotate(15 29 29)"/>
        <rect x="22" y="22" width="30" height="30" fill="none" stroke="#593A3A" strokeWidth=".5" transform="rotate(30 37 37)"/>
      </svg>

      <div className="c-inner">
        <p className="stag" style={{marginBottom:'1.5rem'}}>05 — Contact</p>
        <h2 className="c-title">Let&apos;s build<br/><em>something</em><br/>remarkable.</h2>
        <p className="c-desc">Open to conversations around UX strategy, product design, frontend leadership, or just talking about interfaces. Based in Hyderabad — available remotely.</p>
        <div className="c-btns">
          <a className="btn-p" href="mailto:amarnathds@gmail.com">amarnathds@gmail.com</a>
        </div>
        <div className="c-loc">
          <span className="loc-dot"/>
          Hyderabad, India · Available for Remote · Originally from Kolkata
        </div>
      </div>
    </section>
  )
}

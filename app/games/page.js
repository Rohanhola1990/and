import Link from 'next/link'
import Cursor from '../../components/Cursor'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Arcade — Amar Nath Das',
  description: 'Games built with AI by Amar Nath Das.',
}

const ARCADE_URL = 'http://gamesmedo.com/'

// TODO: add your games here. `href` can point to a specific game on gamesmedo.com.
const GAMES = [
  { emoji:'🕹️', title:'Game Title One',   genre:'Arcade', desc:'A one-line pitch for this game.', href:ARCADE_URL },
  { emoji:'🧩', title:'Game Title Two',   genre:'Puzzle', desc:'A one-line pitch for this game.', href:ARCADE_URL },
  { emoji:'🏁', title:'Game Title Three', genre:'Racing', desc:'A one-line pitch for this game.', href:ARCADE_URL },
]

export default function GamesPage() {
  return (
    <>
      <Cursor />
      <nav className="site-nav scrolled">
        <Link className="nav-logo" href="/">AND<span>.</span></Link>
        <div className="nav-right">
          <Link className="nav-cta" href="/#ai">← Back to portfolio</Link>
        </div>
      </nav>

      <main>
        <section id="games">
          <div className="games-inner">
            <p className="stag">The Arcade</p>
            <h1 className="stitle">Games made by<br/><em>prompting &amp; playing.</em></h1>
            <p className="games-lead">
              Every game here was built with AI — from first prompt to playable. They live on their own
              site so they stay fast and easy to share.
            </p>
            <a className="btn-p" href={ARCADE_URL} target="_blank" rel="noopener noreferrer">Open the full arcade ↗</a>

            <div className="games-grid">
              {GAMES.map(g => (
                <a key={g.title} className="game-card" href={g.href} target="_blank" rel="noopener noreferrer">
                  <span className="cc-arrow">↗</span>
                  <span className="game-em">{g.emoji}</span>
                  <span className="game-genre">{g.genre}</span>
                  <span className="game-title">{g.title}</span>
                  <span className="cc-desc">{g.desc}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

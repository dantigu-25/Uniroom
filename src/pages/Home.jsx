import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../App.css'

function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo) {
      document.getElementById(location.state.scrollTo)?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])
  const cities = [
    'Padova',
    'Venezia',
    'Verona',
    'Vicenza',
    'Treviso',
    'Belluno',
    'Rovigo',
    'Trento',
    'Milano',
    'Bologna',
    'Roma',
  ]

  const steps = [
    {
      number: '01',
      title: 'Crea profilo',
      description:
        'Racconta chi sei, le tue abitudini e cosa cerchi in una casa condivisa. Bastano pochi minuti.',
    },
    {
      number: '02',
      title: 'Swipe e matcha',
      description:
        'Scorri i profili degli studenti nella tua città e connettiti solo con chi fa davvero al caso tuo.',
    },
    {
      number: '03',
      title: 'Abita insieme',
      description:
        'Trova il coinquilino giusto e inizia insieme la tua avventura universitaria senza stress.',
    },
  ]

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      <Navbar />

      <header id="hero" className="hero">
        <div className="hero-content">
          <span className="hero-badge">Per studenti universitari in Italia</span>
          <h1>Il tuo prossimo coinquilino è qui.</h1>
          <p className="hero-subtitle">
            UniRoom ti aiuta a trovare coinquilini compatibili nella tua città
            universitaria. Niente annunci caotici, solo match pensati per te.
          </p>
          <div className="hero-actions">
            <Link to="/registrati" className="btn btn-primary">
              Entra in lista
            </Link>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => scrollTo('come-funziona')}
            >
              Come funziona
            </button>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-card hero-card-1">
            <span className="card-emoji">🎓</span>
            <span>Marco, 22</span>
            <span className="card-tag">Padova</span>
          </div>
          <div className="hero-card hero-card-2">
            <span className="card-emoji">📚</span>
            <span>Giulia, 21</span>
            <span className="card-tag">Venezia</span>
          </div>
          <div className="hero-card hero-card-3">
            <span className="card-emoji">🏠</span>
            <span>Match!</span>
            <span className="card-tag accent">95% compatibilità</span>
          </div>
        </div>
      </header>

      <section id="come-funziona" className="section how-it-works">
        <div className="section-inner">
          <h2>Come funziona</h2>
          <p className="section-subtitle">
            Tre passi semplici per trovare la convivenza perfetta
          </p>
          <div className="cards">
            {steps.map((step) => (
              <article key={step.number} className="card">
                <span className="card-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cities">
        <div className="section-inner">
          <h2>Dove siamo attivi</h2>
          <p className="section-subtitle">
            Partiamo dal Nord-Est e ci espandiamo in tutta Italia
          </p>
          <div className="city-grid">
            {cities.map((city) => (
              <span key={city} className="city-pill">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-logo">UniRoom</span>
          <p>&copy; UniRoom 2026. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home

import { useState } from 'react'
import Navbar from '../components/Navbar'
import '../App.css'
import './Register.css'

const CITIES = [
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

const YEARS = ['1°', '2°', '3°', 'Magistrale', 'Fuori corso', 'Lavoratore']

function Register() {
  const [form, setForm] = useState({
    nome: '',
    cognome: '',
    email: '',
    password: '',
    citta: '',
    corso: '',
    anno: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Registrazione completata! Benvenuto in UniRoom')
  }

  return (
    <div className="register-page">
      <Navbar />

      <main className="register-main">
        <div className="register-card">
          <h1>Crea il tuo profilo</h1>
          <p className="register-subtitle">
            Unisciti a UniRoom e trova il coinquilino perfetto per te
          </p>

          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label className="form-field">
                <span>Nome</span>
                <input
                  type="text"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  required
                  placeholder="Il tuo nome"
                />
              </label>
              <label className="form-field">
                <span>Cognome</span>
                <input
                  type="text"
                  name="cognome"
                  value={form.cognome}
                  onChange={handleChange}
                  required
                  placeholder="Il tuo cognome"
                />
              </label>
            </div>

            <label className="form-field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="nome@universita.it"
              />
            </label>

            <label className="form-field">
              <span>Password</span>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="Minimo 8 caratteri"
              />
            </label>

            <label className="form-field">
              <span>Città</span>
              <select
                name="citta"
                value={form.citta}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Seleziona la tua città
                </option>
                {CITIES.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </label>

            <label className="form-field">
              <span>Corso di studi</span>
              <input
                type="text"
                name="corso"
                value={form.corso}
                onChange={handleChange}
                required
                placeholder="Es. Ingegneria Informatica"
              />
            </label>

            <label className="form-field">
              <span>Anno universitario</span>
              <select
                name="anno"
                value={form.anno}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Seleziona il tuo anno
                </option>
                {YEARS.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </label>

            <button type="submit" className="register-submit">
              Crea il tuo profilo
            </button>
          </form>

          <p className="register-login">
            Hai già un account?{' '}
            <a href="#" onClick={(e) => e.preventDefault()}>
              Accedi
            </a>
          </p>
        </div>
      </main>
    </div>
  )
}

export default Register

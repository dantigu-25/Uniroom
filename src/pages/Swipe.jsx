import { useCallback, useState } from 'react'
import Navbar from '../components/Navbar'
import '../App.css'
import './Swipe.css'

const PROFILES = [
  {
    id: 1,
    emoji: '👨‍💻',
    name: 'Marco',
    age: 22,
    city: 'Padova',
    university: 'Università di Padova',
    course: 'Ingegneria Informatica',
    compatibility: 92,
    tags: ['Nottambulo', 'Silenzioso', 'Cucina spesso'],
  },
  {
    id: 2,
    emoji: '👩‍🎓',
    name: 'Giulia',
    age: 21,
    city: 'Venezia',
    university: "Ca' Foscari",
    course: 'Economia e Commercio',
    compatibility: 88,
    tags: ['Silenzioso', 'Animali ok', 'Sportivo'],
  },
  {
    id: 3,
    emoji: '🩺',
    name: 'Luca',
    age: 23,
    city: 'Verona',
    university: 'Università di Verona',
    course: 'Medicina e Chirurgia',
    compatibility: 85,
    tags: ['Nottambulo', 'Cucina spesso', 'Silenzioso'],
  },
  {
    id: 4,
    emoji: '🏛️',
    name: 'Sofia',
    age: 20,
    city: 'Vicenza',
    university: 'Università di Padova',
    course: 'Architettura',
    compatibility: 79,
    tags: ['Silenzioso', 'Animali ok', 'Cucina spesso'],
  },
  {
    id: 5,
    emoji: '🎨',
    name: 'Alessandro',
    age: 24,
    city: 'Milano',
    university: 'Politecnico di Milano',
    course: 'Design Industriale',
    compatibility: 90,
    tags: ['Cucina spesso', 'Nottambulo', 'Sportivo'],
  },
  {
    id: 6,
    emoji: '⚖️',
    name: 'Chiara',
    age: 22,
    city: 'Bologna',
    university: 'Alma Mater Studiorum',
    course: 'Giurisprudenza',
    compatibility: 87,
    tags: ['Silenzioso', 'Animali ok', 'Nottambulo'],
  },
  {
    id: 7,
    emoji: '🧠',
    name: 'Matteo',
    age: 21,
    city: 'Roma',
    university: 'Sapienza',
    course: 'Psicologia',
    compatibility: 83,
    tags: ['Nottambulo', 'Silenzioso', 'Sportivo'],
  },
]

const TAG_COLORS = {
  Nottambulo: { bg: '#fde8ec', color: '#6b1a2a' },
  Silenzioso: { bg: '#e8f0fd', color: '#1a3a6b' },
  'Cucina spesso': { bg: '#fdf3e8', color: '#6b4a1a' },
  'Animali ok': { bg: '#e8fde8', color: '#1a6b2a' },
  Sportivo: { bg: '#f0e8fd', color: '#4a1a6b' },
}

function Swipe() {
  const [index, setIndex] = useState(0)
  const [swipeClass, setSwipeClass] = useState('')
  const [toast, setToast] = useState(null)
  const [busy, setBusy] = useState(false)

  const profile = PROFILES[index]
  const finished = index >= PROFILES.length

  const showToast = useCallback((message, type) => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 2500)
  }, [])

  const advance = useCallback(() => {
    setIndex((i) => i + 1)
    setSwipeClass('')
    setBusy(false)
  }, [])

  const handlePass = () => {
    if (busy || finished) return
    setBusy(true)
    setSwipeClass('swipe-left')
    setTimeout(advance, 350)
  }

  const handleLike = () => {
    if (busy || finished) return
    setBusy(true)
    setSwipeClass('swipe-right')
    showToast('Match inviato!', 'green')
    setTimeout(advance, 350)
  }

  const handleSuperLike = () => {
    if (busy || finished) return
    setBusy(true)
    setSwipeClass('swipe-super')
    showToast('Super like inviato!', 'bordeaux')
    setTimeout(advance, 500)
  }

  return (
    <div className="swipe-page">
      <Navbar />

      <main className="swipe-main">
        {finished ? (
          <div className="swipe-empty">
            <span className="swipe-empty-icon">🌙</span>
            <p>Hai visto tutti i profili per oggi, torna domani!</p>
          </div>
        ) : (
          <>
            <div className={`profile-card ${swipeClass}`}>
              <div className="compatibility-badge">
                {profile.compatibility}% compatibile
              </div>

              <div className="profile-emoji">{profile.emoji}</div>

              <h2 className="profile-name">
                {profile.name}, {profile.age}
              </h2>

              <p className="profile-city">{profile.city}</p>
              <p className="profile-uni">{profile.university}</p>
              <p className="profile-course">{profile.course}</p>

              <div className="profile-tags">
                {profile.tags.map((tag) => {
                  const colors = TAG_COLORS[tag] ?? {
                    bg: '#f5f0f1',
                    color: '#6b1a2a',
                  }
                  return (
                    <span
                      key={tag}
                      className="profile-tag"
                      style={{
                        background: colors.bg,
                        color: colors.color,
                      }}
                    >
                      {tag}
                    </span>
                  )
                })}
              </div>
            </div>

            <div className="swipe-actions">
              <button
                type="button"
                className="swipe-btn swipe-btn-pass"
                onClick={handlePass}
                disabled={busy}
                aria-label="Passa"
              >
                ✕
              </button>
              <button
                type="button"
                className="swipe-btn swipe-btn-super"
                onClick={handleSuperLike}
                disabled={busy}
                aria-label="Super like"
              >
                ★
              </button>
              <button
                type="button"
                className="swipe-btn swipe-btn-like"
                onClick={handleLike}
                disabled={busy}
                aria-label="Mi piace"
              >
                ♥
              </button>
            </div>
          </>
        )}
      </main>

      {toast && (
        <div className={`swipe-toast swipe-toast-${toast.type}`}>
          {toast.message}
        </div>
      )}
    </div>
  )
}

export default Swipe

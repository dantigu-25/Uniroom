import { Link, useLocation, useNavigate } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleComeFunziona = () => {
    if (location.pathname === '/') {
      document.getElementById('come-funziona')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: 'come-funziona' } })
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo">
          UniRoom
        </Link>
        <div className="nav-links">
          <button type="button" onClick={handleComeFunziona}>
            Come funziona
          </button>
          <Link to="/registrati" className="nav-cta nav-cta-link">
            Entra in lista
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

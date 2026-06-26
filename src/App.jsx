import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Swipe from './pages/Swipe'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registrati" element={<Register />} />
        <Route path="/swipe" element={<Swipe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

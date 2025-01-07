import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Register from './pages/auth/Register'



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { DashboardLayout } from './layouts/DashboardLayout'
import LandingPage from './pages/LandingPage'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { AddSale } from './pages/AddSale'


function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Rutas protegidas con sidebar */}
        <Route element={<DashboardLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/add-sale" element={<AddSale />} />
        </Route>

        {/* Ruta por defecto */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
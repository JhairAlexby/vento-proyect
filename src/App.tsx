import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import LandingPage from './page/LandingPage'
import { LoginPage } from './page/auth/LoginPage'
import { RegisterPage } from './page/auth/RegisterPage'
import DashboardPage from './page/dashboard/DashboardPage'
import StatisticsPage from './page/dashboard/StatisticsPage'
import MenuPage from './page/dashboard/MenuPage'




function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

                {/* Dashboard routes */}
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route index element={<StatisticsPage />} />
          <Route path="orders" element={<div>Pedidos</div>} />
          <Route path="menu" element={<MenuPage/>} /> // Changed from menuPage to menu
          <Route path="sales" element={<div>Ventas</div>} />
          <Route path="statistics" element={<StatisticsPage />} />
        </Route>
      
      </Routes>
    </Router>
  )
}

export default App
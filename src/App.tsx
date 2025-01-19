import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import { LoginPage } from './pages/auth/LoginPage'
import { RegisterPage } from './pages/auth/RegisterPage'
import DashboardPage from './pages/dashboard/DashboardPage'
import StatisticsPage from './pages/dashboard/StatisticsPage'
import MenuPage from './pages/dashboard/MenuPage'
import OrdersPage from './pages/dashboard/OrdersPage'




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
          <Route path="orders" element={<OrdersPage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="sales" element={<div>Ventas</div>} />
          <Route path="statistics" element={<StatisticsPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import { LoginPage } from './pages/auth/LoginPage'
import { RegisterPage } from './pages/auth/RegisterPage'
import DashboardPage from './pages/dashboard/DashboardPage'
import DashboardOverview from './pages/dashboard/DashboardOverview'
import StatisticsPage from './pages/dashboard/StatisticsPage'
import MenuPage from './pages/dashboard/MenuPage'
import OrdersPage from './pages/dashboard/OrdersPage'
import SalesPage from './pages/dashboard/SalesPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/dashboard" element={<DashboardPage />}>
          <Route index element={<DashboardOverview />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="sales" element={<SalesPage />} />
          <Route path="statistics" element={<StatisticsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App
import { Route, Routes } from 'react-router-dom'
import NoAuthRoute from './provider/NoAuthRoute.tsx'
import Login from './pages/Auth/Login/Login.tsx'
import ProtectedRoute from './provider/ProtectedRoute.tsx'
import Dashboard from './pages/DashboardPages/Dashboard/Dashboard.tsx'
import Profile from './pages/DashboardPages/Profile/Profile.tsx'

function App(): JSX.Element {
  return (
      <Routes>
        <Route path="/" element={<NoAuthRoute component={<Login />} />} />
        <Route path="/dashboard" element={<ProtectedRoute component={<Dashboard />} />} />
        <Route path="/profile" element={<ProtectedRoute component={<Profile />} />} />
      </Routes>
  )
}

export default App

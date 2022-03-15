import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Dashboard from './pages/Dashboard'
import ErrorPage from './pages/ErrorPage'
import ProgressPage from './pages/ProgressPage'
import UserList from './pages/UserList'

/**
 * Routes application
 * @returns {objet} (routes of pages)
 */

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<UserList />} />
                    <Route path="/user/:id" element={<Dashboard />} />
                    <Route path="/reglage" element={<ProgressPage />} />
                    <Route path="/communite" element={<ProgressPage />} />
                    <Route path="/yoga" element={<ProgressPage />} />
                    <Route path="/swimming" element={<ProgressPage />} />
                    <Route path="/biking" element={<ProgressPage />} />
                    <Route path="/bodyBuilding" element={<ProgressPage />} />
                    <Route path="/profil" element={<ProgressPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App

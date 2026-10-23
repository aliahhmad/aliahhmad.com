import { Routes, Route } from 'react-router-dom'
import './styles/App.css'
import HomePage from './pages/HomePage'
import WorkPage from './pages/WorkPage'
import AllWorksPage from './pages/AllWorksPage'
import BlogPage from './pages/BlogPage'
import AllBlogsPage from './pages/AllBlogsPage'
import AllExperiencesPage from './pages/AllExperiencesPage'
import ExperiencePage from './pages/ExperiencePage'
import { Toaster } from 'react-hot-toast'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import WelcomePopup from './components/ui/WelcomePopup'

// Registers the app's top-level routes and global UI providers.
function App() {
  return (
    <div>
      {/* Route-level pages own their own layout composition and page titles. */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<AllWorksPage />} />
        <Route path="/work/:id" element={<WorkPage/>} />
        <Route path="/experiences" element={<AllExperiencesPage />} />
        <Route path="/experience/:id" element={<ExperiencePage />} />
        <Route path="/blog" element={<AllBlogsPage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
      </Routes>
      {/* Global utilities stay mounted once so any page can trigger them. */}
      <WelcomePopup />
      <Toaster position="top-center" />
      <Analytics />
      <SpeedInsights />
    </div>
  )
}

export default App

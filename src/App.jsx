import { Routes, Route } from 'react-router-dom'
import './styles/App.css'
import HomePage from './pages/HomePage'
import WorkPage from './pages/WorkPage'
import AllWorksPage from './pages/AllWorksPage'
import BlogPage from './pages/BlogPage'
import AllBlogsPage from './pages/AllBlogsPage'
import { Toaster } from 'react-hot-toast'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<AllWorksPage />} />
        <Route path="/work/:id" element={<WorkPage/>} />
        <Route path="/blog" element={<AllBlogsPage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
      </Routes>
      <Toaster position="top-center" />
      <Analytics />
    </div>
  )
}

export default App

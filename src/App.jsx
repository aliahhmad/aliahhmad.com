import { Routes, Route } from 'react-router-dom'
import './styles/App.css'
import WorkPage from './pages/WorkPage'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import AliAhhmad from './pages/projects/AliAhhmad'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/work/portfolio" element={<AliAhhmad />} />
      </Routes>
      <Toaster position="top-center" />
    </div>
  )
}

export default App

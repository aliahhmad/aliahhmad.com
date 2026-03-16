import { Routes, Route } from 'react-router-dom'
import './styles/App.css'
import NavBar from './components/NavBar'
import WorkPage from './pages/WorkPage'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999]">
        <NavBar />
      </div>
    </div>
  )
}

export default App

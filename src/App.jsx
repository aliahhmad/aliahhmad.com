import { Routes, Route } from 'react-router-dom'
import './styles/App.css'
import WorkPage from './pages/WorkPage'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import AliAhhmad from './pages/projects/AliAhhmad'
import AppBrewery from './pages/projects/AppBrewery'
import Schdlr from './pages/projects/Schdlr'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/work/portfolio" element={<AliAhhmad />} />
        <Route path="/work/schdlr" element={<Schdlr />} />
        <Route path="/work/app-brewery" element={<AppBrewery />} />
      </Routes>
      <Toaster position="top-center" />
    </div>
  )
}

export default App

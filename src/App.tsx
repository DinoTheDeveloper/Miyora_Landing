import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ServicePage from './pages/ServicePage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services/:slug" element={<ServicePage />} />
    </Routes>
  )
}

export default App

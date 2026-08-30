import './App.css'
import Navbar from'./Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'

import Safeserve from './projectPages/safeserve.jsx'
import TourApp from './projectPages/tourapp.jsx'


import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <div className="background-layer"></div>
      <div className="ui-overlay">
        <Navbar/>
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="Projects/safeserve"
              element={<Safeserve />}
            />
            <Route path="Projects/tourapp"
              element={<TourApp />}
            />
          </Routes>
        </main>
      </div>
    </div>

  )
}

export default App
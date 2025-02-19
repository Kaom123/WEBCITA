import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './Home';
import Contacto from './Contacto';
import './index.css'
import Opiniones from './Opiniones';


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorias" element={<Contacto />} />
        <Route path='/opiniones' element={<Opiniones/>} ></Route>
      </Routes>
    </Router>
  </StrictMode>,
)

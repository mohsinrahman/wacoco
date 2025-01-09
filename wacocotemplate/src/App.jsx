import { useState } from 'react'
import './App.css'
import Home from './Home'
import { Routes, Route } from 'react-router'
import About from './components/About'
import Career from "./components/Career"
import Howwework from "./components/Howwework"
import Ourapproach from "./components/Ourapproach"
import Services from "./components/Services"
import Header from './components/Header'
import Footer from './components/Footer'

import Box from '@mui/material/Box';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Box sx={{ display: 'flex' }}>
    <Header />
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/ourapproach" element={<Ourapproach />} />
          <Route path="/services" element={<Services />} />
          <Route path="/howwework" element={<Howwework />} />
          <Route path="/career" element={<Career />} />
          {/*<Route path="*" element={<NotFound />} />  Catch-all for undefined routes */}
        </Routes>
    <Footer/>
    </Box>
    </>
  )
}

export default App

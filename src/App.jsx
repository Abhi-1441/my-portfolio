import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Resume from './pages/Resume/Resume';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
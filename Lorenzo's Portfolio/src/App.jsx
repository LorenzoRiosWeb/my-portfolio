import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/home/Home'; 
import About from './pages/about/About'; 
import Projects from './pages/portfolio/Projects'; 
import Contact from './pages/contact/Contact';

function App() {
  useEffect(() => {
    document.title = "Lorenzo's Portfolio"; // Set the desired title
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

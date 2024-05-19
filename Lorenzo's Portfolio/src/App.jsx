import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import home from './pages/home/home'; 
import About from './pages/about/About'; 
import Portfolio from './pages/portfolio/Portfolio'; 
import contact from './pages/contact/contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
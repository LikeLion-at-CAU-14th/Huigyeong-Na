import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Tech from './pages/Tech';
import Interests from './pages/Interests';

function App() {
  return (
    <div className="layout">
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/interests" element={<Interests />} />
      </Routes>

      <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App

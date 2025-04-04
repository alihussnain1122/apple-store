import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductShowcase from './components/ProductShowcase';
import CategoryBrowser from './components/CatagoryBrowser';
import ProductGrid from './components/ProductGrid';
import BigSummerSale from './components/BigSummerSale';
import Footer from './components/Footer';

// Import Pages
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';

function App() {
  return (
   <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
      </>
  );
}

export default App;

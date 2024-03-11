import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Updates from './components/pages/Updates';
import AboutUs from './components/pages/AboutUs';
import Contact from './components/pages/Contact';
import Karura from './components/pages/Karura';
import SignIn from './components/pages/SignIn';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/updates' element={<Updates />} />
          <Route path='/karura' element={<Karura />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sign-in' element={<SignIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
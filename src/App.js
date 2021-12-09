import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'

//Components
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';

//Pages
import About from './pages/about';
import Home from './pages';
import Contact from './pages/contact';
import Menu from './pages/menu';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle(){
    setIsOpen(!isOpen);
  }

  useEffect(function(){
    function hideMenu(){
      if(window.innerWidth > 768 && isOpen === true){
        setIsOpen(false);
        console.log("Window Resized");
      }
    }

    window.addEventListener("resize", hideMenu);

    return(
      function(){
        window.removeEventListener("resize", hideMenu);
      }
    );
  })
  
  return (
    <div>
      <Navbar toggle={ toggle }/>
      <Dropdown isOpen={ isOpen } toggle={ toggle }/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
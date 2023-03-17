import React from 'react'

import Header from './components/header/Header'
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Experience from './components/experience/Experience';

import PortFolio from './components/Portfolio/PortFolio';

import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
  <>
    <Header />
    <Nav />
    <About />
    <Experience />
    
    <PortFolio />
    {/* <Testimonials /> */}
    <Contact />
   
   
  </>
  )
}

export default App
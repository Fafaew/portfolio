import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
   
  )
}

export default App
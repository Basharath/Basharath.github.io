import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.scss';

function App() {
  const [lightmode, setLightmode] = useState(false);

  const handleLightmode = () => {
    setLightmode(!lightmode);
  };

  return (
    <div className={'main' + (lightmode ? ' lightmode' : '')}>
      <Navbar handleLightmode={handleLightmode} mode={lightmode} />
      <Hero mode={lightmode} />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

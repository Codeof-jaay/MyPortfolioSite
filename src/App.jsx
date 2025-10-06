import React from 'react';
import NavBar from './sections/NavBar';
import Hero from './sections/Hero';
import { About } from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contacts from './sections/Contacts';
import Footer from './sections/Footer';
const App = () => {
  return (
      <div className='container mx-auto max-w-7xl'> 
      <NavBar />
      <Hero />
      <About/>
      <Experience />
      <Projects/>
      <Contacts />
      <Footer />
      </div>
  );
};

export default App;
import React, { useEffect, useState } from 'react';
import NavBar from './sections/NavBar';
import Hero from './sections/Hero';
import { About } from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contacts from './sections/Contacts';
import Footer from './sections/Footer';
import { PageLoad } from './components/PageLoad';
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for 5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer); // cleanup
  }, []);

  return (
      
             <div className="min-h-screen flex items-center justify-center bg-black text-white">
      {loading ? (
        <PageLoad />
      ) : (
        <div className='container mx-auto max-w-7xl'> 
        <NavBar />
        <Hero />
        <About/>
        <Experience />
        <Projects/>
        <Contacts />
        <Footer />
        </div>
      )}
    </div>
     
  );
};

export default App;
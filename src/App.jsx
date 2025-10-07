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
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 100);
    }, 8000); // 8s loader
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Loader overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000">
          <PageLoad />
        </div>
      )}

      {/* Actual site content */}
      <div
        className={`transition-opacity duration-1000 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <NavBar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
};

export default App;

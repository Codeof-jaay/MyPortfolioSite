import React, { useEffect, useState } from 'react';
import NavBar from './sections/NavBar';
import Hero from './sections/Hero';
import { About } from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contacts from './sections/Contacts';
import Footer from './sections/Footer';
import { PageLoad } from './components/PageLoad';
import AllProjects from './pages/AllProjects';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 100);
    }, 10000); // 10s loader
    return () => clearTimeout(timer);
  }, []);

  // Handle hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/all-projects') {
        setCurrentPage('all-projects');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check initial hash

    return () => window.removeEventListener('hashchange', handleHashChange);
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
        {currentPage === 'all-projects' ? (
          <>
            <AllProjects />
            <Footer />
          </>
        ) : (
          <>
            <NavBar />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contacts />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default App;


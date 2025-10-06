import React, { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-scroll";

function Navigation({ onNavigate }) {
  const commonLinkProps = {
    smooth: true,
    duration: 600,
    spy: true,
    offset: -80, // account for fixed navbar height
  };

  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <Link {...commonLinkProps} to="hero" className="nav-link font-bold text-xl" onClick={onNavigate}>
          Home
        </Link>
      </li>
      <li className="nav-li">
        <Link {...commonLinkProps} to="about" className="nav-link font-bold text-xl" onClick={onNavigate}>
          About
        </Link>
      </li>
      <li className="nav-li">
        <Link {...commonLinkProps} to="projects" className="nav-link font-bold text-xl" onClick={onNavigate}>
          Projects
        </Link>
      </li>
      <li className="nav-li">
        <Link {...commonLinkProps} to="contacts" className="nav-link font-bold text-xl" onClick={onNavigate}>
          Contact
        </Link>
      </li>
    </ul>
  );
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40 border-b-[rgba(255,255,255,0.1)]">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-3 sm:py-2">
          <a href="/" className="text-xl font-bold transition-colors text-neutral-400 hover:text-white">
        
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt=""
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation onNavigate={undefined} />
          </nav>
        </div>

        {isOpen && (
          <motion.div className="block overflow-hidden text-center sm:hidden" initial={{ opacity: 0, x:-10,  }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 3 }} style={{ maxHeight:"100vh" }}>
            <nav className="pb-5">
              <Navigation onNavigate={() => setIsOpen(false)} />
            </nav>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
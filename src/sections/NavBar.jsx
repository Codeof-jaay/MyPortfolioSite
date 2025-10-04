import React, { useState } from "react";
import { motion } from "motion/react";
function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link">Home</a>
      </li>
      <li className="nav-li">
        <a className="nav-link">About</a>
      </li>
      <li className="nav-li">
        <a className="nav-link">Work</a>
      </li>
      <li className="nav-li">
        <a className="nav-link">Contact</a>
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
            <Navigation />
          </nav>
        </div>

        {isOpen && (
          <motion.div className="block overflow-hidden text-center sm:hidden" initial={{ opacity: 0, x:-10,  }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} style={{ maxHeight:"100vh" }}>
            <nav className="pb-5">
              <Navigation />
            </nav>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
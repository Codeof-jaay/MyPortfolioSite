import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-scroll";

function Navigation({ onNavigate }) {
  const commonLinkProps = {
    smooth: true,
    duration: 600,
    spy: true,
    offset: -75, // account for fixed navbar height
  };

  return (
    <ul className="nav-ul">
      <li className="nav-li ">
        <Link {...commonLinkProps} to="hero" className="nav-link font-bold text-2xl  text-white/70 hover:text-white cursor-pointer" onClick={onNavigate}>
          Home
        </Link>
      </li>
      <li className="nav-li">
        <Link {...commonLinkProps} to="about" className="nav-link font-bold text-2xl text-white/70 hover:text-white cursor-pointer" onClick={onNavigate}>
          About
        </Link>
      </li>
      <li className="nav-li">
        <Link {...commonLinkProps} to="projects" className="nav-link font-bold text-2xl  text-white/70 hover:text-white cursor-pointer" onClick={onNavigate}>
          Projects
        </Link>
      </li>
      <li className="nav-li">
        <Link {...commonLinkProps} to="contacts" className="nav-link font-bold text-2xl  text-white/70 hover:text-white cursor-pointer" onClick={onNavigate}>
          Contact
        </Link>
      </li>
    </ul>
  );
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  return (
             <div
      onMouseMove={handleMouseMove}
      className="fixed top-12 z-20 space-x-3 py-2 rounded-4xl overflow-hidden hover:py-3 hover:scale-x-110 duration-500 inset-x-4 md:inset-x-4 md:left-1/2 md:transform md:-translate-x-1/2 md:w-[40%] w-auto right-4 left-auto sm:inset-x-auto"
      style={{
        transition: "all 0.6s ease",
      }}
    >
      {/* Glass background */}
      <div className="absolute inset-0 backdrop-blur-lg bg-white/10 border border-white/10 rounded-4xl shadow-[inset_0_0_10px_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.37)] " />

      {/* Animated moving highlight */}
      <div
        className="absolute inset-0 opacity-50 pointer-events-none transition-transform duration-500 ease-out rounded-4xl"
        style={{
          background: `radial-gradient(circle at ${position.x}% ${position.y}%, rgba(255,255,255,0.4), transparent 60%)`,
        }}
      />

      {/* Slow liquid shimmer (ambient) */}
      <div className="absolute inset-0 animate-liquid opacity-25 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.6)_0%,transparent_60%)]" />
   
      <div id="MyDiv" className="c-space max-w-7xl ">
        <div className="flex items-center justify-center px-2 py-3 sm:py-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-white hover:text-white focus:outline-none sm:hidden "
             style={{ marginRight: '11px'}}
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6 z-50 -inset-1"
              alt=""
             
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation onNavigate={undefined} />
          </nav>
        </div>

        {isOpen && (
          <motion.div className="block overflow-hidden sm:hidden" initial={{ opacity: 0, width: "2rem", height: "2rem" }} animate={{ opacity: 1, width: "auto", height: "auto" }} transition={{ duration: .8 }}>
            <nav className="pb-5 flex flex-row gap-2">
              <Navigation onNavigate={() => setIsOpen(false)} />
            </nav>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
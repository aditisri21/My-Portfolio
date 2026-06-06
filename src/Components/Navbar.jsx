import { motion } from "framer-motion";
import logo from "../assets/ilogo.svg";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false);
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-md bg-black/20"
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">

          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <motion.img
  src={logo}
  alt="Aditi"
  className="w-12 h-12 rounded-full border-2 border-pink-500 transition-all duration-500 hover:shadow-[0_0_25px_rgba(236,72,153,0.8)] hover:border-pink-400"
/>
            <div>
              <h1 className="text-white font-bold text-lg leading-none">
                Aditi Srivastava
              </h1>

              <p className="text-[11px] text-gray-300 mt-1">
                UI/UX Designer & Frontend Developer
              </p>
            </div>
          </div>

          {/* Menu */}
          <ul className="hidden md:flex items-center gap-10 text-[15px] font-medium">
  <li className="group relative">
    <a
      href="#about"
      className="text-white font-semibold hover:text-pink-400 transition-all duration-300"
    >
      About
    </a>
    <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
  </li>

  <li className="group relative">
    <a
      href="#skills"
      className="text-white font-semibold hover:text-pink-400 transition-all duration-300"
    >
      Skills
    </a>
    <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
  </li>

  <li className="group relative">
    <a
      href="#projects"
      className="text-white font-semibold hover:text-pink-400 transition-all duration-300"
    >
      Projects
    </a>
   <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
  </li>

  <li className="group relative">
    <a
      href="#contact"
      className="text-white font-semibold hover:text-pink-400 transition-all duration-300"
    >
      Contact
    </a>
    <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
  </li>
</ul>

<div className="md:hidden">
  <button onClick={() => setMenuOpen(!menuOpen)}>
    {menuOpen ? (
      <HiX size={28} className="text-white" />
    ) : (
      <HiMenuAlt3 size={28} className="text-white" />
    )}
  </button>
</div>

        </div>
        {menuOpen && (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="md:hidden pt-4 pb-4"
  >
    <ul className="flex flex-col items-center gap-6 text-white font-semibold">
      <li>
        <a href="#about" onClick={() => setMenuOpen(false)}
          className="hover:text-pink-400 transition-all duration-300"
          >
          About
        </a>
      </li>

      <li>
        <a href="#skills" onClick={() => setMenuOpen(false)}
  className="hover:text-pink-400 transition-all duration-300"
>
          Skills
        </a>
      </li>

      <li>
        <a href="#projects" onClick={() => setMenuOpen(false)}
  className="hover:text-pink-400 transition-all duration-300"
>
          Projects
        </a>
      </li>

      <li>
        <a href="#contact" onClick={() => setMenuOpen(false)}
  className="hover:text-pink-400 transition-all duration-300"
>
          Contact
        </a>
      </li>
    </ul>
  </motion.div>
)}
      </div>
    </motion.nav>
  );
};

export default Navbar;
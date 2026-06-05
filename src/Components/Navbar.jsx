import { motion } from "framer-motion";
import logo from "../assets/ilogo.svg";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-md bg-black/20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Aditi"
              className="w-12 h-12 rounded-full border-2 border-pink-500"
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
          <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
            <li>
              <a
                href="#about"
                className="text-white hover:text-pink-400 transition-all duration-300"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="text-white hover:text-pink-400 transition-all duration-300"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="text-white hover:text-pink-400 transition-all duration-300"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="text-white hover:text-pink-400 transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
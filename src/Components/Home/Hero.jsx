import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight text-white"
        >
          Turning{" "}
          <span className="text-fuchsia-400 font-normal italic">
            Ideas
          </span>{" "}
          Into
          <br />
          Clean & Functional
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-4xl md:text-5xl text-fuchsia-400 italic font-medium"
        >
          Digital Project
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-gray-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
        >
          Creative Developer focused on
          <br />
          creating intuitive interfaces, responsive websites,
          <br />
          and meaningful user experiences.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full
            bg-gradient-to-r from-fuchsia-500 to-pink-500
            text-white font-semibold text-lg
            hover:scale-105 transition duration-300"
          >
            View Projects →
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
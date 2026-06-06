import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

      {/* Top Purple Beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[770px] bg-gradient-to-b from-fuchsia-400/30 via-fuchsia-500/10 to-transparent blur-[100px]"></div>

      {/* Main Atmosphere Glow */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-fuchsia-500/20 rounded-full blur-[250px]"></div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-20">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight text-white"
        >
          Turning{" "}
<span
  className="text-fuchsia-400 font-normal italic"
  style={{ fontFamily: "Kalam" }}
>
  Ideas
</span>{" "}
          Into
          <br />
          Clean & Functional
        </motion.h1>

        <motion.h2
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.8 }}
  className="mt-6 text-4xl md:text-5xl text-fuchsia-400"
  style={{ fontFamily: "Kalam" }}
>
  Digital Experiences
</motion.h2>

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

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white font-semibold text-lg hover:scale-105 hover:shadow-[0_0_35px_rgba(217,70,239,0.7)] transition-all duration-300"
          >
            View Projects →
          </a>
        </motion.div>

      </div>

      {/* Planet Horizon */}
      <div className="absolute bottom-[-900px] left-1/2 -translate-x-1/2 w-[2200px] h-[900px] rounded-[100%] border-t-[2px] border-fuchsia-300/70 shadow-[0_-10px_60px_rgba(217,70,239,0.6)]"></div>

    </section>
  );
};

export default Hero;
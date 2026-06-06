import { motion } from "framer-motion";


const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

      {/* Top Purple Beam */}
      <motion.div
  animate={{
    y: [0, -15, 0],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[770px] bg-gradient-to-b from-fuchsia-400/30 via-fuchsia-500/10 to-transparent blur-[100px]"
/>

      {/* Main Atmosphere Glow */}
      <motion.div
  animate={{
    scale: [1, 1.08, 1],
    opacity: [0.18, 0.28, 0.18],
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-fuchsia-500/20 rounded-full blur-[250px]"
/>

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
          Creative Developer focused on creating intuitive
          <br />
          interfaces, responsive websites, and meaningful user experiences.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-gray-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
        >
          Designing in Figma. Building with React.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10"
        >
          <motion.a
  href="#projects"
  whileHover={{
    scale: 1.05,
    y: -3,
  }}
  whileTap={{ scale: 0.98 }}
  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white font-semibold text-lg shadow-[0_0_25px_rgba(217,70,239,0.4)] hover:shadow-[0_0_50px_rgba(217,70,239,0.8)] transition-all duration-300"
>
  View Projects →
</motion.a>
           
        </motion.div>

      </div>

      {/* Planet Horizon */}
      <motion.div
  animate={{
    opacity: [0.7, 1, 0.7],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute bottom-[-900px] left-1/2 -translate-x-1/2 w-[2200px] h-[900px] rounded-[100%] border-t-[2px] border-fuchsia-300/70 shadow-[0_-10px_60px_rgba(217,70,239,0.6)]"
/>

    </section>
  );
};

export default Hero;
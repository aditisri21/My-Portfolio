import { motion } from "framer-motion";
import profileImg from "../../assets/aditip.png";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-pink-500"></span>
            <h3 className="text-white font-bold uppercase tracking-wide">
              About Me
            </h3>
          </div>

          {/* Main Title */}
          <h2
  className="text-4xl md:text-5xl text-white leading-[1.4] tracking-wide "
  style={{ fontFamily: "Kalam" }}
>
            I design experiences that are
            <span className="text-fuchsia-400">intuitive</span>,
            functional &{" "}
            <span className="text-fuchsia-400">human.</span>
          </h2>

          {/* Description */}
          <div className="mt-8 text-gray-300 space-y-5 max-w-xl">
            <p>
              I'm Aditi Srivastava, a BCA graduate and aspiring
              UI/UX Designer & Frontend Developer.
            </p>

            <p>
              I enjoy transforming ideas into intuitive digital
              experiences through thoughtful design and clean code.
              My focus is on creating user-friendly interfaces,
              responsive websites, and modern web experiences that
              solve real-world problems.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-12 mt-12">
            <div>
              <h3
  className="text-5xl text-white"
  style={{ fontFamily: "Caveat" }}
>

  10+
</h3>
              <p className="text-xs text-gray-400 uppercase mt-2">
                Projects Completed
              </p>
            </div>

            <div>
              <h3
  className="text-5xl text-white"
  style={{ fontFamily: "Caveat" }}
>
  2+
</h3>
              <p className="text-xs text-gray-400 uppercase mt-2">
                Years Experience
              </p>
            </div>

            <div>
              <h3
  className="text-5xl text-white"
  style={{ fontFamily: "Caveat" }}
>
  7+
</h3>
              <p className="text-xs text-gray-400 uppercase mt-2">
                Client Served
              </p>
            </div>
          </div>
        </motion.div>

{/* Right Image */}
<motion.div
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="flex justify-center items-center"
>
  <motion.div
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.4 }}
    className="relative"
  >
    {/* Animated Glow */}
    <motion.div
      animate={{
        opacity: [0.4, 0.8, 0.4],
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute -inset-8 bg-fuchsia-500/30 blur-[90px] rounded-[50px]"
    />

    {/* Image Card */}
    <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
      <img
        src={profileImg}
        alt="Aditi"
        className="w-[280px] md:w-[330px] block"
      />
    </div>
  </motion.div>
</motion.div>

      </div>
    </section>
  );
};

export default About;
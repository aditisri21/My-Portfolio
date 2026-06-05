import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Send } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 px-6 flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-white"
        >
          Let's Work{" "}
          <span
            className="text-fuchsia-400"
            style={{ fontFamily: "Caveat" }}
          >
            Together
          </span>
        </motion.h2>

        {/* Description */}
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Available for freelance opportunities and creative collaborations.
          <br />
          Let's transform your vision into reality.
        </p>

        {/* CTA Button */}
        <motion.a
          href="mailto:infog9881@gmail.com?subject=Let's Connect"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 mt-12 px-10 py-4 rounded-full
          bg-gradient-to-r from-fuchsia-500 to-pink-500
          text-white font-semibold text-xl shadow-lg"
        >
          <Send size={20} />
          Get In Touch
        </motion.a>

        {/* Social Icons */}
        <div className="flex justify-center gap-10 mt-16">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/aditi-srivastava-955537376/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <div
              className="w-16 h-16 rounded-full
              border border-white/20
              bg-white/5
              flex items-center justify-center
              shadow-[0_0_20px_rgba(255,255,255,0.25)]
              group-hover:scale-110
              transition-all duration-300"
            >
              <FaLinkedinIn size={28} className="text-white" />
            </div>

            <span className="text-gray-300 mt-3 text-sm">
              LinkedIn
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/aditisri21"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <div
              className="w-16 h-16 rounded-full
              border border-white/20
              bg-white/5
              flex items-center justify-center
              shadow-[0_0_20px_rgba(255,255,255,0.25)]
              group-hover:scale-110
              transition-all duration-300"
            >
              <FaGithub size={28} className="text-white" />
            </div>

            <span className="text-gray-300 mt-3 text-sm">
              GitHub
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/aditisrivastava2112?igsh=MW5rMXF4d2ozZ2N5Yw=="
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <div
              className="w-16 h-16 rounded-full
              border border-white/20
              bg-white/5
              flex items-center justify-center
              shadow-[0_0_20px_rgba(255,255,255,0.25)]
              group-hover:scale-110
              transition-all duration-300"
            >
              <FaInstagram size={28} className="text-white" />
            </div>

            <span className="text-gray-300 mt-3 text-sm">
              Instagram
            </span>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;
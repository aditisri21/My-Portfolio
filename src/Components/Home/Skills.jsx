import { motion } from "framer-motion";

const skillsData = [
  {
    title: "UI/UX Design",
    watermark: "DESIGN",
    skills: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "User Research",
      "Interaction Design",
    ],
  },
  {
    title: "Frontend Development",
    watermark: "CODE",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "TailwindCSS",
    ],
  },
  {
    title: "Tools & Other",
    watermark: "TOOLS",
    skills: [
      "Antigravity",
      "GitHub",
      "VS Code",
      "Canva",
      "Postman",
    ],
  },
];


const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-fuchsia-500/10 blur-[200px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-pink-500"></span>

            <h2 className="text-3xl md:text-5xl font-bold text-white">
  Design & Development
  <span className="text-fuchsia-400"> Toolkit</span>
</h2>
          </div>

          <p className="text-gray-400 max-w-2xl text-lg">
            Combining UI/UX design expertise with modern frontend
            technologies to craft intuitive and impactful digital
            experiences.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
  {skillsData.map((category, index) => (
    <motion.div
      key={category.title}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.15,
      }}
      viewport={{ once: true }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border border-fuchsia-500/20
        bg-white/[0.02]
        backdrop-blur-md
        p-8
        hover:border-fuchsia-400
        hover:shadow-[0_0_35px_rgba(217,70,239,0.18)]
        transition-all duration-500
      "
    >
      {/* Watermark */}
      <span className="absolute right-4 top-2 text-[80px] font-black text-white/[0.03] select-none leading-none">
        {category.watermark}
      </span>

      {/* Title */}
      <h3 className="text-white text-2xl font-semibold mb-8 relative z-10">
        {category.title}
      </h3>

      {/* Pink Accent Line */}
      <div className="w-16 h-[2px] bg-fuchsia-500 mb-8"></div>

      {/* Skills */}
      <div className="flex flex-wrap gap-3 relative z-10">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="
              px-4 py-2
              rounded-full
              bg-fuchsia-500/10
              border border-fuchsia-500/20
              text-gray-300
              text-sm
              hover:bg-fuchsia-500/20
              hover:border-fuchsia-400
              hover:text-white
              transition-all duration-300
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Skills;
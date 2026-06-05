import { motion } from "framer-motion";

const skillsData = [
  {
    title: "UI/UX Design",
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
    skills: [
      "Git & GitHub",
      "VS Code",
      "Canva",
      "Postman",
      "Antigravity",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-pink-500"></span>

            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase">
              Skills & Technology
            </h2>
          </div>

          <p className="text-gray-400 max-w-xl">
            Combining design thinking with frontend development to
            create seamless digital experiences.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {skillsData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="border border-fuchsia-500/60 rounded-2xl p-8 bg-white/[0.02] backdrop-blur-sm hover:border-fuchsia-400 transition-all duration-300"
            >
              {/* Title */}
              <h3 className="text-white text-2xl font-semibold text-center">
                {category.title}
              </h3>

              <div className="w-24 h-[2px] bg-gray-300 mx-auto my-4"></div>

              {/* Skills List */}
              <ul className="space-y-4 mt-6">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;
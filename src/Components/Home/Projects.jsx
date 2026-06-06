import { useState } from "react";
import { motion } from "framer-motion";

const projectsData = {
  "Frontend Development": [
    {
      title: "Nursery E-Commerce Website",
      description:
        "A responsive e-commerce platform for browsing, purchasing, and managing plants with a smooth user experience.",
      tech: ["React.js", "Tailwind CSS", "Framer Motion"],
      image: "https://placehold.co/600x350",
    },
    {
      title: "FoodieFlat - Food Delivery Website",
      description:
        "A Swiggy-inspired food ordering platform designed for seamless browsing and ordering experiences.",
      tech: ["React.js", "Tailwind CSS", "Framer Motion"],
      image: "https://placehold.co/600x350",
    },
  ],
};

const tabs = [
  "UI/UX Design",
  "Frontend Development",
  "Graphic Design",
  "UI Redesigns",
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("UI/UX Design");

  return (
    <section id="projects" className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            My Recent{" "}
            <span
              className="text-fuchsia-400"
              style={{ fontFamily: "Caveat" }}
            >
              Projects
            </span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto px-4 text-sm md:text-base leading-relaxed">
            Exploring ideas through design and development to create
            user-friendly digital experiences.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mt-12 px-2">
          <div className="border border-fuchsia-500 rounded-2xl md:rounded-full p-2 flex flex-wrap justify-center gap-2 max-w-full">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-white text-black"
                    : "text-white hover:text-fuchsia-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* UI/UX Design */}
        {activeTab === "UI/UX Design" && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
            {["UPHIREX", "PORTFOLIO", "MY EXPENSES"].map((title) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="border border-fuchsia-500/60 rounded-3xl p-4 md:p-5 bg-white/[0.02]"
              >
                <div className="bg-gray-300 rounded-xl h-44 sm:h-52 md:h-64"></div>

                <div className="mt-6 text-center">
                 <h3 className="text-lg md:text-xl font-bold text-white">
                  <p className="text-gray-400 mt-4 text-sm">
                    UI/UX design project showcasing modern design principles.
                  </p>

                  <button
                    className="mt-6 px-5 md:px-6 py-2 rounded-full
                    bg-gradient-to-r from-fuchsia-500 to-pink-500
                    text-white text-sm"
                  >
                    View Project
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Frontend Development */}
        {activeTab === "Frontend Development" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mt-16">
            {projectsData["Frontend Development"].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                className="border border-fuchsia-500/60 rounded-3xl p-5 bg-white/[0.02]"
              >
                <div className="bg-gray-300 rounded-xl h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="mt-6">
                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mt-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-6">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-1 rounded-full text-xs
                        bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <hr className="border-white/10 my-6" />

                  <button className="text-fuchsia-400 font-semibold hover:text-fuchsia-300">
                    View Project →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Graphic Design */}
        {activeTab === "Graphic Design" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            <div className="sm:col-span-2 h-52 rounded-xl bg-gradient-to-br from-pink-300 to-fuchsia-500 border border-fuchsia-500/40 hover:shadow-[0_0_30px_rgba(217,70,239,0.8)] hover:scale-[1.03] transition-all duration-500 cursor-pointer"></div>

            <div className="h-52 rounded-xl bg-gradient-to-br from-violet-300 to-purple-500 border border-fuchsia-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] hover:scale-[1.03] transition-all duration-500 cursor-pointer"></div>

            <div className="h-52 rounded-xl bg-gradient-to-br from-cyan-300 to-blue-500 border border-fuchsia-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] hover:scale-[1.03] transition-all duration-500 cursor-pointer"></div>

            <div className="h-72 rounded-xl bg-gradient-to-br from-yellow-300 to-orange-500 border border-fuchsia-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.8)] hover:scale-[1.03] transition-all duration-500 cursor-pointer"></div>

            <div className="h-72 rounded-xl bg-gradient-to-br from-green-300 to-emerald-500 border border-fuchsia-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.8)] hover:scale-[1.03] transition-all duration-500 cursor-pointer"></div>

            <div className="col-span-2 h-40 rounded-xl bg-gradient-to-br from-rose-300 to-red-500 border border-fuchsia-500/40 hover:shadow-[0_0_30px_rgba(244,63,94,0.8)] hover:scale-[1.03] transition-all duration-500 cursor-pointer"></div>
          </div>
        )}

        {/* UI Redesigns */}
        {activeTab === "UI Redesigns" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            <div className="h-64 rounded-xl bg-gradient-to-br from-fuchsia-300 to-pink-500 border border-fuchsia-500/40 hover:shadow-[0_0_30px_rgba(217,70,239,0.8)] transition-all duration-500"></div>

            <div className="h-64 rounded-xl bg-gradient-to-br from-blue-300 to-cyan-500 border border-fuchsia-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] transition-all duration-500"></div>

            <div className="h-64 rounded-xl bg-gradient-to-br from-purple-300 to-violet-500 border border-fuchsia-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] transition-all duration-500"></div>

            <div className="h-64 rounded-xl bg-gradient-to-br from-green-300 to-emerald-500 border border-fuchsia-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.8)] transition-all duration-500"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
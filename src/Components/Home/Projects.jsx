import { useState } from "react";
import { motion } from "framer-motion";

import u1 from "../../assets/Ui/u1.png";
import u2 from "../../assets/Ui/u2.png";
import u3 from "../../assets/Ui/u3.png";

import g1 from "../../assets/Graphic/g1.png";
import g2 from "../../assets/Graphic/g2.png";
import g3 from "../../assets/Graphic/g3.png";
import g4 from "../../assets/Graphic/g4.png";
import g5 from "../../assets/Graphic/g5.png";
import g6 from "../../assets/Graphic/g6.png";

import uishow1 from "../../assets/UI_Show/uishow1.png";
import uishow2 from "../../assets/UI_Show/uishow2.png";
import uishow3 from "../../assets/UI_Show/uishow3.jpg";

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
<div className="mt-12 overflow-x-auto scrollbar-hide">
  <div className="flex gap-3 w-max px-4 mx-auto">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`px-5 py-3 rounded-full whitespace-nowrap text-sm font-medium transition-all duration-300 ${
          activeTab === tab
            ? "bg-white text-black"
            : "bg-fuchsia-500/10 border border-fuchsia-500/30 text-white"
        }`}
      >
        {tab}
      </button>
    ))}
  </div>
</div>

      {/* UI/UX Design Section */}
{activeTab === "UI/UX Design" && (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

    {/* UPHIREX */}
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -10,
      }}
      transition={{ duration: 0.3 }}
      className="
        border border-fuchsia-500/60
        rounded-3xl
        p-5
        bg-white/[0.02]
        hover:shadow-[0_0_50px_rgba(217,70,239,0.8)]
        hover:border-fuchsia-300
        transition-all
        duration-500
      "
    >
      <img
        src={u1}
        alt="UPHIREX"
        className="w-full h-64 object-cover rounded-xl"
      />

      <div className="mt-6 text-center">
        <h3 className="text-2xl font-semibold text-white">
          UPHIREX
        </h3>

        <p className="text-gray-400 mt-4 text-sm">
          AI-powered platform that helps students and job seekers with
          career recommendations.
        </p>

        <a
          href="https://www.figma.com/design/rjr8o6PNUFKXfg82yq9wfD/Uphirex?node-id=0-1&t=qNPb4P6QHLqTNuAS-1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white text-sm"
        >
          View Design
        </a>
      </div>
    </motion.div>

    {/* Portfolio */}
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -10,
      }}
      transition={{ duration: 0.3 }}
      className="
        border border-fuchsia-500/60
        rounded-3xl
        p-5
        bg-white/[0.02]
        hover:shadow-[0_0_50px_rgba(217,70,239,0.8)]
        hover:border-fuchsia-300
        transition-all
        duration-500
      "
    >
      <img
        src={u2}
        alt="Portfolio"
        className="w-full h-64 object-cover rounded-xl"
      />

      <div className="mt-6 text-center">
        <h3 className="text-2xl font-semibold text-white">
          PORTFOLIO
        </h3>

        <p className="text-gray-400 mt-4 text-sm">
          Personal portfolio showcasing projects, skills and achievements.
        </p>

        <a
          href="https://www.figma.com/design/uteD3pGmWLAOZXjJuK4he8/Portfolio?node-id=0-1&t=mSRVZufJmpwXKPTY-1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white text-sm"
        >
          View Design
        </a>
      </div>
    </motion.div>

    {/* My Expenses */}
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -10,
      }}
      transition={{ duration: 0.3 }}
      className="
        border border-fuchsia-500/60
        rounded-3xl
        p-5
        bg-white/[0.02]
        hover:shadow-[0_0_50px_rgba(217,70,239,0.8)]
        hover:border-fuchsia-300
        transition-all
        duration-500
      "
    >
      <img
        src={u3}
        alt="My Expenses"
        className="w-full h-64 object-cover rounded-xl"
      />

      <div className="mt-6 text-center">
        <h3 className="text-2xl font-semibold text-white">
          MY EXPENSES
        </h3>

        <p className="text-gray-400 mt-4 text-sm">
          Expense tracking dashboard with budgeting and analytics.
        </p>

        <a
          href="https://www.figma.com/design/Vl1Aiv2n2kp4Khh3S6UXJB/My-Expenses?node-id=0-1&t=oD4Qb7936XAO02Zz-1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white text-sm"
        >
          View Design
        </a>
      </div>
    </motion.div>

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
        whileHover={{
          scale: 1.04,
          y: -10,
        }}
        transition={{
          duration: 0.4,
          delay: index * 0.15,
        }}
        className="
          border border-fuchsia-500/60
          rounded-3xl
          p-5
          bg-white/[0.02]
          hover:border-fuchsia-300
          hover:shadow-[0_0_50px_rgba(217,70,239,0.8)]
          transition-all
          duration-500
        "
      >
        {/* Project Image */}
        <div className="rounded-xl h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-white">
            {project.title}
          </h3>

          <p className="text-gray-400 mt-4 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mt-6">
            {project.tech.map((item) => (
              <span
                key={item}
                className="
                  px-4 py-1
                  rounded-full
                  text-xs
                  bg-fuchsia-500/20
                  text-fuchsia-300
                  border border-fuchsia-500/30
                "
              >
                {item}
              </span>
            ))}
          </div>

          <hr className="border-white/10 my-6" />

          {/* Button */}
          <button
            className="
              text-fuchsia-400
              font-semibold
              transition-all
              duration-300
              hover:text-fuchsia-300
            "
          >
            View Project →
          </button>
        </div>
      </motion.div>
    ))}
  </div>
)}

       {/* Graphic Design */}
{activeTab === "Graphic Design" && (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
    {[g1, g2, g3, g4, g5, g6].map((img, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{
          scale: 1.05,
          y: -10,
        }}
        transition={{
          duration: 0.4,
          delay: index * 0.1,
        }}
        className="
          rounded-2xl
          overflow-hidden
          border border-fuchsia-500/40
          p-3
          bg-white/[0.02]
          hover:border-fuchsia-300
          hover:shadow-[0_0_50px_rgba(217,70,239,0.8)]
          transition-all
          duration-500
        "
      >
        <img
          src={img}
          alt={`Graphic ${index + 1}`}
          className="
            w-full
            object-contain
            transition-transform
            duration-700
            hover:scale-105
          "
        />
      </motion.div>
    ))}
  </div>
)}

  {/* UI Redesigns */}
{activeTab === "UI Redesigns" && (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
    {[uishow1, uishow2, uishow3].map((img, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{
          scale: 1.05,
          y: -10,
        }}
        transition={{
          duration: 0.4,
          delay: index * 0.1,
        }}
        className="
          rounded-2xl
          overflow-hidden
          border border-fuchsia-500/40
          bg-white/[0.02]
          hover:border-fuchsia-300
          hover:shadow-[0_0_50px_rgba(217,70,239,0.8)]
          transition-all
          duration-500
        "
      >
        <img
          src={img}
          alt={`UI Showcase ${index + 1}`}
          className="
            w-full
            h-72
            object-cover
            transition-transform
            duration-700
            hover:scale-110
          "
        />
      </motion.div>
    ))}
  </div>
)}

      </div>
    </section>
  );
};

export default Projects;
import { motion } from "framer-motion";
import {
  Lightbulb,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";

const processData = [
  {
    id: "01",
    title: "Discover",
    icon: <Lightbulb size={22} />,
    desc: "Understanding goals, user needs, and project requirements before starting the design process.",
  },
  {
    id: "02",
    title: "Design",
    icon: <PenTool size={22} />,
    desc: "Creating wireframes and intuitive interfaces that focus on usability and user experience.",
  },
  {
    id: "03",
    title: "Develop",
    icon: <Code2 size={22} />,
    desc: "Transforming designs into responsive, functional, and high-performance web experiences.",
  },
  {
    id: "04",
    title: "Deliver",
    icon: <Rocket size={22} />,
    desc: "Testing, refining, and launching polished solutions ready for real users.",
  },
];

const Process = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            How I Turn{" "}
            <span
              className="text-fuchsia-400"
              style={{ fontFamily: "Caveat" }}
            >
              Ideas
            </span>{" "}
            Into Reality
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Every project starts with understanding the problem and
            ends with delivering a seamless user experience.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {processData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="relative border border-fuchsia-500/40 rounded-2xl p-6 bg-white/5 backdrop-blur-sm hover:border-fuchsia-500 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Top */}
              <div className="flex justify-between items-center mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-fuchsia-400">
                  {item.icon}
                </div>

                <span className="text-gray-500 font-semibold">
                  {item.id}
                </span>
              </div>

              <h3 className="text-white text-xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
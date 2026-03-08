import { useState } from "react";
import proj1 from "../../public/portfolio.png";
import { FaGithub } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineExternalLink } from "react-icons/hi";

const projects = [
  {
    title: "Portfolio website",
    desc: "This website was developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles. Its overall design was inspired by the work of Devczero on GitHub",
    link: "http://localhost:5173/",
    git: "#",
    src: proj1,
    type: "Web Dev",
    devstack: "React TailwindCSS"
  },
];

export const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="text-white py-24 md:py-64" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-16">Projects</h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6"
            >
              <div className="p-6 flex justify-between items-center cursor-pointer bg-black/20 border border-white/10" onClick={() => toggleExpand(index)}>
              <h3 className="text-4xl font-semibold">{project.title}</h3>
              <div className="flex items-center space-x-4">
                <FiChevronDown
                  className={`w-6 h-6 transform transition-transform ${
                  expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6 bg-black/20 border border-white/10"
                >

                <div className="flex flex-col md:flex-row gap-8">
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full md:w-1/2 h-64 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <p className="text-white/70 mt-4">{project.desc}</p>
                    <p className="text-emerald-300 font-medium mb-2 mt-2">
                      Stack: {project.devstack}
                    </p>
                    <p className="text-emerald-400/60 font-medium mb-4 capitalize">
                      Type: {project.type}
                    </p>
                    <div className="flex justify-start items-center space-x-4">
                      <a 
                        href={project.link}
                        className="text-emerald-400 hover:text-blue-300 transition-colors"
                      >
                      <HiOutlineExternalLink/>
                      </a>
                      <a
                        href={project.git}
                        className="text-gray-400 hover:text-gray-300 transition-colors"
                      >
                      <FaGithub/>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div> 

              )}
            </AnimatePresence>
          </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

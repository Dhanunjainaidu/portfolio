import React, { useState } from "react";
import data from "../assets/data.json";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";
import ScrollIndicator from "../components/ScrollIndicator"; // adjust path if needed

const Projects = () => {
  const { projects } = data;
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };
  const getProjectImage = (img) => {
  if (img) return img;
  const randomId = Math.floor(Math.random() * 1000); // Random image ID
  return `https://picsum.photos/seed/${randomId}/400/300`; // 400x300 size
};


  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section
      id="projects"
      className="relative px-4 py-10 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-black transition-colors duration-500"
    >
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 dark:text-white tracking-wide">
  My <span className="text-blue-600 dark:text-blue-400">Projects</span>
</h2>


      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {displayedProjects.map((proj, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center p-6"
          >
           <img
  src={getProjectImage(proj.image)}
  alt={proj.name}
  className="w-full h-48 object-cover rounded-md mb-4"
/>


            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">
              {proj.name}
            </h3>

            <p className="text-sm italic text-gray-600 dark:text-gray-400 mb-4">
              {proj.technologies.join(", ")}
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-4">
  {proj.url && (
    <a
      href={proj.url}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-300 font-medium rounded hover:bg-blue-50 dark:hover:bg-blue-900 transition text-sm flex items-center gap-2"
    >
      <FaExternalLinkAlt /> Live Demo
    </a>
  )}

  {proj.github && (
    <a
      href={proj.github}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 border border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 font-medium rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition text-sm flex items-center gap-2"
    >
      <FaGithub /> GitHub
    </a>
  )}

  <button
    onClick={() => setSelectedProject(proj)}
    className="px-4 py-2 border border-purple-600 dark:border-purple-400 text-purple-700 dark:text-purple-300 font-medium rounded hover:bg-purple-50 dark:hover:bg-purple-900 transition text-sm flex items-center gap-2"
  >
    <FaInfoCircle /> Description
  </button>
</div>

          </motion.div>
        ))}
      </div>

      {/* Toggle Button */}
      {projects.length > 4 && (
        <div className="flex justify-center mt-6">
          <button
            className="px-5 py-2 text-blue-700 dark:text-blue-300 border border-blue-500 dark:border-blue-400 rounded hover:bg-blue-50 dark:hover:bg-blue-900 transition"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-gray-900 max-w-lg w-full p-6 rounded-xl shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2">
              {selectedProject.name}
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1">
              {selectedProject.description.map((line, j) => (
                <li key={j}>{line}</li>
              ))}
            </ul>
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-white"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
  
 <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
  {/* <ScrollIndicator target="#certificates" /> */}
</div>


    </section>
  );
};

export default Projects;
